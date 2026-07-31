export const SlideItem = ({imgUrl, videoUrl}) => {
    return (
        <>
            <img src={imgUrl} alt="" loading="lazy" />
            {videoUrl && (
                <video width="100%" height="100%" controls>
                    <source src={videoUrl} type="video/mp4"/>
                </video>
            )}
        </>
    )
}
