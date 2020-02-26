import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PhotoGallery from '../Utilities'
import { dougPhotos } from "../../assets/images/photos";
import resume from '../../assets/pdf/DouglasJames-Resume-1.3.2020.pdf'

export default class AboutMe extends Component {
    render() {
        return (
            <div>
                
                <h1>About Me</h1>
                <p className="indent">
                    Welcome to my personal website. I am a young, engineer and businessman trained in the Silicon Valley at 
                    San Jose State University. Currently, I work on freelance projects like <Link to="/experience/capsmd.org">capsmd.org</Link>&nbsp;
                    and <Link to="/experience/minute.tech">minute.tech</Link>, as well as tech support for Minute.tech testing.
                    I am seeking a position outside freelance work because I love working with teams who can teach me 
                    technologies, tips, and tricks (plus I need bowling friends). 
                    I am currently focused on finding a job as a software engineer or web developer in the bay area, 
                    California or the pacific northwest region like Portland, Oregon. I am currently living in Berkeley, CA with my lovely girlfriend Ana, my siamese cat Link, and basset hound Georgie. 
                    Some of my many interests include coding, gaming, eating healthy (but tasty), camping &amp; hiking, 
                    technology, outer space, and animals.
                    I have broken down my past professional experience on the <Link to="/experience/">Experience page</Link>, with sub pages detailing each job. Think of this like 
                    a detailed, digital resume, that details much more than <a href={resume} download>my standard 2 page resume</a>
                </p>
                {/* <h2>Personal</h2>
                <p className="indent">
                    
                    This site is also acting as a sort of personal repository and blog for my past, present, and future experiences as a professional and personal human. 
                    Please do keep in mind that although this is my "portfolio" site, I want this to be a free-flow kind of place, with a mix of professional and personal; as I think life should be. 
                    Links for my email and social accounts are in the footer of every page, so feel free to reach out for any reason! 
                </p> */}
                <PhotoGallery photos={dougPhotos} />
                

            </div>
        )
    }
}
