import Header from "./components/Header"
import './App.css'
import HeroSection from "./components/HeroSection"
import About from "./components/About"
import Menu from "./components/Menu"
import Products from "./components/Products"


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection /> 
      <About />
      <Menu/>
      <Products/>
    </div>
  )
}

export default App
