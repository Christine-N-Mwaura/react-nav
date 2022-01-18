import React, { Component } from 'react';
import Card from './CardsUI';
import Navbar from '../navbar/navbar'

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

class Cards extends Component {
    render() { 
        return ( 
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                <Navbar></Navbar>
                    <div className="col-md-4">
                    <Card imgsrc={img1} title='Time Management'/>
                    </div>
                    <div className="col-md-4"> 
                    <Card imgsrc={img2} title='Holy Spirit'/>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={img3}title='The Word'/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Cards;