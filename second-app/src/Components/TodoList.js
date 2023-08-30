import React from 'react'

import Todo from './Todo'
//const TodoList = (props) => {
    //const allTodos=props.todos.map((item,index)=>{
        //return <Todo key={index} id={item.id} todo={item.todo} index={index} deleteTodo={props.deleteTodo}
        //checkTodo={props.checkTodo}
        ///>
    //})
    //do with destructuring
    const TodoList = (todos,deleteTodo,checkTodo) => {
      const allTodos=todos.map((item,index)=>{
          //return <Todo key={index} id={item.id} todo={item.todo} index={index} deleteTodo={deleteTodo}
          //checkTodo={checkTodo}
          ///>
          return <Todo key={index} id={item.id} todoItem={item} index={index} deleteTodo={deleteTodo}
          checkTodo={checkTodo}
          />
      }) 
  return (
    <section><ul>{allTodos}</ul></section>
  )
}

export default TodoList