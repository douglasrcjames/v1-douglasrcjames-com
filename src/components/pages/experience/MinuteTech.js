import React, { Component } from 'react'
import Experience from '../../Experience';
import { minuteTech } from "../../../assets/images/photos";

export default class MinuteTech extends Component {
    
    render() {
        return (
            <>
                <Experience
                    title={"Minute.tech LLC"}
                    siteUrl={"www.minute.tech"}
                    logoUrl={require("../../../assets/images/minutetech/minute-tech-logo-long-full-color.png")}
                    logoStyle={"square"}
                    myRole={"Founder & CEO"}
                    status={"In Progress"}
                    period={"May, 2016 -> Current"}
                    skillsBlock={<SkillsBlock />}
                    descriptionBlock={<DescriptionBlock />}
                    photoGallery={minuteTech}
                    />
                    {/* Add images for trademark, screenshots of app, walk thrus of apps, youtube pitches, etc? */}
            </>
        )
    }
}

const SkillsBlock = () => {
    return (
        <ul>
            <li>Business Development</li>
            <li>Leadership</li>
            <li>Teamwork</li>
            <li>HTML &amp; CSS</li>
            <li>Python</li>
            <li>Flask Framework</li>
            <li>MySQL</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>React.js Framework</li>
            <li>Stripe API</li>
            <li>Firebase API</li>
                <ul>
                    <li>Hosting with free SSL certificate</li>
                    <li>Database with Firestore</li>
                    <li>File Storage</li>
                    <li>Firebase Functions</li>
                </ul>
            <li>Swift</li>
            <li>DigitalOcean</li>
            <li>Github</li>
            <li>Google My Business</li>
        </ul>
    )
}

