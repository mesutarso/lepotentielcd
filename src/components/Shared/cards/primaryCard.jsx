import React from "react";
import styled from 'styled-components'

const CardWrapper=styled.div`
position:relative;
    &:after{
    content:"";
    background-color:rgba(0,0,0,0.4);
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    }
`
const Title= styled.div`
font-weight:700;
font-size:13px !important;
`
const CategoryPost=styled.h5`
background-color:red;
color:white;
width:20%;
text-align:center;
box-shadow: 0px 3px 6px rgba(0,0,0,0.5);
font-size:14px !important;
`
const CardBody=styled.div`
position:absolute;
left:5px;
bottom:10px;
z-index:999;
`
const PrimaryCard=()=>{
    return (
        <>
            <CardWrapper>
                <img src="../img.jpg" className="img-fluid" alt="sport" /> 
                <CardBody>
                    <CategoryPost className="px-2 py-1 m-3"><b>SPORT</b></CategoryPost>
                    <Title className="text-white m-3">
                        Sport : barcelone champion UEFA primary, ipsum dolor sit amet
                        consectetur adipisicing elit.
                    </Title>
                </CardBody>
            </CardWrapper>
            
        </>    
    )
}
export default PrimaryCard;  