import React from 'react'
import './NavbarTop.css'

const NavBarTop = () => {
  return (
    <div className='MainMenu'>
      <img  src="https://img.icons8.com/dotty/80/maintenance.png" alt="maintenance" className='logomenu'/>
       <li className='Menu'>
        <a href="">Home</a>
        <a href="">Home</a>
        <a href="">Home</a>
       </li>
       <input type="search" placeholder='Pesquisar' />
    </div>
  )
}

export default NavBarTop
