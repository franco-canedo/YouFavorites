import './SearchCard.css'

const SearchCard = (props) => {
    return (
        <>
            <div className="search-card">

                <div className="iframe-container-search">
                    <iframe width="300" height="200"
                        src={`https://www.youtube.com/embed/${props.video}`}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen="true"></iframe>
                </div>
                <div className='title-video'>
                    <h3>title</h3>
                    
                </div>
            </div>

        </>
    )
}

export default SearchCard;