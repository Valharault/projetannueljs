import {React, ReactDom} from './reactDom.js';
import {Button} from "./button.js";
import {Navbar} from "./navbar.js";
import {Form} from "./form.js";

ReactDom.render(
    document.getElementById('root'),
    React.createElement(Navbar),
    React.createElement(Button, {class: "test-buttdsdsfson"}),
    React.createElement(Form),
);



