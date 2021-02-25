import styled from "styled-components";
import { colors } from "../const/Colors";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  background-color: ${colors.offwhite};
  max-width: 32rem;
  padding: 4rem;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  h1 {
    color: ${colors.main};
    font-weight: 600;
    margin-bottom: 15px;
  }
`;
export const Input = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 10px;
`;
export const LoginButton = styled.input`
  width: 150px;
  height: 50px;
  margin-top: 15px;
  background-color: ${colors.main};
  color: ${colors.text};
  font-size: 1.2rem;
  border-radius: 3px;
  &:hover {
    color: ${colors.cta};
    cursor: pointer;
  }
`;
