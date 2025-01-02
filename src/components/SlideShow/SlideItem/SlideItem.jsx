import "../SlideShow.css";

export const SlideItem = ({id, imgUrl, videoUrl}) => {
    return (
        <>
            <div className={"mySlides fade " + id}>
                <img src={imgUrl} alt=""/>
                {videoUrl && (<video width="400" height="300" controls>
                    <source src={videoUrl} type="video/mp4"/>
                    Your browser does not support HTML video.
                </video>)}
            </div>
        </>
    )
}