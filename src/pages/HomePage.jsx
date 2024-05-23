import React, { useState, useEffect } from "react";
import "../App.css";

const Posts = () => {
  const [isComplete, setisComplete] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription
    };
    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todolist', JSON.stringify(updatedTodoArr))
  };

  const handleDeleteTodo = (index) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index, 1);
    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  };

  const handleComplete = (index) => {
    let completedOn = new Date().toLocaleString();
    let filteredItem = {
      ...allTodos[index],
      completedOn: completedOn
    };
    let updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);
    localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedArr));
  };

  const handleDeleteCompletedTodo = (index) => {
    let reducedTodo = [...completedTodos];
    reducedTodo.splice(index, 1);
    localStorage.setItem('completedTodos', JSON.stringify(reducedTodo));
    setCompletedTodos(reducedTodo);
  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'));

    if (savedTodo) {
      setTodos(savedTodo);
    }
    if (savedCompletedTodo) {
      setCompletedTodos(savedCompletedTodo);
    }
  }, []);

  return (
    <div className="App">
      <div className="Blogg-wrapper">
        <div className="Blogg-input">
          <div className="Blogg-input-item">
            <label> Title </label>
            <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Title" />
          </div>

          <div className="Blogg-input-item">
            <label> Description </label>
            <input type="text" className="Text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="Tell your story..." />
          </div>
          <div className="Blogg-input-item">
            <button type="button" onClick={handleAddTodo} className="primaryBtn">
              Publish it
            </button>
          </div>
        </div>
        <div className="Blogg-list">
          {isComplete === false && allTodos.map((item, index) => {
            return (
              <div className="Blogg-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div className="Buttons">
                  <button className="Deleteit" onClick={() => handleDeleteTodo(index)}>Ta bort</button>
                  <button className="complete" onClick={() => handleComplete(index)}>Färdig</button>

                </div>
              </div>
            );
          })}
          {isComplete === true && completedTodos.map((item, index) => {
            return (
               <div className="Buttons">
                  <button className="Deleteit" onClick={() => handleDeleteCompletedTodo(index)} title="Delete?">Ta bort</button>
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
