import SearchCard from './SearchCard';
import './SearchContainer.css';
import {useSelector} from 'react-redux';

const SearchContainer = () => {

    const videos = useSelector(state => state.videos);
    const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

    return (
        <div className="search-container">
            <h2>Search Results:</h2>
            {
                    videos.map(video => {

                        return <SearchCard key={video.id.videoId} video={video} />
                    })
                }



        </div>
    )
}

export default SearchContainer;