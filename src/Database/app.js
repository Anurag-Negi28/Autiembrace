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
    if (todoCount === 0) {
      return "No todos yet. Did you know that keeping a to-do list can help improve productivity and focus?";
    }
    if (selectedTodo && !selectedTodo.description) {
      return "This todo doesn't have a description yet. Adding a description can help clarify your tasks and goals.";
    }
    if (selectedTodo && selectedTodo.description) {
      return selectedTodo.description;
    }
    return "You're doing great! Keep going!";
  };

  return (
    <>
      <h2 className="todo-heading">Let’s get organized!</h2>
      <div className="todo-list">
        <div className="left-panel">
          <h2 className="todo-header">To do's</h2>
          <p className="todo-message para">{getTodoMessage()}</p>
          {todos.map((todo, index) => (
            <div
              key={index}
              className={`todo ${selectedTodo === todo ? "selected" : ""}`}
              onClick={() => handleTodoClick(todo)}
              onMouseOver={() => handleTodoClick(todo)}
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
          {todos.length < 7 && (
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
              ? "Step into the world of productivity with your first to-do! 🚀 Did you know that jotting down tasks can declutter your mind, boost focus, and foster a sense of achievement? So why wait? Start your journey towards success by writing your first to-do now! Remember, every big accomplishment starts with a single step. Let’s take that step together today! 🌟"
              : "You're doing great! Keep going!"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Todo;
