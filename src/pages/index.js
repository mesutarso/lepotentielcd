import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/Layout/Layout";
import SecondCard from "../components/Shared/cards/secondCard";
import SimpleCard from "../components/Shared/cards/simpleCard";
import PrimaryCard from "../components/Shared/cards/primaryCard";
import ThirdCard from "../components/Shared/cards/thirdCard";
import BannerCard from "../components/Shared/cards/bannerCard";
// markup
const IndexPage = () => {
  return (
    <Layout>
       <Container className="my-5">
      <h1>Page d'Accueil</h1>
        <Row>
        <Col lg={4} sm={2} xs={12}>
            <BannerCard/>
          </Col>
          <Col lg={4} sm={2} xs={12}>
            <PrimaryCard/>
          </Col>
          <Col lg={4} sm={2} xs={12}>
            <SecondCard/>
          </Col>
          <Col lg={4} sm={2} xs={12}>
            <SimpleCard/>
          </Col>
          <Col lg={4} sm={2} xs={12}>
            <ThirdCard/>
          </Col> 
        </Row>
      </Container>
    </Layout>
  );
};

export default IndexPage;
