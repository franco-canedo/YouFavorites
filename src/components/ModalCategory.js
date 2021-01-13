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

        axios.post(`${API_ROOT}/categories`, fd)
        .then(res => {
            console.log(res);
            props.toggleModal();
        }).catch(error => console.log(error));
    }

    return (
        // <div className="show-modal-category">
        //     <Form>
        //         <Form.Group controlId="formBasicEmail">
        //             <Form.Label>New Category</Form.Label>
        //             <Form.Control type="text" placeholder="Category name" />
        //         </Form.Group>
        //         <Button variant="primary" type="button" onClick={props.toggleModal}>
        //             Save
        //         </Button>
        //     </Form>
        // </div>

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