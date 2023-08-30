import React,{useState} from 'react'

const  Form= (props) => {
  let [input,setInput]=useState('')
  let [isValid,setIsValid]=useState(true)
  function inputChangeHandler(e){
    setInput(e.target.value) 
    if(input.trim().length>0){
      setIsValid(true)
    }
  }
    function formSubmitHandler(e){
    e.preventDefault()
    if(input.trim().length===0){
      setIsValid(false)
      return
    }
    const newTodo={
      id:props.todos.length,
      todo: input,
      checked:false
    }
    props.addToDo(newTodo)    
        //console.log(input)
    setInput('')
    }
   
  return (
    <form onSubmit={formSubmitHandler}>
      input
        <input onChange={inputChangeHandler} type='text' placeholder='enter your task' value={input}/>
    </form>
  )
}

export default Form