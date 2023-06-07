import { useState } from 'react'
// import Accordion from './Accordion';
import './App.css'

function Task({id, onDelete}) {
  const [description, setDescription] = useState(['Describe the task']);
  const [status, setStatus] = useState(false);


  function deleteTask() {   
    onDelete(id);
  }

  return (
    <>
      <div>
        <button className='taskDone' onClick={() =>  setStatus(!status)}>{status ? 'Yay, Done!' : 'To-Do'}</button> 
        <input className='task' value={description} onChange={(event) => {setDescription(event.target.value)}}></input>
        <button className='deleteButton' onClick={deleteTask}>delete</button>
      </div>    
    </>
  )
}

function App() {
  const [tasks, setTasks] = useState([]);

  function onAddTaskClick() {
    setTasks((state) => {return [...state, {id:Math.random()*100000}]}); 
  }

  function onDeleteClick(giventaskID) {
    setTasks((tasks) => {return tasks.filter((task) => {return task.id !== giventaskID})});
  }

  console.log(tasks);

  return (
    <>
      <h2>Path to success</h2>
      <h4>Do these tasks daily and you will be good soon</h4>
      <div><button onClick={onAddTaskClick}>+ Add Task</button></div>
      {tasks.map((task, index) => {return <Task key={task.id} id={task.id} onDelete={onDeleteClick}></Task>})}
    </>
  )
}

export default App