import './menu.css'
import OtherNavbar from './otherNavbar.jsx'
import SpecialsPicture from './CoffeeSplash.jpg'

function Menu() {
    return (
       <>
          <OtherNavbar />
          <SpecialsBG />
       </>
    )
}

function SpecialsBG() {
    return (
        <>
            <div className="SpecialsBG">
                <div className="SpecialsLogo">The Royal Taste.</div>
            </div>
            <img src={SpecialsPicture} alt='' className='SpecialsPicture' />
            <div className="SpecialsTitle-1">
                <span className='SpecialsTitle-2'>Specials</span>
            </div>
        </>
        
    )
}

/* Coffee is full of Joy, Love, Peace, Laughter */

export default Menu