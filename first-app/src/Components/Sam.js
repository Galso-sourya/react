import React from 'react'
let arr2=["😊","😁"];
let emoji=Math.floor(Math.random()*2);//we are multiplying with 2 because there is 2 emojis available in the 
//array
let todos=["day1","day2"];
const Sam = () => {
  //you can not make an array inside it. you have to make it outside
  //we can not even use loop inside a component
  return (
    <div>
        {Math.floor(Math.random()*10)}
        {arr2[emoji]}
        {emoji===1?<img src='https://images.unsplash.com/photo-1689784730988-6cafd0821f8b?
        ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format
        &fit=crop&w=500&q=60'/>:"blank"}
        {
        todos.map((item,index)=>{
          return <li key={index}>my task is {item} & position is {index}</li>
        })
      }
    </div>
  )
}

export default Sam