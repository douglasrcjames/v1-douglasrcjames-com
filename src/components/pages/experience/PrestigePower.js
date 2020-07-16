import React, { Component } from 'react'
import Experience from '../../Experience';
// import { caps } from "../../../assets/images/photos";

export default class PrestigePower extends Component {
    render() {
        return (
            <>
                <Experience
                    title={"Prestige Power"}
                    siteUrl={"www.goprestigepower.com"}
                    logoUrl={""}
                    myRole={"Web Designer & Developer"}
                    status={"Building"}
                    period={"July, 2020 - Today"}
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
            Prestige Power is a solar company that wanted to increase exposure of their website through SEO, update a few front end touch ups to their last design, and 
            wanted a seamless client processing system with a CRM backend for their sales. Currently building a custom CRM and front end experience with React.js 
            and Firebase as the backend for Prestige Power. More information to come as the project progresses!
            {/* Providing IT consulting and some business consulting.  */}
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
                        <li>File storage</li>
                        <li>Firebase Functions</li>
                    </ul>
                <li>Github</li>
            </ul>
        </>
    )
}




