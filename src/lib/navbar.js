import Component from "../core/component.js";
import {React} from "../core/reactDom.js";
import {Button} from "./button.js";
import {Paragraph} from "./paragraph.js";
import {Counter} from "./counter.js";
import {ReactDom} from "../core/reactDom.js";
import {Form} from "./form.js";

export class Navbar extends Component {

    propTypes = {
        type: "object",
        properties: {
            class: {
                type: "string",
                enum: ['my-2', 'my-md-0', 'me-md-3', 'navbar', 'navbar-expand-lg', 'navbar-light', 'me-md-auto']
            }
        }
    };


    handleClickHome = () => {
        let root = document.getElementById('root');
        window.history.pushState('home', 'Home', '/Home');
        while (root.children.length !== 1) {
            root.removeChild(root.lastChild);
        }
        ReactDom.render(document.getElementById('root'), React.createElement('div', { class:'container' }, [
            React.createElement('h1', {class:'center'}, [
                "Bienvenue à l'accueil"
            ])
        ]));

    };

    handleClickNav = () => {
        let root = document.getElementById('root');
        window.history.pushState('index', 'project', '/projetannueljs');
        while (root.children.length !== 1) {
            root.removeChild(root.lastChild);
        }
        ReactDom.render(document.getElementById('root'),React.createElement('body', {class: 'bg-light'}, [
            React.createElement('div', {class: 'container'}, [
                React.createElement('div', {class: 'row'}, [
                    React.createElement(Form, {class: 'form'}, null),
                ])
            ]),
        ]),
            React.createElement(Counter, { defaultValue: 1 }))

    };

    handleClickFeatures = () => {
        let root = document.getElementById('root');
        window.history.pushState('features', 'Features', '/Features');
        while (root.children.length !== 1) {
            root.removeChild(root.lastChild);
        }
        ReactDom.render(document.getElementById('root'), React.createElement('div', { class:'container' }, [
            React.createElement('h1', {class:'center'}, [
                "Page features"
            ])
        ]));

    };

    render() {
        return React.createElement("nav", {class: this.props.class, id: this.props.id}, [
            React.createElement("a", {onClick: () => this.handleClickNav(),class: 'navbar-brand',href: '#',}, ['Navbar']),
            React.createElement(Button, {class: 'navbar-toggler', type: 'button'}, [
                React.createElement("span", {class: 'navbar-toggler-icon'})
            ]),
            React.createElement('div', {class: ['navbar-collapse'], id: 'navbarNav'}, [
                React.createElement("ul", {class: 'navbar-nav'}, [
                    React.createElement("li", {class: ['nav-item', 'active']}, [
                        React.createElement("a", {onClick: () => this.handleClickHome(),class: 'nav-link', href: '#'}, [
                            'Home', React.createElement("span", {class: 'sr-only'})
                        ])
                    ]),
                    React.createElement("li", {class: 'nav-item'}, [
                        React.createElement("a", {onClick: () => this.handleClickFeatures(),class: 'nav-link', href: '#'}, [
                            'Features'
                        ])
                    ])
                ])
            ])
        ])

    }
}