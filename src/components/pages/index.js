import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PhotoGallery from '../Utilities'
import { dougPhotos } from "../../assets/images/photos";
import resume from '../../assets/pdf/Doug-Resume-9.12.2019.pdf'

export default class AboutMe extends Component {
    render() {
        return (
            <div>
                <h1>About Me</h1>
                <p>
                    Welcome to my portfolio site. I am a young, professional engineer and businessman trained in the Silicon Valley at 
                    San Jose State University. I am currently living in Berkeley, CA with my lovely girlfriend Ana, my siamese cat Link, and basset hound Georgie. 
                    I am actively looking for part-time or full-time work, particularly in a position that utilizes my skills as a web developer, businessman, or computer technician.
                    Some of my interests include coding, gaming, eating healthy (but tasty), camping &amp; hiking, technology, outer space, and animals. 
                    Links for my email and social accounts are in the footer of every page, so feel free to reach out or check out what I am like online!
                </p>
                <p>
                    I have broken down my past professional experience on the <Link to="/experience/">Experience page</Link>, with sub pages detailing each job. Think of this like 
                    a detailed, digital resume, that details much more than <a href={resume} download>my standard 2 page resume</a>.
                    This site is also acting as a sort of personal repository for my past, present, and future experiences as a professional and fun human.
                    
                </p>

               
                <PhotoGallery photos={dougPhotos} />
                {/* <h3>Cool Quick Facts</h3>
                <ul>
                    <li>Vegetarian for 16 years</li>
                </ul> */}

            </div>
        )
    }
}
