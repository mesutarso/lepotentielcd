import React from "react";
import styled from 'styled-components'

const Title= styled.h2`
font-weight:700;
font-size:14px !important;
line-height:21.5px;
color:black;
`
const SimpleCard=()=>{
    return (
        <>
            <div className="position-relative">
                <img src="../img.jpg" className="img-fluid" alt="sport" /> 
            </div>
            <Title className="mt-3">
                Sport : barcelone champion UEFA Lorem, ipsum dolor 
                
            </Title>
        </>    
    )
}
export default SimpleCard; 