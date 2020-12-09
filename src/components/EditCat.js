import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Container,
    Row,
    Col
} from 'reactstrap';

import { GlobalContext } from '../context/GlobalState';
export const EditCat = (props) => {
    console.log(props)

    const [selectedCat, setSelectedCat] = useState({ id: '', name: '', image: '', description: '', price: '' });
    const { cats, editCat } = useContext(GlobalContext);

    const currentCatId = props.match.params.id;

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('onsubmit', selectedCat)
        editCat(selectedCat);
        history.push('/');
    }

    const onChange = (e) => {
        setSelectedCat({
            ...selectedCat,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        const catId = currentCatId;

        const selectedCat = cats.find(cat => cat.id === catId);

        setSelectedCat(selectedCat);

        document.title = `Edit ${selectedCat.name}`;

    }, [currentCatId, cats])

    if (!selectedCat) {
        return (<><div>Cat doesn't exist</div></>);
    }


    return (
        <Container>
            <Row>
                <Col>

                    <Form onSubmit={onSubmit} className="p-4">
                        <h1>Edit cat</h1>

                        <FormGroup>
                            <Label>Name</Label>
                            <Input
                                name="name"
                                onChange={onChange}
                                value={selectedCat.name} type="text" placeholder="Enter Name"></Input>

                        </FormGroup>

                        <FormGroup>
                            <Label>Image (try : https://loremflickr.com/320/240)</Label>
                            <Input
                                name="image"
                                onChange={onChange}
                                value={selectedCat.image} type="url" placeholder="https://loremflickr.com/320/240"></Input>

                        </FormGroup>

                        <FormGroup>
                            <Label>Description</Label>
                            <Input
                                type="textarea"
                                className="form-control"
                                name="description"
                                onChange={onChange}
                                value={selectedCat.description}
                                placeholder="Enter Description"></Input>

                        </FormGroup>

                        <FormGroup>
                            <Label>Price</Label>
                            <Input
                                name="price"
                                onChange={onChange}
                                value={selectedCat.price} type="number" placeholder="Enter Price"></Input>

                        </FormGroup>

                        <Button type="submit">Edit Cat</Button>
                        <Link to="/" className="btn btn-danger ml-2">Cancel</Link>

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
