import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./Common/Header";
import PageNotFound from "./Common/PageNotFound";
import UserInfoPage from "./users/UserInfoPage";
import SignInPage from "./auth/SignInPage";
import LogInPage from "./auth/LogInPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/users" component={UserInfoPage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/login" component={LogInPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
export default App;
