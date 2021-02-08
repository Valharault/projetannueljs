export default class Component {
    constructor(props) {
        this.props = props;
    }
    display(newProps) {
        if (this.shouldUpdate(newProps)) {
            return this.render();
        }
    }

    shouldUpdate(newProps) {
        return this.props === newProps;
    }

    render() {}
}
