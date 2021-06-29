import React from 'react'
export default function Projects() {


    const projects = [
        {
            "title": "Solvedoku",
            "module": "Java, Open CV, OCR, Google Guava",
            "date": "January 2017 - May 2017",
            "description": "An image recognition sudoku solver",
            "link": "https://github.com/Ssumday/Solvedoku",
            "image": "projects--container--product__project--image1"
        },

        {
            "title": "Android Diet App",
            "module": "Kotlin, Android Studio",
            "date": "July 2019 - September 2019",
            "description": "App that allows users to track weight, search food recipes, and purchase food online ",
            "link": "https://github.com/KevinDelao/Diet-Android-App",
            "image": "projects--container--product__project--image2"
        },

        {
            "title": "Auto Purchasing Bot",
            "module": "Python, Selenium",
            "date": "November 2020 - December 2020",
            "description": "Automated python script to purchase targeted item",
            "link": "Private",
            "image": "projects--container--product__project--image3"
        },

        {
            "title": "Ecommerce website",
            "module": "MERN Stack",
            "date": "January 2021 - March 2021 ",
            "description": "Fully Functional E-commerce website using MERN Stack",
            "link": "https://yishopit.herokuapp.com/",
            "image": "projects--container--product__project--image4"
        },

    ]

    return (
        <div className="projects">

            <div className="projects--container fadein">

                {projects.map(project => (

                    <div className="projects--container--product">
                        <div className="projects--container--product__project">
                            <div className={project.image} />
                        </div>


                        <div className="projects--container--product__body">
                            <div className="projects--container--product__body--title">
                                <div className="projects--container--product__body--title__name" >
                                    {project.title}
                                </div>
                            </div>

                            <div className="projects--container--product__body--text">
                                {project.module}
                            </div>

                            <div className="projects--container--product__body--text">
                                {project.date}
                            </div>

                            <div className="projects--container--product__body--text">
                                {project.description}
                            </div>

                        </div>

                        {/* <div className="projects--container--product__bottom">
                            <Link className="projects--container--product__bottom--btn_area" to={project.link} >
                                <div className="projects--container--product__bottom--btn_area__viewButton">View Details</div>
                            </Link>
                        </div> */}

                        { project.link !== "Private" ? (
                            <div className="projects--container--product__bottom">
                                <a className="projects--container--product__bottom--btn_area" href={project.link} >
                                    <div className="projects--container--product__bottom--btn_area__viewButton">View Details</div>
                                </a>
                            </div>
                        ) : (
                            <div className="projects--container--product__bottom">
                                <div className="projects--container--product__bottom--btn_area" >
                                    <div className="projects--container--product__bottom--btn_area__viewButton bg-danger">Private</div>
                                </div>
                            </div>
                        )}


                    </div>

                ))}

            </div>


        </div>
    )
}
