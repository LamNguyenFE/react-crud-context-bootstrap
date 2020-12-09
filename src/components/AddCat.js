import React, { useContext, useEffect, useState } from 'react'
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
import { v4 as uuid } from 'uuid'
import { GlobalContext } from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
export const AddCat = () => {

    const [newCat, setNewCat] = useState({ id: '', name: '', image: '', description: '', price: '' });
    //standard form valid
    const [nameValid, setNameValid] = useState(false);

    const [errorMsg, setErrorMsg] = useState({})

    const { addCat } = useContext(GlobalContext);

    const history = useHistory();

    const onChange = (e) => {
        setNewCat({
            ...newCat,
            [e.target.name]: e.target.value
        })

    }
    const onSubmit = (e) => {
        e.preventDefault();
        const name = newCat.name;
        let nameValid = true;
        // let errorMsg = { ...errorMsg };

        if (name.length == 0) {
            nameValid = false;
            errorMsg.name = "Name can not empty";

            setNameValid(nameValid);//
            setErrorMsg(errorMsg);//
        } else {
            nameValid = true;
            errorMsg.name = "";

            newCat.id = uuid()
            addCat(newCat)

            history.push('/');
        }





    }

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `Add New Cat`;
    });
    return (

        <Container>
            <Row>
                <Col >
                    <Form onSubmit={onSubmit} className="p-4">
                        <h1>Add New Cat</h1>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input
                                name="name"
                                onChange={onChange}
                                value={newCat.name}
                                type="text" placeholder="Enter Name"></Input>
                            {!nameValid && <span className="danger">{errorMsg.name}</span>}

                        </FormGroup>
                        <FormGroup>
                            <Label>Image (try : https://loremflickr.com/320/240)</Label>
                            <Input
                                name="image" name="image"
                                onChange={onChange}
                                value={newCat.image} type="url" placeholder="https://loremflickr.com/320/240"></Input>

                        </FormGroup>

                        <FormGroup>
                            <Label>Description</Label>
                            <Input
                                type="textarea"
                                className="form-control"
                                name="description"
                                row="5"
                                id="description"
                                onChange={onChange}
                                value={newCat.description}
                                placeholder="Enter Description" />


                        </FormGroup>

                        <FormGroup>
                            <Label>Price</Label>
                            <Input
                                name="price"
                                onChange={onChange}
                                value={newCat.price} type="number" placeholder="Enter Price"></Input>

                        </FormGroup>
                        <Button type="submit">Submit</Button>
                    </Form>
                    <p>Name: {newCat.name}</p>
                    <p>Image:</p>
                    <p><img src={newCat.image} /></p>
                    <p>Description: {newCat.description}</p>
                    <p>Price: {newCat.price}</p>
                </Col>
            </Row>
        </Container>
    )
}
