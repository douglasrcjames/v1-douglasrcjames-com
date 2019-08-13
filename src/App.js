import React from 'react';
import './assets/css/App.css';

function App() {
  return (
    <div className="l-container">
      <h1 className="xl-text no-margin">douglasrcjames.com</h1>
      <p>Welcome to my portfolio site. I am an engineer based out of Berkeley, CA. Let me try and break down my past experience so you can decide if I am a good fit for the job. Think of this like a digital resume.</p>
      
      <h2>Experience</h2>
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
        <li>glasshousefarms.co</li>
          <ul>
            <li>Council for Advocacy and Policy Solutions</li>
            <li>2 week deadline, computer crashed, during finals week, launched to X amount of people</li>
            <li>Status: Finished</li>
            <li>Period: Q 201 -> Q 201</li>
          </ul>
        <li>San Jose State University</li>
          <ul>
            <li>Computer engineering major</li>
            <li>Business and Math minors</li>
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

      <h2>Personal</h2>
      <p>I am also a fun guy to be around, check it out!</p>
      <ul>
        <li>Social</li>
        <ul>
          <li>LinkedIn</li>
          <li><a href="https://twitter.com/douglasrcjames">Twitter</a></li>
          <li>Instagram</li>
          <li>Facebook</li>
        </ul>
        <li>Interests</li>
        <ul>
          <li>gaming</li>
          <li>eatin healthy (but gud!)</li>
          <li>camping &amp; hiking</li>
          <li>outer space</li>
        </ul>
        
      </ul>

    </div>
  );
}

export default App;
