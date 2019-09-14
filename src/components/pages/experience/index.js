import React, { Component } from 'react'
import { Timeline, Event } from "../../Utilities";
import {Link} from 'react-router-dom'
import resume from '../../../assets/pdf/Doug-Resume-9.12.2019.pdf'

export default class Experience extends Component {
    render() {
        return (
            <div>
                <h1>Experience</h1>
                <p>
                    I have broken down my relavent work into chronological order, with a detailed view for each job. 
                    <br/>
                    If you'd like to get straight to the point, I included a direct download link to my updated (9.12.2019) resume.
                </p>
                <a href={resume} download><button className="s-btn" >Download Resume</button></a>
                <h2>Active:</h2>
                <ul>
                    <li><Link to="/experience/minute.tech">minute.tech</Link></li>
                    <ul>
                        <li>Polishing off web app</li>
                    </ul>
                    <li>Last 2 classes at at university</li>
                    <ul>
                        <li>CMPE 146 - Real-Time Embedded System Co-Design</li>
                        <li>Senior Project - Minute.tech iOS app</li>
                    </ul>
                    <li><Link to="/experience/caps.md">caps.md</Link></li>
                    <ul>
                        <li>Site built and live</li>
                        <li>Adding a few article pages monthly.</li>
                        <li>Currently creating custom CMS system for their team to add articles without me.</li>
                    </ul>
                    <li><Link to="/experience/theretreatonnichols.com">theretreatonnichols.com</Link></li>
                    <ul>
                        <li>Site built and live</li>
                        <li>Polishing off client request</li>
                    </ul>
                    
                </ul>
                <h2>Timeline:</h2>
                <Timeline>
                    <Event interval={"August, 2019 – Today"} title={"theretreatonnichols.com"} link={"/experience/theretreatonnichols.com"}>
                        Built and maintaining website for short term rental property.
                    </Event>
                    <Event interval={"May, 2019 – Today"} title={"capsmd.org"} link={"/experience/capsmd.org"}>
                        Built and maintaining political publication website for the non-profit Council for Advocacy and Policy Solutions in Montgomery, Maryland.
                        {/* <li>2 week deadline, computer crashed, during finals week, launched to X amount of people</li>
                         */}            
                    </Event>
                    <Event interval={"June, 2018 – August, 2018"} title={"bodybyyama.com"} link={"/experience/bodybyyama.com"}>
                        Built website for personal fitness trainer Yamato Nishino.
                        {/* <li>Project manager working with 2 graphic designers Ryan Wall and Mitch Licata to create a wireframe</li>
                        <li>I coded the site using HTML, CSS, PHP, and UIKit 3</li>
                         */}
                    </Event>
                    <Event interval={"March, 2018 – April, 2018"} title={"glasshousefarms.co"} link={"/experience/glasshousefarms.co"}>
                        {/* Not sure if this date is right */}
                        Built website for a hydroponic growing facility in Ithaca, New York.
                        {/* <li>Worked with graphic designer Ryan Wall to develop the branding (font, color, logo, etc)</li>
                        <li>Took the wireframe developed, and built a functional, responsive site with HTML, CSS, PHP, and UIKit3</li> */}
                    </Event>
                    <Event interval={"October, 2017 – January, 2018"} title={"Coldbrew Creative"} link={"/experience/coldbrew-creative"}>
                        Website developer on a local, small digital marketing team.
                    </Event>
                    <Event interval={"August, 2016 – December, 2016"} title={"Tesla"} link={"/experience/tesla"}>
                        Car salesman at a Tesla Electric vehicle showroom.
                    </Event>
                    <Event interval={"May, 2015 – August, 2015"} title={"Palo Alto Networks"} link={"/experience/palo-alto-networks"}>
                        IT Specialist at a large network security firm in Sunnyvale, CA.
                    </Event>
                    <Event interval={"February, 2015 – June, 2015"} title={"ACFN Franchised"} link={"/experience/acfn-franchised"}>
                        Remote ATM phone technician at a ATM franchising company in Downtown, San Jose, CA.
                    </Event>
                    <Event interval={"May, 2016 – Today"} title={"Minute.tech"} link={"/experience/minute.tech"}>
                        Founder at software startup connecting non-techie users with techie users.
                    </Event>
                    <Event interval={"August, 2013 – Current"} title={"San Jose State University"} link={"/experience/san-jose-state-university"}>
                        Earned Computer Engineering major with Business and Math minors in the heart of Silicon Valley.
                        {/* <li>Pi Kappa Alpha Fraternity</li>
                        <li>Show classes taken in a nice org chart. Maybe scrape the data from the SJSU links.</li>
                        */}
                    </Event>
                    <Event interval={"December, 2010 – February, 2014"} title={"iHealPhones"} link={"/experience/ihealphones.com"}>
                        Founder at local device repair business
                    </Event>
                    <Event interval={"2009 – 2013"} title={"Oak Ridge High School"} link={"/experience/oak-ridge-high-school"}>
                        Earned high school diploma at a public school east of Sacramento in El Dorado Hills, CA.
                        {/* <li>JV through Varsity soccer</li>
                        <li>JV through Varsity lacrosse</li>
                        <li>Youngest DECA club member at school</li>
                        <li>ART Media club web designer</li>
                        <li>One of 3 school web site designers</li>
                        */}
                    </Event>
                    <Event interval={"December 21st, 1994"} title={"Douglas Robert Cunningham James birthday"}>
                        Born a big baby, weighing in at 10 lbs!
                    </Event>
                    {/* Need to style the ending to by no line! */}
                </Timeline>
                

                <h1>Overall Skill</h1>
                {/* link to all these, put images, and give my rating for each */}
                <ul>
                    <li>Windows: 9</li>
                    <li>Apple Ecosystem: 9</li>
                    <li>HTML: 9</li>
                    <li>CSS: 8</li>
                    <li>PHP: 7</li>
                    <li>Python: 8</li>
                    <li>JS: 7</li>
                    <li>Swift: 4</li>
                    <li>Express: 6</li>
                    <li>Flask: 9</li>
                    <li>React.js: 9</li>
                    <li>Node.js: 8</li>
                    <li>Firebase: 9</li>
                    <ul>
                    <li>Authentication</li>
                    <li>Realtime DB &amp; Firestore</li>
                    <li>Functions</li>
                    <li>Hosting</li>
                    </ul>
                    <li>Stripe API: 9</li>
                    <li>Twilio API: 7</li>
                    <li>Google Analytics &amp; AdWords: 7</li>
                    <li>Photoshop: 7</li>
                    <li>Illustrator: 5</li>
                </ul>
            </div>
        )
    }
}
