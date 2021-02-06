import Component from "../core/component.js";
import {React} from "../core/reactDom.js";
import {Button} from "./button.js";
import {Paragraph} from "./paragraph.js";

export class Navbar extends Component {

    propTypes = {
        type: "object",
        properties: {
            class: {
                type: "string",
                enum: ['my-2', 'my-md-0','me-md-3']
            }
        }
    };

    handleClick = () => {
        alert('Je clique sur une image');
    };

    render() {
        return React.createElement("nav", {class: this.props.class}, [
            React.createElement(Paragraph, {class: ['p-2', 'text-dark'], href: '#', text: 'Accueil'}),
            React.createElement(Paragraph, {class: ['p-2', 'text-dark'], href: '#', text: 'Connexion'}),
            React.createElement(Paragraph, {class: ['p-2', 'text-dark'], href: '#', text: 'Inscription'}),
            React.createElement(Button, {class: 'btn'}, [])
        ])
    }
}