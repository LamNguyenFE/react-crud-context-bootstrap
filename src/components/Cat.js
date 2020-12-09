import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import {
    Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody
} from 'reactstrap';
import { GlobalContext } from '../context/GlobalState'



export const Cat = (props) => {

    const { id, name, description, price } = props.cat;
    const image = props.cat.image || 'https://via.placeholder.com/320x240.png?text=No+Image'

    const { removeCat } = useContext(GlobalContext);
    function handleDeleteCat(id) {
        if (window.confirm('Sure want to delete?'))
            removeCat(id);
    }

    return (

        <Card className="mb-4">
            <CardImg top width="100%" src={image} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">{name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{price}</CardSubtitle>
                <CardText>{description}</CardText>
                <Link to={`/edit/${id}`} className="btn btn-primary mr-1">Edit</Link>
                <Button onClick={() => handleDeleteCat(id)} color="danger">Delete</Button>
            </CardBody>
        </Card>

    )
}
