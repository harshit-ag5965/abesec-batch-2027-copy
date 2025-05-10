// const heading = document.createElement('h1');
// heading.innerHTML = 'Hello, world!';

// const root = document.getElementById('root');
// root.appendChild(heading);

import React from 'react';
import ReactDOM from 'react-dom/client';

const headingTag = React.createElement("h1", {}, "Hello, world!");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(headingTag);