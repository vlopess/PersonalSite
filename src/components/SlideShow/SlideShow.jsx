import { useState, useCallback } from "react"
import { CaretLeft, CaretRight } from "@phosphor-icons/react"
import "./SlideShow.css"

export const SlideShow = ({ children }) => {
    const slides = Array.isArray(children) ? children : [children]
    const [current, setCurrent] = useState(0)

    const prev = useCallback(() => {
        setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
    }, [slides.length])

    const next = useCallback(() => {
        setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))
    }, [slides.length])

    if (slides.length === 0) return null

    return (
        <div className="slideshow">
            <div className="slides-track">
                {slides.map((slide, i) => (
                    <div key={i} className={`slide-item${i === current ? " slide-item--active" : ""}`}>
                        {slide}
                    </div>
                ))}
            </div>

            {slides.length > 1 && (
                <>
                    <button className="slideshow-btn slideshow-btn--prev" onClick={prev} aria-label="Previous slide">
                        <CaretLeft size={18} weight="bold" />
                    </button>
                    <button className="slideshow-btn slideshow-btn--next" onClick={next} aria-label="Next slide">
                        <CaretRight size={18} weight="bold" />
                    </button>
                    <div className="slideshow-dots">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                className={`slideshow-dot${i === current ? " slideshow-dot--active" : ""}`}
                                onClick={() => setCurrent(i)}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
