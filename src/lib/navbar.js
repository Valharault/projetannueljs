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
                enum: ['my-2', 'my-md-0','me-md-3', 'navbar', 'navbar-expand-lg', 'navbar-light', 'me-md-auto']
            }
        }
    };

    handleClick = () => {
        alert('Je clique sur une image');
    };

    render() {
        return React.createElement("nav", {class: this.props.class, id: this.props.id}, [
            React.createElement("a", {class: 'navbar-brand',href: '#',}, ['Navbar']),
            React.createElement(Button, {class: 'navbar-toggler', type: 'button'}, [
                React.createElement("span", {class: 'navbar-toggler-icon'}, [])
            ]),
            React.createElement('div', {class: ['navbar-collapse'], id: 'navbarNav'}, [
                React.createElement("ul", {class: 'navbar-nav'}, [
                    React.createElement("li", {class: ['nav-item', 'active']}, [
                        React.createElement("a", {class: 'nav-link', href: '#'}, [
                            'Home', React.createElement("span", {class: 'sr-only'}, [])
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