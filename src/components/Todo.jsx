import React, { useState } from 'react';
import { TodoItem } from './TodoItem';
import "./todo.css"
import { Checked } from './Checked';

export const Todo = () => {
  const [todos,setTodo]=useState([]);
  const [newTodo,setNewTodo]=useState('');
  const [completedTodos, setCompletedTodos] = useState([]);
  const [Check, setchecked] = useState("");
  const [checkbutton, setcheckbutton] = useState(false);

  const changeHandler=(event)=>{
      setNewTodo(event.target.value)
  }
  const submitHandler=()=>{
         setTodo([...todos,{id:Date.now(),value:newTodo}]);
        
  }
  const onComplete=(data,value,id)=>{
    if(data)
    {
      setCompletedTodos([...completedTodos,value]);
      setchecked(data);
      setTodo(todos.filter((todo) => todo.id !== id));
    }

    
  }
  const CompletedTodo=()=>{
        return (
          <>
          {
          completedTodos.map((el)=>(
           <Checked Check={Check} el={el} />
          ))
          }
          </>
        )
  }


  return (
    <div className="todos">
      <div>
        <button onClick={()=>{setcheckbutton(!checkbutton)}}>show completed todos</button>
        {checkbutton ? <CompletedTodo />:""}
        
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="input">
        <input
          type="text"
          onChange={changeHandler}
          placeholder="Write Something"
        />
        <button onClick={submitHandler}>+</button>
      </div>
      <div className="todo">
        {todos.map((todo) => (
          <TodoItem todo={todo} onComplete={onComplete} />
        ))}
      </div>
    </div>
  );
}
