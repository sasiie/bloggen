import React, { useState, useEffect } from "react";
import "../App.css";

const Posts = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    const savedTodo = JSON.parse(localStorage.getItem('todolist'));
    const savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'));

    if (savedTodo) setTodos(savedTodo);
    if (savedCompletedTodo) setCompletedTodos(savedCompletedTodo);
  }, []);

  const handleAddTodo = () => {
    if (newTitle.trim() === "" || newDescription.trim() === "") return;

    const newTodoItem = { title: newTitle, description: newDescription };
    const updatedTodoArr = [...allTodos, newTodoItem];
    setTodos(updatedTodoArr);
    localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
    setNewTitle("");
    setNewDescription("");
  };

  const handleDeleteTodo = (index) => {
    const reducedTodo = allTodos.filter((_, i) => i !== index);
    setTodos(reducedTodo);
    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
  };

  const handleComplete = (index) => {
    const completedOn = new Date().toLocaleString();
    const filteredItem = { ...allTodos[index], completedOn };
    const updatedCompletedArr = [...completedTodos, filteredItem];
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);
    localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedArr));
  };

  const handleDeleteCompletedTodo = (index) => {
    const reducedTodo = completedTodos.filter((_, i) => i !== index);
    setCompletedTodos(reducedTodo);
    localStorage.setItem('completedTodos', JSON.stringify(reducedTodo));
  };

  const TodoInput = () => (
    <div className="Blogg-input">
      <div className="Blogg-input-item">
        <label> Title </label>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Title"
        />
      </div>
      <div className="Blogg-input-item">
        <label> Description </label>
        <input
          type="text"
          className="Text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Tell your story..."
        />
      </div>
      <div className="Blogg-input-item">
        <button type="button" onClick={handleAddTodo} className="primaryBtn">
          Publish it
        </button>
      </div>
    </div>
  );

  const TodoList = ({ items, onDelete, onComplete }) => (
    <div className="Blogg-list">
      {items.map((item, index) => (
        <div className="Blogg-list-item" key={index}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <div className="Buttons">
            <button className="Deleteit" onClick={() => onDelete(index)}>
              Ta bort
            </button>
            {onComplete && (
              <button className="complete" onClick={() => onComplete(index)}>
                Färdig
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="App">
      <div className="Blogg-wrapper">
        <TodoInput />
        {isComplete ? (
          <TodoList items={completedTodos} onDelete={handleDeleteCompletedTodo} />
        ) : (
          <TodoList items={allTodos} onDelete={handleDeleteTodo} onComplete={handleComplete} />
        )}
      </div>
    </div>
  );
};

export default Posts;



