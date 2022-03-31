import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StudentDash from "./student/pages/DashBoard";
import Navbar from "./student/components/navbar/Navbar";
import LandingPage from "./shared/pages/Landing";

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
                <Route path="*" element={<h1>404 Not Found</h1>} />
                <Route path="/" element={<LandingPage />} exact />
                <Route path="/student" element={<StudentDash />} />
                <Route path="/student/application" element={<TempComponent />} />
                <Route path="/student/findUnis" element={<TempComponent />} />
                <Route path="/student/myUnis" element={<TempComponent />} />
            </Routes>
        </Router>
    );
};

export default App;
