import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <StyledNav>
      <NavLink to="/" id="mudarCor" className="border-top">
        Home
      </NavLink>

      <NavLink to="/Classic" id="mudarCor">
        Classic-Rock
      </NavLink>

      <NavLink to="/Heavy" id="mudarCor" className="border-bottom">
        Heavy-Metal
      </NavLink>
    </StyledNav>
  );
}

<script src="js/mudarCorFundo"></script>;

const StyledNav = styled.nav`
  text-align: center;
  display: flex;
  flex-flow: column;
  background: black;
  border-radius: 1rem 0 0 1rem;

  a {
    padding: 4rem;
    border: 1px solid #000;
    text-decoration: none;
    color: white;
    font-size: 17px;
    font-weight: bold;
    transition: 0.5s;
  }

  a:hover,
  a:focus {
    color: white;
    background: blue;
  }

  .border-top {
    border-radius: 15px 0 0 0;
  }

  .border-bottom {
    border-radius: 0 0 0 15px;
  }
`;

export default Nav;
