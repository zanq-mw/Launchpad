import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./navigation.js";
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

function Pages({ userId }) {
  const [page, setPage] = useState(pages.landing);

  return (
    <div className="screen">
      <nav className="nav">
        <NavBar page={page} setPage={setPage} />
      </nav>
      <main className="content">
        <Routes>
          <Route
            path={pages.landing}
            element={<LandingPage userId={userId} />}
          />
          <Route path={pages.notifications} element={<NotificationsPage />} />
          <Route path={pages.applications} element={<MyApplication />} />
          <Route path={pages.jobs} element={<JobPostings />} />
          <Route path={pages.account} element={<AccountSettings />} />
          <Route path={pages.settings} element={<App />} />
        </Routes>
      </main>
    </div>
  );
}

function AppRouter() {
  const [userId, setUserId] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login user={userId} setUserId={setUserId} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Pages userId={userId} />} />
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
