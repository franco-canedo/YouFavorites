import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import {API_ROOT} from '../constants';


const ModalCategory = (props) => {
    const [category, setCategory] = useState('');

    const handleChange = (e) => {
        setCategory(e.target.value);
    }

    const createCategory = () => {
        const fd = new FormData();
        fd.append('name', category);
        fd.append('google_token', localStorage.google_token);

        axios.post(`${API_ROOT}/categories`, fd)
        .then(res => {
            props.addCategoryClient(res.data);
            props.toggleModal();
        }).catch(error => {
            console.log(error);
            alert(error);
        });
    }

    return (
        <>
            <Modal show={props.show} onHide={props.toggleModal} 
             aria-labelledby="contained-modal-title-vcenter"
             centered>
                <Modal.Body>
                    <div className="modal-div">
                       
                    <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>New Category</Form.Label>
                        <Form.Control type="text" 
                        value={category}
                        onChange={handleChange}
                        placeholder="Category name" />
                    </Form.Group>
                </Form>
                <Button variant="dark" onClick={createCategory}>
                        Save Changes
                </Button>
                </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalCategory;