import Button from "./Button"
import './About.css'

function About() {
  return (
    <div className="about">
        <h1 className="about_title">ABOUT <span className="span">US</span></h1>

        <div className="about_content">
            <>
            <img src="../../public/images/about-img.jpeg"className="about_image" alt="" /> 
            </>

            <div className="about_text">
                    <h2 className="about_text1">What Makes Our Coffee Special</h2>
                    <p className="abouttext">Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Entium Veritatis Esse, Consequuntur 
                        A Quibusdam Ex Voluptates Doloremque Veniam Libero Hic Vitae Qui Aut Ullam Laboriosam Quo Nemo.
                    </p>
                    <p className="abouttext">
                        Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Entium Veritatis Esse, 
                        Consequuntur A Quibusdam Ex Voluptates Doloremque.
                    </p> 
                <Button 
                   className='btn'
                   tag = 'btn'
                   content = "Learn More"
                />
            </div>
        </div>
    </div>
  )
}

export default About