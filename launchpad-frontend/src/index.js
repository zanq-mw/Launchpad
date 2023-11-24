import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar, LogoutPopup } from "./navigation.js";
import { LandingPage } from "./landingPage/landingPage.js";
import { AccountSettings } from "./accountSettingPage/accountSettings.js";
import { MyApplication } from "./myApplicationPage/myApplication.js";
import { NotificationsPage } from "./notificationsPage/notificationsPage.js";
import { JobPostings } from "./jobsPage/jobsPage.js";
import { App } from "./App.js";
import Login from "./login-register/login";
import SignUp from "./login-register/register";
import ReactDOM from "react-dom";
import "./index.css";

export const pages = {
  landing: "/landing",
  notifications: "/notifications",
  applications: "/applications",
  jobs: "/jobs",
  account: "/account",
  settings: "/settings",
};

function Pages({ userId, setUserId }) {
  const [page, setPage] = useState(pages.landing);
  const [showLogout, setShowLogout] = useState(false);

  return (
    <div className="screen">
      <nav className="nav">
        <NavBar page={page} setPage={setPage} setShowLogout={setShowLogout} />
      </nav>
      <main className="content">
        <Routes>
          <Route
            path={pages.landing}
            element={<LandingPage userId={userId} setPage={setPage} />}
          />
          <Route
            path={pages.notifications}
            element={<NotificationsPage userId={userId} />}
          />
          <Route 
            path={pages.applications} 
            element={<MyApplication userId={userId} setUserId={setUserId} />} 
          />
          <Route
            path={pages.jobs}
            element={<JobPostings setPage={setPage} />}
          />
          <Route
            path={`${pages.jobs}/:jobId`}
            element={<JobPostings setPage={setPage} />}
          />
          <Route
            path={pages.account}
            element={<AccountSettings userId={userId} setUserId={setUserId} />}
          />
          <Route path={pages.settings} element={<App />} />
        </Routes>
        <LogoutPopup
          setUserId={setUserId}
          setShowLogout={setShowLogout}
          showLogout={showLogout}
        />
      </main>
    </div>
  );
}

function AppRouter() {
  const [userId, setUserId] = useState(sessionStorage.getItem("userId"));
  console.log(sessionStorage.getItem("userId"));

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login user={userId} setUserId={setUserId} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="*"
          element={<Pages userId={userId} setUserId={setUserId} />}
        />
      </Routes>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
