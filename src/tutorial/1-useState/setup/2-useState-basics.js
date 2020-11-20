import React, { useState } from 'react'

// HOOK RULES
// all 'hooks' start with 'use'
// component name must be uppercase e.g. UseStateBasics not useStateBasics
// the 'hook' must be invoked in the function / component body
// the 'hook' can not be called conditionally

// useState is a function that returns an array within a value and a function

const UseStateBasics = () => {
  // console.log(useState('hello world'))
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)

  // array destrucuring
  // convention 2e: set + vaiable;  set + text = setText
  const [text, setText] = useState('random value')
  const handleClick = () => {
    if (text === 'random value') {
      setText('new value')
    } else {
      setText('random value')
    }
  }

  return (
    <React.Fragment>
      {' '}
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Value
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
