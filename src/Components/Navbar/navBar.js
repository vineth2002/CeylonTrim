import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo 2.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_light from '../../assets/day.png'
import toggle_dark from '../../assets/night.png'
const Navbar=({theme,setTheme})=> {
    const toggle_mode=()=>{
        theme=='light'?setTheme('dark'):setTheme('light');
    }
    return(
        <div className='Navbar'>
            <img src={logo} className='logo' alt='logo'/>
            <ul className='options'>
                <li>Home</li>
                <li>Services</li>
                <li>Book Now</li>
                <li>Sign In</li>
            </ul>
            <div className='Search-box'> 
                <input type='text' placeholder='Search' id=''></input>
                <img src={theme=='light'?search_icon_dark:search_icon_dark} className='searchIcon' alt='Search-icon'/>
            </div>
            <img onClick={()=>{toggle_mode()}} src={theme==='light'?toggle_light:toggle_dark} className='toggleIcon' alt='search-icon'/>
            </div>
    )
            
}
export default Navbar;

