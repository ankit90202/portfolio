import React from "react";
import styled from "styled-components";

const SideCard = styled.div`
  padding-bottom: 35px;

  .title {
    position: relative;
    font-size: 20px;
  }
  .title:before,
  .title:after {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 3px;
    background: #d04240;
    transform: skew(-12deg);
  }
  .title:before {
    left: -8px;
  }
  .title:after {
    left: -14px;
  }

  p {
    font-size: 14px;
  }
`;

const SidebarCard = (props) => {
  return (
    <SideCard>
      <h1 className="title">{props.title}</h1>
      {props.children}
    </SideCard>
  );
};

export default SidebarCard;
