import Component from '../core/component.js';
import {React} from "../core/reactDom.js";

export class Button extends Component {
    constructor(props) {
        super(props);
    }

    propTypes = {
        type: "object",
        properties: {
            class: {
                type: "string",
                enum: ["btn", "btn-success", "btn-error", "btn-sm", "btn-xl", "btn-md", "btn-info", "btn-primary"]
            }
        },
    };

    handleClick = () => {
        alert('Ceci est un test');
    };


    render() {
        return React.createElement(
            "button",
            this.props
        )
    }
}
