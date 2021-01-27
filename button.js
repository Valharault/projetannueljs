import Component from './component';
import {React} from "./reactDom";


export class Button extends Component {
    constructor(props) {
        super(props);
    }

    propTypes = {
        class: { type: "string", enum: ["button", "test-button", "tb"] }
    };

    handleClick = () => {
        alert('Ceci est un test');
    };


    render() {
        return React.createElement("div",  { class: this.props.class }  , [
            React.createElement(
                "button",
                { onClick : () => this.handleClick() },
                ["Add"]
            ),
            React.createElement("span", { title: 'test' }, ["{{title}}"]),
        ]);
    }


}
