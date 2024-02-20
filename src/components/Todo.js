import { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [newTodo, setNewTodo] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleTodoClick = (todo) => {
    setSelectedTodo(todo);
  };

  const addTodo = () => {
    if (todos.length < 7 && newTodo.trim() !== "") {
      setTodos([...todos, { title: newTodo, description: newDescription }]);
      setNewTodo("");
      setNewDescription("");
    }
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t !== todo));
    setSelectedTodo(null);
  };

  const getTodoMessage = () => {
    const todoCount = todos.length;
    switch (todoCount) {
      case 0:
        return "Seems like a good day, let's do some work!";
      case 7:
        return "Enough work for today!";
      default:
        return "Keep up the good work!";
    }
  };

  return (
    <>
      <h2 className="todo-heading">Let’s get organized!</h2>
      <div className="todo-list">
        <div className="left-panel">
          <h2 className="todo-header">Todos</h2>
          <p className="todo-message para">{getTodoMessage()}</p>{" "}
          {/* Added "para" class here */}
          {todos.map((todo, index) => (
            <div
              key={index}
              className={`todo ${selectedTodo === todo ? "selected" : ""}`}
              onClick={() => handleTodoClick(todo)}
            >
              <span>{todo.title}</span>
              <button
                className="delete-button bg-mistyrose text-dimgray"
                onClick={() => deleteTodo(todo)}
              >
                Delete
              </button>
            </div>
          ))}
          {todos.length < 7 && ( // Add condition here
            <div className="add-todo-container">
              <input
                type="text"
                placeholder="Todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
              />
              <input
                type="text"
                placeholder="Description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
              <button className="bg-mistyrose text-dimgray" onClick={addTodo}>
                Add Todo
              </button>
            </div>
          )}
        </div>
        <div className="right-panel">
          <h2 className="todo-header">Todo Description</h2>
          <p className="para">
            {selectedTodo
              ? selectedTodo.description
              : todos.length === 0
              ? "Select a todo"
              : ""}
          </p>{" "}
          {/* Updated condition here */}
        </div>
      </div>
    </>
  );
};

export default Todo;
