import VideoCard from './VideoCard';
import AddModal from './AddModal';

const CardContainer = (props) => {
    return (
        <>
            <div className="cards-container">
                <div className="category-title">
                    <h2>{props.category.toUpperCase()}</h2>
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