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
                  </em>
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
