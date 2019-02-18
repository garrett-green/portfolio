import styled from "styled-components";
import { media } from "../../utils/responsive-utils";
import { ListItem, UnderlinedLink } from "./styled-components";

export const Wrapper = styled(ListItem)`
  margin: 35px 0;
`;

export const Link = styled(UnderlinedLink)`
  margin-bottom: 10px;
  padding-bottom: 5px;
  display: inline-block;
`;

export const Points = styled.div`
  margin-bottom: 40px;
  line-height: 50px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 400;
  color: #3DB774;
  position: relative;

  &:hover {
    color: #1E7046;
  }

  &:before {
    content: "";
    width: 25px;
    height: 25px;
    border-radius: 100%;
    color: #30A165;
    background-color: #4BC882;
    position: absolute;
    left: -90px;
    top: 0px;
    border: 5px solid #028742;

    ${media.phoneM`
        left: -50px;
      `};
  }

  ${media.phoneM`
       font-size: 22px;
    `};
`;

export const Point = styled.p`
  position: relative;
  padding: 0;
  margin: 15px 0;
  line-height: 25px;
  margin-bottom: 15px;

  &:before {
    content: "";
    width: 15px;
    height: 15px;
    border-radius: 100%;
    color: #30A165;
    background-color: #D1F3D9;
    position: absolute;
    left: -85px;
    top: 4px;
    border: 4px solid #028742;
    ${media.phoneM`
        left: -45px;
    `};
  }
`;

export const GithubUnderlinedLink = styled.a`
  color: white;
  text-decoration: none;
  ${props =>
    props.href &&
    `
      border-bottom: 0px rgba(255, 255, 255, 0.7);
    `} padding-bottom: 1px;
  &:hover {
    color: #bd93d8;
  }
`;
