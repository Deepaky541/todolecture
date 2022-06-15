import React from 'react'
import { useState } from 'react';

export const Checked = ({Check,el}) => {
    const [comp, setcomp] = useState(Check);
     const handle = (event) => {
       setcomp(event.target.checked);
     };
  return (
    
      <div className="comptodo">
        <input type="checkbox" checked={comp} onChange={handle} />
        <h2 className={comp ? "line" : ""}>{el} </h2>
      </div>
    
  );
}
