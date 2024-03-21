import React from 'react'
import './Navbar.css'
import logo_main from '../../assets/images/logo.png'
import search_icon from '../../assets/images/search-w.png'


const Navbar = ({theme, setTheme}) => {

  return (
    <div className='navbar'>
  <img src={logo_main} alt='' className='logo'/>
  <div className='search-box'>
    <input type='text' placeholder='City/Country'/>
    <img src={search_icon} alt='' className='search-icon'/>
  </div>
</div>
  )
}

export default Navbar