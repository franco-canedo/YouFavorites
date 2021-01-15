import './SearchCard.css';
import Button from 'react-bootstrap/Button';

const SearchCard = ({video}) => {
    return (
        <>
            <div className="search-card">

                <div className="iframe-container-search">
                    <iframe width="300" height="200"
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen="true"></iframe>
                </div>
                <div className='title-video'>
                    <h5>{video.snippet.title}</h5>
                    <h6>Channel: {video.snippet.channelTitle}</h6>
                    <p>{video.snippet.description}</p>
                    <Button variant="outline-primary" type="button">Add</Button>
                </div>
            </div>

        </>
    )
}

export default SearchCard;