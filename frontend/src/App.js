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
import StudentfindUnis from "./student/pages/searchUni";
import Unipage from "./student/pages/Unipage";

import ApplicationPageUni from "./uni/pages/Application";
import UniAuth from "./uni/pages/Auth";
import UniDash from "./uni/pages/DashBoard";
import UniInfo from "./uni/pages/UniInfo";
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
    try {
      await server.post(`/${this.state.loggedIn}/logout`);
      this.setState({ loggedIn: null, token: null, userId: null });
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
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/student" element={<Navigate to="/" />} />
          <Route path="/uni" element={<Navigate to="/" />} />
          <Route path="/student/auth" element={<StudentAuth />} />
          <Route path="/uni/auth" element={<UniAuth />} />
        </>
      );
    } else if (loggedIn === "student") {
      routes = (
        <>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<Navigate to="/student" />} />
          <Route path="/student" element={<StudentDash />} />
          <Route path="/student/auth" element={<Navigate to="/student" />} />
          <Route path="/student/application" element={<StudentApplication />} />
          <Route path="/student/viewpage" element={<Unipage />} />

          <Route path="/student/findUnis" element={<StudentfindUnis />} />
          <Route path="/student/myUnis" element={<StudentMyUnis />} />
          <Route path="/student/upload_documents" element={<UploadDoc />} />
        </>
      );
    } else if (loggedIn === "uni") {
      routes = (
        <>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<Navigate to="/uni" />} />
          <Route path="/uni" element={<UniDash />} />
          <Route path="/uni/auth" element={<Navigate to="/uni" />} />
          <Route path="/uni/application" element={<ApplicationPageUni />} />
          <Route path="/uni/setdeadline" element={<SetDeadline />} />
          <Route path="/uni/auth/signup2" element={<UniInfo />} />
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
