import {React} from "../core/reactDom.js";
import {Navbar} from "../lib/navbar.js";
import {Paragraph} from "../lib/paragraph.js";
import {RegisterForm} from "../lib/registerForm.js";
import Component from "../core/component.js";

export class RegisterView extends Component {

    render() {
        return React.createElement('body', {class: 'bg-light'}, [
            React.createElement('header', {class: ['d-flex', 'flex-column', 'flex-md-row', 'align-items-center', 'p-3', 'px-md-4', 'mb-3', 'bg-white', 'border-bottom', 'shadow-sm']}, [
                React.createElement(Navbar, {class: ['my-2', 'my-md-0', 'me-md-3', 'navbar', 'navbar-expand-lg', 'navbar-light', 'me-md-auto']}),
                React.createElement(Paragraph, {class: ['h5', 'my-0', 'fw-normal'], text: 'Projet Annuel JS'})
            ]),
            React.createElement('div', {class: 'container'}, [
                React.createElement('div', {class: 'row'}, [
                    React.createElement(RegisterForm, {class: 'form'}, null)
                ])
            ])
        ])
    }
}
