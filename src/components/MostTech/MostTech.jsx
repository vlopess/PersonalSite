import "./MostTech.css";

export const MostTech = () => {
    return (
        <div className="container-most-tech">
            <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                <span>Principal Stack</span>
                <div className="skill-box">
                    <span className="title">Java</span>

                    <div className="skill-bar">
              <span className="skill-per java">
                <span className="tooltip">38%</span>
              </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">Dart</span>

                    <div className="skill-bar">
      <span className="skill-per dart">
        <span className="tooltip">38%</span>
      </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">Javascript</span>

                    <div className="skill-bar">
      <span className="skill-per js">
        <span className="tooltip">24%</span>
      </span>
                    </div>
                </div>
            </div>
        </div>
    )
}