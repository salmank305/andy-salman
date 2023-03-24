import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <p style={{backgroundColor:" #172238",padding:"10px",position:"relative",left:"0",bottom:"0" }}>
      <span dangerouslySetInnerHTML={{ __html: "&copy; " }} />
      COPYRIGHT 2023 BY CSELP | DESIGN :
      <a href="https://andysoftwares.com" style={{textDecoration:'none',color:"#e69412"}}> ANDYSOFTWARES</a>
    </p>
  );
};

