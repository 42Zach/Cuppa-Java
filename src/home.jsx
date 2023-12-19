import './index.css';
import CoolBtns from "./navbar.jsx"

function Home() {
    return (
      <>
        <div className='HomeBG'>
          <FirstHeader />
          <IndexHome />
          <CoolBtns />
        </div>
      </>
    )
}

function FirstHeader() {
    return (
      <header>
        <nav className='FirstNav'>
          <div className='OuterDivCJLogo'>
            <span className='FirstCJLogo'>Cuppa Java</span>
          </div>
        </nav>
      </header>
    )
  }
  
  function IndexHome() {
    return (
      <>
        <div className='slogan'>
          <h1><em>The Art of Coffee Elevated</em></h1>
        </div>
      </>
    )
  }

  export default Home