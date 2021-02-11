import {Router} from './src/core/router.js';
import {React, ReactDom} from "./src/core/reactDom";
import {RegisterView} from "./src/view/register";
import {HomeView} from "./src/view/home";

Router.route(window.location.search);



window.addEventListener("popstate", event => {
    // Grab the history state id
    let stateId = event.state;

    if (event.state != null) {
        stateId = event.state.path
    }
    Router.route(stateId);

});