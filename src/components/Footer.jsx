import FooterLogo from "../assets/Asset 9@4x.png"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div>
                <img src={FooterLogo} width={'80px'} height={'140px'} alt="Logo" />

                <nav className="footerNav">
                    <h3 className="footerMenuHeading ">Navigation</h3>
                    <ul className="footerMenu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="#about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/reservation">Reservations</Link></li>
                        <li><Link to="/order">Order Online</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>

                <nav className="contacts">
                    <h3 className="footerMenuHeading ">Contacts</h3>
                    <ul className="footerMenu">
                        <li><Link to={'/'}>Address</Link></li>
                        <li><Link to={'/'}>Phone Number</Link></li>
                        <li><Link to={'/'}>Email</Link></li>
                    </ul>
                </nav>

                <nav className="socialMedia">
                    <h3 className="footerMenuHeading ">Social Media Links</h3>
                    <ul className="footerMenu">
                        <li><Link to='facebook.com'>Facebook</Link></li>
                        <li><Link to='instagram.com'>Instagram</Link></li>
                        <li><Link to='whatsapp.com'>Whatsapp</Link></li>
                    </ul>
                </nav>
            </div>


        </footer>
    )
}

export default Footer;