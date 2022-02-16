import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function BaseBouton({ title, url }) {
  return (
    <ButtonWrapper>
      <Link to={url} className="base-button">
        {title}
      </Link>
    </ButtonWrapper>
  );
}
