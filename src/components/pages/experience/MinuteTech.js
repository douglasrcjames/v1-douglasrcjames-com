import React, { Component } from 'react'

export default class MinuteTech extends Component {
    render() {
        return (
            <div>
                <h1><u>Project:</u></h1>
                <img
                    className="responsive large"
                    alt="minute.tech logo"
                    src={require('../../../assets/images/logos/minute-tech-logo-long-full-color.png')}
                    />
                <h2><u>Role:</u> Founder &amp; CEO</h2>
                <h2><u>Status:</u> In-progress (working on iOS app)</h2>
                <h2><u>Period:</u> Q1 2016 -> Current</h2>
                <h2 className="no-margin no-padding"><u>Skills:</u></h2>
                <ul>
                    <li>Business Development</li>
                    <li>Leadership</li>
                    <li>Teamwork</li>
                    <li>HTML &amp; CSS</li>
                    <li>Python</li>
                    <li>Flask Framework</li>
                    <li>MySQL</li>
                    <li>JavaScript</li>
                    <li>React.js Framework</li>
                    <li>Stripe API</li>
                    <ul>
                        <li>Payments</li>
                        <li>Balance</li>
                        <li>Customers</li>
                        <li>Connect</li>
                    </ul>
                    <li>Firebase API</li>
                        <ul>
                            <li>Hosting with free SSL certificate</li>
                            <li>Database with Firestore</li>
                            <li>File Storage</li>
                            <li>Firebase Functions</li>
                        </ul>
                    <li>Swift</li>
                </ul>

                <h2><u>Description:</u></h2>
                <p>
                    Business Plan version 1 was 18 pages and placed me 3rd place in the Silicon Valley Business Plan competition awarding $1500 and legal support.
                    Business Plan Version 2 was expanded to 60 pages for larger investors.
                    Built 2 prototypes with Swift.
                    ....
                    [check back soon, this is being updated!]
                </p>
                {/* insert excerpt of history from business plan */}
                {/* tell them i can share business plan if requested */}
               
                
            </div>
        )
    }
}
