/* eslint-disable react-hooks/exhaustive-deps */

import './Header.css'
import { useState,useEffect } from 'react'
import { FaBars,FaSearch, FaShoppingCart} from "react-icons/fa"
function Header() {
  const [Bar, setBar] = useState(true)
  const [clicked, setClicked] = useState(false)
  const closeNav = () =>{
    setClicked(false)
  }

  const showBar= () =>{
    if(window.innerWidth >= 960){
        setBar(!Bar);
        closeNav();
    }
}  
useEffect(() => {
  showBar();
}, []);


window.addEventListener('resize', showBar);

  return (
    <div className='navbar' >
        <img src="../../public/images/logo.png" alt="Logo" className='logo' onClick={closeNav}/>

        <ul className={ !clicked || window.innerWidth > 960 ? 'nav':"open"}>
            <li className='navItems'>Home</li>
            <li className='navItems'>About</li>
            <li className='navItems'>Menu</li>
            <li className='navItems'>Products</li>
            <li className='navItems'>Review</li>
            <li className='navItems'>Contact</li>
            <li className='navItems'>Blogs</li>
        </ul>
        <div className="icon">   
          <FaSearch  className = "icons" />
          <FaShoppingCart  className = "icons" />
          {Bar && <FaBars 
          className = "icons" 
          onClick={()=>{setClicked(!clicked)}}
          />}
        </div>
        </div>
  )
}

export default Header