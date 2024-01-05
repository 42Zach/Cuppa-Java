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

            <div className="MainContainer">
                <div className="container shoe">
                    <div className="productImage shoeImg"></div>
                    <div className="size shoeSize">
                        <h4>SIZE</h4>
                        <ul>
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                        </ul>
                    </div>
                    <div className="price shoePrice">
                        <h4>PRICE</h4>
                        <span>$6</span>
                    </div>
                    <div className="color shoeColor">
                        <h4>Notes</h4>
                        <ul>
                            <li><span>Vanilla</span></li>
                            <li><span>Maple</span></li>
                            <li><span></span></li>
                        </ul>
                    </div>
                    <div className="productName shoeName">Americano</div>
                </div>


                
            </div>

        </>
    )
}

/*

                <div className="container shirt">
                    <div className="productImage shirtImg"></div>
                    <div className="size shirtSize">
                        <h4>SIZE</h4>
                        <ul>
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                        </ul>
                    </div>
                    <div className="price shirtPrice">
                        <h4>PRICE</h4>
                        <span>$50</span>
                    </div>
                    <div className="color shirtColor">
                        <h4>Notes</h4>
                        <ul>
                            <li><span>Vanilla</span></li>
                            <li><span></span></li>
                            <li><span></span></li>
                        </ul>
                    </div>
                    <div className="productName shirtName">Crew-neck t-shirt</div>
                </div>

*/

export default Menu