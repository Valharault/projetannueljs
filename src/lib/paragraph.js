import Component from '../core/component.js';
import {React} from "../core/reactDom.js";

export class Paragraph extends Component {
    constructor(props) {
        super(props);
    }

    propTypes = {
        type: "object",
        properties: {
            class: {
                type: "string",
                enum: ["text-white", "text-dark", "p-2"]
            }
        }
    };

    render() {
        return React.createElement(
            "p",
            {class: this.props.class},
            this.props.text
        )
    }
}
