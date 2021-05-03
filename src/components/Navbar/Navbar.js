import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { GoGistSecret } from 'react-icons/go';
import { Link, NavLink } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

export default function Navbar() {
    let [click, setClick] = useState(false);


    const handleClick = () => {
        setClick(!click)
    }

    return (
        <div className="navbar">

            <div className="navbar--left">
                <Link className="navbar--left__anchor" to="/">
                    <div className="navbar--left__anchor--title">
                        Yilin Ruan
                    </div>
                    <GoGistSecret className="navbar--left__anchor--logo" />
                </Link>
            </div>



            <div className="navbar--right">
                <NavLink activeStyle={{ color: "#ffbbee" }} className="navbar--right__links" exact to="/">Home</NavLink>
                <NavLink activeStyle={{ color: "#ffbbee" }} className="navbar--right__links" exact to="/Aboutme">About</NavLink>
                <NavLink activeStyle={{ color: "#ffbbee" }} className="navbar--right__links" exact to="/Projects">Projects</NavLink>
                <NavLink activeStyle={{ color: "#3b5998" }} className="navbar--right__links" exact to="/Contacts">Contact</NavLink>


                {click &&
                    (<div className="navbar--right__menu">
                        <NavLink activeStyle={{ color: "#ffbbee" }} className="navbar--right__menu--item" exact to="/">
                            Home
                        </NavLink>
                        <NavLink activeStyle={{ color: "#ffbbee" }} className="navbar--right__menu--item" exact to="/Aboutme">
                            About Me
                        </NavLink>
                        <NavLink activeStyle={{ color: "#ffbbee" }} className="navbar--right__menu--item" exact to="/Projects">
                            Project
                        </NavLink>
                        <NavLink activeStyle={{ color: "#3b5998" }} className="navbar--right__menu--item" exact to="/Contacts">
                            Contact
                        </NavLink>

                        <div className="navbar--right__menu--icons">
                            <Link to='https://github.com/yilinruan'>
                                {<AiFillGithub className="navbar--right__menu--icons__logo" />}
                            </Link>

                            <Link to='https://www.linkedin.com/in/yilin-ruan-1a0302203/'>
                                {<AiFillLinkedin className="navbar--right__menu--icons__logo" />}
                            </Link>

                            <Link to='x'>
                                {<AiOutlineMail className="navbar--right__menu--icons__logo" />}
                            </Link>
                        </div>


                    </div>
                    )
                }

                <div className="navbar--right__menuIcon" onClick={handleClick}>
                    {click ? <FaTimes /> : <GiHamburgerMenu />}
                </div>

            </div>

 

        </div>
    )
}


