import React from "react";
import ReactDOM from "react-dom";

import BaseRouter from "./rules/index";

it("renders without crashing", (): void => {
  const div = document.createElement("div");
  ReactDOM.render(<BaseRouter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
