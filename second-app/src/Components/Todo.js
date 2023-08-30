import React from 'react'
import {BsTrashFill} from 'react-icons/bs';
//const Todo = (props) => {
  const Todo = (deleteTodo,checkTodo,todoItem) => {
  function deleteTodoHandler(id){
deleteTodo(id)
  }
  const inputChangeHandler=(id)=>{
checkTodo(id);
  }
  return (
    <div>
      <li style={{textDecoration:`${todoItem.checked ? 'line-through':''}`}}>
      <input type='checkbox' onChange={()=>{inputChangeHandler(todoItem.id)}} defaultChecked={todoItem.checked}/>
        <span>ID:{todoItem.id} -- Task:{todoItem.todo}</span>
        <span onClick={()=>deleteTodoHandler(todoItem.id)}><BsTrashFill/></span>
        
        </li></div>
  )
}

export default Todo