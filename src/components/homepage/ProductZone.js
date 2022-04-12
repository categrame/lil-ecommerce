import React from 'react'
import ProductCards from './ProductCards'

const ProductZone = () => {
  return (
    <div className='container'>
      <div className='row'>
        <button className='btn btn-primary'>Filter</button>
        <ProductCards />
      </div>
    </div>
  )
}

export default ProductZone