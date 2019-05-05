import styled from "styled-components";

import { MainContainer } from "../../rules/style";

const SkillsBox = styled(MainContainer)`
  flex-direction: row;
  flex-flow: wrap;

  .card-skill {
    width: 25em;
    height: 20em;
  }
`;
export default SkillsBox;
