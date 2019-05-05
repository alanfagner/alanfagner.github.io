import React, { ReactElement } from "react";
import { FaRegBookmark, FaRegFileAlt, FaUserTie } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { ContainerMenu } from "./style";

function Menu(): ReactElement {
  return (
    <ContainerMenu>
      <ul className="nav-pills mb-3 mt-5" id="pills-tab" role="tablist">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/perfil">
            <FaUserTie className="m-2" size={36} color={"#ffffff"} />
            <label className="ml-2">Perfil</label>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/skills">
            <FaRegBookmark className="m-2" size={36} color={"#ffffff"} />
            <label className="ml-2">Habilidades</label>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName="active"
            to="/experience"
          >
            <FaRegFileAlt className="m-2" size={36} color={"#ffffff"} />
            <label className="ml-2">Experiência Profissional</label>
          </NavLink>
        </li>
      </ul>
    </ContainerMenu>
  );
}

export default Menu;
