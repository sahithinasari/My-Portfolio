import './App.css';
import Header from './Components/header/Header';
import Experience from './Components/experience/Experience';
import About from './Components/about/About';
import Portfolio from './Components/portfolio/Portfolio';
import Testimonial from './Components/testimonial/Testimonial';
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer';
import Nav from './Components/nav/Nav';
import Services from './Components/services/Services';
function App() {
  return (
    <div className="App">
     <Header />
     <Nav/>
     <About />
     <Experience/>
     <Services/>
     <Portfolio/>
     <Testimonial/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
