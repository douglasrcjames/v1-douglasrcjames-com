import React, { Component } from 'react'
import PhotoGallery from '../Utilities'
import { galleryPhotos } from "../../assets/images/photos";

export default class Gallery extends Component {
    render() {
        return (
            <div className="m-padding">
                <PhotoGallery photos={galleryPhotos} />
            </div>
        )
    }
}
