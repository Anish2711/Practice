import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement("hl",{className:"background"},"This is my first project");

    const root = ReactDOM.createRoot(document.getElementById("root")); 

    root.render(heading);