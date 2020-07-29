// using useState of hook

import React,  { useState } from 'react';

// function component
const Student = () => {
  const roll = useState(101)
  const [name, setName] = useState("Abhishek")

  const updateData = () => {
    setName("Dhimant")
    roll[1](1111)
  }
  
  return (
            <div>
              <h1>Welcome Again,</h1>
              <h1>ID is {roll[0]}</h1>
              <h1>Hi,I am a Student name is {name}</h1>
              <button onClick={updateData}>Click</button>
              </div>
        )
}

// export function component
export default Student;