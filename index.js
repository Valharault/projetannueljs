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
    React.createElement(Navbar, {class:['navbar','navbar-expand-lg', 'navbar-light', 'bg-light'], id: "id-nav"}),
    React.createElement("div", null, [
        React.createElement(Button, {class: 'test-button'}, null),
        React.createElement("div", {
                prenom: {
                    origine: 'France',
                    appelation: 'Jean'
                }
            }
            , ["Bonjour, mon prénom vient de {{prenom.origine}} et je m'appelle {{prenom.appelation}}"]),
    ]),
);