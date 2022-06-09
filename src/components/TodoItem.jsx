import React from 'react'
import { useState } from 'react';
import styles from  "./item.module.css";

export const TodoItem = ({todo,onDelete}) => {
    const [completed, setcompleted] = useState();
    const completeHandler=(event)=>{
        setcompleted(event.target.checked)
    }
  return (
    <div key={todo.id} className={styles.todo}>
      <input type="checkbox" onClick={completeHandler}/>
      <h2 className={completed ? styles.line : ""}>{todo.value} </h2>
    </div>
  );
}
