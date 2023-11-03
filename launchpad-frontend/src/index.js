import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NavBar } from "./navigation";
import reportWebVitals from "./reportWebVitals";
import { LandingPage } from "./landingPage/landingPage";
import { AccountSettings } from "./pages/accountSettings";
import { MyApplication } from "./pages/myApplication";
import { NotificationsPage } from "./notificationsPage/notificationsPage";
import { JobPostings } from "./jobsPage/jobsPage";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Pages />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export const pages = {
  landing: "landing",
  notifications: "notifications",
  applications: "applications",
  jobs: "jobs",
  account: "account",
  settings: "settings",
};

function Pages() {
  const [page, setPage] = useState(pages.landing);

  return (
    <div className="screen">
      <nav className="nav">
        <NavBar page={page} setPage={setPage} />
      </nav>
      <main className="content">
        {page === pages.landing && <LandingPage />}
        {page === pages.messages && <div />}
        {page === pages.applications && <MyApplication/>}
        {page === pages.jobs && <div />}
        {page === pages.account && <AccountSettings/>}
        {page === pages.settings && <div />}
        {page === pages.notifications && <NotificationsPage />}
        {page === pages.applications && <div />}
        {page === pages.jobs && <JobPostings />}
        {page === pages.account && <AccountSettings />}
        {page === pages.settings && <App />}
      </main>
    </div>
  );
}
