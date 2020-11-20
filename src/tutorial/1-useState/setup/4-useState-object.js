import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  })
  // GOTCHA: use the spread opperator to avoid wipeing out ALL the properties
  const onChangeMessage = () => {
    setPerson({ ...person, message: 'Hello World' })
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={onChangeMessage}>
        change message
      </button>
    </>
  )
}

export default UseStateObject
