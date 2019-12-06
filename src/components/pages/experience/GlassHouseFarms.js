import React, { Component } from 'react'
import Experience from '../../Experience';

export default class GlassHouseFarms extends Component {
    render() {
        return (
            <>
                <Experience
                    title={"Glass House Farms"}
                    siteUrl={"www.glasshousefarms.co"}
                    logoStyle={"long"}
                    logoUrl={require("../../../assets/images/glasshousefarms/logo.png")}
                    myRole={"Web Developer"}
                    status={"Completed"}
                    period={"March, 2018 - April, 2018"}
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
            Glass House Farms LLC is a hydroponic growing faculty based out of Ithaca, New York. They grow veggies like lettuce, basil, pac choi, and arugula in local grocery stores.
            The business wanted a central website where they could educate potential buyers and consumers on their tasty, healthy, and trusted products, as well as a contact channel. 
           
            I worked with a graphic designer <a href="https://www.linkedin.com/in/ryan-wall-287837132/" target="_blank" rel="noopener noreferrer">Ryan Wall</a>&nbsp;
            to create a logo, branding (colors, fonts, etc), and website wireframe that fit the client's needs. Ryan was able to create the wireframe mock and I was able to code 
            the site in under a week! Both Ryan and I, as well as the client are stoked with the outcome of the website. I was particularly excited because this was my first experience with
            translating a wireframe to a working website. There was only one style I wasn't able to figure out, which was the green or white stripe that went from the headers
            to the edge of the screen. Perhaps with more time on the project, I would have found a solution to this, but it was not vital to the design so I scrapped it in the final design.
            I continue to provide occasional updates to the site when necessary to the client.  Since April of 2018, the site has garnered 3000 unique website visitors.
        </p>   
        <p>

        </p>
        <h2><u>Wireframe Design:</u></h2>
        <img
            className="responsive xlarge center"
            alt="minute.tech logo"
            src={require("../../../assets/images/glasshousefarms/wireframe.png")}
            />
        <h2><u>Finished Product:</u> @ <a href="https://www.glasshousefarms.co" target="_blank" rel="noopener noreferrer">www.glasshousefarms.co</a></h2>
        
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



