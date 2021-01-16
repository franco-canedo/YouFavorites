import VideoCard from './VideoCard';
import AddModal from './AddModal';

const CardContainer = (props) => {
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
                    props.videos.map(video => {

                        return <VideoCard video={video} />
                    })
                }
            </div>
            <AddModal show={props.show}
                toggleModal={props.toggleModal}
                category={props.category} />
        </>
    )
}

export default CardContainer;