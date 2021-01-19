import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './DeleteVideoModal.css';
import axios from 'axios';
import {API_ROOT} from '../constants';

const DeleteVideoModal = (props) => {

    const deleteVideo = async () => {
        const fd = new FormData();
        fd.append("video_id", props.video.id);
        const token = localStorage.token;
        const response = await axios.delete(`${API_ROOT}/videos/delete`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: fd
        });

        console.log(response);
        props.toggleModal();
        alert(response.data.message);

    }

    return (
        <>
            <Modal show={props.show}
                onHide={props.toggleModal}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Body>
                    <h3>Delete video?</h3>
                    <div className="cancel-delete-video">
                        <div>
                        <Button variant="danger" onClick={deleteVideo}
                        type="button">
                            Delete
                        </Button>
                        </div>


                        <div>
                            <Button variant="primary" type="button" onClick={props.toggleModal}>
                                Cancel
                            </Button>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default DeleteVideoModal;