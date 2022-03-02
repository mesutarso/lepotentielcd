import React from "react";
import styled from 'styled-components'

const Title= styled.h2`
font-weight:700;
font-size:14px !important;
line-height:21.5px;
color:black;
`
const SimpleCard=({img,title})=>{
    return (
        <>
            <img src={img} className="img-fluid" alt="sport" /> 
            <Title className="mt-3">
                {title}    
            </Title>
        </>    
    )
}
export default SimpleCard; 