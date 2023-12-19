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
                <li><Link to='/cart' className='linkA'>Cart</Link></li>
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