import React, { Component } from 'react'
import Experience from '../../Experience';
import { coldbrewCreative } from "../../../assets/images/photos";

export default class ColdbrewCreative extends Component {
    render() {
        return (
            <>
                <Experience
                    title={"Coldbrew Creative LLC"}
                    siteUrl={"www.coldbrewcreative.com"}
                    logoUrl={require("../../../assets/images/coldbrew-creative/logo.png")}
                    myRole={"Web Developer"}
                    status={"Completed"}
                    period={"October, 2017 - January, 2018"}
                    skillsBlock={<SkillsBlock />}
                    descriptionBlock={<DescriptionBlock />}
                    photoGallery={coldbrewCreative}
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
           Coldbrew Creative is a small digital marketing firm based in San Jose, California. The CEO, 
           <a href="https://www.linkedin.com/in/mikeejlee/" target="_blank" rel="noopener noreferrer">&nbsp;Mike Lee</a>,&nbsp; was a classmate of mine at San Jose State,
           and I caught wind that he was looking for a web designer to help with client demand. I joined his Slack team, Trello workspace, and Github repositories
           so I could jump in to help with various web maintenance tasks. There was an even mix between fixing and updating WordPress, SquareSpace, and HTML/CSS/JS/PHP bugs and content. 
           As my position ramped up I started to attend Zoom and in-person meetings, as well as visiting clients in person to get a better idea on the brand
           they wanted to build on the site. Overall, this was a great job and with a motivated team around me that I gained a plethora of knowledge from. Mike motivated me
           as a leader, <a href="https://github.com/andyhqtran" target="_blank" rel="noopener noreferrer">Andy Tran</a> motivated me as a software engineer, and&nbsp;
           <a href="https://www.linkedin.com/in/ryan-wall-287837132/" target="_blank" rel="noopener noreferrer">Ryan Wall</a> motivated me as a designer. Ultimately, I left
           the team because I was working with technology too far up the stack (WordPress) and wanted to work with less abstracted technologies, like Node and Python. 
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
                <li>PHP</li>
                <li>SquareSpace</li>
                <li>WordPress</li>
                <li>Slack</li>
                <li>Github</li>
            </ul>
        </>
    )
}





