import VideoCard from './VideoCard';
import AddModal from './AddModal';


const CardContainer = (props) => {

    const iterateCategories = () => {
            const categoryVideos = props.categories.find(category => {
                return category.id === props.category.id;
            });
            
            if (categoryVideos !== undefined) {
                return categoryVideos.videos.map(video => {
                    return <VideoCard video={video} />
                });
            }
        

    };

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
                <div className="flex-video-div">
                {iterateCategories()}
                </div>

            </div>
            <AddModal show={props.show}
                toggleModal={props.toggleModal}
                category={props.category} />
        </>
    )
}

export default CardContainer;