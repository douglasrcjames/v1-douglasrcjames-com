import React, { Component } from 'react'
import Experience from '../../Experience';
import { ihealphones } from "../../../assets/images/photos";
import { Link } from 'react-router-dom'

export default class IHealPhones extends Component {
    render() {
        return (
            <>
                <Experience
                    title={"iHealPhones"}
                    siteUrl={"www.ihealphones.com"}
                    logoUrl={require("../../../assets/images/ihealphones/logo-v2.png")}
                    logoStyle={"long"}
                    myRole={"Founder"}
                    status={"Completed"}
                    period={"December, 2010 - February, 2014"}
                    skillsBlock={<SkillsBlock />}
                    descriptionBlock={<DescriptionBlock />}
                    photoGallery={ihealphones}
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
           iHealPhones was my first business focused on repairing smartphone, laptop, and device hardware in the local area of El Dorado Hills, CA. 
           80% of work done was fixing iPhone screens at a time when iPhones were hitting the market. This venture got my feet wet with hardware/software troubleshooting, 
           business marketing, customer relations, and accounting. The troubleshooting patterns I learned at this job directly applied to the inception 
           of <Link to="/experience/minute.tech">Minute.tech</Link>. 
        </p>  
        <div className="center-text">
            <iframe
                title="iHealPhones video"
                width="560" height="315"
                src="https://www.youtube.com/embed/LMTHC7okOKI"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen" 
                msallowfullscreen="msallowfullscreen" 
                oallowfullscreen="oallowfullscreen" 
                webkitallowfullscreen="webkitallowfullscreen"
            />
        </div> 
       
    </>
    )
}

const SkillsBlock = () => {
    return (
        <>
            <ul>
                <li>Phone technology</li>
                <li>Accounting</li>
                <li>Tech Support</li>
                <li>Customer Service</li>
                <li>Marketing</li>
                <li>HTML &amp; CSS</li>
                <li>Flash</li>
                <li>Dreamweaver</li>
                <li>Photoshop</li>
            </ul>
        </>
    )
}




