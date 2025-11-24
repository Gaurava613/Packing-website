import React from 'react'
import "./Process.css"
function Process() {
  return (
    <section className="py-5" style={{backgroundColor:"#ffffffff"}} >
      <div className="container">
        <div className="process-container row justify-content-center text-center g-4">

          {/* Step 1 */}
          <div className="col-12 col-md-4">
            <div className="step-item mx-auto">
              <div className="step-icon-wrapper mx-auto mb-3"style={{backgroundColor:"#ffffffff"}} >
                <img
                  src="/assets/process-img-1.png"
                  alt="Select your size"
                  className="img-fluid"
                  
                />
              </div>
              <h3 className="step-title mb-2">Select Your Size</h3>
              <p className="step-text mb-0">
                Explore our{" "}
                <a href="#standard-sizes" className="step-link">
                  standard size sample set
                </a>{" "}
                or call us with your custom dimensions.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-12 col-md-4">
            <div className="step-item mx-auto">
              <div className="step-icon-wrapper mx-auto mb-3" style={{backgroundColor:"#ffffffff"}}>
                <img
                  src="/assets/process-img-2.png"
                  alt="Pick your paper"
                  className="img-fluid"
                />
              </div>
              <h3 className="step-title mb-2">Pick Your Paper</h3>
              <p className="step-text mb-0">
                Browse a spectrum of{" "}
                <a href="#paper-colors" className="step-link">
                  paper colors
                </a>{" "}
                to make your box pop.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-12 col-md-4">
            <div className="step-item mx-auto">
              <div className="step-icon-wrapper mx-auto mb-3">
                <img
                  src="/assets/process-img-3.png"
                  alt="Make your mark"
                  className="img-fluid"
                />
              </div>
              <h3 className="step-title mb-2">Make Your Mark</h3>
              <p className="step-text mb-0">
                Add a logo with your choice of foil for the perfect finishing
                touch.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Process
