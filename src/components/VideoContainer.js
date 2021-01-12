import './VideoContainer.css';
import VideoCard from './VideoCard';
import {useState} from 'react';

const VideoContainer = () => {
    const [videos, setVideos] = useState([
        '9YffrCViTVk',
        'z73pjtFRZYo',
        '9YffrCViTVk',
        'z73pjtFRZYo',

    ])
    return (
        <div className="video-container">
           
            <div className="add-button">
                <h1>+</h1>
            </div>
            <div className="cards-container">
                {
                    videos.map(video => {
                        
                        return <VideoCard video={video}/>
                    })
                }
            </div>
        </div>
    )
}

export default VideoContainer;