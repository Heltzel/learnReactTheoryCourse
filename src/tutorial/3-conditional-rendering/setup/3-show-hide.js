import React, { useState, useEffect } from 'react'

const ShowHide = () => {
  const [isShow, setIsShow] = useState(false)

  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setIsShow(!isShow)
        }}
      >
        show / hide
      </button>
      {isShow && <Item />}
    </>
  )
}

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => {
    setSize(window.innerWidth)
  }

  // USE THE CLEAN-UP RETURN
  useEffect(() => {
    window.addEventListener('resize', checkSize)

    return () => {
      window.removeEventListener('resize', checkSize)
    }
  }, [])

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>Window</h1>
      <h2>size:{size}px</h2>
    </div>
  )
}

export default ShowHide
