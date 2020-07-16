import React, { Component } from 'react'
import { Timeline, Event } from "../../Utilities";
import {Link} from 'react-router-dom'
import resume from '../../../assets/pdf/DouglasJames-Resume-4.22.2020.pdf'

export default class Experience extends Component {
    render() {
        return (
            <div>
                <h1>Experience</h1>
                <p>
                    I am a web developer with 7+ years of freelance experience, computer technician with 8+ years of experience, and an entrepreneur with a lifelong dream to build great products.
                    I have broken down my relevant work into chronological order, with a detailed view for each job. 
                    <br/><br/>
                    If you'd like to get straight to the point, I included a direct download link to my updated (4.22.2020) resume.
                </p>
                <a href={resume} download><button className="s-btn">Download Resume</button></a>
                <h2>Recent Updates:</h2>
                <ul>
                    <li><Link to="/experience/prestige-power">Prestige Power</Link></li>
                    <ul>
                        <li>Currently building a custom CRM and front end experience for this solar sales company</li>
                        <li>Providing IT consulting and some business consulting</li>
                    </ul>
                    <li><Link to="/experience/smithzellner.consulting">smithzellner.consulting</Link></li>
                    <ul>
                        <li>Nearly complete building a front end website for a consulting firm in Alabama, USA</li>
                    </ul>
                    <li><Link to="/experience/minute.tech">minute.tech</Link></li>
                    <ul>
                        <li>Production beta build of web app completed</li>
                        <li>Testing web app functionality with early adopters</li>
                        <li>iOS MVP app built (tabled for after web release)</li>
                    </ul>
                    <li><Link to="/experience/elkind.financial">elkind.financial</Link></li>
                    <ul>
                        <li>Currently working with client to improve and add content to site</li>
                    </ul>
                    <li><Link to="/experience/theblairfamilyfoundation.org">theblairfamilyfoundation.org</Link></li>
                    <ul>
                        <li>Site recently finished and live</li>
                    </ul>
                    <li><Link to="/experience/capsmd.org">capsmd.org</Link></li>
                    <ul>
                        <li>Site built and live</li>
                        <li>Recently finished building custom CMS system for their team to add articles independently, check out the <Link to="/experience/capsmd.org">demo video!</Link></li>
                    </ul>
                    
                </ul>
                <h2>Timeline:</h2>
                <Timeline>
                    <Event interval={"July, 2020 – Today"} title={"Prestige Power"} link={"/experience/prestige-power"}>
                        Currently building a custom CRM and front end experience for this solar sales company
                    </Event>
                    <Event interval={"June, 2020 – Today"} title={"smithzellner.consulting"} link={"/experience/smithzellner.consulting"}>
                        Nearly complete building a front end website for a consulting firm in Alabama, USA
                    </Event>
                    <Event interval={"February, 2020 – Today"} title={"elkind.financial"} link={"/experience/elkind.financial"}>
                        Currently designing and coding a simple site and logo for a financial advisor out of Tulsa, Oklahoma.
                    </Event>
                    <Event interval={"April, 2020 – Today"} title={"theblairfamilyfoundation.org"} link={"/experience/theblairfamilyfoundation.org"}>
                        Designed, coded, and currently maintaining a philanthropy foundation site based in Montgomery, Maryland.
                    </Event>
                    <Event interval={"August, 2019 – April, 2020"} title={"theretreatonnichols.com"} link={"/experience/theretreatonnichols.com"}>
                        Built website for short term rental property in Fairhope, Alabama
                    </Event>
                    <Event interval={"May, 2019 – Today"} title={"capsmd.org"} link={"/experience/capsmd.org"}>
                        Built and maintaining political publication website for the non-profit Council for Advocacy and Policy Solutions in Montgomery, Maryland.        
                    </Event>
                    <Event interval={"June, 2018 – August, 2018"} title={"bodybyyama.com"} link={"/experience/bodybyyama.com"}>
                        Built website for personal fitness trainer Yamato Nishino in San Jose, California
                    </Event>
                    <Event interval={"March, 2018 – April, 2018"} title={"glasshousefarms.co"} link={"/experience/glasshousefarms.co"}>
                        Built website for a hydroponic growing facility in Ithaca, New York.
                    </Event>
                    <Event interval={"October, 2017 – January, 2018"} title={"Coldbrew Creative LLC"} link={"/experience/coldbrew-creative"}>
                        Website developer on a small digital marketing team in San Jose, California
                    </Event>
                    <Event interval={"August, 2016 – December, 2016"} title={"Tesla, Inc."} link={"/experience/tesla"}>
                        Car salesman at a Tesla Electric vehicle showroom in Sunnyvale, California
                    </Event>
                    <Event interval={"May, 2016 – Today"} title={"Minute.tech LLC"} link={"/experience/minute.tech"}>
                        Founder at software startup connecting non-techie users with techie users.
                    </Event>
                    <Event interval={"May, 2015 – August, 2015"} title={"Palo Alto Networks, Inc."} link={"/experience/palo-alto-networks"}>
                        IT Specialist at a large network security firm in Sunnyvale, California.
                    </Event>
                    <Event interval={"February, 2015 – June, 2015"} title={"ACFN, the ATM Franchise"} link={"/experience/acfn-franchised"}>
                        Remote ATM phone technician at a ATM franchising company in Downtown, San Jose, California.
                    </Event>
                    <Event interval={"August, 2013 – Current"} title={"San Jose State University"} link={"/experience/san-jose-state-university"}>
                        Earning Computer Engineering major with Business and Math minors in the heart of Silicon Valley.
                    </Event>
                    <Event interval={"December, 2010 – February, 2014"} title={"iHealPhones"} link={"/experience/ihealphones.com"}>
                        Founder at local device repair business
                    </Event>
                    <Event interval={"August, 2009 – May, 2013"} title={"Oak Ridge High School"} link={"/experience/oak-ridge-high-school"}>
                        Earned high school diploma at a public school east of Sacramento in El Dorado Hills, California.
                 
                    </Event>
                    <Event interval={"December 21st, 1994"} title={"Douglas Robert Cunningham James birthday"} lastEvent={true}>
                        Born a big baby, weighing in at 10 lbs!
                    </Event>
                </Timeline>
                

                <h1>Overall Skill</h1>
                {/* TODO: link to all these, put images, and give my rating for each */}
                <ul>
                    <li>Windows: 9</li>
                    <li>Apple Ecosystem: 9</li>
                    <li>HTML: 10</li>
                    <li>CSS: 9</li>
                    <li>JS: 9</li>
                    <li>React.js: 9</li>
                    <li>Node.js: 8</li>
                    <li>PHP: 6</li>
                    <li>Python: 7</li>
                    <li>Swift: 6</li>
                    <li>Express: 7</li>
                    <li>Flask: 9</li>
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
