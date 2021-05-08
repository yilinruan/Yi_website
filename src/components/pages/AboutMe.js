import React from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function AboutMe() {

    return (
        <div className="aboutme">

            <div className=""></div>

            <div className="aboutme--container">

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
                            I am a computer science major student that recently graduated from Cal State Los
                            Angeles. Throughout my college, I had experienced many jobs and I had worked on
                            different kinds of projects as well, however, most of the time my role is working
                            with databases, algorithms, and backend servers. During the vacation, my friend
                            asked me that if I am interested to work with him on his project to implement
                            some fancy features to the website. I agreed on it and while I was working with him,
                            I found that I am more interested to work as a frontend developer.
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

                        <div className="aboutme--container__right--bottom__line"/>

                    </div>



                </div>

            </div>

        </div>
    )
}
