import styled from "styled-components";
import { colors } from "../../const/Colors";

export const Container = styled.div`
  max-width: 100%;
  position: relative;
`;
export const Label = styled.div`
  cursor: pointer;
  font-size: 1.8rem;
  &:hover {
    transition: color 0.3s;
    color: ${colors.cta};
  }
`;
export const Dropdown = styled.div`
  position: absolute;
  background-color: ${colors.main};
  border-radius: 2px;
  top: calc(100% + 10px);
  ${({ open }) => (open ? `display: block` : `display: none`)}
`;
export const DropdownItem = styled.div`
  padding: 5px;
  font-weight: 600;
  font-family: sans-serif;
  cursor: pointer;
  margin: 10px 5px;
  &:hover {
    transition: color 0.3s;
    color: ${colors.cta};
  }
`;
