import {React, ReactDom} from './src/core/reactDom.js';
import {Button} from "./src/lib/button.js";
import {Navbar} from "./src/lib/navbar.js";
import {Form} from "./src/lib/form.js";

ReactDom.render(
    document.getElementById('root'),
    React.createElement("div", null, [
        React.createElement(Button, {class: 'button1'}, null),
        React.createElement("div", {
                prenom: {
                    origine: 'France',
                    appelation: 'Jean'
                }
            }
            , ["Bonjour, mon prénom vient de {{prenom.origine}} et je m'appelle {{prenom.appelation}}"]),
    ]),
);



