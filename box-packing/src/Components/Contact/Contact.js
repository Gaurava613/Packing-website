// src/components/Contact/Contact.jsx
import React from "react";

function Contact() {
  return (
    <section className="contact-section py-5 py-lg-6" data-aos="fade-up" style={{background:"#e2fadfff"}}>
      <div className="container">

        {/* Page Title - left aligned */}
        <div className="mb-4 mb-lg-5 text-start">
          <p
            className="text-uppercase fw-semibold small mb-1"
            style={{ color: "#0f6c1d", letterSpacing: "0.12em" }}
          >
            Contact Us
          </p>
          <h2 className="fw-bold mb-2" style={{ fontSize: "2.1rem", color: "#0f6c1d" }}>
            We’d Love to Hear From You
          </h2>
          <p className="text-muted mb-0">
            Have questions about admissions, curriculum or facilities? Reach out to us
            using the details below or send us a message through the form.
          </p>
        </div>

        {/* FORM + MAP IN SAME ROW */}
        <div className="row g-4">
          {/* LEFT: form */}
          <div className="col-lg-7">
            <div className="bg-white rounded-4 shadow-sm p-4 p-lg-4 text-start">
              <h5 className="fw-semibold mb-3">Send Us a Message</h5>

              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small fw-semibold">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-semibold">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter your phone"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-semibold">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-semibold">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Regarding admissions, fees, etc."
                  />
                </div>

                <div className="col-12">
                  <label className="form-label small fw-semibold">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-success px-4">
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT: map */}
          <div className="col-lg-5">
            <div className="bg-white rounded-4 shadow-sm p-3 p-lg-4 text-start h-100">
              <h5 className="fw-semibold mb-3">Find Us on Map</h5>
              <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.062781688889!2d77.17340157549356!3d28.598255475679654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ddcc34b8259%3A0x6e9b4e5d4798365!2sDelhi%20Public%20School%2C%20R.K.%20Puram!5e0!3m2!1sen!2sin!4v1707540000000!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom contact strip */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center bg-white rounded-4 shadow-sm p-3 p-md-4 text-start">
              <div className="mb-2 mb-md-0">
                <h6 className="fw-semibold mb-1">Still have questions?</h6>
                <p className="text-muted small mb-0">
                  Call us or mail us directly. We’ll be happy to help.
                </p>
              </div>
              <div className="d-flex flex-column flex-md-row gap-2">
                <span className="fw-semibold">
                  📞 +91 98765 43210
                </span>
                <span className="fw-semibold">
                  ✉️ info@brightfutureschool.com
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
