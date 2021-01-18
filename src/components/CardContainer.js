import VideoCard from './VideoCard';
import AddModal from './AddModal';
import {useState, useEffect} from 'react';

const CardContainer = (props) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const categoryVideos = props.categories.find(category => {
           return category.id === props.category.id
        });

        // console.log(categoryVideos);

        if (categoryVideos != undefined) {
            setVideos([...categoryVideos.videos]);
        }

        
    }, [videos]);

    return (
        <>
            <div className="cards-container">
                <div className="category-title">
                    {
                        props.category ? 
                        <h2>{props.category.name.toUpperCase()}</h2> :
                        null
                    }
                </div>

                {
                    videos.length ? 
                    videos.map(video => {

                        return <VideoCard video={video} />
                    }) : null

                }
            </div>
            <AddModal show={props.show}
                toggleModal={props.toggleModal}
                category={props.category} />
        </>
    )
}

export default CardContainer;