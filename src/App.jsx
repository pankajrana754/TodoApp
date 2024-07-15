
import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo/AddTodo'
import TodoList from './Components/TodoList/Todolist'
import TodoContex from './contex/TodoContex'
function App() {
   const [list,setList]=useState([
    {id:1 , todoData:'todo 1', finished:false},
    {id:2 , todoData:'todo 2', finished:true},
   ])

  return (
 <TodoContex.Provider value={{list,setList}}>
  <AddTodo
  updataList={(todo)=> setList([
    ...list,{id:list.length+1,todoData:todo, finished:false}
  ])}
  />
  <TodoList/>
  </TodoContex.Provider>

  

  )
}

export default App
