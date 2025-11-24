import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer
      className="footer-section pt-5 pb-3"
      style={{ backgroundImage: "url('/assets/footerImgBg.png')" }}  // <--
    >
      <div className="container position-relative">

        {/* Content */}
        <div className="row gy-4 text-start">
          
          {/* Column 1 */}
          <div className="col-lg-4 col-md-6">
            <h4 className="footer-title mb-3">BoxCraft Packaging</h4>
            <p className="footer-text small">
              We design premium custom boxes that protect your product and elevate your brand — sustainably.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="footer-heading mb-3">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/products">Products</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h6 className="footer-heading mb-3">Packaging Types</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Custom Boxes</a></li>
              <li><a href="#">Luxury Packaging</a></li>
              <li><a href="#">Eco Solutions</a></li>
              <li><a href="#">Brand Printing</a></li>
            </ul>
          </div>

          {/* Gallery */}
          <div className="col-lg-3 col-md-6">
            <h6 className="footer-heading mb-3">Our Work</h6>
            <div className="d-flex flex-wrap gap-2">
              <img src="/assets/ecoBoxBg.png" className="footer-img" alt="sample" />
              <img src="/assets/process-img-1.png" className="footer-img" alt="sample" />
              <img src="/assets/process-img-2.png" className="footer-img" alt="sample" />
              <img src="/assets/process-img-3.png" className="footer-img" alt="sample" />
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="footer-social d-flex justify-content-center gap-3 mt-4">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>

        <hr className="footer-divider mt-4" />

        <p className="footer-copy text-center small mt-2">
          © {new Date().getFullYear()} BoxCraft Packaging — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
