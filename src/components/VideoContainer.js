import './VideoContainer.css';
import VideoCard from './VideoCard';
import {useState} from 'react';
import AddModal from './AddModal';
import {useSelector} from 'react-redux';

const VideoContainer = () => {
    const [videos, setVideos] = useState([
        '9YffrCViTVk',
        'z73pjtFRZYo',
        '9YffrCViTVk',
        'z73pjtFRZYo',

    ])

    const [show, setShow] = useState(false);
    const chosenCategory = useSelector(state => state.category);

    const toggleModal = () => {
        setShow(prevState => !prevState)
    }
    return (
        <div className="video-container">
           <h2>{chosenCategory}</h2>
            <div className="add-button" onClick={toggleModal}>
                <h1>+</h1>
            </div>
            <div className="cards-container">
            <h2>{chosenCategory.toUpperCase()}</h2>
                {
                    videos.map(video => {
                        
                        return <VideoCard video={video}/>
                    })
                }
            </div>
            <AddModal show={show} 
            toggleModal={toggleModal}
            category={chosenCategory}/>
        </div>
    )
}

export default VideoContainer;