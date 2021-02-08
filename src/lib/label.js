import Component from '../core/component.js';
import {React} from "../core/reactDom.js";

export class Label extends Component {
    propTypes = {
        type: "object",
        properties: {
            class: {
                type: "string",
                enum: ["form-label"]
            }
        },
    };

    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            "label",
            this.props
        )
    }
}
