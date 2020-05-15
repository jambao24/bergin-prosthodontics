import React from 'react';
import './Toolbar.css';
import { Container, AppBar, Button } from '@material-ui/core';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation"> 
            <div> </div>
            <div className="toolbar_logo"><a href="/"> logo </a></div>
            <div className= "spacer" /> 
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">something else</a></li>
                    <li><a href="/">some text</a></li>
                    <li><a href="/">some text</a></li>
                    <li><a href="/">some text</a></li>
                    <li><a href="/">some text</a></li>
                </ul>
             </div>
             <div className= "spacer" /> 
             <Button color="primary">Contact Us</Button>
        </nav>
    </header>
);

export default toolbar;