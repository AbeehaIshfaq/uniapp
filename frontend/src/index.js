import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <Auth0Provider
        domain="dev-8gyjrh7i.us.auth0.com"
        clientId="t6Lxha9DKOoRi7gWypvxLVsjRheUrrUC"
        redirectUri={window.location.origin}
    >
        <App />
    </Auth0Provider>,
    document.querySelector("#root")
);
