import React from 'react';
import './assets/css/App.css';

function App() {
  return (
    <div className="l-container">
      <h1 className="xl-text no-margin">douglasrcjames.com</h1>
      <p>
        Welcome to my portfolio site. I am a young, professional engineer currently living in Berkeley, CA. 
        Let me try and break down my past experience so you can decide if I am a good fit for the job. Think of this like a digital resume.
      </p>
      
      <h1>Experience</h1>
      <p>I think most of what I done is pretty neat!</p>
      <ul>
        <li>retreatonnichols.com</li>
          <ul>
            <li>Short term rental property.</li>
            <li>Status: planning stages</li>
          </ul>
        <li>minute.tech</li>
          <ul>
            <li>Software startup connecting non-techie users with techie users.</li>
            <li>Status: In-progress (working on iOS app)</li>
            <li><li>Period: Q1 2016 -></li></li>
          </ul>
        <li>capsmd.org</li>
          <ul>
            <li>Council for Advocacy and Policy Solutions</li>
            <li>2 week deadline, computer crashed, during finals week, launched to X amount of people</li>
            <li>Status: Finished, but maintaining</li>
            <li>Period: Q2 2019 -> </li>
          </ul>
        <li>bodybyyama.com</li>
          <ul>
            <li>Yamato's personal trainer site.</li>
            <li>Project manager working with 2 graphic designers Ryan Wall and Mitch Licata to create a wireframe</li>
            <li>I coded the site using HTML, CSS, PHP, and UIKit 3</li>
            <li>Status: Finished</li>
            <li>Period: Q2 2019 -> </li>
          </ul>
        <li>glasshousefarms.co</li>
          <ul>
            <li>Hydroponic growing facility in Ithaca, New York.</li>
            <li>Worked with graphic designer Ryan Wall to develop the branding (font, color, logo, etc)</li>
            <li>Took the wireframe developed, and built a functional, responsive site with HTML, CSS, PHP, and UIKit3</li>
            <li>Status: Finished</li>
            <li>Period: Q 201 -> Q 201</li>
          </ul>
        <li>San Jose State University</li>
          <ul>
            <li>Computer engineering major</li>
            <li>Business and Math minors</li>
            <li>Pi Kappa Alpha Fraternity</li>
            <li>Show classes taken in a nice org chart. Maybe scrape the data from the SJSU links.</li>
            <li>Status: In-progress</li>
            <li>Period: Q2 2013 -> Q4 2019</li>
          </ul>
        <li>ihealphones.com</li>
          <ul>
            <li>Device repair business</li>
            <li>Status: Finished</li>
            <li>Period: Q2 2009 -> Q2 2013</li>
          </ul>
        <li>Oak Ridge High School</li>
          <ul>
            <li>JV through Varsity soccer</li>
            <li>JV through Varsity lacrosse</li>
            <li>Youngest DECA club member at school</li>
            <li>ART Media club web designer</li>
            <li>One of 3 school web site designers</li>
            <li>Status: Finished</li>
            <li>Period: Q2 2009 -> Q2 2013</li>
          </ul>
      </ul>

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

      <h1>Personal</h1>
      <p>I am also a fun guy to be around, check it out! (Hint: all my handles are douglasrcjames)</p>
      <ul>
        <li>Social</li>
        <ul>
          <li><a href="https://www.linkedin.com/in/douglasrcjames/">LinkedIn</a></li>
          <li><a href="https://twitter.com/douglasrcjames">Twitter</a></li>
          <li><a href="https://www.instagram.com/douglasrcjames">Instagram</a></li>
          <li><a href="https://www.facebook.com/douglasrcjames">Facebook</a></li>
        </ul>
        <li>Interests</li>
        <ul>
          <li>gaming</li>
          <li>eatin healthy (but gud!)</li>
          <li>camping &amp; hiking</li>
          <li>technology (broad, I know)</li>
          <li>outer space</li>
          <li>cats, dogs, cows, and animals</li>
        </ul>
        
      </ul>

    </div>
  );
}

export default App;
