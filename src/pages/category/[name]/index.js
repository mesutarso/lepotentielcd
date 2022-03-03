
import * as React from "react";
// import { Link } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../../components/Layout/Layout";
import SecondCard from "../../../components/Shared/cards/secondCard";
import PrimaryCard from "../../../components/Shared/cards/primaryCard";
import styled from 'styled-components';


const CategoryPage=()=>{    
  const data=[{
    id:1,
    img:"../img.jpg",
    title:"Sport : barcelone champion UEFA primary, ipsum dolor sit amet consectetur",
    category:"POLITIQUE"
  },
  {
    id:2,
    img:"../img.jpg",
    title:"Sport : barcelone champion UEFA primary, ipsum dolor sit amet consectetur",
    category:"POLITIQUE"
  },
  {
    id:3,
    img:"../img.jpg",
    title:"Sport : barcelone champion UEFA primary, ipsum dolor sit amet consectetur",
    category:"POLITIQUE"
  },
  {
    id:4,
    img:"../img.jpg",
    title:"Sport : barcelone champion UEFA primary, ipsum dolor sit amet consectetur",
    category:"POLITIQUE"
  },
  {
    id:5,
    img:"../img.jpg",
    title:"Sport : barcelone champion UEFA primary, ipsum dolor sit amet consectetur",
    category:"POLITIQUE"
  },
  {
    id:6,
    img:"../img.jpg",
    title:"Sport : barcelone champion UEFA primary, ipsum dolor sit amet consectetur",
    category:"POLITIQUE"
  }
  ,
  {
    id:7,
    img:"../img.jpg",
    title:"Sport : barcelone champion UEFA primary, ipsum dolor sit amet consectetur",
    category:"POLITIQUE"
  },
  {
    id:8,
    img:"../img.jpg",
    title:"Sport : barcelone champion UEFA primary, ipsum dolor sit amet consectetur",
    category:"POLITIQUE"
  }]
  
  const dataFiltered3= data.filter((value,index)=>index<3);

    return(
        <Layout>
            <div className="container-fluid" style={{backgroundColor:"rgba(255,0,0,0.1)"}}>
            <Row className="justify-content-between mb-3">
                    <Col >
                    <Container className="my-5">
                    <h3 style={{fontSize:"19px",color:"red"}} className="mb-4"><b>ACTUALITES CHAUDES </b></h3>
                    <Row>
                            {
                            dataFiltered3.map((article,index)=> <Col lg={4} sm={2} xs={12} className="mb-3" key={index} ><PrimaryCard category={article.category} title={article.title} img={article.img} /></Col>)
                            }  
                    </Row>
                    </Container>
                    </Col>
                </Row>
            </div>

            <Container className="my-4">  
                <Row>
                    {
                    data.map((article,index)=> <Col lg={3} sm={4} className="mt-4"  key={index} ><SecondCard category={article.category} title={article.title} img={article.img} /></Col>)
                    } 
                </Row>
            </Container>
        </Layout>
    )
}
export default CategoryPage;
