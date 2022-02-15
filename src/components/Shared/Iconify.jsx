import React from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";

const Iconwrapper = styled.div`
  .icon {
    font-size: 37px;
    margin: 0  5px;
  }
`;

export default function Iconify({ icon }) {
  return (
    <Iconwrapper>
      <Icon icon={icon} className="icon " />
    </Iconwrapper>
  );
}
