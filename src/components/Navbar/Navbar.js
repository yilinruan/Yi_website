import React, { useState, useEffect, useRef, Fragment } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { GoGistSecret } from 'react-icons/go';
import { Link, NavLink } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';


function useComponentVisible() {
    const [isComponentVisible, setIsComponentVisible] = useState(
        false
    );
    const ref = useRef(null);

    const handleHideDropdown = (event) => {
        if (event.key === "Escape") {
            setIsComponentVisible(false);
        }
    };

    const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
        }
    };
    useEffect(() => {
        document.addEventListener("keydown", handleHideDropdown, true);
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("keydown", handleHideDropdown, true);
            document.removeEventListener("click", handleClickOutside, true);
        };
    });

    return { ref, isComponentVisible, setIsComponentVisible };
}


export default function Navbar() {
    const {
        ref,
        isComponentVisible,
        setIsComponentVisible
    } = useComponentVisible(true);

    let [click, setClick] = useState(false);

    // const handleClick = () => {
    //     setClick(!click)
    // }

    return (
        <div className="navbar" ref={ref}>

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
                <NavLink activeStyle={{ color: "#7FDBFF" }} className="navbar--right__links" exact to="/Contacts">Contact</NavLink>


                {/* {click && isComponentVisible && (
                    <div className="navbar--right__menu">
                        <NavLink activeStyle={{ color: "#ffbbee" }} className="navbar--right__menu--item" exact to="/">
                            Home
                        </NavLink>
                        <NavLink activeStyle={{ color: "#ffbbee" }} className="navbar--right__menu--item" exact to="/Aboutme">
                            About Me
                        </NavLink>
                        <NavLink activeStyle={{ color: "#ffbbee" }} className="navbar--right__menu--item" exact to="/Projects">
                            Project
                        </NavLink>
                        <NavLink activeStyle={{ color: "#7FDBFF" }} className="navbar--right__menu--item" exact to="/Contacts">
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
                )} */}

                <div className="navbar--right__menuIcon" onClick={() => setClick(!click)}>
                    {/* {click && isComponentVisible ? (
                        <div>
                            <FaTimes onClick={() => setIsComponentVisible(false)} />

                            <div className="navbar--right__menu">
                                <NavLink activeStyle={{ color: "#ffbbee" }} className="navbar--right__menu--item" exact to="/">
                                    Home
                                </NavLink>
                                <NavLink activeStyle={{ color: "#ffbbee" }} className="navbar--right__menu--item" exact to="/Aboutme">
                                    About Me
                                </NavLink>
                                <NavLink activeStyle={{ color: "#ffbbee" }} className="navbar--right__menu--item" exact to="/Projects">
                                    Project
                                </NavLink>
                                <NavLink activeStyle={{ color: "#7FDBFF" }} className="navbar--right__menu--item" exact to="/Contacts">
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
                        </div>

                    ) : (
                        
                        <GiHamburgerMenu onClick={() => setIsComponentVisible(true)} />
                    )} */}


                    {isComponentVisible ? (
                        <div>
                            <FaTimes onClick={() => setIsComponentVisible(false)} />

                            <div className="navbar--right__menu">
                                <NavLink activeStyle={{ color: "#ffbbee" }} className="navbar--right__menu--item" exact to="/">
                                    Home
                                </NavLink>
                                <NavLink activeStyle={{ color: "#ffbbee" }} className="navbar--right__menu--item" exact to="/Aboutme">
                                    About Me
                                </NavLink>
                                <NavLink activeStyle={{ color: "#ffbbee" }} className="navbar--right__menu--item" exact to="/Projects">
                                    Project
                                </NavLink>
                                <NavLink activeStyle={{ color: "#7FDBFF" }} className="navbar--right__menu--item" exact to="/Contacts">
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
                        </div>
                    )
                        : (
                            <GiHamburgerMenu onClick= {() => setIsComponentVisible(true)} />
                        )
                    }


                    {/* {click ? (
                        <FaTimes />
                    ) : (
                        <GiHamburgerMenu />
                    )} */}
                </div>

            </div>



        </div>
    )
}


