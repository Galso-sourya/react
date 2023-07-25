import React, { useContext, useState } from 'react'

const Person = (props) => {
  let [namee,setNamee]=useState(props.name);
  //let namee=props.name; it can not re render
  function handleClick(){
    //console.log('clicked')
    //let namee="anonymous"//we can not re render with this. to re render, we have to use hook
    //console.log(namee)
    setNamee('anonymous');
  }
  return (
    <div>
      <div onClick={handleClick}>i am a div do not click on me</div>
      <p>Name:{namee}</p>
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
    </div>
  )
}

export default Person