import Component from '../core/component.js';
import {React} from "../core/reactDom.js";

export class Button extends Component {
    constructor(props, children) {
        super(props, children);
    }

    propTypes = {
        type: "object",
        properties: {
            class: {
                type: "string",
                enum: ["navbar-toggler", "test-button", "navbar-light", "bg-light"]
            }
        },
    };

    handleClick = () => {
        alert('Ceci est un test');
    };


    render() {

            return React.createElement(
                "button",
                { onClick : () => this.handleClick(), class:this.props.class, type:this.props.type},
                ['Ajouter']
            )
    }
}
