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
const Title= styled.h2`
font-weight:700;
font-size:13px !important;
`
const CategoryPost=styled.h3`
background-color:red;
color:white;
text-align:center;
box-shadow: 0px 3px 6px rgba(0,0,0,0.5);
font-size:12px !important;
display:inline;
`
const CardBody=styled.div`
position:absolute;
left:0;
bottom:10px;
z-index:999;

`
const PrimaryCard=({img,title,category})=>{
    return (
        <>
            <CardWrapper>
                <img src={img} className="img-fluid" alt="sport" /> 
                <CardBody>
                    <CategoryPost className="p-1 m-3"><b>{category}</b></CategoryPost>
                    <Title className="text-white m-3">
                       {title}
                    </Title>
                </CardBody>
            </CardWrapper>
            
        </>    
    )
}
export default PrimaryCard;  