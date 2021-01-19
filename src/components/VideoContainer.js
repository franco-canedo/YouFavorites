import './VideoContainer.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CardContainer from './CardContainer';
import SearchContainer from './SearchContainer';


const VideoContainer = ({categories}) => {

    const [show, setShow] = useState(false);
    const chosenCategory = useSelector(state => state.category);
    const search = useSelector(state => state.search);

    const toggleModal = () => {
        setShow(prevState => !prevState)
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
                            toggleModal={toggleModal}
                            category={chosenCategory} 
                            categories={categories}/>
                    </>
            }
        </div>
    )
}

export default VideoContainer;