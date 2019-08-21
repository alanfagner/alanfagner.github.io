import "moment/locale/pt-br";

import moment from "moment";
import React, { ReactElement } from "react";
import { String } from "typescript-string-operations";
import angularIcon from "../../assets/img/Angularjs-icon.svg";
import javaIcon from "../../assets/img/Java-icon.svg";
import nodejsIcon from "../../assets/img/Nodejs-icon.svg";
import reactIcon from "../../assets/img/React-icon.svg";
import { user } from "../../model/User";
import { ProfileBox } from "./style";
import linkedIn from "../../assets/img/LI-Logo.png";


moment.updateLocale("pt-BR");

function Profile(): ReactElement {
  const momentDt = moment(user.dtInitWork, "YYYYMMDD");
  const years = momentDt.fromNow();

  return (
    <ProfileBox>
      <div>
        <img
          src={user.picture}
          className="mr-3 img-profile float-left rounded-circle"
          alt={user.name}
        />
        <h1 className="mb-0"> {user.name}</h1>
        <h6 className="text-justify"> {user.describle}</h6>
        <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
          <img className="img-linkedIn" src={linkedIn} />
        </a>
        <div className="text-justify mt-5">
          <h2>Sobre Mim</h2>
          <p className="text-wrap-preline">
            {String.Format(user.summary, years)}
          </p>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-around align-items-center h-100">
        <img className="img-logo-framework" src={javaIcon} alt={user.name} />
        <img className="img-logo-nodejs" src={nodejsIcon} alt={user.name} />
        <img className="img-logo-framework" src={reactIcon} alt={user.name} />
        <img className="img-logo-framework" src={angularIcon} alt={user.name} />
      </div>
    </ProfileBox>
  );
}

export default Profile;
