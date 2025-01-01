export const TimeLineCertificate = ({text, data}) => {
    return (
        <>
            <li className="icon-content">
                <div
                    className="card-timeLine"
                    aria-label="certificate"
                    data-social="certificate"
                >
                    <svg viewBox="0 0 48.00 48.00" xmlns="http://www.w3.org/2000/svg"
                         fill="#1677ff" stroke="#1677ff" strokeWidth="0.00048000000000000007" transform="rotate(0)">

                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-linejoin="round" stroke="#CCCCCC"
                           strokeWidth="0.288"/>

                        <g id="SVGRepo_iconCarrier"><title>certificate-ssl</title>
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="invisible_box" data-name="invisible box">
                                    <rect width="48" height="48" fill="none"/>
                                    <rect width="48" height="48" fill="none"/>
                                </g>
                                <g id="icons_Q2" data-name="icons Q2">
                                    <g>
                                        <path
                                            d="M20,39H6V9H40a2,2,0,0,0,0-4H4A2,2,0,0,0,2,7V41a2,2,0,0,0,2,2H20a2,2,0,0,0,0-4Z"/>
                                        <path
                                            d="M46,24A13,13,0,0,0,33,11a12.8,12.8,0,0,0-8.3,3H12a2,2,0,0,0,0,4h9.5a11.1,11.1,0,0,0-1.3,4H12a2,2,0,0,0,0,4h8.2a11.1,11.1,0,0,0,1.3,4H12a2,2,0,0,0,0,4H24.7l1.3.9v9.7A2.3,2.3,0,0,0,28,47a1.8,1.8,0,0,0,1.3-.6L33,43l3.7,3.4A1.8,1.8,0,0,0,38,47a2.3,2.3,0,0,0,2-2.4V35A13.2,13.2,0,0,0,46,24ZM36,32.5v7.8l-3-2.8-3,2.8V32.5A9.1,9.1,0,0,1,24,24a9,9,0,0,1,18,0A9.1,9.1,0,0,1,36,32.5Z"/>
                                        <circle cx="33" cy="24" r="5"/>
                                    </g>
                                </g>
                            </g>
                        </g>

                    </svg>
                </div>
                <p>{data}</p>
                <div className="tooltip-timeLine">{text}</div>
            </li>
        </>
    )
}