import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications (BCA)</h4>
                <h5>IITM College</h5>
              </div>
              <h3>2018 - 2021</h3>
            </div>
            <p>
              Affiliated with University of Kashmir. Gained strong foundation in computer science and software development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Assistant Manager – Software Dev & Design</h4>
                <h5>Premier Sales Agency</h5>
              </div>
              <h3>2022 - 2025</h3>
            </div>
            <p>
              Developed full stack applications using React and .NET. Built RESTful services with .NET Web API and implemented database solutions using SQL Server. Optimized application performance and customized WordPress sites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
