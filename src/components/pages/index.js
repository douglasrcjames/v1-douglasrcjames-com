import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PhotoGallery from '../Utilities'
import { dougPhotos } from "../../assets/images/photos";

export default class AboutMe extends Component {
    render() {
        return (
            <div>
                <h1>About Me</h1>
                <p>
                    Welcome to my portfolio site. I am a young, professional engineer and businessman trained in the Silicon Valley at 
                    San Jose State University. I am currently living in Berkeley, CA with my lovely girlfriend and am actively looking for part-time or full-time work. 
                    Some of my interests include coding, gaming, eatin healthy (but gud!), camping &amp; hiking, technology, outer space, and animals 
                    (like my siamese cat Link and bassett hound Georgie!)
                </p>
                <p>
                    I have broken down my past professional experience on the <Link to="/experience/">Experience page</Link>. Think of this like 
                    a detailed, digital resume, since I cannot fully detail my complex experience at each job on a 2 page resume. 
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
