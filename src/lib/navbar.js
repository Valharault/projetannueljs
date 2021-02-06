import Component from "../core/component.js";
import {React} from "../core/reactDom.js";
import {Button} from "./button.js";

export class Navbar extends Component {

    propTypes = {
        type: "object",
        properties: {
            class: {
                type: "string",
                enum: ["test", "nav-test"]
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
            React.createElement("img", {onClick: () => this.handleClick(), alt: 'navbar test', src: '/test.png'}, []),
            React.createElement(Button, {class: 'test-button'}, [
                React.createElement("span", {class: 'nav-span'}, [])
            ]),
            React.createElement(Button, {class: 'test-button'}, [])
        ])
    }
}