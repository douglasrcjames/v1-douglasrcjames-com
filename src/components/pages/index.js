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
                <h2>Personal</h2>
                <p className="indent">
                    Welcome to my portfolio site. I am a young, professional engineer and businessman trained in the Silicon Valley at 
                    San Jose State University. I am currently living in Berkeley, CA with my lovely girlfriend Ana, my siamese cat Link, and basset hound Georgie. 
                    Some of my many interests include coding, gaming, eating healthy (but tasty), camping &amp; hiking, 
                    technology, outer space, and animals.
                    This site is also acting as a sort of personal repository and blog for my past, present, and future experiences as a professional and personal human. 
                    Please do keep in mind that although this is my "portfolio" site, I want this to be a free-flow kind of place, with a mix of professional and personal; as I think life should be. 
                    Links for my email and social accounts are in the footer of every page, so feel free to reach out for any reason! 
                </p>
                <PhotoGallery photos={dougPhotos} />
                <h2>Professional</h2>
                <p className="indent">
                    Professionally, I am actively looking for part-time, full-time, contractor, intern, or remote work for when I graduate in December, 2019. 
                    I have a particular interest in positions at a small software company with equity opportunities that can utilize my skills as a web developer, businessman, or computer technician.
                    I have always believed that <a href="https://www.youtube.com/watch?v=nlD9JYP8u5E" target="_blank" rel="noopener noreferrer">anyone can do anything</a> with a lot of practice and mental 
                    perseverance. With that said, I do believe that if given the opportunity and need, I would be able to fulfill any role because I trust my ability to learn and apply knowledge. 
                    Without tooting my own horn too much, I do tend to gravitate towards a leadership/manager role when working on projects and with teams, likely due to my extroverted background relative 
                    to my engineering peers (although, I would still classify myself as an introvert.) However, I still do enjoy the technical process behind building products and technology, and would love 
                    to be tightly integrated with that process. I am also a highly organized individually, especially in my digital life because I find joy in putting things (usually data) into specific bins 
                    for quick and efficient access. I am unsure if this is a product of my experience as a technician and/or web developer, but undoubtedly has come in handy for both.
                    I have broken down my past professional experience on the <Link to="/experience/">Experience page</Link>, with sub pages detailing each job. Think of this like 
                    a detailed, digital resume, that details much more than <a href={resume} download>my standard 2 page resume</a>.
                    
                </p>

            </div>
        )
    }
}
