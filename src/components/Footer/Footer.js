import React from 'react'
import {FaGithub, FaLinkedinIn, FaTwitterSquare, FaFacebook} from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function Footer() {
    
    return (
        <footer className="footer">

            <div className="footer-container">
                <div className="footer-container-row">
                    <div className="footer-container-row-about">
                        <div className="footer-container-row-about-title">about</div>
                        <p className="footer-container-row-about-text">This is the first website i made, and I am just doing it for fun. I will continue making more website and please let me know if you like my design.</p>
                    </div>

                    <div className="footer-container-row-quicklink">
                        <div className="footer-container-row-quicklink-title">quick links</div>

                        <a className="footer-container-row-quicklink-links" href="/">Home</a>
                        <a className="footer-container-row-quicklink-links" href="/Aboutme">About Me</a>
                        <a className="footer-container-row-quicklink-links" href="/Projects">Projects</a>
                        <a className="footer-container-row-quicklink-links" href="/Contacts">Contacts</a>

                    </div>

                    <div className="footer-container-row-socialMedia">
                        <div className="footer-container-row-socialMedia-title">Social Media</div>

                        <div className="footer-container-row-socialMedia-links" >Instagram</div>
                        <div className="footer-container-row-socialMedia-links" >Facebook</div>
                        <div className="footer-container-row-socialMedia-links" >Youtube</div>
                        <div className="footer-container-row-socialMedia-links" >Twitter</div>

                    </div>

                </div>
            </div>


            <div className="footer-container2">
                <div className="footer-container2-row">
                    <p className="footer-container2-row-copyright">
                        Copyright &copy; 2021 All Rights Reserved by Yilin Ruan
                    </p>

                    <div className="footer-container2-row-icons">
                        <Link className="footer-container2-row-icons-facebook" to="#"><FaFacebook className="facebook"/></Link>
                        <Link className="footer-container2-row-icons-twitter" to="#"><FaTwitterSquare className="twitter" /></Link>
                        <Link className="footer-container2-row-icons-github" to="#"><FaGithub className="github" /></Link>
                        <Link className="footer-container2-row-icons-linkedin" to="#"><FaLinkedinIn className="linkedin" /></Link>
                    </div>

                </div>
            </div>

        </footer>
    )
}
