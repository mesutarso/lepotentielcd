import React from "react";
import styled from 'styled-components'
import { Col, Row } from "react-bootstrap";

const Title= styled.h3`
font-weight:800;
font-size:13px !important;
`
const Datation=styled.div`
 position:absolute;
 bottom:0;
 font-size:13px;
`

const ThirdCard=({date, title, img})=>{
    return (
        <>
            <Row>
                <Col>
                <img src={img} className="img-fluid" alt="sport" /> 
                </Col>
                <Col lg={7} className="position-relative pb-0">
                    <Title>{title}</Title>
                    <Datation className="p-0 mb-0 text-muted">{date}</Datation>   
                </Col>
                   
            </Row>
            
        </>    
    )
}
export default ThirdCard;  