
import Component from './component';
import {React} from "./reactDom";

export class Form extends Component{
    constructor(props) {
        super(props);
    }

    onSubmit = () => {
        alert('Voulez vous soumettre le valeur avec un email = ' +document.getElementById("mail").value)
    };

    render() {
        return React.createElement(
            "form", {onSubmit : () => this.onSubmit(), class:'form-js', id:'form-id'}, [
                React.createElement('div', {}, [
                    React.createElement('label', {for:'name'}, [
                        "Nom :"
                    ]),
                    React.createElement('input', {type:'text', id:'name', name:'user_name'}, [])
                ]),
                React.createElement('div', {}, [
                    React.createElement('label', {for:'mail'}, [
                        "Mail :"
                    ]),
                    React.createElement('input', {type:'email', id:'mail', name:'user_mail'}, [])
                ]),
                React.createElement('div', {}, [
                    React.createElement('label', {for:'msg'}, [
                        "Message :"
                    ]),
                    React.createElement('textarea', {id:'msg', name:'user_message'}, [])
                ]),
                React.createElement('button', {type:'submit'}, ['Envoyer'])
            ]
        )
    }
}