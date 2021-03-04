import styled from "styled-components";
import { colors } from "../const/Colors";

export const ContactWrapper = styled.div`
  color: ${colors.main};
  padding-top: 90px;
  max-width: 1200px;
  width: 100%;
  margin: auto;
`;
export const Title = styled.div`
  font-weight: 600;
  font-size: 1.8rem;
  padding: 15px;
  margin-top: 20px;
`;
export const Container = styled.div`
  background-color: ${colors.offwhite};
  display: flex;
  margin-top: 20px;
  @media (max-width: 1024px) {
    flex-direction: column;
    * {
      max-width: 700px;
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
    * {
      max-width: 300px;
    }
  }
`;
export const ContactInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
export const ContactCard = styled.div`
  padding: 15px;
  div {
    font-size: 1.5rem;
    font-weight: 600;
  }
  p {
    font-size: 1.2rem;
  }
`;
export const ContactForm = styled.form`
  width: 50%;
  div {
    font-size: 1.5rem;
    font-weight: 600;
    padding-top: 15px;
  }
  p {
    margin-top: 10px;
    font-size: 1.2rem;
  }
`;
export const ContactBox = styled.input`
  width: 500px;
  height: 40px;
`;
export const ContactButton = styled.input`
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
export const Terms = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 0.9rem;
  }
  input {
    margin-right: 10px;
  }
`;
export const Map = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
