import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('Default User')

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 200) {
          return res.json()
        } else {
          setIsLoading(false)
          setIsError(true)
          throw new Error(res.statusText)
        }
      })
      .then((user) => {
        const { login } = user
        setUser(login)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    )
  }

  return (
    <div>
      <h2>{user}</h2>
    </div>
  )
}

export default MultipleReturns
