import React, { useState, useEffect } from 'react'
// by default useEffect runs after every re-render
// cleanup function
// second parameter

// useEffect does some work outside the component
// GOTCHA: it is a hook, so it can't be called IN a if statement.
// SO: place the if statment in the hook

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    console.log('call useEffect')
    if (value >= 1) {
      document.title = `Messages ${value}`
    }
  }, [value])

  useEffect(() => {
    console.log(
      'With an empty dependency array: the useEffect only runs on the initial run ',
    )
  }, [])

  console.log('render component')

  return (
    <>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1)
        }}
      >
        increase
      </button>
    </>
  )
}

export default UseEffectBasics
