// IMPORT PACKAGE REFERENCES

import React from 'react';


// COMPONENT

const AboutPage = () => (
    <main className="p-3 animated fadeIn">
        <h3>InnRoad</h3>

        <p>A basic template that consists of the essential elements that are required to start building a Single Page Application using React, React Router, Redux, Bootstrap 4, Sass, and Webpack</p>

        Requirements:
        <ul>
            <li>Header bar (which has InnRoad title) should be always visible and need to be same with as screen.</li>
            <li>Look every card has a shadow. On hover, this shadow should be deeper making the card seem over the others. Make a transition for this.</li>
            <li>App should be responsive.</li>
            <li>On desktop and tablet landscape, columns should be horizontally ordered.</li>
            <li>On tablet portrait, horizontal scroll is disabled, it should have 2 columns horizontally per row.</li>
            <li>On mobile every column should be below each other.</li>
        </ul>
        

        Tech Requirements:
        <ul>
            <li>Use the latest version of ReactJS.</li>
            <li>Use Redux for data/state management</li>
            <li>Use ES6/7 features as much you can.</li>
            <li>Use SASS with CSS-Modules for styling or a CSS-in-JS solution.</li>
            <li>Make every component reusable and independient.</li>
            <li>Use webpack for assets compilation.</li>
            <li>Make a loading transition (Optional)</li>
            <li>Add Post-CSS for you styles (Optional)</li>
            <li>Make one (or more) unit tests using JEST (Optional)</li>
        </ul>
    </main>
);

export { AboutPage };