import React from 'react'
import MenuCat from './MenuCat'
import CartBtn from './CartBtn'

const Header = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='logo'>
          Logo
        </div>
        <MenuCat/>
        <CartBtn/>
      </div>
    </div>
  )
}

export default Header