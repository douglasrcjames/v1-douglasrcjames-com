import React, { Component } from 'react'
import { SocialLink } from './Utilities'
// import MediaQuery from "react-responsive";
export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { year: new Date().getFullYear() };
    }

    render() {
        return (
        <footer>
            <div className="f-container">
                <SocialLink
                    label={"email"}
                    link={"mailto:douglasrcjames@gmail.com"}
                    />
                <SocialLink 
                    label={"linkedin"}
                    link={"https://www.linkedin.com/in/douglasrcjames/"}
                    />
                <SocialLink 
                    label={"github"}
                    link={"https://github.com/douglasrcjames"}
                    />
                <SocialLink 
                    label={"twitter"}
                    link={"https://twitter.com/douglasrcjames"}
                    />
                <SocialLink 
                    label={"instagram"}
                    link={"https://www.instagram.com/douglasrcjames"}
                    />
                <SocialLink 
                    label={"facebook"}
                    link={"https://www.facebook.com/douglasrcjames"}
                    />
                <SocialLink 
                    label={"spotify"}
                    link={"https://open.spotify.com/user/12177962281?si=Z7LDndg3QBi4BN9_5siHvg"}
                    />
                <SocialLink 
                    label={"soundcloud"}
                    link={"https://soundcloud.com/douglasrcjames"}
                    />
                <br/>
                <br/>
                douglasrcjames.com
                &nbsp;
                &copy;
                {this.state.year} 
            </div>
        </footer>
        )
    }
}
