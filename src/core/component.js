export default class Component {
    constructor(props, children) {
        this.props = props;
        this.children = children
    }
    display(props) {
        return this.render();
    }
    render() {}
}
