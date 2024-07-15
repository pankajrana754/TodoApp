import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContex from "../../contex/TodoContex";

function TodoList(){
    const {list,setList}=useContext(TodoContex);
    return(
        <div>
        {list.length >
         0 && list.map(todo => 
         <Todo 
         key={todo.id}
         id={todo.id}
          isFinished={todo.Finished}
           todoData={todo.todoData}
            changeFinished={(isFinished)=>{
                const updatadList=list.map(t=>{
                    if(t.id== todo.id){
                        todo.Finished=isFinished; 
                    }
                    return t;
                });
                setList(updatadList);
            }}
            onDelete={()=>{
                const updatadList=list.filter(t => t.id !=todo.id);
                setList(updatadList);
            }}
            onEdit={(todoText)=>{
                const updatadList=list.map(t=>{
                    if(t.id== todo.id){
                        todo.todoData=todoText; 
                    }
                    return t;
                });
                setList(updatadList);
            }}
                
           /> )}
        </div>
    );
}
export default TodoList;
