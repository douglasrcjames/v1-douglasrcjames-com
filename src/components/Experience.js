import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import MediaQuery from "react-responsive";

import PhotoGallery from './Utilities'

export default class MinuteTech extends Component {
    render() {
        return (
            <div> 
                <Grid fluid>
                    {/* Row 1 */}
                    <Row>
                        <Col md={12} lg={6}>
                            <h1><u>Project:</u> <br/>{this.props.title}</h1>
                        </Col>
                        <Col md={12} lg={6} className="p-container">
                            <a 
                                href={`https://${this.props.siteUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                { (this.props.logoStyle === "square" || !this.props.logoStyle) && (
                                    <>
                                        <MediaQuery minWidth={993}>
                                            <img
                                                className="responsive large p-top-right"
                                                alt={`${this.props.title} logo`}
                                                src={this.props.logoUrl}
                                                />
                                        </MediaQuery>
                                        <MediaQuery maxWidth={992}>
                                            <img
                                                className="responsive large"
                                                alt={`${this.props.title} logo`}
                                                src={this.props.logoUrl}
                                                />
                                        </MediaQuery>
                                    </>
                                )}

                                { this.props.logoStyle === "long" && (
                                    <>
                                        <MediaQuery minWidth={993}>
                                            <img
                                                className="responsive xlarge p-top-right m-margin"
                                                alt={`${this.props.title} logo`}
                                                src={this.props.logoUrl}
                                                />
                                        </MediaQuery>
                                        <MediaQuery maxWidth={992}>
                                            <img
                                                className="responsive xlarge"
                                                alt={`${this.props.title} logo`}
                                                src={this.props.logoUrl}
                                                />
                                        </MediaQuery>
                                    </>
                                )}
                                
                                
                            </a>  
                        </Col>
                    </Row>
                    {/* Row 1 */}
                    <Row>
                        <Col xs={12} sm={6}>
                        <h2><u>Role:</u> <br/>{this.props.myRole}</h2>
                        </Col>
                        <Col xs={12} sm={6}>
                            <h2><u>Status:</u> <br/>{this.props.status}</h2>
                        </Col>
                    </Row>
                    {/* Row 2 */}
                    <Row>
                        <Col xs={12} sm={6}>
                            <h2><u>Period:</u> <br/>{this.props.period}</h2>
                        </Col>
                        <Col xs={12} sm={6}>
                            <h2>
                                <u>Link:</u> 
                                <br/>
                                <MediaQuery minWidth={993}>
                                    <a 
                                        href={`https://${this.props.siteUrl}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        {this.props.siteUrl}
                                    </a>  
                                </MediaQuery>
                                <MediaQuery minWidth={600} maxWidth={992}>
                                    <a 
                                        style={{fontSize:"3vw"}}
                                        href={`https://${this.props.siteUrl}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        {this.props.siteUrl}
                                    </a>  
                                </MediaQuery>
                                <MediaQuery maxWidth={599}>
                                    <a
                                        style={{fontSize:"5vw"}}
                                        href={`https://${this.props.siteUrl}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        {this.props.siteUrl}
                                    </a>  
                                </MediaQuery>
                                
                            </h2>
                        </Col>
                    </Row>
                </Grid>

                <h2><u>Description:</u></h2>
                {this.props.descriptionBlock}

                <h2 className="no-margin no-padding"><u>Skills:</u></h2>
                {this.props.skillsBlock}

                <br/>
                <hr />
                <br />
                {   this.props.photoGallery && (
                    <>
                        {   this.props.gallerySize === "medium" && (
                            <div className="m-width center">
                                <PhotoGallery photos={this.props.photoGallery} />
                            </div>
                            
                        )}
                        {   !this.props.gallerySize && (
                            <PhotoGallery photos={this.props.photoGallery} />
                        )}
                    </>
                )}
                
                
            </div>
        )
    }
}
