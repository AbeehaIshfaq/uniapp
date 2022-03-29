import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import StudentDash from "./student/pages/DashBoard";

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <h1>Home Page</h1>
                        </>
                    }
                    exact
                />
                <Route path="/student" element={<StudentDash />} />
                <Route element={<Navigate replace to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
