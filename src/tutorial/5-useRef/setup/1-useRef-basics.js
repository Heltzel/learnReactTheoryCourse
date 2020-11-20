import React, { useEffect, useRef } from 'react'

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null)
  const divContainer = useRef(null)

  useEffect(() => {
    refContainer.current.focus()
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.warn('form submitted')
    console.log(refContainer.current.value)
    console.log(divContainer.current)
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="" id="" ref={refContainer} />
        <button type="submit">Submit</button>
      </form>
      <div ref={divContainer}>Hello world</div>
    </>
  )
}

export default UseRefBasics
