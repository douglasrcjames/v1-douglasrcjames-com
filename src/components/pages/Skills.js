import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <div>
                <h1>Skills</h1>
                <p>I got skills!</p>
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
