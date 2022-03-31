import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StudentDash from "./student/pages/DashBoard";

const LandingPage = () => {
    return (
        <div>
            <h1>Landing Page</h1>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} exact />
                <Route path="/student" element={<StudentDash />} />
            </Routes>
        </Router>
    );
};

export default App;
