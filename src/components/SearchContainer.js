import SearchCard from './SearchCard';
import './SearchContainer.css';
const SearchContainer = (props) => {
    return (
        <div className="search-container">
            <h2>Search results:</h2>
            {
                    props.videos.map(video => {

                        return <SearchCard video={video} />
                    })
                }



        </div>
    )
}

export default SearchContainer;