import './App.css';
import Experience from './PortfolioContainer/Experience/Experience';
import { NavBar, Profile } from './PortfolioContainer';
import waveimage from "./Image/wave.svg";
import Footer from './PortfolioContainer/Footer/Footer';
import Portfolio from './PortfolioContainer/Portfolio/Portfolio';
import About from './PortfolioContainer/About/About';
// import Resume from './PortfolioContainer/Resume/Resume';
import PortfolioBox from './PortfolioContainer/Portfolio/PortfolioBox';
import dark from './Image/darkBottom.png'
function App() {
  return (
    <div className='bodyCotainer'>
      <div className='main_container'>
        <NavBar />
        <Profile />
        <img src={waveimage} alt="sameer" style={{ width: "100%", height: "100%", marginBottom: '-2px' }} />

      </div>

      <div>
        <About />
      </div>


      <div className='portFoliodiv'>
        <img src={dark} alt="darkWave" style={{ width: "100%", height: "100%" }} className='wave2' />
        <Portfolio />
      </div>
      <div style={{ backgroundColor: 'rgb(48, 47, 47)', padding: "25px", border: "1px solid rgb(48,47,47" }}>
        <div className='portfolioBoxcss'>
          <PortfolioBox />
        </div>
      </div>
      <div className='wavaeStyle'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#302f2f" fill-opacity="1" d="M0,160L48,154.7C96,149,192,139,288,149.3C384,160,480,192,576,208C672,224,768,224,864,192C960,160,1056,96,1152,80C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div>




      <div>
        <Experience/>

      </div>

      <div >
        <Footer/>
      </div>

      {/* <div >
          <Resume/>
          </div> */}
    </div>
  );
}

export default App;
