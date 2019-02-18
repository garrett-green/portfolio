import React from "react";

import {
  Sides,
  LeftSide,
  RightSideHome
} from "../shared/styles/styled-components";

import Info from "../components/Info";
import Who from "../components/Who";
import What from "../components/What";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Interesting from "../components/Interesting";

const IndexPage = () => (
  <div>
    <Sides>
      <LeftSide>
        <Info />
      </LeftSide>
      <RightSideHome>
        <Who />
        <What />
        <Technologies />
        <Projects />
        <Interesting />
      </RightSideHome>
    </Sides>
  </div>
);

export default IndexPage;
