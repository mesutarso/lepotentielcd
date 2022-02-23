import React from "react";
import styled from 'styled-components'

const Title= styled.div`
font-weight:700;
font-size:14px !important;
line-height:21.5px;
`
const CategoryPost=styled.h2`
background-color:red;
color:white;
position:absolute;
font-size:12px !important;
bottom:0;
left:0;
box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
`
const SecondCard=()=>{
    return (
        <>
            <div className="position-relative">
                <img src="../img.jpg" className="img-fluid" alt="sport" /> 
                <CategoryPost className="px-2 py-1 mb-0"><b>SPORT</b></CategoryPost>
            </div>
            <Title className="mt-3">
                Sport : barcelone champion UEFA Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Totam explicabo magnam molestiae.
            </Title>
        </>    
    )
}
export default SecondCard; 