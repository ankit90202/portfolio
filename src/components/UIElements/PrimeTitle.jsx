import React from "react";
import styled from "styled-components";

const PrimaryTitle = styled.div`
  .first {
    color: #fa302d;
  }
  .second {
    color: #000;
  }
`;

const PrimeTitle = (props) => {
  return (
    <PrimaryTitle>
      <h1>
        <span className="first">{props.first}</span>
        <div className="second">{props.second}</div>
      </h1>
    </PrimaryTitle>
  );
};

export default PrimeTitle;
