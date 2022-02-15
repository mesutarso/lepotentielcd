import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 18px;
  background-color: ${(props) => props.theme.colors.grey};
  .highlight-title {
    margin-bottom: 0 !important;
  }
  .text {
    font-size: 14px;
    line-height: 16.41px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export default function Highlight() {
  return (
    <Wrapper>
      <Container>
        <Row className="align-items-center">
          <Col
            lg={2}
            md={2}
            sm={2}
            className="bg-primaryColor white base-button w-30 text"
          >
            Infos
          </Col>
          <Col lg={10} md={10} sm={10} className="d-flex align-items-center">
            <p className="highlight-title text ">
              Création d’emplois : En 20 ans, l’ANAPI booste la relance du tissu
              industriel de la RDC
            </p>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
