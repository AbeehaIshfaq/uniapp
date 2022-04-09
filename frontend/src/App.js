import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StudentDash from "./student/pages/DashBoard";
import ApplicationPage from "./student/pages/Application";
import ApplicationPageUni from "./uni/pages/Application";
import UniDash from "./uni/pages/DashBoard";
import SetDeadline from "./uni/pages/setdeadline";
import Navbar from "./student/components/navbar/Navbar";
import LandingPage from "./shared/pages/Landing";
import Page404 from "./shared/pages/404Page";

const TempComponent = () => {
    return (
        <header>
            <Navbar />
        </header>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Page404 />} />
                <Route path="/" element={<LandingPage />} exact />
                <Route path="/student" element={<StudentDash />} />
                <Route
                    path="/student/application"
                    element={<ApplicationPage />}
                />
                <Route path="/student/findUnis" element={<TempComponent />} />
                <Route path="/student/myUnis" element={<TempComponent />} />
                <Route path="/uni" element={<UniDash />} />

                <Route
                    path="/uni/application"
                    element={<ApplicationPageUni />}
                />
                <Route
                    path="/uni/setdeadline"
                    element={<SetDeadline />}
                />

            </Routes>
        </Router>
    );
};

export default App;
