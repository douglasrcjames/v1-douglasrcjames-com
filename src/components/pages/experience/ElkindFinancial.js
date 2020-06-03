import React, { Component } from 'react'
import Experience from '../../Experience';
import { elkindFinancial } from "../../../assets/images/photos";

export default class ElkindFinancial extends Component {
    render() {
        return (
            <>
                <Experience
                    title={"Elkind Financial"}
                    siteUrl={"www.elkind.financial"}
                    logoUrl={require("../../../assets/images/elkind-financial/logo.png")}
                    logoStyle={"small-square"}
                    myRole={"Web Developer"}
                    status={"In Progress"}
                    period={"February, 2020 – Today"}
                    skillsBlock={<SkillsBlock />}
                    descriptionBlock={<DescriptionBlock />}
                    photoGallery={elkindFinancial}
                    />
            </>
        )
    }
}

const DescriptionBlock = () => {
    return (
    <>
        <p className="indent">
            Nathan Elkind is a financial and insurance advisor based out of Tulsa, Oklahoma. He was looking for a centralized and simple website to direct new and potential customers to learn about
            what services he has to offer. Nathan also is trying to start up a YouTube channel for educating potential clients around the nation on finance and insurance topics. The website
            will eventual house merchandise and more links to external sources from his videos.
        </p>   
        <p className="indent">
            I built this site using React.js as the front end, and Firebase for the free SSL certificate for a secure URL. I worked with &nbsp;
            <a href="https://www.linkedin.com/in/anamariecampos/" target="_blank" rel="noopener noreferrer">Ana Campos</a> to create a logo for the website. The site is currently very simplified as
            we work through the details with Nathan, but he wanted something up quickly and usable for his clients. We will be adding on a contact form and more pages for additional
            financial information in the near future. 
        </p> 

        {/* <h2>Demo</h2>
        <div className="center-text">
            <iframe
                title="Retreat on Nichols Demo video"
                width="560" height="315"
                src="https://www.youtube.com/embed/pNKvclHvTOY"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen" 
                msallowfullscreen="msallowfullscreen" 
                oallowfullscreen="oallowfullscreen" 
                webkitallowfullscreen="webkitallowfullscreen"
            />
        </div> */}
    </>
    )
}

const SkillsBlock = () => {
    return (
        <>
            <ul>
                <li>HTML &amp; CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>React.js Framework</li>
                <li>Firebase API</li>
                    <ul>
                        <li>Hosting with free SSL certificate</li>
                        <li>Database with Firestore</li>
                        <li>Firebase Functions</li>
                    </ul>
                <li>Github</li>
                <li>Google My Business</li>
            </ul>
        </>
    )
}
