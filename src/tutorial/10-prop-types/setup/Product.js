import React from 'react'
// notice the UPPER case
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({ image, name, price }) => {
  return (
    <article className="product">
      <img src={image.url} alt={name} />
      <h4>{name}</h4>
      <p>&euro; {price}</p>
    </article>
  )
}

// the propTypes  PROPERTY of (in this case) Product is CAMEL case
Product.propTypes = {
  // here is used the import => all Uppercase
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

// defautlProps is a React prop
Product.defaultProps = {
  name: 'default name',
  image: { url: defaultImage },
  price: 0.0,
}
export default Product
