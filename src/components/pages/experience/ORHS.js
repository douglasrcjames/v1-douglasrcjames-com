import React, { Component } from 'react'
import Experience from '../../Experience';
import { orhs } from "../../../assets/images/photos";
import { Link } from "react-router-dom"

export default class ORHS extends Component {
    render() {
        return (
            <>
                <Experience
                    title={"Oak Ridge High School"}
                    siteUrl={"orhs.eduhsd.k12.ca.us"}
                    logoUrl={require("../../../assets/images/orhs/logo.png")}
                    myRole={"Student"}
                    status={"Completed"}
                    period={"August, 2009 - May, 2013"}
                    skillsBlock={<SkillsBlock />}
                    descriptionBlock={<DescriptionBlock />}
                    photoGallery={orhs}
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
            I earned my high school diploma at Oak Ridge High School, a great public school east of Sacramento in the golden hills of El Dorado Hills, CA. 
            My business <Link to="/experience/ihealphones">iHealPhones</Link> earned me a reputation as the techie guy on campus, which lead me on a path of many opportunities in the tech field. 
            &nbsp;<a href="https://www.deca.org" target="_blank" rel="noopener noreferrer">DECA</a>, a young business leader club at school which is normally 
            reserved for 3rd and 4th year students, invited me to join the club as a 2nd year because of iHealPhones. I also became 1 of the 3 web developer students that 
            managed the school website. Through this early opportunity, I was given a free subscription to Adobe Creative Suite (Photoshop, Dreamweaver, etc) 
            and to <a href="https://www.lynda.com" target="_blank" rel="noopener noreferrer">Lyndia.com</a> where I learned the basics of web development and design with hours of online tutorials. 
            Despite my "techie" persona, I managed to still be a sporty dude, playing soccer and lacrosse, but ultimately, I knew my calling was technology, 
            so I applied to colleges to pursue a computer engineering degree at <Link to="/experience/san-jose-state-university">San Jose State University</Link>.

                   {/* 
                        <li>One of 3 school web site designers</li>
                        */}
        </p>  
        
       
    </>
    )
}

const SkillsBlock = () => {
    return (
        <>
            <ul>
                <li>Fundamental Subjects (Math, Sciences, etc)</li>
                <li>Business development @ DECA</li>
                <li>Web development as school website developer</li>
                <ul>
                    <li>HTML/CSS</li>
                    <li>PHP</li>
                    <li>Flash</li>
                    <li>Dreamweaver</li>
                    <li>Photoshop</li>
                </ul>
                <li>Soccer</li>
                <li>Lacrosse</li>
                <li>Dealing with acne</li>
            </ul>
        </>
    )
}




