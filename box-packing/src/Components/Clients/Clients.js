import React from "react";
import "./Clients.css";

function Clients() {
    const logos = [
        "/assets/client-1.png",
        "/assets/client-2.png",
        "/assets/client-3.png",
        "/assets/client-4.png",
        "/assets/client-5.png",
        "/assets/client-6.png",
    ];

    return (
        <section className="clients-section py-5" data-aos="fade-up">
            <div className="container text-center mb-4" data-aos="fade-right">
                <p className="text-uppercase small fw-semibold clients-kicker mb-1">
                    Trusted by brands
                </p>
                <h2 className="clients-title fw-bold mb-2" style={{color:"#0f6c1d"}}>
                    Boxes packed for these amazing clients
                </h2>
                <p className="text-muted small mb-0">
                    From boutique businesses to growing D2C brands, we help them deliver
                    products in eco-conscious, premium packaging.
                </p>
            </div>

            {/* Slider */}
            <div className="clients-slider" data-aos="zoom-in" data-aos-delay="150">
                <div className="clients-track">
                    {[...logos, ...logos].map((logo, index) => (
                        <div className="client-logo-wrap" key={index}>
                            <img src={logo} alt={`Client logo ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Clients;
