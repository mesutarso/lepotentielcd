import React from "react";
import styled from 'styled-components'
import { Col, Row } from "react-bootstrap";

const Title= styled.h3`
font-weight:700;
font-size:13px !important;
color:black;
`
const Datation=styled.div`
 position:absolute;
 bottom:0;
 font-size:13px;
`

const ThirdCard=()=>{
    return (
        <>
            <Row>
                <Col>
                <img src="../img.jpg" className="img-fluid" alt="sport" /> 
                </Col>
                <Col lg={7} className="position-relative pb-0">
                    <Title>Sport : barcelone champion UEFA primary, ipsum dolor sit amet</Title>
                    <Datation className="p-0 mb-0 text-muted">22-04-2022</Datation>   
                </Col>
                   
            </Row>
            
        </>    
    )
}
export default ThirdCard;  