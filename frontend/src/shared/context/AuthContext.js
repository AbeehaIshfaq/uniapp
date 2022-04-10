import React from "react";

export default React.createContext({
    loggedIn: null,
    token: null,
    userId: null,
    login: () => {},
    logout: () => {},
});
