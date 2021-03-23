import React from 'react';

const About = () => {

    return (
        <section className="card mb-5" style={{ "margin-top": "5%", "margin-left": "25%", "margin-right": "25%", "margin-bottom": "10%" }}>
            <div className="row no-gutters">
                <article className="card-body">

                    <h2 className="card-title">Mitch Mathias</h2>

                    <img src="images/T01C5DNKJV8-U01CALK0V70-a77d2fd6d7ac-512.png" className="row-md-4" alt=""
                        style={{ "float": "left", "margin-right": "20px", "height": "150px", "width": "150px" }} />
                    <p className="row-md-8" style={{ "float": "inline-end" }}>
                        Hi! My name is Mitch Mathias. I  am a Graduate of UNCC's Full
                        Stack Flex Boootcamp. I currently live in Charolette, NC, and love mountain biking and playing golf. I am experienced in React, Javascript,Node, and HTML/CSS. I am also proficent with API's, Databases, GitHub and Windows Command Line</p>

                    <p>View my <a href="https://docs.google.com/document/d/1LMN1iHcrtaviPV01W5BmoYGBeYjNo1IaYMPX3LYM2uY/edit">Resume</a></p>

                    <p>Email: Mitch.mathias96@gmail.com</p>

                    <nav style={{ "text-align": "center" }}>
                        <a href=" https://www.linkedin.c om/in/mitch-mathias-6765111b5/" className="badge badge-primary" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://github.com/mitchmathias" className="badge badge-secondary" target="_blank" rel="noreferrer">GitHub</a>
                    </nav>
                </article >
            </div>
        </section>
    );
}

export default About