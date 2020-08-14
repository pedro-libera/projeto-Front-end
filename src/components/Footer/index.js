import React from 'react';
import logo from '../../assets/images/logo.png';
import instagram from '../../assets/images/instagram.png';
import facebook from '../../assets/images/facebook.png';
import './styles.css';

function Footer() {
    return (
        <React.Fragment>
            <div className="footer">
                <footer>
                    <img src={logo} alt="Logo projeto pet"/>
                    <div className="social-media">
                        <p>Nos sigam:</p>
                        <div className="instagram">                        
                            <img src={instagram} alt="instagram logo"></img>
                            <p>@projetopet</p>
                        </div>
                        <div className="facebook">
                            <img src={facebook} alt="facebook logo"></img>
                            <p>/projetopet</p>
                        </div>
                    </div>
                </footer>
            </div>
        </React.Fragment>
    )
}

export default Footer;