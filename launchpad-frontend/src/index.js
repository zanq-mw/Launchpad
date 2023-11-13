import React, { useState } from "react";

import "./index.css";

import  Login  from "./login-register/login";
import  Register  from "./login-register/register";
import "./startup.css";

import { NavBar } from "./navigation";
import Startup from "./startup";
import reportWebVitals from "./reportWebVitals";
import { LandingPage } from "./landingPage/landingPage";
import { AccountSettings } from "./accountSettingPage/accountSettings";
import { MyApplication } from "./myApplicationPage/myApplication";
import { NotificationsPage } from "./notificationsPage/notificationsPage";
import { JobPostings } from "./jobsPage/jobsPage";
import { App } from "./App";

import {root} from "./root.js"
//const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {<Startup />}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

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



function Pages() {
  const [page, setPage] = useState(pages.register);
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

export default Pages;
