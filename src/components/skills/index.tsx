import React, { ReactElement } from "react";
import { Cell, Pie, PieChart, PieLabelRenderProps, ResponsiveContainer } from "recharts";

import { Skill, user } from "../../model/User";
import SkillsBox from "./style";

function Skills(): ReactElement {
  function renderCustomizedLabel(props: PieLabelRenderProps): ReactElement {
    return (
      <text
        x={props.x}
        y={props.y}
        fill="#000000"
        textAnchor={props.x > props.y ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${props.payload.describe}`}
      </text>
    );
  }

  function pieFormat(skill: Skill): ReactElement {
    return (
      <div className="card-skill d-flex flex-column mb-3" key={skill.describe}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={skill.subSkill}
              innerRadius={60}
              outerRadius={80}
              fill="#000000"
              paddingAngle={5}
              dataKey="value"
              label={renderCustomizedLabel}
            >
              {skill.subSkill.map(
                (entry, index): ReactElement => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                )
              )}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <label className="card-skill-lbn text-center m-0 mt-1">
          {skill.describe}
        </label>
      </div>
    );
  }

  return (
    <SkillsBox>
      <div className="d-flex flex-column mr-4">
        <h2>Backend</h2>
        {user.skills.backend.map(pieFormat)}
      </div>

      <div className="d-flex flex-column mr-4">
        <h2>Frontend</h2>
        {user.skills.frontend.map(pieFormat)}
      </div>

      <div className="d-flex flex-column mr-4">
        <h2>Mobile</h2>
        {user.skills.mobile.map(pieFormat)}
      </div>
    </SkillsBox>
  );
}

export default Skills;
