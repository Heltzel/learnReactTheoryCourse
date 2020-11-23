import { useState, useEffect, useCallback } from 'react'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  // useCallback: returns  the function it contains, and only if the  dependency (eg. url) changes
  const getProducts = useCallback(async () => {
    const response = await fetch(url)
    const products = await response.json()
    setProducts(products)
    setLoading(false)
  }, [url])

  useEffect(() => {
    getProducts()
  }, [url, getProducts])
  return { loading, products }
}
