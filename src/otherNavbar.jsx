import './NavBar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function OtherNavbar() {
    return (
        <nav className='otherNB'>
            <span className="CJLogo">Cuppa Java</span>
            <ul className="otherNBUl">
                <li><Link to='/' className='linkA'>Home</Link></li>
                <li><Link to='/menu' className='linkA'>Menu</Link></li>
                <li><Link to='/login' className='linkA'>Login</Link></li>
                <li><Link to='/cart' className='linkA'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart CartImg" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L
                        2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 
                        0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" stroke='currentColor' stroke-width='.3'/>
                    </svg>
                    </Link></li>
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
  }

export default OtherNavbar