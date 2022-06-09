import React, { useState } from 'react';
import { TodoItem } from './TodoItem';
import "./todo.css"

export const Todo = () => {
  const [todos,setTodo]=useState([]);
  const [newTodo,setNewTodo]=useState('');

  const changeHandler=(event)=>{
      setNewTodo(event.target.value)
  }
  const submitHandler=()=>{
         setTodo([...todos,{id:Date.now(),value:newTodo}]);
        
  }
  const Delete=(id)=>{
      let newTodos=todos.filter((todo)=>todo.id !==id);
      setTodo(newTodos)   
  }

  return (
    <div className='todos'>
      <div className='input'>
        <input type="text"  onChange={changeHandler} placeholder="Write Something"/>
        <button onClick={submitHandler}>+</button>
        </div>
        <div className='todo'>
            {todos.map((todo)=>(<TodoItem todo={todo} onDelete={Delete} />))}
        </div>
        
    </div>
  )
}
