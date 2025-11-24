import React from "react";
import "./Box3D.css";

function Box3D() {
  return (
    <section className="py-5 box3d-section" data-aos="fade-right">
      <div className="container">
        <div className="row align-items-center g-4">
          {/* LEFT: text */}
          <div className="about-info-sec col-lg-6 text-start" data-aos="fade-right" data-aos-delay="100">
            <p className="text-uppercase small fw-semibold mb-1" style={{ letterSpacing: "0.15em" }}>
              About Our Boxes
            </p>
            <h2 className="fw-bold mb-3" style={{ fontSize: "2rem" }}>
              Custom packaging that looks as good as it protects.
            </h2>
            <p className="text mb-3" >
              We design and manufacture premium custom boxes tailored to your
              product size, branding and shipping needs. From eco–friendly
              materials to luxury finishes, every box is engineered to make
              unboxing feel special.
            </p>
            <ul className="text small mb-0">
              <li> Custom sizes, shapes and inserts</li>
              <li> High–quality printing & finishing options</li>
              <li> Strong, durable materials for safe shipping</li>
            </ul>
          </div>

          {/* RIGHT: 3D box */}
          <div className="col-lg-6 d-flex justify-content-center" data-aos="fade-left" data-aos-delay="200">
            <div className="box3d-wrapper">
              <div className="box3d-cube">
                <div className="box3d-face box3d-front">Unpack Dreams</div>
                <div className="box3d-face box3d-back">Unpack Dreams</div>
                <div className="box3d-face box3d-right">MyBox.com</div>
                <div className="box3d-face box3d-left">MyBox.com</div>
                <div className="box3d-face box3d-top"></div>
                <div className="box3d-face box3d-bottom"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Box3D;
