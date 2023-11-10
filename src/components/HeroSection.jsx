import "./Hero.css"
import Button from './Button'

function HeroSection() {
  return (
    <div className="hero">
        <div className="content">
            <h1 className="herotext1">FRESH COFFEE IN THE MORNING</h1>
            <p className="herotext2">The Best Coffee Money Can Buy Made From The Very Best Ingredients, Start Your Day With A Pick From Our Awesome Coffee Collection, Tasting Is Believing..</p>
            <Button 
            className='btn'
            tag = 'btn'
            content = "Get Yours Now"
         />
         </div>
    </div>
  )
}
export default HeroSection