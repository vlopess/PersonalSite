import { Heart } from "@phosphor-icons/react"
import "./Footer.css"

export const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <span className="footer-text">
                    &copy; {new Date().getFullYear()} Victor Lopes
                </span>
            </div>
        </footer>
    )
}
