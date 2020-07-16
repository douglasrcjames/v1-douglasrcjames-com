import React, { Component } from 'react'
import Experience from '../../Experience';
// import { caps } from "../../../assets/images/photos";

export default class SmithZellnerConsulting extends Component {
    render() {
        return (
            <>
                <Experience
                    title={"Smith-Zellner Consulting"}
                    siteUrl={"www.smithzellner.consulting"}
                    logoUrl={""}
                    myRole={"Web Designer & Developer"}
                    status={"Nearly complete"}
                    period={"June, 2020 - Today"}
                    skillsBlock={<SkillsBlock />}
                    descriptionBlock={<DescriptionBlock />}
                    // photoGallery={caps}
                    />
            </>
        )
    }
}

// Might be good to include the previous site screenshots

const DescriptionBlock = () => {
    return (
    <>
        <p className="indent">
            Nearly built a front end website for a consulting firm in Alabama, USA. Will update with screenshots and more info soon!
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
            </ul>
        </>
    )
}





