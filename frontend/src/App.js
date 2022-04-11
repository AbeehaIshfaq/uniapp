import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import AuthContext from "./shared/context/AuthContext";
import server from "./server/server";

import LandingPage from "./shared/pages/Landing";
import Page404 from "./shared/pages/404Page";

import StudentDash from "./student/pages/DashBoard";
import StudentApplication from "./student/pages/Application";
import StudentAuth from "./student/pages/Auth";
import Navbar from "./student/components/navbar/Navbar";
import StudentMyUnis from "./student/pages/MyUnis";

import ApplicationPageUni from "./uni/pages/Application";
import UniAuth from "./uni/pages/Auth";
import UniDash from "./uni/pages/DashBoard";
import SetDeadline from "./uni/pages/setdeadline";
import UploadDoc from "./student/pages/UploadDoc";

const TempComponent = () => {
    return (
        <header>
            <Navbar />
        </header>
    );
};

class App extends React.PureComponent {
    state = { loggedIn: null, token: null, userId: null };

    login = (value, token, userId) => {
        localStorage.setItem(
            "userData",
            JSON.stringify({ userId, token, loggedIn: value })
        );
        this.setState({ loggedIn: value, token: token, userId: userId });
    };

    logout = async () => {
        this.setState({ loggedIn: null, token: null, userId: null });
        try {
            await server.post("/student/logout");
            localStorage.removeItem("userData");
        } catch (err) {
            console.log(err);
        }
    };

    componentDidMount() {
        const userData = JSON.parse(localStorage.getItem("userData"));
        if (userData) {
            this.setState({
                loggedIn: userData.loggedIn,
                token: userData.token,
                userId: userData.userId,
            });
        }
    }

    render() {
        const { loggedIn } = this.state;
        let routes;

        if (!loggedIn) {
            routes = (
                <>
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/student/auth" element={<StudentAuth />} />
                    <Route path="/uni/auth" element={<UniAuth />} />
                    <Route path="/uni" element={<UniDash />} />
                    <Route
                        path="/uni/application"
                        element={<ApplicationPageUni />}
                    />
                    <Route path="/uni/setdeadline" element={<SetDeadline />} />
                </>
            );
        } else if (loggedIn === "student") {
            routes = (
                <>
                    <Route path="*" element={<Page404 />} />
                    <Route path="/student" element={<StudentDash />} />
                    <Route path="/" element={<Navigate to="/student" />} />
                    <Route
                        path="/student/auth"
                        element={<Navigate to="/student" />}
                    />
                    <Route
                        path="/student/application"
                        element={<StudentApplication />}
                    />

                    <Route
                        path="/student/findUnis"
                        element={<TempComponent />}
                    />
                    <Route path="/student/myUnis" element={<StudentMyUnis />} />
                    <Route
                        path="/student/upload_documents"
                        element={<UploadDoc />}
                    />
                </>
            );
        }

        return (
            <AuthContext.Provider
                value={{
                    loggedIn: this.state.loggedIn,
                    token: this.state.token,
                    userId: this.state.userId,
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
