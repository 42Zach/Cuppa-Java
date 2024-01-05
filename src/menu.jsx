import './menu.css'
import './NavBar.css'
import OtherNavbar from './otherNavbar.jsx'
import SpecialsPicture from './SpecialsImage.jpg'

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
                <img src={SpecialsPicture} alt='' className='SpecialsPicture' />
                <div className="SpecialsLogo"><em>The Art Of Coffee Elevated</em></div>
                <div className="container">
                    <h1>Coffee Is Full of
                        <span className="txt-type" ></span>
                    </h1>
                </div>
            </div>
            <div className="SpecialsTitle-1">
                <span className='SpecialsTitle-2'>Specials</span>
            </div>
        </>
        
    )
}


export default Menu