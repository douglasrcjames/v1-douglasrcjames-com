import React, { Component } from 'react'
import Experience from '../../Experience';
import { sjsu } from "../../../assets/images/photos";

export default class SJSU extends Component {
    render() {
        return (
            <>
                <Experience
                    title={"San Jose State University"}
                    siteUrl={"www.sjsu.edu"}
                    logoUrl={require("../../../assets/images/sjsu/logo.png")}
                    logoStyle={"long"}
                    myRole={"Engineering Student"}
                    status={"Nearly Complete"}
                    period={"August, 2013 -> Current"}
                    skillsBlock={<SkillsBlock />}
                    descriptionBlock={<DescriptionBlock />}
                    photoGallery={sjsu}
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
            Earning Computer Engineering major with Business and Math minors in the heart of Silicon Valley.
        </p>  
        
       
    </>
    )
}

const SkillsBlock = () => {
    return (
        <>
            <ul>
                <li>To be added: all my classes!</li>
               
            </ul>
        </>
    )
}




