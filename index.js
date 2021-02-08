import {React, ReactDom} from './src/core/reactDom.js';
import {Navbar} from "./src/lib/navbar.js";
import {Form} from "./src/lib/form.js";
import {Counter} from "./src/lib/counter.js";
import {Paragraph} from "./src/lib/paragraph.js";

ReactDom.render(
    document.getElementById('root'),
    React.createElement('header', {class: ['d-flex', 'flex-column', 'flex-md-row', 'align-items-center', 'p-3', 'px-md-4', 'mb-3', 'bg-white', 'border-bottom', 'shadow-sm']}, [
        React.createElement(Navbar, {class: ['my-2', 'my-md-0', 'me-md-3', 'navbar', 'navbar-expand-lg', 'navbar-light', 'me-md-auto']}),
        React.createElement(Paragraph, {class: ['h5', 'my-0', 'fw-normal'], text: 'Projet Annuel JS'})
    ]),
    React.createElement('body', {class: 'bg-light'}, [
        React.createElement('div', {class: 'container'}, [
            React.createElement('div', {class: 'row'}, [
                React.createElement(Form, {class: 'form'}, null),
            ])
        ])
    ]),
    React.createElement(Counter, {defaultValue: 1})
);
