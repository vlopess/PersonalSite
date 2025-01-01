import "./SlideShow.css";
import {useEffect, useState} from "react";

export const SlideShow = ({children}) => {

    const [slideIndex, setSlideIndex] = useState(1);

    const showSlides = (n) => {
        let i;
        let slides = document.getElementsByClassName("mySlides");

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
            slides[slideIndex-1].style.display = "block";
        else
            slides[0].style.display = "block";
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