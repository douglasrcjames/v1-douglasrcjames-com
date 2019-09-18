import React, { Component } from 'react'
import Experience from '../../Experience';
import { paloAltoNetworks } from "../../../assets/images/photos";

export default class PaloAltoNetworks extends Component {
    render() {
        return (
            <>
                <Experience
                    title={"Palo Alto Networks, Inc."}
                    siteUrl={"www.paloaltonetworks.com"}
                    logoUrl={require("../../../assets/images/palo-alto-networks/logo.png")}
                    myRole={"IT Specialist"}
                    status={"Completed"}
                    period={"May, 2015 -> August, 2015"}
                    skillsBlock={<SkillsBlock />}
                    descriptionBlock={<DescriptionBlock />}
                    photoGallery={paloAltoNetworks}
                    // gallerySize={"medium"}
                    />
            </>
        )
    }
}

const DescriptionBlock = () => {
    return (
    <>
        <p className="indent">
            While attending San Jose State, I got into a deep conversation at a party with <a href="https://www.linkedin.com/in/matthew-elliott11/" target="_blank" rel="noopener noreferrer">Matt Elliott,</a>&nbsp;
            an MIS student and employee at Palo Alto Networks at the time. After discussion on my interest in all things technology, he advised that I send him my 
            resume to forward to his hiring manager. After a few phone interviews, and one in-person interview, I got the job! The job fit me perfectly, 
            I was stationed in the room where all the tech hardware like monitors, cables, and computers were kept and organized.
            I was tasked at distributing this hardware to new hire employees or employees with broken/outdated hardware. I would grab the appropriate hardware for them, deliver it to their
            desk, and set all the hardware and software up. Palo Alto Networks was growing rapidly at the time and thus new hires were coming in daily, so a good chunk of my time was occupied
            by setting up desks. While not setting up desks, I was busy re-imaging old laptops to be recirculated into the company. This doesn't sound that glamorous, but to me I loved it; 
            I always enjoyed tearing my computer setup apart at home and putting it back together in a more organized or optimal way. My main project was for hardware reconciliation, 
            where I had to account for all hardware under the hood of the headquarters in Sunnyvale, which was more than a million dollars in assets. I needed to sift through hundreds 
            of separate spreadsheets and cross reference them into one consolidated list to reference. I was able to finish the project, but it was more difficult than my manager or 
            I had anticipated because many assets were either unaccounted for or unaccessible.  Through this, I learned the bureaucracy of a large, publicly traded, network security corporation.         
        </p>   
        
    </>
    )
}

const SkillsBlock = () => {
    return (
        <>
            <ul>
                <li>High level IT support methodology</li>
                <li>"Customer" (co-worker) Service</li>
                <li>Large Technology Corporation attributes (vs small business)</li>

            </ul>
        </>
    )
}