const DescriptionBlock = () => {
    return (
    <>
        <p className="indent">
            When other kids dreamed of being firefighters and football players, I dreamed of entrepreneurship. My father 
            started a smoothie business that competed with Starbucks in the early 90s, and I was inspired heavily by that as a kid. 
            The first taste of entrepreneurship that I got was with having garage sales as a kid, followed by my phone repair business 
            in high school. This phone repair business placed me in a position within my sphere of influence as a "techie". I was someone who 
            friends and family asked tech questions to regularly, which ultimately led me to pursue a computer engineering degree. 
            While studying engineering, I noticed that troubleshooting high level issues took a similar approach as low level issues, 
            such as troubleshooting engineering issues (i.e. circuit board logic) vs my parent's tech problems. This seed grew when I took my 
            first business class where we teamed up in the class around a business idea. I suggested my <strike>business</strike> problem/solution 
            to the group, proposing a communication and payment system that connected clients with technicians via the internet. My group loved the 
            idea and we were off to the races; Minute.tech was born. 
        </p>   
        <p>
            Since then, I have...
            <br/>
            <i className="s-text">(business is still live and many files are still confidential. Feel free to request permission on GDrive when attempting to view.)</i>
        </p>
        

        <ul>
            <li>Completed Business Plan version 1</li>
            <ul>
                <li>18 pages written primarily by me</li>
                <li>Placed 3rd in the Silicon Valley Business Plan Competition (SVBPC) awarding $1500 and legal support.</li>
                <li>May 2016</li>
                <li>
                    <a 
                        href="https://drive.google.com/drive/folders/1AGWuOUp-LBG83ImXwd0cJ9w5cxrppCSx?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Link to business plan v1 and SVBPC presentation&nbsp;
                    </a>  
                </li>
            </ul>

            <li>Incorporated business</li>
            <ul>
                <li>Legally made Minute.tech a Limited Liability Company</li>
                <li>June 2016</li>
            </ul>
           
            <li>Created Python (with Flask framework) and MySQL prototype for CMPE 138 class project at SJSU.</li>
            <ul>
                <li>Basic frontend interface that displayed data from the backend that inputted manually. No user input.</li>
                <li>Used Anaconda IDE to run code.</li>
                <li>Spring 2017 semester</li>
                <li>
                    <a 
                        href="https://drive.google.com/drive/folders/1DVPwVXTggoUm5jdBW8u7ZeKNz0oZAH1s?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Link to final project report and source code&nbsp;
                    </a>  
                </li>
            </ul>

            <li>Expanded on that Flask prototype for CMPE 130 class project at SJSU.</li>
            <ul>
                <li>
                    This was an algorithm class so we created a ticket prioritization algorithm that sorted 
                    the questions in the database and displayed them to the technician. 
                </li>
                <li>Also implemented feature to actually allow user input into the system without hard coded database data.</li>
                <li>Fall 2017 semester</li>
                <li>
                    <a 
                        href="https://drive.google.com/drive/folders/1puB9eIpzfRwmvrL0w0ru39wPq30nCo76?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Link to final project report&nbsp;
                    </a>  
                </li>
            </ul>

            <li>Hired a software developer on Fiverr based in Morocco to help me bring the Flask prototype to MVP.</li>
            <ul>
                <li>
                    Implemented instant messaging with Flask socket.io and sqlalchemy, however, at this point 
                    I decided that I was using the wrong technology after catching wind of React.js and the 
                    ease of making an Android/iOS app with the same code base.
                </li>
                <li>March 2018</li>
                <li>
                    <a 
                        href="https://drive.google.com/drive/folders/1z5Rl1spmX_lNJbvg7pVpbki-ljRKaHaJ?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Link to final project report and source code&nbsp;
                    </a>  
                </li>
            </ul>
            <li>Built Swift prototype for CMPE 137 class project at SJSU.</li>
            <ul>
                <li>Allowed two users to meet up on a map, i.e. client and technician.</li>
                <li>Spring 2018 Semester</li>
                <li>
                    <a 
                        href="https://drive.google.com/drive/folders/1Tg35r5kAFLrR_WhmjkVbv3JExw_Z7UAC?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Link to final project report and source code&nbsp;
                    </a>  
                </li>
            </ul>
            <li>Completed Business Plan version 2</li>
            <ul>
                <li>18 pages was expanded to 60 pages to consolidate my plethora of ideas and notes for potential investors.</li>
                <li>
                    Primary motivation for updating business plan was because an older, IT business owner/family 
                    friend was interested in being a partner/investor on the project. Unfortunately, he wanted 50% of the business
                    and I was advised by many to not do that deal.
                </li>
                <li>
                    Secured trademark on "Minute.tech".
                </li>
                <li>
                    Worked with two graphic designer friends, <a href="https://www.linkedin.com/in/ryan-wall-287837132/" target="_blank" rel="noopener noreferrer">Ryan Wall</a> 
                    and <a href="https://www.linkedin.com/in/mitchell-licata/" target="_blank" rel="noopener noreferrer">Mitch Licata</a> on the web app wireframe.
                </li>
                <li>
                    I interviewed 5 large software development firms for quotes and timelines to create a React.js/React Native MVP.
                </li>
                <li>
                    I interviewed 20 potential software engineers to assist with React.js web app, but ended up going with friend 
                    of a friend named <a href="https://www.linkedin.com/in/ryan-morris-26898ba1/" target="_blank" rel="noopener noreferrer">Ryan Morris</a>, 
                    who was interested in joining with future equity promise.
                </li>
                <li>December - January 2019</li>
                <li>
                    <a 
                        href="https://drive.google.com/drive/folders/1nZkuExgpoaFqyzbcFf7dtWH8JQN4mWbF?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Link to business plan v2, wire frame, and flow diagrams&nbsp;
                    </a>  
                </li>
            </ul>
            <li>Worked with Ryan Morris to create the React.js prototype.</li>
            <ul>
                <li>Successfully implemented:</li>
                <ul>
                    <li>User authentication</li>
                    <li>Client can ask question to system</li>
                    <li>Technician can claim question on system</li>
                    <li>Users can communicate in a chat room sending texts and files</li>
                    <li>Users can transition to voice/video/remote connection call using Twilio API</li>
                    <li>Client can pay technician directly for their services using the Stripe API</li>
                    <li>Technician/client ranking system and algorithm that gamified the interactions on the site</li>
                    <li>Clients can post reviews on the technicians they interacted with</li>
                </ul>
                <li>January - August 2019</li>
                <li>
                    <a 
                        href="https://drive.google.com/drive/folders/1n5u8WO1Koq207m1-eC9NZk3iisxih0wu?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Link to source code&nbsp;
                    </a>  
                </li>
            </ul>
            <li>For senior project at SJSU I am leading a team of 3 other engineers in building the Swift prototype</li>
            <ul>
                <li>June - December 2019</li>
            </ul>
            <li>Serviced 100s of customers throughout lifetime of the business</li>
            <ul>
                <li>Helping people around me with their technology problems has always brought me great joy, but I started reaching out to new clients 
                    to heighten my customer understanding to build a better business.
                </li>
            </ul>
        </ul>
    </>
    )
}
