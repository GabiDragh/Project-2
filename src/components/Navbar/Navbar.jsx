import React from 'react'
import './Navbar.css'
import logo_main from '../../assets/images/logo.png'
import search_icon_light from '../../assets/images/search-w.png'
import search_icon_dark from '../../assets/images/search-b.png'
import toggle_light from '../../assets/images/night.png'
import toggle_dark from '../../assets/images/day.png'


const Navbar = ({theme, setTheme}) => {

    const toggle_mode = ()=>{ 
        theme == 'light' ? setTheme ('dark') : setTheme('light');
    }

  return (
    <div className='navbar'>

     <img src={logo_main} alt='' className='logo'/>


     <div className='search-box'>
        <input type='text' placeholder='Search'/>
        <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt=''/>
        </div>

        <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toggle_light : toggle_dark} alt='' className='toggle-icon'/>
    
    </div>
  )
}

const App = () => {
  const current_theme = localStorage.getItem('current_theme');

  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(()=>{
    localStorage.setItem('current_theme', theme);
  },[theme])
 
 
  return (
    <div className={'container ${theme}'}>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}


export default Navbar
