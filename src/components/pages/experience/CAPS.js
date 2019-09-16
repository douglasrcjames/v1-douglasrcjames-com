import React, { Component } from 'react'
import Experience from '../../Experience';
import { caps } from "../../../assets/images/photos";
import { Link } from 'react-router-dom'

export default class CAPS extends Component {
    render() {
        return (
            <>
                <Experience
                    title={"CAPS: Council for Advocacy and Policy Solutions"}
                    siteUrl={"www.capsmd.org"}
                    logoUrl={require("../../../assets/images/caps/caps-logo-v4.jpg")}
                    myRole={"Web Developer"}
                    status={"Maintaining"}
                    period={"June, 2019 -> Current"}
                    skillsBlock={<SkillsBlock />}
                    descriptionBlock={<DescriptionBlock />}
                    photoGallery={caps}
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
            CAPS (Council for Advocacy and Policy Solutions) is a non-profit political publication group with the goal to educate constituents in 
            Montgomery County, Maryland about legislation that effects them. The group came to me in May, 2019 during my finals week for school because their previous web developer had dropped
            the ball building a site with Webflow.com. They were launching this CAPS program in a few weeks and were in a mad rush to get the site up and operational. 
            I agreed, excited to use my new React and Firebase skills and was able to crank out a website for them in a week. (and still pass 4 of my engineering classes!)
            There was one hiccup the night before they were launching, I was making a few final (vital) touches to the site, and suddenly my computer crashed. I spent hours 
            troubleshooting to get back hours of un-pushed changes, but unfortunately, my hard drive was bust. 
            The next day I learned some valuable lessons: 
        </p>   
        
        <ol>
            <li>
                Recovering data on hard drives is <i>tough</i>. There are no local hard drive repair companies in the
                Silicon Valley? How is that possible!? Notes taken for my <Link to="experience/minute.tech">minute.tech</Link> project.
            </li>
            <li>
                I had fortunately deployed to Firebase before my computer crashed and thought there might be a way to reverse deploy or access that deployed version.
                A few hours later, and asking a few techie friends I found out that you can access and download the build files via your web browser! I previously
                thought the build process jumbled things up so client side couldn't see the build files, but I was wrong! This is a valuable lesson when deploying sensitive software
                to the web, as well for my particular situation to recover data.
            </li>
        </ol>

        <p>
            I am very proud of the website I developed and the client was very pleased with the finished product as well. I am now developing a custom CMS 
            solution for them to be able to post their own articles within my intervention. In hindsight, perhaps this project was better suited for a 
            WordPress/SquareSpace/other CMS use case, but both the client and I agree the front end looks better than some 3rd party CMS solutions.
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




