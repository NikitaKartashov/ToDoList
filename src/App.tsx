import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import TodoTask from './Components/TodoTask';
import { ITask } from './Interfaces/ITask';

  const App: FC = () =>  {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [todoList, setTodoList] = useState<ITask[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      if(e.target.name === "") {
        
      }
      if(e.target.name === "title") {
        setTitle(e.target.value)
      } else {
        setDescription(e.target.value)
      }
    };

    const addTask = (): void => {
      const newTask = { title: title, description: description, }
      setTodoList([...todoList, newTask]);
      setTitle("");
      setDescription("");
    } 
    
  return (
    <div className="App">
      <div className="header">
        <div className="titleContainer">
        <h4>Title:</h4>
        <input 
          type="text" 
          placeholder="Enter tittle" 
          name="title"
          value={title} 
          onChange={handleChange}
          />
        </div>
        <div className="descriptionContainer">
        <h4>Description:</h4>
        <input 
          type="text" 
          placeholder="Enter description" 
          name="description"
          value={description} 
          onChange={handleChange}
           />
        </div>
        <button onClick={addTask}>Create</button>
      </div>
      <div className="todoList">
          <div className="todoList-header">
            <h3>ID</h3>
            <h3>TITLE</h3>
            <h3>DESCRIPTION</h3>
            <h3>STATUS</h3>
          </div>
        {todoList.map((title: ITask, key: number) => {
          return <TodoTask key={key} task={title}  />;
        })}
      </div>
    </div>
  );
}

export default App;
