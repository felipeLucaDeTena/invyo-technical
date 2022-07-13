import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdLogout } from "react-icons/md";
import useAuth from "../../context/auth-context";

const Nav = styled.div`
  width: 100%;
  display: flex;
  height: 8vh;
  align-items: center;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 1.3rem;
`;

const Br = styled.div`
  width: 100%;
  background-color: #dc5040;
  height: 5px;
  border-top: 2px solid #ff8477;
  border-bottom: 2px solid #9e352a;
`;
const Logo = styled.img`
  width: 8%;
`;
const NavLink1 = styled(Link)`
  text-decoration: none;
  color: black;
  border: 1px solid black;
  border-radius: 20px;
  padding: 3px 10px;
  margin-left: 5%;

  &:hover {
    color: #dc5040;
    border: 1px solid #dc5040;
  }
`;
const NavLink2 = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: #dc5040;
  border: 1px solid #dc5040;
  border-radius: 20px;
  padding: 3px 10px;
  margin-left: 2%;
  &:hover {
    color: #dc5040;
    border: 1px solid #dc5040;
    background-color: white;
  }
`;

const Logout = styled(MdLogout)`
  margin-left: auto;
  margin-right: 2%;
  font-size: 2rem;
  color: black;
  &:hover {
    color: #226a4d;
  }
`;

function NavBar() {
  const { logout } = useAuth();

  const handleLogout = (ev) => {
    ev.preventDefault();
    logout();
  };

  return (
    <>
      <Nav>
        <Logo src="/invyologo.png" />
        <NavLink1 to="/todo">To do</NavLink1>
        <NavLink2 to="/data">Data</NavLink2>
        <Logout onClick={(ev) => handleLogout(ev)} />
      </Nav>
      <Br />
    </>
  );
}
export default NavBar;
