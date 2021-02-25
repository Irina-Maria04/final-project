import React, { useState } from "react";
import { Label, Dropdown, DropdownItem, Container } from "./Dropdown.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const OpenDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Label onClick={() => OpenDropdown()}>
        <FontAwesomeIcon icon={faBars} />
      </Label>
      <Dropdown open={isOpen}>
        <DropdownItem>FICTION</DropdownItem>
        <DropdownItem>NON-FICTION</DropdownItem>
        <DropdownItem>BOARDGAMES</DropdownItem>
        <DropdownItem>LEARNING ENGLISH</DropdownItem>
      </Dropdown>
    </Container>
  );
};

export default DropdownMenu;
