import styled, { createGlobalStyle } from "styled-components";

import imageFile from "../assets/img/background.jpg";
import { ContainerMenu } from "../components/menu/style";

export const GlobalStyle = createGlobalStyle`
    html {
      height: 100%
    }
    body {
      height: 100%
    }
    #root {
      display: flex;
      flex-direction: column;
      height: 100%
    }
    #root::before {
      background-image: url(${imageFile});
      background-size: cover;
      content: "";
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -2;
      opacity: 0.4;
    }
    .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
      background-color: #899aaf;
    }
    .text-wrap-preline {
      white-space: pre-line;
    }
    .card-skill {
      background-color: #899aafe3;
      -webkit-box-shadow: 8px 8px 18px 3px rgba(0, 0, 0, 0.48);
      -moz-box-shadow: 8px 8px 18px 3px rgba(0, 0, 0, 0.48);
      box-shadow: 8px 8px 18px 3px rgba(0, 0, 0, 0.48);
      
      .card-skill-lbn {
        background-color: #212c3a;
        color: #ffffff;
        font-size: 1.3em;
    }
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: 0.5s;
  margin: 1em 2.05em 1em 7em;
  ${ContainerMenu}:hover + & {
    margin-left: 19.5em;
  }
`;
