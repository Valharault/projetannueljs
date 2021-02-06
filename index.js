import {React, ReactDom} from './reactDom.js';
import {Button} from "./button.js";
import {Navbar} from "./navbar.js";
import {Form} from "./form.js";

const mystyle = {
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};
ReactDom.render(
    document.getElementById('root'),
    React.createElement(Navbar, {class:"test-nav", id: "id-nav"}),
    React.createElement(Button, {class: "test-button"}),
    React.createElement(Form, {style:{mystyle}}),
);





