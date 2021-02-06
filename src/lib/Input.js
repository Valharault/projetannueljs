import Component from '../core/component.js';
import {React} from "../core/reactDom.js";

export class Input extends Component {
    constructor(props) {
        super(props);
    }

    propTypes = {
        type: "object",
        properties: {
            class: {
                type: "string",
                enum: ["form-control"]
            }
        },
    };

    render() {
        return React.createElement(
            "input",
            this.props
        )
    }
}
