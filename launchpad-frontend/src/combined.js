import React, { useState } from "react";
import  Login  from "./login-register/login.js";
import  Register  from "./login-register/register.js";
import { NavBar } from "./navigation.js";
import { LandingPage } from "./landingPage/landingPage.js";
import { AccountSettings } from "./accountSettingPage/accountSettings.js";
import { MyApplication } from "./myApplicationPage/myApplication.js";
import { NotificationsPage } from "./notificationsPage/notificationsPage.js";
import { JobPostings } from "./jobsPage/jobsPage.js";
import { App } from "./App.js";

export const pages = {
  login:"login",
  register: "register",
  landing: "landing",
  notifications: "notifications",
  applications: "applications",
  jobs: "jobs",
  account: "account",
  settings: "settings",

};

function Combined() {
  const [page, setPage] = useState(pages.landing);
  return (
    <div className="screen">
      <nav className="nav">
        <NavBar page={page} setPage={setPage} />
      </nav>
      <main className="content">
        {page === pages.login && <Login /> }
        {page === pages.register && <Register />}
        {page === pages.landing && <LandingPage />}
        {page === pages.notifications && <NotificationsPage />}
        {page === pages.applications && <MyApplication/>}
        {page === pages.jobs && <JobPostings />}
        {page === pages.account && <AccountSettings />}
        {page === pages.settings && <App />}
        
      </main>
    </div>
  );

  
}

export default Combined;