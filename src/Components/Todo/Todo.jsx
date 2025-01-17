import { useState } from "react";

function Todo({todoData,isFinished,changeFinished,onDelete,onEdit}){

   const [finished,setFinished]= useState(isFinished);
   const [isEditing,setEditing]=useState(false);
   const [editiText,setEditText]=useState(todoData);
    return(
        <div>
        <input type="checkbox" 
        checked={finished} onChange={ (e)=>{ 
            setFinished(e.target.checked);
            changeFinished(e.target.checked);
                         
         } } />
        {(isEditing) ? <input type="text " value={editiText} onChange={e=>setEditText(e.target.value) } /> :<span>{todoData}</span>}
        <button onClick={()=>{
            setEditing(!isEditing);
            onEdit(editiText);
        }}>{(!isEditing)?'Edit': 'save'}</button>
        <button onClick={onDelete}>Delete</button>
        </div>
    )
}
export default Todo;
