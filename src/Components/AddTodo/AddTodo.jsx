import { useState } from "react"

function AddTodo({updataList}){
    const [inputText,setInputText]=useState('');
    return (
         <div>
            <input type="text"
            value={inputText}
            placeholder=" add you next todo"
            onChange={e=> setInputText(e.target.value)}
            />
            <button onClick={()=>{ 
                 updataList(inputText)
                 setInputText('');
            }}>Add</button>
         </div>
    )

}
export default AddTodo