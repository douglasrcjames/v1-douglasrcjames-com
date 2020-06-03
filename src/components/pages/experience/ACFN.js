import React, { Component } from 'react'
import Experience from '../../Experience';
import { acfn } from "../../../assets/images/photos";
import { Link } from 'react-router-dom'

export default class ACFN extends Component {
    render() {
        return (
            <>
                <Experience
                    title={"ACFN, the ATM Franchise"}
                    siteUrl={"www.atmfranchise.com"}
                    logoUrl={require("../../../assets/images/acfn/logo.jpg")}
                    myRole={"ATM Technician"}
                    status={"Completed"}
                    period={"February, 2015 - June, 2015"}
                    skillsBlock={<SkillsBlock />}
                    descriptionBlock={<DescriptionBlock />}
                    photoGallery={acfn}
                    gallerySize={"medium"}
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
           ACFN is an ATM company with 2500+ machines worldwide that operates on a franchise business model.
           ACFN provides market research on the best placement of the ATM and follow up support for the ATM front and back end.
           The franchisee buys an ACFN supported ATM, usually <a href="https://www.tritonatm.com/" target="_blank" rel="noopener noreferrer">Triton</a> branded,  
           then "buys" the cash that goes into the ATM, and ACFN as a business takes a percentage off every transaction. I sat in an office in downtown
           San Jose answering phone calls from franchisees dialing in from around the world when trying to setup, service, or troubleshoot the machines (or customers calling with issues, which rarely happened.)
           In this position, I learned how to remotely troubleshoot with clients with semi-high level hardware and software. The troubleshooting patterns I learned
           at this job directly applied to the inception of <Link to="/experience/minute.tech">Minute.tech</Link>. 
        </p>   
    </>
    )
}

const SkillsBlock = () => {
    return (
        <>
            <ul>
                <li>Remote Tech Support</li>
                <li>ATM Technology</li>
                <li>Customer Service</li>
            </ul>
        </>
    )
}




