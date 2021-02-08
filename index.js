import {Router} from './src/core/router.js';

Router.route(window.location.search);

window.addEventListener("popstate", event => {
    let stateId = event.state;
    if (event.state != null) {
        stateId = event.state.path
    }
    Router.route(stateId);
});