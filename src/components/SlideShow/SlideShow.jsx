import "./SlideShow.css";
import {useEffect, useState} from "react";

export const SlideShow = ({id, children}) => {

    const [slideIndex, setSlideIndex] = useState(1);

    const showSlides = (n) => {
        let i;
        let slides = document.getElementsByClassName(id);

        if (n > slides.length) {
            setSlideIndex(1);
        }

        if (n < 1) {
            setSlideIndex(slides.length);
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        if((slideIndex - 1) < slides.length)
        {
            slides[slideIndex-1].style.display = "flex";
            slides[slideIndex-1].style.justifyContent = "center";
        }
        else
        {
            slides[0].style.display = "flex";
            slides[0].style.justifyContent = "center";
            setSlideIndex(1);
        }
    }

    useEffect(() => {
        showSlides(1);
    }, [showSlides]);

    const plusSlides = (n) => {
        setSlideIndex(slideIndex + n);
        showSlides(slideIndex);
    }



    return (
        <>
            <div className="slideshow-container">
                {children}
                <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
                <a className="next" onClick={() => plusSlides(1)}>❯</a>
            </div>
        </>
    )
}