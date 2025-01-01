export const TimeLineCollege = ({text, data}) => {
    return (
        <>
            <li className="icon-content">
                <div
                    className="card-timeLine"
                    aria-label="college"
                    data-social="college"
                >
                    <svg fill="#1677ff" version="1.1" id="Capa_1"
                         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                         viewBox="0 0 209.632 209.632" xml:space="preserve" stroke="#1677ff">

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

                        <g id="SVGRepo_iconCarrier"> <path
                            d="M177.294,182.326c0,2.761-2.238,5-5,5h-8.029h-16.667H26.376c-9.42,0-17.083-7.664-17.083-17.083v-18.754 c0-9.419,7.663-17.083,17.083-17.083h121.222h16.667h8.029c2.762,0,5,2.239,5,5s-2.238,5-5,5h-3.029v32.92h3.029 C175.056,177.326,177.294,179.565,177.294,182.326z M198.709,122.923c0,2.761-2.238,5-5,5h-7.52h-17.176H68.446 c-8.76,0-15.886-7.126-15.886-15.885V98.691c0-8.759,7.126-15.885,15.886-15.885h100.566h17.176h7.52c2.762,0,5,2.239,5,5 s-2.238,5-5,5h-2.52v25.117h2.52C196.471,117.923,198.709,120.161,198.709,122.923z M68.446,117.923h100.566h12.176V92.805h-12.176 H68.446c-3.245,0-5.886,2.64-5.886,5.885v13.347C62.561,115.283,65.201,117.923,68.446,117.923z M204.632,22.306h-42.829H47.83H5 c-2.762,0-5,2.239-5,5s2.238,5,5,5h4.293v42.758c-2.289,1.589-3.794,4.233-3.794,7.225c0,4.849,3.945,8.794,8.794,8.794 s8.794-3.945,8.794-8.794c0-2.992-1.505-5.635-3.794-7.225V32.306H42.83v39.421c0,2.761,2.238,5,5,5h113.973c2.762,0,5-2.239,5-5 V32.306h37.829c2.762,0,5-2.239,5-5S207.394,22.306,204.632,22.306z"/> </g>

</svg>
                </div>
                <p>{data}</p>
                <div className="tooltip-timeLine">{text}</div>
            </li>
        </>
    )
}