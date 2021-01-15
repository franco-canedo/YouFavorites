import './SearchCard.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const SearchCard = ({ video }) => {
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

                   
                </div>
                <DropdownButton id="dropdown-button-drop-up" 
                    title="Add" drop="up">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
            </div>

        </>
    )
}

export default SearchCard;