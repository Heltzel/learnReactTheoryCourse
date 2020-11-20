import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
import { reducer } from './reducer'
// reducer function

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
}

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('form submitted')
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name: name }
      dispatch({ type: 'ADD_ITEM', payload: newItem })
      setName('')
    } else {
      dispatch({ type: 'NO_VALUE', payload: null })
    }
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            name=""
            id=""
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <button type="submit" className="btn">
            Add Name
          </button>
        </div>
      </form>
      <section>
        {state.people.map((person) => {
          return (
            <div key={person.id} className="item">
              <h4>{person.name}</h4>
              <button
                onClick={() => {
                  dispatch({ type: 'REMOVE_ITEM', payload: person.id })
                }}
              >
                delete
              </button>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Index
