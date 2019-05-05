import styled from "styled-components";

const widthContainerMenu = "18em";

export const ContainerMenu = styled.div`
  -webkit-box-shadow: 8px 8px 18px 3px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: 8px 8px 18px 3px rgba(0, 0, 0, 0.48);
  box-shadow: 8px 8px 18px 3px rgba(0, 0, 0, 0.48);

  background: #212c3a;
  transition: 0.5s;
  position: fixed;
  z-index: 1;
  height: 100%;
  width: 4.3em;
  top: 0;
  left: 0;
  overflow-x: hidden;

  .nav-pills .nav-link {
    border-radius: 0em;
  }
  ul {
    list-style-type: none;
    padding-left: 0px;
    li {
      a {
        width: ${widthContainerMenu};
        align-items: center;
        padding: 0.5rem 0.5rem;

        label {
          color: #ffffff;
        }
        &:hover {
          background: #5980a9;
        }
      }
      .dropdown-divider {
        margin: 0px;
      }
    }
  }
  &:hover {
    width: ${widthContainerMenu};
  }
`;
