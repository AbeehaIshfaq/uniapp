import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StudentDash from "./student/pages/DashBoard";

import Navbar from "./student/components/navbar/Navbar";

const LandingPage = () => {
    return (
        <div>
            <h1>Landing Page</h1>
        </div>
    );
};

const Application = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
        </>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} exact />
                <Route path="/student" element={<StudentDash />} />
                <Route path="/student/application" element={<Application />} />
            </Routes>
        </Router>
    );
};

export default App;
