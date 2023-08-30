import React, { useEffect, useState } from "react";
import TodoList from './TodoList'

const TodoApp = () => {
  let arrayDummy=JSON.parse(window.localStorage.getItem('todos') || "[]")
  /*let arrayDummy=
  [
    {
id:uuid(),
todo:"maze karo",
todo:"video upload karoooo quick",
    },
    {
      id:uuid(),
      todo:"video upload karo",
      checked:false
    },
    {
      id:uuid(),
      todo:"practice karo",
      checked:false
    },
    {
      id:uuid(),
      todo:"code push karo",
      checked:false
    }
    
  ]
  */
  const checkTodo=(id)=>{
    setTodos((prevState)=>{
    return prevState.map((item)=>item.id===id?{...item, checked:!item.checked}:item);//map accepts call back function  
    //!item.checked will reverse it
    //...item means everything is coming. total id is 4 here
    });
        }
  let [todos,setTodos]=useState(arrayDummy)
  
  const addToDo=(todo)=>{
setTodos([...todos,todo])//old one todos and new todo added together.this is array
  }
useEffect(()=>{
  //console.log("inside useEffect hook")
  localStorage.setItem('todos',JSON.stringify(todos));
},[todos])
 // const deleteTodo=(id)=>{
//const newTodo=todos.filter((todo)=>todo.id!==id)
//setTodos(newTodo);
  //}
  const deleteTodo=(id)=>{
    //const newTodo=todos.filter((todo)=>todo.id!==id)
    setTodos((prevState)=>{//prevState is the array. Now we can iterate 
return prevState.filter((todo)=>todo.id!==id)
    });
      
    }}
  return (
    <div>
      <h1 style={{textAlign:'center'}}>todo list for me</h1>
      <form addToDo={addToDo} todos={todos}/>
      <TodoList todos={todos} deleteTodo={deleteTodo}
      checkTodo={checkTodo}
      />
      </div>//todos is an array
  )


export default TodoApp