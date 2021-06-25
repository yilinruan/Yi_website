import React, { Fragment, useEffect } from 'react'
import MetaData from '../layout/MetaData'
import { AiFillGithub, AiFillLinkedin, AiOutlineCaretDown } from 'react-icons/ai';
import { FaReact, FaPython, FaNodeJs } from 'react-icons/fa';
import { RiArrowUpSFill } from 'react-icons/ri';
import { DiMongodb } from 'react-icons/di';
import { SiMysql, SiHtml5 } from 'react-icons/si';


export default function Home() {

    useEffect(() => {

        let btnUp = document.querySelector('#btnUp');
        let page1 = document.querySelector('#page1');

        if (btnUp && page1) {
            btnUp.addEventListener('click', function () {
                page1.scrollIntoView(true);
            });
        }

        let btnDown = document.querySelector('#btnDown');
        let page2 = document.querySelector('#page2');

        if (btnDown && page2) {
            btnDown.addEventListener('click', function () {
                page2.scrollIntoView(true);
            });
        }

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.7
        };

        function observerCallback(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // fade in observed elements that are in view
                    entry.target.classList.replace('fadeOut', 'fadeIn');
                    entry.target.classList.replace('effect_right_out', 'effect_right_in');
                    entry.target.classList.replace('effect_left_out', 'effect_left_in');

                } else {
                    // fade out observed elements that are not in view
                    entry.target.classList.replace('fadeIn', 'fadeOut');
                    entry.target.classList.replace('effect_right_in', 'effect_right_out');
                    entry.target.classList.replace('effect_left_in', 'effect_left_out');
                }
            });
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const fadeElms = document.querySelectorAll('.fade, .fade2, .effect_right, .effect_left');
        fadeElms.forEach(el => observer.observe(el));
    }, []);

    return (

        <Fragment>
            <MetaData title={'Home Page'} />

            <div className="home">

                <div className="home--section" id='page1'>
                    <div className="home--section__page">
                        <h1 className="home--section__page-Title fade fadeOut">
                            <span className="home--section__page-Title--effect">Hi,</span> I'm <span className="home--section__page-Title--effect">YiLin Ruan</span>
                        </h1>

                        <div className="home--section__page-grid-container effect_right effect_right_out">
                            <a href='https://github.com/yilinruan' className="something" >
                                <div className="home--section__page-grid-container-item">
                                    {<AiFillGithub className="home--section__page-grid-container-item-icon" />}
                                </div>
                            </a>

                            <a href='https://www.linkedin.com/in/yilin-ruan-1a0302203/' className="something">
                                <div className="home--section__page-grid-container-item">
                                    {<AiFillLinkedin className="home--section__page-grid-container-item-icon" />}
                                </div>
                            </a>

                        </div>

                        <h1 className="home--section__page-text effect_left effect_left_out"> I am a web developer </h1>
                    </div>

                    <div className="home--section__bottem" >
                        <div id='btnDown'>
                            <AiOutlineCaretDown className="home--section__bottem--next_page shake" />
                        </div>
                    </div>
                </div>

                <div className="home--section2" id='page2'>


                    <div className="home--section2__page">
                        <div className="home--section2__page--title effect_left effect_left_out">Programmer Skills</div>

                        <div className="home--section2__page--skill effect_right effect_right_out">
                            <div className="home--section2__page--skill__container">
                                <span className="home--section2__page--skill__container--set ">Strong: Python, JavaScript, HTML, Css, Sass</span>
                                <span className="home--section2__page--skill__container--set">Experience: Java, Kotlin</span>
                            </div>
                        </div>
                        <div className="home--section2__page--body fade fadeOut" >
                            <div className="home--section2__page--body__text ">Database: MongoDB, MySQL</div>
                            <div className="home--section2__page--body__text ">Object-Oriented Design</div>
                            <div className="home--section2__page--body__text ">Agile Software Development</div>
                            <div className="home--section2__page--body__text ">Hardware and peripherals testing and debugging</div>
                            <div className="home--section2__page--body__text ">Familiar with linux/unix</div>
                        </div>

                        <div className="home--section2__page--icons fade2 fadeOut">
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




                    <div className="home--section2__bottem">
                        <div id='btnUp'>
                            <RiArrowUpSFill className="home--section2__bottem--previous_page shake" />
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>


    )
}

