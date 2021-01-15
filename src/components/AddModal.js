import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import {API_ROOT} from '../constants';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import youtube from '../apis/youtube';
import {submitSearch} from '../actions';
import {videoResults} from '../actions';

const AddModal = (props) => {
    const [videoSearch, setVideoSearch] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setVideoSearch(e.target.value);
    }

    const search = async (termSearch) => {      
        const response = await youtube.get('/search', {
            params: {
                q: termSearch
            }
        });
        console.log(response.data.items);
        dispatch(submitSearch());
        dispatch(videoResults(response.data.items));
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
                    value={videoSearch}
                    onChange={handleChange}
                    placeholder="Search YouTube" />
                </Form.Group>
            </Form>
            <Button variant="dark" type="button" onClick={() => search(videoSearch)}>
                    Search
            </Button>
            </Modal.Body>
        </Modal>
    </>
    )
}

export default AddModal;