import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineCaretDown } from 'react-icons/ai';
import { FaAngleDoubleUp, FaReact, FaPython, FaNodeJs } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiMysql, SiHtml5 } from 'react-icons/si';
import { Link } from 'react-router-dom';


export default function Home() {

    return (

        <Fragment>
            <MetaData title={'Home Page'} />

            <div className="home">

                <div className="home--section" id='up'>
                    <div className="home--section__page">
                        <h1 className="home--section__page-Title"> Hi, I'm YiLin Ruan</h1>

                        <div className="home--section__page-grid-container">
                            <Link className="something" to='https://github.com/yilinruan'>
                                <div className="home--section__page-grid-container-item">
                                    {<AiFillGithub className="home--section__page-grid-container-item-icon" />}
                                </div>
                            </Link>

                            <Link className="something" to='https://www.linkedin.com/in/yilin-ruan-1a0302203/'>
                                <div className="home--section__page-grid-container-item">
                                    {<AiFillLinkedin className="home--section__page-grid-container-item-icon" />}
                                </div>
                            </Link>

                            <Link className="something" to='x'>
                                <div className="home--section__page-grid-container-item">
                                    {<AiOutlineMail className="home--section__page-grid-container-item-icon" />}
                                </div>
                            </Link>
                        </div>

                        <h1 className="home--section__page-text"> I am a junior frontend developer </h1>
                    </div>

                    <div className="home--section__bottem" >
                        <a href='#down'>
                            <AiOutlineCaretDown className="home--section__bottem--next_page" />
                        </a>
                    </div>
                </div>

                <div className="home--section2" id='down'>

                    {/* my skills */}
                    <div className="home--section2__page">
                        <div className="home--section2__page--title">Programmer Skills</div>

                        <div className="home--section2__page--skill">
                            <span className="home--section2__page--skill__set">Strong: Python, JavaScript, HTML, Css, Sass</span>
                            <span className="home--section2__page--skill__set">Experience: Java, C#, Kotlin</span>
                        </div>

                        <div className="home--section2__page--body" >
                            <div className="home--section2__page--body__text">Database: MongoDB, MySQL</div>
                            <div className="home--section2__page--body__text">Object-Oriented Design</div>
                            <div className="home--section2__page--body__text">Agile Software Development</div>
                            <div className="home--section2__page--body__text">Hardware and peripherals testing and debugging</div>
                            <div className="home--section2__page--body__text">Familiar with linux/unix</div>
                        </div>

                        <div className="home--section2__page--icons">
                            <FaReact className="home--section2__page--icons__logo" />
                            <FaPython className="home--section2__page--icons__logo" />
                            <FaNodeJs className="home--section2__page--icons__logo" />
                            <DiMongodb className="home--section2__page--icons__logo" />
                            <SiMysql className="home--section2__page--icons__logo" />
                            <SiHtml5 className="home--section2__page--icons__logo" />

                        </div>


                    </div>

                    <div className="home--section2__bottem">
                        <a href='#up'>
                            <FaAngleDoubleUp className="home--section2__bottem--previous_page" />
                        </a>
                    </div>
                </div>

            </div>
        </Fragment>


    )
}

