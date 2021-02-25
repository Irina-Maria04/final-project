import styled from "styled-components";
import { colors } from "../../const/Colors";

export const HeaderWrapper = styled.header`
  background-color: ${colors.main};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 5px 15px;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  color: ${colors.text};
`;

export const Logo = styled.div`
  padding: 5px;
  img {
    max-height: 100%;
    max-width: 100%;
    border-radius: 3px;
  }
`;
export const InfoMenu = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
export const MenuIcons = styled.div`
  cursor: pointer;
  padding: 10px;
  a {
    font-size: 1.8rem;
    font-weight: 600;
    &:hover {
      transition: color 0.3s;
      color: ${colors.cta};
    }
  }
`;
