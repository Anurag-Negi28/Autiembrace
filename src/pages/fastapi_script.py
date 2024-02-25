from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.neighbors import NearestNeighbors

app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

vectorizer_filename = 'Movies_vectorizer.pkl'
loaded_vectorizer = pickle.load(open(vectorizer_filename, 'rb'))

model_filename = 'Movies_model.sav'
loaded_model = pickle.load(open(model_filename, 'rb'))

# Load movie titles mapping
movie_titles_filename = 'movie_titles.pkl'
with open(movie_titles_filename, 'rb') as f:
    movie_titles = pickle.load(f)

class MovieInput(BaseModel):
    movie_name: str

@app.post("/recommend")
async def recommend_movies(movie_input: MovieInput):
    try:
        new_text_data = loaded_vectorizer.transform([movie_input.movie_name])
        predictions = loaded_model.kneighbors(new_text_data)
        similar_movie_indices = predictions[1][0]


        recommended_movies = [movie_titles[i] for i in similar_movie_indices]

        return {"recommended_movies": recommended_movies}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))