import React, { useState } from 'react'
// JSX has to RETURN something
// that's why   if(){}   won't work
// it doesn't know    if
//  !! JSX is between  <>

// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const [text, setText] = useState('')
  const [text, setText] = useState('Peter')
  const [isError, setIsError] = useState(false)

  //  OR - opperator: if condition is FALSE evaluate 2e condition
  const firstValue = text || 'hello world first'
  // AND - opperator: if contiton is TRUE evaluate 2e condition
  const secondValue = text && 'hello world second'

  return (
    <>
      <h2>{firstValue}</h2>
      <h2>value: {secondValue}</h2>
      <hr />

      <h2>{text || 'John Doe'}</h2>
      {text && <h2>Jane Doe</h2>}
      <hr />

      <button
        className="btn"
        onClick={() => {
          setIsError(!isError)
        }}
      >
        toggle error
      </button>
      {isError && <h2>error...</h2>}
      {isError ? <h2>Ternary True</h2> : <h2>Ternary False</h2>}
    </>
  )

  //   Return  OUTSIDE condition WON'T WORK
  // return <>
  //   { if( 1 === 1){
  //     <h1>Hello world</h1>
  //   }}
  // </>

  // Return inside condition WILL WORK
  // if (1 === 1) {
  //   return (
  //     <div>
  //       <h2> Return inside condition ...</h2>
  //     </div>
  //   )
  // }
}

export default ShortCircuit
