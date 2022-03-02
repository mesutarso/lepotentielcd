import * as React from "react";
import { Link } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/Layout/Layout";
import SecondCard from "../components/Shared/cards/secondCard";
import SimpleCard from "../components/Shared/cards/simpleCard";
import PrimaryCard from "../components/Shared/cards/primaryCard";
import ThirdCard from "../components/Shared/cards/thirdCard";
import BannerCard from "../components/Shared/cards/bannerCard";
import styled from 'styled-components';

const TitleSection=styled.h3`
background-color:red;
color:white;
text-align:center;
font-size:12px !important;
`
// markup
const IndexPage = () => {

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
  }]

  const dataFiltered4= data.filter((value,index)=>index<4);
  const dataFiltered3= data.filter((value,index)=>index<3);
  const dataFiltered2= data.filter((value,index)=>index<2);
  
  const bannerData={
    id:1,
    img:"../img.jpg",
    title:"Sport : barcelone champion UEFA primary, ipsum dolor sit amet consectetur",
    subTitle:"Avec l'appui du FIFA",
    category:"SPORT"
  };

  const dataWithDate=[{
    id:1,
    img:"../img.jpg",
    title:"Sport : barcelone champion UEFA primary, ipsum dolor sit amet consectetur",
    date:"22/02/2020"
  },
  {
    id:2,
    img:"../img.jpg",
    title:"Sport : barcelone champion UEFA primary, ipsum dolor sit amet consectetur",
    date:"22/02/2020"
  },
  {
    id:3,
    img:"../img.jpg",
    title:"Sport : barcelone champion UEFA primary, ipsum dolor sit amet consectetur",
    date:"22/02/2020"
  },
  {
    id:4,
    img:"../img.jpg",
    title:"Sport : barcelone champion UEFA primary, ipsum dolor sit amet consectetur",
    date:"22/02/2020"
  },
  {
    id:5,
    img:"../img.jpg",
    title:"Sport : barcelone champion UEFA primary, ipsum dolor sit amet consectetur",
    date:"22/02/2020"
  },
  {
    id:6,
    img:"../img.jpg",
    title:"Sport : barcelone champion UEFA primary, ipsum dolor sit amet consectetur",
    date:"22/02/2020"
  }]

  const dataWithDateFiltered5= dataWithDate.filter((value,index)=>index<5);

  return (
    <Layout>
{/*first section */}
     <Container className="my-5">
        <Row>
          <Col lg={8} >
            <BannerCard img={bannerData.img} title={bannerData.title} category={bannerData.category} subTitle={bannerData.subTitle}/>
          </Col>
          <Col lg={4}>
            <Row>
               <Col lg={12} className="p-0">
               <PrimaryCard img={data[0].img} title={data[0].title} category={data[0].category}/>
               </Col>

               {
                dataFiltered2.map((article,index)=> <Col lg={6}  className={`${index}<1 ? " mt-3 px-0" : "mt-3 ps-1 pe-0 " `}  key={index} ><SecondCard category={article.category} title={article.title} img={article.img} /></Col>)
               }
            </Row>
          </Col>
        </Row>
      </Container>
{/* end first section */}

{/* second section */}
      <Container>
      <Row>
        <Col lg={8} >
          <Row>
          <Col lg={12} ><h3 style={{fontSize:"19px",color:"black"}} className="mb-4"><b>ACTUALITES NATIONALES</b></h3></Col>
            {
             dataFiltered4.map((article,index)=> <Col lg={6}  className={`${index}<2 ? " mb-5 " : "" `} key={index} ><SecondCard category={article.category} title={article.title} img={article.img} /></Col>)
            }
          </Row>
        </Col>

        <Col lg={4}>
          <Row className="mt-5 pt-0">
            {
              dataWithDate.map((article,index)=> <Col lg={12} className="mb-3" key={index} ><ThirdCard date={article.date} title={article.title} img={article.img} /></Col>)
            }                   
          </Row>
        </Col>
      </Row>
    </Container>
{/* end second section */}

{/* third section */}
<div className="container-fluid my-5" style={{backgroundColor:"rgba(255,0,0,0.1)"}}>
   <Row>
     <Col >
     <Container className="my-5">
     <h3 style={{fontSize:"19px",color:"red"}} className="mb-4"><b>ACTUALITES AFRICAINE</b></h3>
      <Row>
            {
             dataFiltered3.map((article,index)=> <Col lg={4} sm={2} xs={12} className="mb-3" key={index} ><PrimaryCard category={article.category} title={article.title} img={article.img} /></Col>)
            }  
      </Row>
      <Row >
            {
              dataWithDate.map((article,index)=> <Col lg={4} sm={2} xs={12} className="mt-4" key={index} ><ThirdCard date={article.date} title={article.title} img={article.img} /></Col>)
            } 
      </Row>
    </Container>
     </Col>
   </Row>
</div>
{/* end third section */}
    
{/* forth section */}
    <Container className="my-5">
      <Row>
        <Col lg={8}  className="pe-lg-4">
          <Row><Col lg={12} ><h3 style={{fontSize:"19px",color:"black"}} className="mb-4"><b>ACTUALITE MONDIALE</b></h3></Col></Row>
          <Row>

            {
             dataFiltered4.map((article,index)=> <Col lg={6}  className={`${index}<2 ? " mb-5 " : "" `} key={index} ><SecondCard category={article.category} title={article.title} img={article.img} /></Col>)
            } 
      
          </Row>
        </Col>

        <Col lg={4}>
          <Row><Col lg={12} className="ps-0"><h3 style={{fontSize:"19px",color:"black"}} className="mb-4 "><b>SPORT</b></h3></Col></Row>
          <Row className="bg-black px-1 py-4">

            {
              dataWithDateFiltered5.map((article,index)=> <Col lg={12} className="mb-3 text-white" key={index} ><ThirdCard date={article.date} title={article.title} img={article.img} /></Col>)
            }   
              
              <Col lg={12} className="text-white">
                <button className="btn btn-secondary">Voir plus</button>
              </Col>
          </Row>
        </Col>
      </Row>
    </Container>
{/* end forth section */}



{/* fifth section */}

{/* Bottom section */}
      <Container className="my-5">
      <Row className="justify-content-between align-items-center mb-3">
          <Col lg={1} sm={2} xs={3}>
           <b className="text-danger pb-0">PLUS</b>
          </Col>
          <Col lg={11} sm={10} xs={9} style={{textAlign:"right"}}>
              <hr className="text-danger" style={{opacity:1, padding:"1px"}}/>
          </Col>
        </Row>
      </Container>

      <Container className="my-4">
        <Row className="justify-content-between mb-3">
          <Col lg={3} sm={2} xs={12}>
           <TitleSection className="py-2"><b>POLITIQUE</b></TitleSection>
          </Col>
          <Col lg={3} sm={2} xs={12} style={{textAlign:"right"}} >
              <Link to="/" style={{color:"red", textDecoration:"none"}}>
                <span>PLUS </span>
              </Link>
          </Col>
        </Row>
        <Row>

            {
             dataFiltered4.map((article,index)=> <Col lg={3} sm={2} xs={12}  key={index} ><SimpleCard  title={article.title} img={article.img} /></Col>)
            } 
  
        </Row>
      </Container>

      <Container className="my-4">
        <Row className="justify-content-between mb-3">
          <Col lg={3} sm={2} xs={12}>
           <TitleSection className="py-2"><b>SPORT</b></TitleSection>
          </Col>
          <Col lg={3} sm={2} xs={12} style={{textAlign:"right"}}>
              <Link to="/" style={{color:"red", textDecoration:"none"}}>
                <span>PLUS </span>
              </Link>
          </Col>
        </Row>
        <Row>
            {
             dataFiltered4.map((article,index)=> <Col lg={3} sm={2} xs={12}  key={index} ><SimpleCard  title={article.title} img={article.img} /></Col>)
            } 
        </Row>
      </Container>

      <Container className="my-4">
        <Row className="justify-content-between mb-3">
          <Col lg={3} sm={2} xs={12}>
           <TitleSection className="py-2"><b>SANTE</b></TitleSection>
          </Col>
          <Col lg={3} sm={2} xs={12} style={{textAlign:"right"}}>
              <Link to="/" style={{color:"red", textDecoration:"none"}}>
                <span>PLUS </span>
              </Link>
          </Col>
        </Row>
        <Row>
            {
             dataFiltered4.map((article,index)=> <Col lg={3} sm={2} xs={12}  key={index} ><SimpleCard  title={article.title} img={article.img} /></Col>)
            } 
        </Row>
      </Container>
      {/* Fin Bottom section */}
{/* en fifth section */}
    </Layout>
  );
};

export default IndexPage;
