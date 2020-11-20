import React from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  // instead of importing useState from react
  // e.g. import React, { useState } from 'react'
  const [people, setPeople] = React.useState(data)
  const onDeleteHandler = (id) => {
    let newPeopleArray = people.filter((person) => person.id !== id)
    setPeople(newPeopleArray)
  }
  return (
    <>
      {people.map((person) => {
        const { name, id } = person
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button className="btn" onClick={() => onDeleteHandler(id)}>
              delete
            </button>
          </div>
        )
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  )
}

export default UseStateArray
