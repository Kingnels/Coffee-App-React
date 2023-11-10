import Item from "./Item"
import "./Menu.css"


function Menu() {
  return (
    <div className="menu">
        <h1 className="menu_title">OUR <span className="span">MENU</span></h1>
        
        <div className="items">
            <Item 
            src ="../../public/images/menu-1.png"
            />
            <Item 
             src ="../../public/images/menu-2.png"/>
            <Item 
             src ="../../public/images/menu-3.png"
            />
            <Item  
            src ="../../public/images/menu-4.png"/>
            <Item 
             src ="../../public/images/menu-5.png"
            />
            <Item 
             src ="../../public/images/menu-6.png"/>
        </div>
    </div>
  )
}

export default Menu