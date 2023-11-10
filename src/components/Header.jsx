
import './Header.css'
function Header() {
  return (
    <div className='navbar'>
        <img src="../../public/images/logo.png" alt="Logo" className='logo'/>

        <ul className='nav'>
            <li className='navItems'>Home</li>
            <li className='navItems'>About</li>
            <li className='navItems'>Menu</li>
            <li className='navItems'>Products</li>
            <li className='navItems'>Review</li>
            <li className='navItems'>Contact</li>
            <li className='navItems'>Blogs</li>
        </ul>
    </div>
  )
}

export default Header