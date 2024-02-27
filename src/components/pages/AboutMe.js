import React, { useEffect } from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function AboutMe() {

    useEffect(() => {
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
                } else {
                    // fade out observed elements that are not in view
                    entry.target.classList.replace('fadeIn', 'fadeOut');
                }
            });
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const fadeElms = document.querySelectorAll('.fade');
        fadeElms.forEach(el => observer.observe(el));
    }, [])


    return (
        <div className="aboutme">

            <div className="aboutme--container fade fadeOut">

                <div className="aboutme--container__left">

                    <div className="aboutme--container__left--top">
                        <div className="aboutme--container__left--top__protfolio">MY PORTFOLIO</div>
                        <div className="aboutme--container__left--top__sub_text">A PROTFOLIOBOX 4 DEMO SITE</div>
                    </div>

                    <div className="aboutme--container__left--bottom">
                        <div className="aboutme--container__left--bottom__img"></div>

                    </div>

                </div>


                <div className="aboutme--container__right">
                    <div className="aboutme--container__right--menu"></div>

                    <div className="aboutme--container__right--top">
                        <div className="aboutme--container__right--top__title">ABOUT ME</div>
                        <div className="aboutme--container__right--top__text">
                        Hello! I'm a dedicated and results-driven software developer with a proven track 
                        record of success in contributing to the development and enhancement of various 
                        web applications. Over the years, I've had the opportunity to work with cross-functional 
                        teams, collaborating with UX/UI designers and fellow developers to create seamless and 
                        efficient software solutions. 
                        </div>

                        <br />

                        <div className="aboutme--container__right--top__text">
                        With a passion for staying at the forefront of technology and a commitment to delivering high-quality 
                        solutions, I look forward to leveraging my skills and experience in future projects and collaborations.
                        </div>

                    </div>

                    <div className="aboutme--container__right--bottom">

                        <div className="aboutme--container__right--bottom__icons">
                            <Link className="aboutme--container__right--bottom__icons--logo" to="#"><FaGithubSquare /></Link>
                            <Link className="aboutme--container__right--bottom__icons--logo" to="#"><FaLinkedin /></Link>
                        </div>

                        <div className="aboutme--container__right--bottom__line" />

                    </div>



                </div>

            </div>

        </div>
    )
}
