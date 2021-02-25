import React from "react";
import DropdownMenu from "./Dropdown";
import {
  HeaderWrapper,
  Container,
  Logo,
  MenuIcons,
  InfoMenu,
} from "./Header.style";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUserCircle,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <DropdownMenu />
        <Logo>
          <Link to="/">
            <img src="https://source.unsplash.com/90x60" alt="/" />
          </Link>
        </Logo>
        <InfoMenu>
          <MenuIcons>
            <Link to="/contact">
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </MenuIcons>
          <MenuIcons>
            <Link to="/login">
              <FontAwesomeIcon icon={faUserCircle} />
            </Link>
          </MenuIcons>
          <MenuIcons>
            <Link to="/">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </MenuIcons>
        </InfoMenu>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
