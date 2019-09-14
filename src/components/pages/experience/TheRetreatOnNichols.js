import React, { Component } from 'react'
import Experience from '../../Experience';
import { theRetreatOnNichols } from "../../../assets/images/photos";

export default class TheRetreatOnNichols extends Component {
    render() {
        return (
            <>
                <Experience
                    title={"The Retreat On Nichols"}
                    siteUrl={"www.theretreatonnichols.com"}
                    logoUrl={require("../../../assets/images/theretreatonnichols/logo-v2.png")}
     
                    myRole={"Web Developer"}
                    status={"Completed"}
                    period={"August, 2019"}
                    skillsBlock={<SkillsBlock />}
                    descriptionBlock={<DescriptionBlock />}
                    photoGallery={theRetreatOnNichols}
                    />
            </>
        )
    }
}

const DescriptionBlock = () => {
    return (
    <>
        <p className="indent">
            The Retreat on Nichols is a two unit luxury short-term accommodation in Fairhope, Alabama. 
            The property features a common outdoor kitchen, wood-fired pizza oven, fire pit, Petanque court, 
            lawn &amp; board games, additional bathroom, laundry, gated parking, bicycles, &amp; golf cart. 
            I was brought on board to build the website and manage SEO because the property owners were looking to increase the traffic
            to the rental via Airbnb and VRBO booking sites. 
        </p>   
        <p className="indent">
            I built this site using React.js as the front end, and Firebase for the database backend to store contact info, 
            and send that to the client's email via node-mailer. The site took me about a month to plan, design, and build. The design 
            phase was fairly quick, because I had previously built a SquareSpace site for the client, so I based much of my design off that template. 
            I worked with a videographer and photographer to fit their content they captured into the site. I love how the site turned out and so did the 
            client!
        </p> 
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



