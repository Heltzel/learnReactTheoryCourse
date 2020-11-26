import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div>
      <h1>Error Page</h1>
      <p>page not found</p>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </div>
  )
}

export default Error
