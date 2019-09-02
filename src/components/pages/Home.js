import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Timeline, Event } from "../Utilities";

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>
                    Welcome to my portfolio site. I am a young, professional engineer currently living in Berkeley, CA. 
                    Let me try and break down my past experience so you can decide if I am a good fit for the job. 
                    Think of this like a detailed, digital resume, since I cannot fully detail my complex experience at each job on a 2 page resume.
                </p>
                
                <h1>Experience</h1>
                <Timeline>
                    <Event interval={"August, 2019 – Today"} title={"theretreatonnichols.com"}>
                        Built and maintaining website for short term rental property.
                        <br/>
                        <Link to="/experience/theretreatonnichols.com">More details...</Link>
                    </Event>
                    <Event interval={"May, 2019 – Today"} title={"capsmd.org"}>
                        Built and maintaining political publication website for the non-profit Council for Advocacy and Policy Solutions in Montgomery, Maryland.
                        {/* <li>2 week deadline, computer crashed, during finals week, launched to X amount of people</li>
                         */}
                        <br/>
                        <Link to="/experience/capsmd.org">More details...</Link>
                    </Event>
                    <Event interval={"June, 2018 – August, 2018"} title={"bodybyyama.com"}>
                        Built website for personal fitness trainer Yamato Nishino.
                        {/* <li>Project manager working with 2 graphic designers Ryan Wall and Mitch Licata to create a wireframe</li>
                        <li>I coded the site using HTML, CSS, PHP, and UIKit 3</li>
                         */}
                        <br/>
                        <Link to="/experience/bodybyyama.com">More details...</Link>
                    </Event>
                    <Event interval={"March, 2018 – April, 2018"} title={"glasshousefarms.co"}>
                        {/* Not sure if this date is right */}
                        Built website for a hydroponic growing facility in Ithaca, New York.
                        {/* <li>Worked with graphic designer Ryan Wall to develop the branding (font, color, logo, etc)</li>
                        <li>Took the wireframe developed, and built a functional, responsive site with HTML, CSS, PHP, and UIKit3</li> */}
                        <br/>
                        <Link to="/experience/glasshousefarms.co">More details...</Link>
                    </Event>
                    <Event interval={"October, 2017 – January, 2018"} title={"Coldbrew Creative"}>
                        Website developer on a local, small digital marketing team.
                        <br/>
                        <Link to="/experience/coldbrew-creative">More details...</Link>
                    </Event>
                    <Event interval={"August, 2016 – December, 2016"} title={"Tesla"}>
                        Car salesman at a Tesla Electric vehicle showroom.
                        <br/>
                        <Link to="/experience/tesla">More details...</Link>
                    </Event>
                    <Event interval={"May, 2015 – August, 2015"} title={"Palo Alto Networks"}>
                        IT Specialist at a large network security firm in Sunnyvale, CA.
                        <br/>
                        <Link to="/experience/palo-alto-networks">More details...</Link>
                    </Event>
                    <Event interval={"February, 2015 – June, 2015"} title={"ACFN Franchised"}>
                        Remote ATM phone technician at a ATM franchising company in Downtown, San Jose, CA.
                        <br/>
                        <Link to="/experience/acfn-franchised">More details...</Link>
                    </Event>
                    <Event interval={"May, 2016 – Today"} title={"Minute.tech"}>
                        Founder at software startup connecting non-techie users with techie users.
                        <br/>
                        <Link to="/experience/minute.tech">More details...</Link>
                    </Event>
                    <Event interval={"August, 2013 – Current"} title={"San Jose State University"}>
                        Earned Computer Engineering major with Business and Math minors in the heart of Silicon Valley.
                        {/* <li>Pi Kappa Alpha Fraternity</li>
                        <li>Show classes taken in a nice org chart. Maybe scrape the data from the SJSU links.</li>
                        */}
                        <br/>
                        <Link to="/experience/san-jose-state-university">More details...</Link>
                    </Event>
                    <Event interval={"December, 2010 – February, 2014"} title={"iHealPhones"}>
                        Founder at local device repair business
                        <br/>
                        <Link to="/experience/ihealphones.com">More details...</Link>
                    </Event>
                    <Event interval={"2009 – 2013"} title={"Oak Ridge High School"}>
                        Earned high school diploma at a public school east of Sacramento in El Dorado Hills, CA.
                        {/* <li>JV through Varsity soccer</li>
                        <li>JV through Varsity lacrosse</li>
                        <li>Youngest DECA club member at school</li>
                        <li>ART Media club web designer</li>
                        <li>One of 3 school web site designers</li>
                        */}
                        <br/>
                        <Link to="/experience/oak-ridge-high-school">More details...</Link>
                    </Event>
                    <Event interval={"December 21st, 1994"} title={"Douglas Robert Cunningham James birthday"}>
                        Born a big baby, weighing in at 10 lbs!
                    </Event>
                    {/* Need to style the ending to by no line! */}
                </Timeline>
                
            </div>
        )
    }
}
