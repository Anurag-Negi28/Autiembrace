# Movie-recommendation.py

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import difflib
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to your needs
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods. Adjust this to your needs
    allow_headers=["*"],  # Allows all headers. Adjust this to your needs
    expose_headers=["*"],  # Expose headers to the browser
)

class MovieInput(BaseModel):
    movie_name: str

movies_data = pd.read_csv('movies/movies.csv')
selected_features = ['genres', 'keywords', 'tagline', 'cast', 'director']

for feature in selected_features:
    movies_data[feature] = movies_data[feature].fillna('')

combined_features = movies_data['genres'] + ' ' + movies_data['keywords'] + ' ' + movies_data['tagline'] + ' ' + movies_data['cast'] + ' ' + movies_data['director']

vectorizer = TfidfVectorizer()
feature_vectors = vectorizer.fit_transform(combined_features)
similarity = cosine_similarity(feature_vectors)

@app.post("/recommend")
def recommend_movies(movie_input: MovieInput):
    movie_name = movie_input.movie_name

    list_of_all_titles = movies_data['title'].tolist()
    find_close_match = difflib.get_close_matches(movie_name, list_of_all_titles)

    if not find_close_match:
        return {"message": "Movie not found. Please check the spelling or try another one."}

    close_match = find_close_match[0]
    index_of_the_movie = movies_data[movies_data.title == close_match]['index'].values[0]

    similarity_score = list(enumerate(similarity[index_of_the_movie]))
    sorted_similar_movies = sorted(similarity_score, key=lambda x: x[1], reverse=True)

    recommended_movies = []
    i =  1
    limit =  6

    for movie in sorted_similar_movies:
        index = movie[0]
        title_from_index = movies_data[movies_data.index == index]['title'].values[0]
        if title_from_index.lower() != movie_name.lower():
            recommended_movies.append(title_from_index)
            i +=  1
        if i > limit:
            break

    return {"recommended_movies": recommended_movies}

@app.get("/movie-suggestions")
async def get_movie_suggestions(movie_name: str):
    list_of_all_titles = movies_data['title'].tolist()
    find_close_match = difflib.get_close_matches(movie_name, list_of_all_titles)

    if not find_close_match:
        raise HTTPException(status_code=404, detail="Movie not found. Please check the spelling or try another one.")

    close_match = find_close_match[0]
    index_of_the_movie = movies_data[movies_data.title == close_match]['index'].values[0]

    similarity_score = list(enumerate(similarity[index_of_the_movie]))
    sorted_similar_movies = sorted(similarity_score, key=lambda x: x[1], reverse=True)

    recommended_movies = []
    i =  1
    limit =  6

    for movie in sorted_similar_movies:
        index = movie[0]
        title_from_index = movies_data[movies_data.index == index]['title'].values[0]
        if title_from_index.lower() != movie_name.lower():
            recommended_movies.append(title_from_index)
            i +=  1
        if i > limit:
            break

    return {"recommended_movies": recommended_movies}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8085)