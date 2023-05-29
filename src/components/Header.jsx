import Logo from "../assets/Logo.svg"
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Logo" />
            <nav className="headerNav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="#about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservation">Reservations</Link></li>
                <li><Link to="/order">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>   
        </header>
    )
}

export default Header;