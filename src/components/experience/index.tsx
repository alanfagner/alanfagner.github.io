import moment from "moment";
import React, { ReactElement } from "react";

import { ExpProf, user } from "../../model/User";
import ExpProfissionalBox from "./style";

moment.updateLocale("pt-BR");

function ExpProfissional(): ReactElement {
  function expProfFormat(expProf: ExpProf): ReactElement {
    return (
      <div className="mb-3 card-skill" key={expProf.id}>
        <h2 className="m-0">{expProf.name}</h2>
        <div className="ml-4">
          <div>{expProf.describeEmp}</div>
          <p className="m-0">
            <b>Local:</b> {expProf.local}
          </p>
          <p className="m-0">
            <b>Tempo:</b>
            {`${moment(expProf.initDt).format("L")} - ${moment(
              expProf.fimDt
            ).format("L")}, ${moment(expProf.initDt)
              .startOf("day")
              .to(expProf.fimDt, true)}`}
          </p>
          <p className="m-0 text-wrap-preline">{expProf.describe}</p>
        </div>
      </div>
    );
  }

  return (
    <ExpProfissionalBox>{user.expPro.map(expProfFormat)}</ExpProfissionalBox>
  );
}

export default ExpProfissional;
