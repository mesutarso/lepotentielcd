import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import BaseBouton from "../Shared/BaseBouton";

const FooterWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  .footer-bottom {
    background-color: ${(props) => props.theme.colors.secondary};
    color: #fff;
    padding: 50px 0;
  }
  .cta-abonnement {
    background-color: ${(props) => props.theme.colors.primary};
    padding: 50px 0;
    .wrapper {
      width: 60%;
      color: #fff;
      .title {
        font-size: 25px;
        line-height: 32px;
        font-weight: 700;
      }
      .description {
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
      }
      .base-button {
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        text-decoration: none;
        text-align: center;
        background-color: #fff;
        color: ${(props) => props.theme.colors.primary};
        transition: all 0.3s ease;
        border-radius: 5px;
        :hover {
          background-color: ${(props) => props.theme.colors.secondary};
          color: #fff;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="cta-abonnement">
        <Container className="d-flex justify-content-center">
          <div className="wrapper">
            <h2 className="text-center title mb-3">
              Recevez l’information qu’il vous faut
            </h2>
            <p className="text-center description mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque id a dolor cras malesuada orci, mus vitae tellus.
              Eget sagittis, mauris nunc
            </p>
            <BaseBouton title="Abonnez-vous" url="/" />
          </div>
        </Container>
      </div>
      <footer className="footer-bottom">
        <Container>
          <Row>
            <Col md={12} lg={4}>
              Actualités
            </Col>
            <Col md={12} lg={4}>
              Services
            </Col>
            <Col md={12} lg={4}>
              Newsletter
            </Col>
          </Row>
        </Container>
      </footer>
    </FooterWrapper>
  );
}
