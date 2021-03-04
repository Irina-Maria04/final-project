import styled from "styled-components";
import { colors } from "../../const/Colors";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 30px auto;
`;
export const ProductCard = styled.div`
  border: solid #e5e5e5 2px;
  background-color: ${colors.offwhite};
  padding: 5px;
  margin-right: 15px;
  margin-bottom: 40px;
  width: calc(100% / 4 - 60px);
  @media (max-width: 1024px) {
    width: calc(100% / 2 - 30px);
  }
  @media (max-width: 767px) {
    width: calc(100% / 1 - 15px);
  }
`;
export const ProductImg = styled.div`
  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: 0 auto;
  }
`;
export const ProductDescription = styled.div`
  text-align: center;
  font-weight: 600;
  font-family: sans-serif;
  font-size: 1.2rem;
  margin-top: 10px;
  color: ${colors.main};
  &:hover {
    cursor: pointer;
    color: ${colors.cta};
    font-size: 1.3rem;
  }
`;
export const Price = styled.div`
  text-align: center;
  font-weight: 600;
  font-family: sans-serif;
  font-size: 1.2rem;
  margin-top: 10px;
  color: #8e9aaf;
`;
export const AddCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    border: solid 2px #e5e5e5;
    border-radius: 3px;
    background-color: ${colors.main};
    color: ${colors.text};
    text-align: center;
    font-weight: 600;
    font-family: sans-serif;
    font-size: 1.2rem;
    margin-top: 10px;
    padding: 5px 10px;
    width: 150px;
    &:hover {
      cursor: pointer;
      background-color: ${colors.text};
      color: ${colors.main};
    }
  }
`;
