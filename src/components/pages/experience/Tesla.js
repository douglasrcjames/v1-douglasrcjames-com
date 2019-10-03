import React, { Component } from 'react'
import Experience from '../../Experience';
import { tesla } from "../../../assets/images/photos";

export default class Tesla extends Component {
    render() {
        return (
            <>
                <Experience
                    title={"Tesla, Inc."}
                    siteUrl={"www.tesla.com"}
                    logoUrl={require("../../../assets/images/tesla/logo.png")}
                    logoStyle={"long"}
                    myRole={"Product Specialist"}
                    status={"Completed"}
                    period={"August, 2016 -> December, 2016"}
                    skillsBlock={<SkillsBlock />}
                    descriptionBlock={<DescriptionBlock />}
                    photoGallery={tesla}
                    gallerySize={"medium"}
                    />
            </>
        )
    }
}

const DescriptionBlock = () => {
    return (
    <>
        <p className="indent">
            While attending San Jose State, I had some spare time and a heavy interest in Tesla as a company and the products they were building. I got an interview from a 
            college friend of mine, <a href="https://www.linkedin.com/in/vybhav-a-kandadai-%E2%98%81-8525244a/" rel="noopener noreferrer" target="_blank">Vybhav Kandadai</a>, another car salesman 
            at the Santana Row show room in San Jose. I nailed the interview after expressing my knowledge for Elon's vision for Tesla and his other companies. I made quick friends
            with my co-workers, and have lasting relationships with many of them from my experience there. The Santana Row location was the flagship store for Tesla, so we got many affluent visitors, 
            such as business men and women, sports players, actors/actresses, and Elon himself occasionally. In this high stakes environment, I perfected how to present myself as a professional. 
            Ultimately, I left the job because I quickly found that moving from selling cars to an engineering position was difficult due to the size of the company. I felt I had also
            reached the limit on the challenges I was being presented, and wanted to move to a more challenging engineering job that took advantage of what I was studying in school.
            I am grateful for the opportunity I had at Tesla and the valuable lessons I learned along the way.
        </p>   
        
    </>
    )
}

const SkillsBlock = () => {
    return (
        <>
            <ul>
                <li>Sales</li>
                <li>Customer Service</li>
                <li>Electric Vehicles</li>
                <li>Retail</li>
            </ul>
        </>
    )
}





