import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StudentDash from "./student/pages/DashBoard";
import ApplicationPage from "./student/pages/Application";
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

const App = ({ history }) => {
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
            </Routes>
        </Router>
    );
};

export default App;
