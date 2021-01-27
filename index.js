import {React, ReactDom} from './reactDom';
import {Button} from "./button";
import {Navbar} from "./navbar";
import {Form} from "./form";


ReactDom.render(
    React.createElement(Navbar),
    document.getElementById('root-nav')
);

ReactDom.render(
    React.createElement(Button,  {class: "test-buttdsdsfson" } ),
    document.getElementById('root-button')
);

ReactDom.render(
    React.createElement(Form),
    document.getElementById('form')
);



