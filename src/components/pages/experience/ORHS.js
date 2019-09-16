import React, { Component } from 'react'
import Experience from '../../Experience';
import { orhs } from "../../../assets/images/photos";

export default class ORHS extends Component {
    render() {
        return (
            <>
                <Experience
                    title={"Oak Ridge High School"}
                    siteUrl={"www.sjsu.edu"}
                    logoUrl={require("../../../assets/images/orhs/logo.png")}
                    myRole={"Student"}
                    status={"Completed"}
                    period={"August, 2009 -> May, 2013"}
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
            Earned high school diploma at a public school east of Sacramento in El Dorado Hills, CA.
        </p>  
        
       
    </>
    )
}

const SkillsBlock = () => {
    return (
        <>
            <ul>
                <li>Fundamentals</li>
                
            </ul>
        </>
    )
}




