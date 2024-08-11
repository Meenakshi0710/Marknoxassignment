import React from "react";

const Aboutme = () => {
    
  return (
    <>
    <div className="container appawesome" id="about">
    <h1 className="mt-5">About</h1>
    <div className="bg-color container mt-5" style={{"borderRadius":"25px"}}>
    <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card border-0 bg-transparent">
              <div className="card-body">
                <p className="card-text mt-2 lead about-part1" ><em>
                  I am Meenakshi Motiyani, a passionate and skilled Computer
                  Science graduate with a strong foundation in both
                  theoretical and practical aspects of technology. With a
                  Master’s degree in Computer Science and an M.Phil, I bring a strong passion for developing scalable web applications and expertise across the full stack (MERN). 
                  <br></br>
                  Over the years, I have
                  honed my skills in various technologies including MongoDB,
                  Express.js, React, and Node.js, complemented by a strong
                  proficiency in HTML, CSS, and JavaScript. My
                  goal is to leverage my skills and experience to drive
                  technological advancements while continuously growing both
                  personally and professionally.</em>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
           <img src="Images/about-bg.png" className="img-fluid about-part2"/>
        </div>
      </div>
      </div>
    </div>
      
       
    </>
  );
};

export default Aboutme;
