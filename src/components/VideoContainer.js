import './VideoContainer.css';
import { useState, useEffect } from 'react';
import AddModal from './AddModal';
import { useSelector } from 'react-redux';
import CardContainer from './CardContainer';
import SearchContainer from './SearchContainer';


const VideoContainer = ({categories}) => {
    const [videos, setVideos] = useState([
        '9YffrCViTVk',
        'z73pjtFRZYo',
        '9YffrCViTVk',
        'z73pjtFRZYo',

    ]);

    const [show, setShow] = useState(false);
    const chosenCategory = useSelector(state => state.category);
    const search = useSelector(state => state.search);

    const toggleModal = () => {
        setShow(prevState => !prevState)
    }

    const passChosenCategoryInfo = () => {
        
    }
    return (
        <div className="video-container">



            {
                search ? <SearchContainer /> :
                    <>
                        <div className="add-button" onClick={toggleModal}>
                            <h1>+</h1>
                        </div>
                        <CardContainer show={show}
                            videos={videos}
                            toggleModal={toggleModal}
                            category={chosenCategory} 
                            categories={categories}/>

                    </>
            }


        </div>
    )
}

export default VideoContainer;