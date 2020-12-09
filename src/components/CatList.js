import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import {
    Col,
    Container,
    ListGroup,
    ListGroupItem,
    Row,
    // Button

} from 'reactstrap'



import { GlobalContext } from '../context/GlobalState'
import { Cat } from './Cat';

const CatList = () => {
    const { cats } = useContext(GlobalContext);
    console.log(cats);
    if (!cats || !cats.length) {
        return <div>No Cat</div>
    }
    return (

        <Container>
            <Row>
                {cats.map(cat => (
                    <Col xs="12" sm="6" md="4" lg="3" key={cat.id} >
                        <Cat key={cat.id} cat={cat} />
                    </Col>
                ))}
            </Row>
        </Container>

    )
}

export default CatList