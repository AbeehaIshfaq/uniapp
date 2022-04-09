import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import AuthContext from "./shared/context/AuthContext";

import StudentDash from "./student/pages/DashBoard";
import ApplicationPage from "./student/pages/Application";
import Navbar from "./student/components/navbar/Navbar";
import LandingPage from "./shared/pages/Landing";
import StudentAuth from "./student/pages/Auth";
import Page404 from "./shared/pages/404Page";

const TempComponent = () => {
    return (
        <header>
            <Navbar />
        </header>
    );
};

class App extends React.Component {
    state = { loggedIn: null };

    login = (value) => {
        this.setState({ loggedIn: value });
    };

    logout = () => {
        this.setState({ loggedIn: null });
    };

    render() {
        const { loggedIn } = this.state;
        let routes;

        if (!loggedIn) {
            routes = (
                <>
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/student/auth" element={<StudentAuth />} />
                </>
            );
        } else if (loggedIn === "student") {
            routes = (
                <>
                    <Route path="*" element={<Page404 />} />
                    <Route path="/" element={<Navigate to="/student" />} />
                    <Route path="/student" element={<StudentDash />} />
                    <Route
                        path="/student/auth"
                        element={<Navigate to="/student" />}
                    />
                    <Route
                        path="/student/application"
                        element={<ApplicationPage />}
                    />
                    <Route
                        path="/student/findUnis"
                        element={<TempComponent />}
                    />
                    <Route path="/student/myUnis" element={<TempComponent />} />
                </>
            );
        }

        return (
            <AuthContext.Provider
                value={{
                    loggedIn: this.state.loggedIn,
                    login: this.login,
                    logout: this.logout,
                }}
            >
                <Router>
                    <Routes>{routes}</Routes>
                </Router>
            </AuthContext.Provider>
        );
    }
}

export default App;
