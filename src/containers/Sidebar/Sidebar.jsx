import React from "react";
import Profilepic from "../../components/UIElements/Profilepic/Profilepic";
import imports from "../../utils/imports/imports";
import styled from "styled-components";
import SidebarCard from "../../components/UIElements/SidebarCard/SidebarCard";

const StyledSideBar = styled.div`
  background: #fafafa;
  min-height: 100vh;
  padding: 20px 40px;
`;

const Sidebar = () => {
  console.log(imports);
  return (
    <StyledSideBar>
      <Profilepic image={imports.profilePic} />
      <SidebarCard title={"About Me"}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro odit
          ullam perferendis nemo reprehenderit accusamus. Explicabo cupiditate
          in laboriosam cum fugiat maxime quidem ea corporis! Voluptas excepturi
          beatae dolores vero?
        </p>
      </SidebarCard>
      <SidebarCard title={"Contact"}>
        <ul>
          <li>Address</li>
        </ul>
      </SidebarCard>
    </StyledSideBar>
  );
};

export default Sidebar;
