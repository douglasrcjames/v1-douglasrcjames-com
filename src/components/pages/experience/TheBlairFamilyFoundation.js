import React, { Component } from 'react'
import Experience from '../../Experience';
import { theBlairFamilyFoundation } from "../../../assets/images/photos";

export default class TheBlairFamilyFoundation extends Component {
    render() {
        return (
            <>
                <Experience
                    title={"The Blair Family Foundation"}
                    siteUrl={"www.theblairfamilyfoundation.org"}
                    logoUrl={require("../../../assets/images/theblairfamilyfoundation/logo.png")}
                    logoStyle={"long"}
                    myRole={"Web Developer"}
                    status={"Maintaining"}
                    period={"April, 2020 - Today"}
                    skillsBlock={<SkillsBlock />}
                    descriptionBlock={<DescriptionBlock />}
                    photoGallery={theBlairFamilyFoundation}
                    />
            </>
        )
    }
}

const DescriptionBlock = () => {
    return (
    <>
        <p className="indent">
            The David and Mikel Blair Family Foundation is dedicated to purposeful giving and is rooted in improving the quality of life for individuals around Maryland. From literacy and equity in 
            education, to at-risk youth programs and mental health access, the foundation believes and sees value in individuals, and their impact on the 
            world, when they are given access to opportunity. 
        </p>
         
        <p className="indent">
            I built this site using React.js as the front end, and Firebase for the database backend to store contact info, 
            and send that contact info to the client's email via node-mailer. The site took me about 2 weeks to plan, design, and build. 
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
                    </ul>
                <li>Github</li>
            </ul>
        </>
    )
}
