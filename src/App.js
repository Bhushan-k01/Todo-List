import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';


function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [description, setDescription] = useState('');
  const [selectedTodo, setSelectedTodo] = useState(null);



  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'Completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'Uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const saveLocalTodos = (todos) => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }


  return (
    <div className="App">
      <h1>  Todo  </h1>
      <br />
      <Form

        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
        saveLocalTodos={saveLocalTodos}
        description={description}
        setDescription={setDescription}
        selectedTodo={selectedTodo}
        setSelectedTodo={setSelectedTodo}
      />

      <br />
      <Todolist
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        setInputText={setInputText}
        inputText={inputText}
        description={description}
        setDescription={setDescription}
        setSelectedTodo={setSelectedTodo}
      />

    </div >
  );
}
export default App;
