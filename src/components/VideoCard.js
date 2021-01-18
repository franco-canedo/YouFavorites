import './VideoCard.css';

const VideoCard = (props) => {
    return (
        <>
            <div className="card">

                <div className="iframe-container">
                    <iframe width="300" height="200"
                        src={`https://www.youtube.com/embed/${props.video.source}`}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen="true"></iframe>
                </div>
                <div className='title-video'>
                    <h5>{props.video.title}</h5>
                </div>
            </div>

        </>
    )
}

export default VideoCard;