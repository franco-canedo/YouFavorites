import './VideoCard.css';
import Button from 'react-bootstrap/Button';
import DeleteVideoModal from './DeleteVideoModal';
import {useState} from 'react';

const VideoCard = (props) => {
    const [show, setShow] = useState(false);

    const toggleModal = () => {
        setShow(prevState => !prevState);
    }
    return (
        <>
            <div className="card">

                <div className="iframe-container">
                    <iframe width="300" height="200"
                        src={`https://www.youtube.com/embed/${props.video.source}`}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen="true"></iframe>
                </div>
                <div className='title-video'>
                    <h5>{props.video.title}</h5>
                    <Button variant="outline-danger" 
                    size="sm" type="button" onClick={toggleModal}>Delete</Button>
                </div>
            </div>
            <DeleteVideoModal show={show} 
            toggleModal={toggleModal}
            video={props.video}/>
        </>
    )
}

export default VideoCard;