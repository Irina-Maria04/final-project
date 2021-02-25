import styled from "styled-components";
import { colors } from "../../const/Colors";

export const FooterWrapper = styled.div`
  background-color: ${colors.offwhite};
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  color: ${colors.main};
`;
export const FooterItem = styled.div`
  margin-top: 30px;
  li {
    margin-bottom: 10px;
    &:hover {
      cursor: pointer;
      color: ${colors.cta};
    }
  }
  p {
    align-items: center;
  }
`;
export const ItemTitle = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;
`;
export const SubscribeForm = styled.form`
  width: 100%;
`;
export const SubscribeBox = styled.input`
  width: 70%;
  height: 50px;
  margin-top: 15px;
`;
export const SubscribeButton = styled.input`
  width: 30%;
  height: 50px;
  margin-top: 15px;
  background-color: ${colors.main};
  color: ${colors.text};
  font-size: 1.2rem;
  &:hover {
    color: ${colors.cta};
    cursor: pointer;
  }
`;
export const Terms = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    margin-right: 10px;
  }
`;
