import React from "react";
import SidebarCard from "../../components/UIElements/SidebarCard/SidebarCard";
import styled from "styled-components";
import PrimeTitle from "../../components/UIElements/PrimeTitle";

const StyledMain = styled.div`
  padding: 40px;
`;

const Home = () => {
  return (
    <StyledMain>
      <PrimeTitle first="Ankit" second="Tiwari" />
      <SidebarCard title="EDUCATION"></SidebarCard>
      <SidebarCard title="EXPERIENCE"></SidebarCard>
      <SidebarCard title="SKILLS"></SidebarCard>
      <SidebarCard title="REFERENCES"></SidebarCard>
    </StyledMain>
  );
};

export default Home;
