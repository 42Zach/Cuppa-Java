import './menu.css'
import './NavBar.css'
import OtherNavbar from './otherNavbar.jsx'
import SpecialsPicture from './coffee-magazine-post.jpg'

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
        <div className="SpecialsBG">
            <img src={SpecialsPicture} alt='' className='SpecialsPicture' />
        </div>
    )
}

export default Menu