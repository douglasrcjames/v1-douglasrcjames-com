import React, { Component } from 'react'
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
                douglasrcjames.com
                &nbsp;
                &copy;
                {this.state.year} 
            </div>
        </footer>
        )
    }
}
