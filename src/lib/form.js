import Component from '../core/component.js';
import {React} from "../core/reactDom.js";
import {Button} from "./button.js";
import {Input} from "./Input.js";

export class Form extends Component {
    constructor(props) {
        super(props);
    }

    propTypes = {
        type: "object",
        properties: {
            class: {
                type: "string",
                enum: ['form']
            }
        }
    };


    onSubmit = () => {
        alert('Voulez vous soumettre le valeur avec un email = ' + document.getElementById("mail").value)
    };

    render() {
        return React.createElement(
            "form", {class: this.props.class, id: this.props.id}, [
                React.createElement('div', {class: 'mb-3'}, [
                    React.createElement('label', {for: 'username', class: 'form-label', text: "Nom d'utilisateur :"}),
                    React.createElement(Input, {
                        type: 'text',
                        id: 'username',
                        name: 'username',
                        class: 'form-control',
                        test: 'test'
                    })
                ]),
                React.createElement('div', {class: 'mb-3'}, [
                    React.createElement('label', {for: 'email', class: 'form-label', text: 'Email'}),
                    React.createElement(Input, {type: 'email', id: 'email', name: 'email', class: 'form-control'})
                ]),
                React.createElement('div', {class: 'mb-3'}, [
                    React.createElement('label', {for: 'password', class: 'form-label', text: 'Mot de passe :'}),
                    React.createElement(Input, {
                        type: 'password',
                        id: 'password',
                        name: 'password',
                        class: 'form-control',
                    })
                ]),
                React.createElement('div', {class: 'mb-3'}, [
                    React.createElement('label', {
                        for: 'password_confirm',
                        class: 'form-label',
                        text: 'Confirmer mot de passe :'
                    }),
                    React.createElement(Input, {
                        type: 'password',
                        id: 'password_confirm',
                        name: 'password_confirm',
                        class: 'form-control'
                    })
                ]),
                React.createElement(Button, {class: ['btn', 'btn-success'], type: 'submit', text: 'Envoyer'})
            ]
        )
    }
}
