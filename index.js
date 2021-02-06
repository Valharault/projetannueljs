import {React, ReactDom} from './src/core/reactDom.js';
import {Button} from "./src/lib/button.js";
import {Navbar} from "./src/lib/navbar.js";
import {Form} from "./src/lib/form.js";

const mystyle = {
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};

ReactDom.render(
    document.getElementById('root'),
    React.createElement('header', {class: ['d-flex', 'flex-column', 'flex-md-row', 'align-items-center', 'p-3', 'px-md-4', 'mb-3', 'bg-white', 'border-bottom', 'shadow-sm']}, [
        React.createElement('p', {class: ['h5', 'my-0', 'me-md-auto', 'fw-normal']}, ['Projet Annuel JS']),
        React.createElement(Navbar, {class: ['my-2', 'my-md-0', 'me-md-3']}),
    ]),
    React.createElement('body', {class: 'bg-light'}, [
        React.createElement('div', {class: 'container'}, [
            React.createElement('div', {class: 'row'}, [
                React.createElement(Form, {class: 'form'}, null),
            ])
        ]),
    ])
);
