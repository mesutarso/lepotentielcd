import React from "react";
import styled from 'styled-components'
import { Col, Row } from "react-bootstrap";

const Title= styled.div`
font-weight:700;
font-size:13px !important;
`
const ThirdCard=()=>{
    return (
        <>
            <Row>
                <Col>
                <img src="../img.jpg" className="img-fluid" alt="sport" /> 
                </Col>
                <Col>
                <Title>
                        Sport : barcelone champion UEFA primary, ipsum dolor sit amet
                        consectetur adipisicing elit.
                    </Title>
                </Col>
                   
            </Row>
            
        </>    
    )
}
export default ThirdCard;  