import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Sheard/Footer/Footer';
import Header from '../Pages/Sheard/Header/Header';
import LiftNav from '../Pages/Sheard/LiftsideNav/LiftNav';
import RightNav from '../Pages/Sheard/RightsideNav/RightNav';


const Main = () => {
    return (
        
       <div>
        <Header></Header>
         <Container>
            <Row>
               <Col lg="3" className='d-none d-lg-block'>
               <LiftNav></LiftNav>
               </Col>

               <Col lg="7">
               <Outlet></Outlet>
               </Col>

               <Col lg="2">
               <RightNav></RightNav>
               </Col>
               
            </Row>
              
              
          
        </Container>
        <Footer></Footer>
       </div>
        
    );
};

export default Main;