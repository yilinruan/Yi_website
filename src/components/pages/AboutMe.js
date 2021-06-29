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
                            I am a computer science student and I graduated from the California State University of Los Angeles.
                            Throughout the university, I have experienced a lot of work and participated in different types of projects,
                            but most of the time my role is to optimize SQL queries, manage databases, build algorithms, and build APIs for the backend servers.
                            During the holidays, my friend invited me to learn how to build and deploy a website by utilizing JavaScript
                            and also to Implementing some fancy features and decorations to the website. After that, I started to learn React.js
                            and other JavaScript frameworks to build the website. I feel that designing and building a website is not that bad,
                            in fact, it is very interesting to work on it. So I want to be a web/front-end developer.
                        </div>

                        <br />

                        <div className="aboutme--container__right--top__text">
                            If you want to hire me, just simply send me an email!
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
