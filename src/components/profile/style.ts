import styled from "styled-components";

import { MainContainer } from "../../rules/style";

export const ProfileBox = styled(MainContainer)`
  background-color: #899aafe3;
  padding: 1em;
  border-radius: 0.5em;
  .img-profile {
    width: 20em;
    -webkit-box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.48);
    -moz-box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.48);
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.48);
  }
  .img-logo-framework {
    width: 15em;
    height: 15em;
  }
  .img-logo-nodejs {
    width: 20em;
  }
`;
