import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import {API_ROOT} from '../constants';
import {useState} from 'react';

const AddModal = (props) => {
    const [videoTitle, setVideoTitle] = useState('');

    const handleChange = (e) => {
        setVideoTitle(e.target.value);
    }

    const search = () => {
        const fd = new FormData();
        console.log('search');

       
    }
    return (
        <>
        <Modal show={props.show} 
        onHide={props.toggleModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            <Modal.Body><Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Search</Form.Label>
                    <Form.Control type="text" 
                    value={videoTitle}
                    onChange={handleChange}
                    placeholder="video title..." />
                </Form.Group>
            </Form>
            <Button variant="dark" onClick={search}>
                    Add to {props.category}
            </Button>
            </Modal.Body>
        </Modal>
    </>
    )
}

export default AddModal;