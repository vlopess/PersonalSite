import "../SlideShow.css";

export const SlideItem = ({imgUrl, text}) => {
    return (
        <>
            <div className="mySlides fade">
                <img src={imgUrl} style={{width:"100%"}} alt=""/>
                <div className="text">{text}</div>
            </div>
        </>
    )
}