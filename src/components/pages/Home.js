import React, { Fragment, useState } from 'react'
import MetaData from '../layout/MetaData'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineCaretDown } from 'react-icons/ai';
import { FaReact, FaPython, FaNodeJs } from 'react-icons/fa';
import { RiArrowUpSFill } from 'react-icons/ri';
import { DiMongodb } from 'react-icons/di';
import { SiMysql, SiHtml5 } from 'react-icons/si';
import { Link } from 'react-router-dom';


export default function Home() {
    let [click, setClick] = useState("");

    const clickDown = () => {
        setClick("down")
    }

    const clickUp = () => {
        setClick("up")
    }
    return (

        <Fragment>
            <MetaData title={'Home Page'} />

            <div className="home">

                <div className="home--section" id='up'>
                    <div className="home--section__page">
                        <h1 className="home--section__page-Title fadein">
                            <span className="home--section__page-Title--effect">Hi,</span> I'm <span className="home--section__page-Title--effect">YiLin Ruan</span>
                        </h1>

                        <div className="home--section__page-grid-container effect_right">
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

                        <h1 className="home--section__page-text effect_left"> I am a frontend developer </h1>
                    </div>

                    <div className="home--section__bottem" >
                        <a href='#down' onClick={clickDown}>
                            <AiOutlineCaretDown className="home--section__bottem--next_page shake" />
                        </a>
                    </div>
                </div>

                <div className="home--section2" id='down'>

                    {click==="down" ? (
                        <div className="home--section2__page">
                            <div className="home--section2__page--title effect_left">Programmer Skills</div>

                            <div className="home--section2__page--skill effect_right">
                                <div className="home--section2__page--skill__container">
                                    <span className="home--section2__page--skill__container--set ">Strong: Python, JavaScript, HTML, Css, Sass</span>
                                    <span className="home--section2__page--skill__container--set">Experience: Java, Kotlin</span>
                                </div>
                            </div>
                            <div className="home--section2__page--body" >
                                <div className="home--section2__page--body__text effect_left">Database: MongoDB, MySQL</div>
                                <div className="home--section2__page--body__text effect_right">Object-Oriented Design</div>
                                <div className="home--section2__page--body__text effect_left">Agile Software Development</div>
                                <div className="home--section2__page--body__text effect_right">Hardware and peripherals testing and debugging</div>
                                <div className="home--section2__page--body__text effect_left">Familiar with linux/unix</div>
                            </div>

                            <div className="home--section2__page--icons ">
                                <div className="home--section2__page--icons__container effect_right">
                                    <FaReact className="home--section2__page--icons__container--logo" />
                                    <FaPython className="home--section2__page--icons__container--logo" />
                                    <FaNodeJs className="home--section2__page--icons__container--logo" />
                                    <DiMongodb className="home--section2__page--icons__container--logo" />
                                    <SiMysql className="home--section2__page--icons__container--logo" />
                                    <SiHtml5 className="home--section2__page--icons__container--logo" />
                                </div>

                            </div>
                        </div>
                    ) : (
                        <div className="home--section2__page">
                            <div className="home--section2__page--title">Programmer Skills</div>

                            <div className="home--section2__page--skill">
                                <div className="home--section2__page--skill__container">
                                    <span className="home--section2__page--skill__container--set">Strong: Python, JavaScript, HTML, Css, Sass</span>
                                    <span className="home--section2__page--skill__container--set">Experience: Java, Kotlin</span>
                                </div>
                            </div>
                            <div className="home--section2__page--body" >
                                <div className="home--section2__page--body__text">Database: MongoDB, MySQL</div>
                                <div className="home--section2__page--body__text">Object-Oriented Design</div>
                                <div className="home--section2__page--body__text">Agile Software Development</div>
                                <div className="home--section2__page--body__text">Hardware and peripherals testing and debugging</div>
                                <div className="home--section2__page--body__text">Familiar with linux/unix</div>
                            </div>

                            <div className="home--section2__page--icons">
                                <div className="home--section2__page--icons__container">
                                    <FaReact className="home--section2__page--icons__container--logo" />
                                    <FaPython className="home--section2__page--icons__container--logo" />
                                    <FaNodeJs className="home--section2__page--icons__container--logo" />
                                    <DiMongodb className="home--section2__page--icons__container--logo" />
                                    <SiMysql className="home--section2__page--icons__container--logo" />
                                    <SiHtml5 className="home--section2__page--icons__container--logo" />
                                </div>

                            </div>
                        </div>
                    )}



                    <div className="home--section2__bottem">
                        <a href='#up' onClick={clickUp}>
                            <RiArrowUpSFill className="home--section2__bottem--previous_page shake" />
                        </a>
                    </div>
                </div>

            </div>
        </Fragment>


    )
}

