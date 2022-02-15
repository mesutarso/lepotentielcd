import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "./Logo";
import styled from "styled-components";

const MenuWrapper = styled.nav`
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  height: 110px;
  display: flex;
  align-items: center;
  .menu-container {
  }
`;

export default function Menu() {
  return (
    <MenuWrapper>
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs={4} md={4}></Col>
          <Col xs={4} md={4}>
            <Logo />{" "}
          </Col>
          <Col xs={4} md={4}></Col>
        </Row>
      </Container>
    </MenuWrapper>
  );
}
