import React, { Component } from 'react'
import Experience from '../../Experience';

export default class BodyByYama extends Component {
    render() {
        return (
            <>
                <Experience
                    title={"Body by Yama"}
                    siteUrl={"www.bodybyyama.com"}
                    logoUrl={require("../../../assets/images/bodybyyama/logo-v1.png")}
                    logoStyle={"long"}
                    myRole={"Web Developer"}
                    status={"Completed"}
                    period={"June, 2018 - August, 2018"}
                    skillsBlock={<SkillsBlock />}
                    descriptionBlock={<DescriptionBlock />}
                    />
            </>
        )
    }
}

const DescriptionBlock = () => {
    return (
    <>
        <p className="indent">
            Yamato Nishino is a friend and personal fitness trainer in the San Fransisco Bay Area. In June of 2018, she wanted a website to 
            centralize her personal training business, where potential clients could read and watch more about what she had to offer. 
            I worked with two other graphic designers, <a href="https://www.linkedin.com/in/ryan-wall-287837132/" target="_blank" rel="noopener noreferrer">Ryan Wall</a>&nbsp;
            and <a href="https://www.linkedin.com/in/mitchell-licata/" target="_blank" rel="noopener noreferrer">Mitch Licata</a> to create logo, branding (colors, fonts, etc), and 
            website wireframe. I developed her one-page site with PHP for the contact form and UIkit 3 for the front end work. This site turned out simply beautiful, I was so proud 
            of what we were able to design as a 3 man team. My favorite part of the site are the animations, such as the background image that moves a bit as the viewer scrolls down the page. 
        </p>   
        <p>

        </p>
        <h2><u>Wireframe Design:</u></h2>
        <img
            className="responsive xlarge center"
            alt="minute.tech logo"
            src={require("../../../assets/images/bodybyyama/wireframe-v2.png")}
            />
        <h2><u>Finished Product:</u></h2>
        <img 
            className="responsive center"
            alt="minute.tech logo"
            src={require("../../../assets/images/bodybyyama/finished-product.gif")}
            />
        <br/>
    </>
    )
}

const SkillsBlock = () => {
    return (
        <>
            <ul>
                <li>Wireframing</li>
                <li>HTML &amp; CSS</li>
                <li>PHP</li>
                <li>UIKit 3 Framework</li>
                <li>MySQL</li>
            </ul>
        </>
    )
}



