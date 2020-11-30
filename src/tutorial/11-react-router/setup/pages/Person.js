import React, { useState, useEffect } from 'react'
import { data } from '../../../../data'
import { Link, useParams } from 'react-router-dom'
const Person = () => {
  const [name, setName] = useState('default name')
  const { id } = useParams()

  // The person.id is a int; the url id is a string. So wrap the url id in parseInt
  useEffect(() => {
    const newPerson = data.find((person) => {
      return person.id === parseInt(id)
    })
    setName(newPerson.name)
  }, [id])

  return (
    <div>
      <h1>{name}</h1>
      <Link to="/people" className="btn">
        back to people page
      </Link>
    </div>
  )
}

export default Person
