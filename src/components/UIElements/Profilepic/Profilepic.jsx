import React from "react";
import styled from "styled-components";

const StyledProfileWrapper = styled.div`
  padding-bottom: 35px;
  text-align: center;

  img {
    border-radius: 50%;
    border: 5px solid #fff;
    box-shadow: 0 0 0 3px #fa302d;
    height: 110px;
    width: 100px;
  }
`;
const Profilepic = (props) => {
  return (
    <StyledProfileWrapper>
      <img src={props.image} alt="" />
    </StyledProfileWrapper>
  );
};

export default Profilepic;
