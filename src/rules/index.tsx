import React, { ReactElement } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ExpProfissional from "../components/experience";
import Menu from "../components/menu";
import Profile from "../components/profile";
import Skills from "../components/skills";
import { GlobalStyle } from "./style";

function BasicRouter(): ReactElement {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Menu />
      <Switch>
        <Route path="/perfil" exact component={Profile} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/experience" exact component={ExpProfissional} />
      </Switch>
    </BrowserRouter>
  );
}

export default BasicRouter;
