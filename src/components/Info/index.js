import React from "react";

import Avatar from "../Avatar/index";
import SocialLinks from "../SocialLinks/index";

const Info = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Avatar />
      <div>
        <h1>Hi there! 👋<br/>
        I'm Garrett Green.</h1>
        <h3 style={{fontWeight: '500'}}>Full Stack Software Engineer 👨‍💻<br/> JavaScript Developer</h3>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Info;
