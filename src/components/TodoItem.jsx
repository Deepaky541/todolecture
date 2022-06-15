import React from 'react'
import { useState } from 'react';
import styles from  "./item.module.css";

export const TodoItem = ({todo,onComplete}) => {
  
    const [completed, setcompleted] = useState("");
    const completeHandler=(event)=>{
        setcompleted(event.target.checked)
        onComplete(event.target.checked,todo.value,todo.id)
    }
  return (
    <div key={todo.id} className={completed ? styles.line : styles.todo}>
      <input type="checkbox" onChange={completeHandler} />
      <h2 className={completed ? styles.line : ""}>{todo.value} </h2>
    </div>
  );
}
