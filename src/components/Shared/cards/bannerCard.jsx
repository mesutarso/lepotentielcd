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
font-weight:800;
font-size:16px !important;
width:80%;
`
const CategoryPost=styled.div`
background-color:red;
color:white;
text-align:center;
font-size:12px !important;
display:inline-block;
`

const SubTitle=styled.span`
background-color:white;
color:red;
box-shadow: 0px 3px 6px rgba(0,0,0,0.5);
font-size:12px !important;
display:inline-block;
`

const CardBody=styled.div`
position:absolute;
left:0;
bottom:10px;
z-index:999;

`
const BannerCard=({img,title,category,subTitle})=>{
    return (
        <>
            <CardWrapper>
                <img src={img} className="img-fluid" alt="sport" /> 
                <CardBody>
                    <CategoryPost className="p-1 mb-0 mx-3"><b>{category}</b></CategoryPost><br/>
                    <SubTitle className="p-1 mx-3 mt-0"><b>{subTitle}</b></SubTitle>
                    
                    <Title className="text-white m-3">
                        {title}
                    </Title>
                </CardBody>
            </CardWrapper>
            
        </>    
    )
}
export default BannerCard;  