import {React, ReactDom} from './reactDom.js';
import {HomeView} from "../view/home.js";
import {RegisterView} from "../view/register.js";

const url = window.location.origin + '/projetAnnuelJs/';
const root = document.getElementById('root')

export const Router = {

    handleHref(path) {
        if (path !== window.location.href) {
            window.history.pushState({path}, `${path}`, url + `${path}`);
            this.route(path)
        }
    },

    route(path) {
        if (path === undefined || path === "") {
            this.cleanView(root)
            ReactDom.render(
                root,
                React.createElement(HomeView, {})
            );
        } else if (path.substring(1) === "features") {
        } else if (path.substring(1) === "inscription") {
            this.cleanView(root)
            ReactDom.render(
                root,
                React.createElement(RegisterView, {})
            );
        }
    },

    cleanView(root) {
        while (root.firstChild) {
            root.removeChild(root.lastChild);
        }
    }
}
