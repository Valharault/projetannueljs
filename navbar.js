import Component from "./component";
import {React} from "./reactDom";
import {Button} from "./button";

export class Navbar extends Component{

    handleClick = () => {
        alert('Je clique sur une image');
    };

    render() {
        return React.createElement("nav", {class: 'testNav'}, [
            React.createElement("img", {onClick: () => this.handleClick(), alt: 'navbar test', src:'/test.png' }, []),
            React.createElement(Button, {title: 'item1'}, [
                React.createElement("span", {class:'nav-span'}, [])
            ]),
            React.createElement(Button, {class: 'test-button'}, [])
        ])
    }
}