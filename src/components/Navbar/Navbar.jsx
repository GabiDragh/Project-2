import React from 'react'
import './Navbar.css'
import { useSharedContext } from '../../SharedContext';
import logo_main from '../../assets/images/logo.png'
import search_icon from '../../assets/images/search-w.png'


const Navbar = ({theme, setTheme}) => {

  const { inputValue, setInputValue } = useSharedContext();
  const { triggerWeatherButtonClick } = useSharedContext();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    triggerWeatherButtonClick();
  };

  return (
    <div className='navbar'>
  <img src={logo_main} alt='' className='logo'/>
  <div className='search-box'>
    <input type='text' placeholder='City/Country' value={inputValue} onChange={handleInputChange}/>
    <button onClick={handleButtonClick} className='button'><img src={search_icon} alt='' className='search-icon'/></button>
  </div>
</div>
  )
}

export default Navbar
