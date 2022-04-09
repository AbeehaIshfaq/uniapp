import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StudentDash from "./student/pages/DashBoard";
import Navbar from "./student/components/navbar/Navbar";
import LandingPage from "./shared/pages/Landing";
import Page404 from "./shared/pages/404Page";
import Auth from "./auth/auth";

const TempComponent = () => {
    return (
        <header>
            <Navbar />
        </header>
    );
};

const App = ({ history }) => {
    return (
        <Routes>
            <Route path="*" element={<Page404 />} />
            <Route path="/" element={<LandingPage />} exact />
            {/* <Route
                exact
                path="/student"
                render={(props) => <StudentDash auth={auth} {...props} />}
            /> */}
            <Route path="/student" element={<StudentDash />} />
            <Route path="/student/application" element={<TempComponent />} />
            <Route path="/student/findUnis" element={<TempComponent />} />
            <Route path="/student/myUnis" element={<TempComponent />} />
        </Routes>
    );
};

export default App;
