import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle,FaGithub, FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarsul from '../BrandCarousal/BrandCarsul';

const RightNav = () => {
    return (
        <div>
           <ButtonGroup vertical>
        <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>Login via Google</Button>
                    <Button variant="outline-secondary"><FaGithub></FaGithub>Login via Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook/>Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp/>Whatsup</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaGithub/>Github</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter/>Tiwter</ListGroup.Item>
                    {/* <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item> */}
               </ListGroup>
            </div>

    <div>
        <BrandCarsul></BrandCarsul>
    </div>
</div>
    
        
    );
};

export default RightNav;