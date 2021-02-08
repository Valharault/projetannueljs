import Component from '../core/component.js';
import {React} from "../core/reactDom.js";
import {ReactDom} from "../core/reactDom.js";

export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: props.defaultValue || 0,
        };
    }

    propTypes = {
        defaultValue: { type: "number" },
    };


    setState = () => {
        this.state.counter = this.state.counter + 1;
        document.getElementById('root').removeChild(document.getElementById('root').lastChild);
        ReactDom.render(document.getElementById('root'), this.render())
    };

    render() {

        return React.createElement("div", {}, [
            React.createElement(
                "button",
                { onClick: () => this.setState() },
                ["Add"]
            ),
            React.createElement("span", {title: this.state.counter} , ["{{title}}"]),
        ]);

    }
}