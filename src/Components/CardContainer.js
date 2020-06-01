import React from 'react';
import { Context } from '../Context/userContext'
import { useContext } from 'react';
import { Row, Col } from 'react-bootstrap'
import Card from "./Card"

const CardContainer = () => {

    const { varData } = useContext(Context);




    return (
        <div className="card-container">
            <Row>
                
            {varData.map((el, index) => (
                <Col md={4} sm={6} className='card-col' key={index}>
                    
                <Card cardId={el.id} image={el.id} naslov={el.title} categorija={el.category}
                    vremeTraenje={el.timeFrame} icona={el.image} 
                />
                </Col>
                
            ))}
            </Row>
           
        </div>

    )
}

export default CardContainer;