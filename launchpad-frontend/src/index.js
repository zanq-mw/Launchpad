import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { NavBar } from "./navigation";
import reportWebVitals from "./reportWebVitals";
import { LandingPage } from "./landingPage/landingPage";
import { AccountSettings } from "./accountSettingPage/accountSettings";
import { MyApplication } from "./myApplicationPage/myApplication";
import { NotificationsPage } from "./notificationsPage/notificationsPage";
import { JobPostings } from "./jobsPage/jobsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { App } from "./App";
import  Startup  from "./startup";

reportWebVitals();

export const pages = {
  landing: "/",
  notifications: "/notifications",
  applications: "/applications",
  jobs: "/jobs",
  account: "/account",
  settings: "/settings",
};

function Pages() {
  const [page, setPage] = useState(pages);

    <Router>
      <div className="screen">
        <nav className="nav">
          <NavBar page={page} setPage={setPage} />
        </nav>
        <main className="content">
          <Routes>
            <Route path={pages.landing} element={<LandingPage />} />
            <Route path={pages.notifications} element={<NotificationsPage />} />
            <Route path={pages.applications} element={<MyApplication />} />
            <Route path={pages.jobs} element={<JobPostings />} />
            <Route path={pages.account} element={<AccountSettings />} />
            <Route path={pages.settings} element={<App />} />
          </Routes>
        </main>
      </div>
    </Router>

  );

  
}

ReactDOM.render(
  <React.StrictMode>
    { <Startup /> }
  </React.StrictMode>,
  document.getElementById("root")
);
