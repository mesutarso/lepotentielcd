import React from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import SearchField from "./SearchField";

const MenuWrapper = styled.nav`
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  height: 110px;
  display: flex;
  align-items: center;
`;

export default function Menu() {
  return (
    <MenuWrapper>
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs={2} md={2}>
            <Hamburger />
          </Col>
          <Col xs={4} md={4}>
            <Logo />
          </Col>
          <Col xs={3} md={3}>
            <SearchField />
          </Col>
        </Row>
      </Container>
    </MenuWrapper>
  );
}
