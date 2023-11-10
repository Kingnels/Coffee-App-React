/* eslint-disable react/prop-types */
import Button from "./Button"
import "./Item.css"

function Item({src}) {
  return (
    <div className="item">
        <img src={src} alt="" />
        <h2 className="item_title">Tasty and Healthy</h2>
        <h2 className="price">$15.99<span className="price1"> 20.98</span> </h2>
       
        <Button 
           className='btn'
           tag = 'btn'
           content = "Add to cart"
           />
    </div>
  )
}

export default Item