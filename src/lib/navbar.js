import Component from "../core/component.js";
import {React} from "../core/reactDom.js";
import {Button} from "./button.js";

export class Navbar extends Component {

    propTypes = {
        type: "object",
        properties: {
            class: {
                type: "string",
                enum: ["navbar", "navbar-expand-lg", "navbar-light", "bg-light"]
            },
            id: {
                type: "string",
                enum: ['nav-id', 'id-nav']
            }
        },
    };

    handleClick = () => {
        alert('Je clique sur une image');
    };

    render() {

        return React.createElement("nav", {class: this.props.class, id: this.props.id}, [
            React.createElement("a", {class:'navbar-brand',href: '#',}, ['Navbar']),
            React.createElement('button', {class: 'navbar-toggler', type: 'button'}, [
                React.createElement("span", {class: 'navbar-toggler-icon'}, [])
            ]),
            React.createElement('div', {class: ['collapse', 'navbar-collapse'], id: 'navbarNav'}, [
                React.createElement("ul", {class: 'navbar-nav'}, [
                    React.createElement("li", {class: ['nav-item', 'active']}, [
                        React.createElement("a", {class: 'nav-link', href: '#'}, [
                            'Home', React.createElement("span", {class: 'sr-only'}, [
                                '(current)'
                            ])
                        ])
                    ]),
                    React.createElement("li", {class: 'nav-item'}, [
                        React.createElement("a", {class: 'nav-link', href: '#'}, [
                            'Features'
                        ])
                    ])
                ])
            ])
        ])
    }
}