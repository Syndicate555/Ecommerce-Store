import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../icon.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper
        className="navbar navbar-expand-sm 
      navbar-dark px-sm-5"
      >
        {/* 
        https://www.iconfinder.com/680017/camera_image_photo_photography_icon
        
        Creative Commons (Attribution-Noncommercial 3.0 Unported);
        https://www.iconfinder.com/laurareen */}
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Syndicate Store
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus"></i>
            </span>
            My cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link {
  color: var(--mainWhite) !important;
  font-size: 2rem;
  text-transform:capitalize;
}
@media (max-width: 576px) {
  .navbar-nav {
    flex-direction: row !important;
`;
