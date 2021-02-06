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
                enum: ["btn", "btn-success"]
            }
        },
    };

    handleClick = () => {
        alert('Ceci est un test');
    };


    render() {
        return React.createElement("div",  { class: this.props.class }  , [
            React.createElement(
                "button",
                { onClick : () => this.handleClick() },
                ["Ajouter"]
            )
        ]);
    }
}
