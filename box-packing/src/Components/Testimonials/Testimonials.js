import React, { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Founder, GreenLeaf Organics",
    message:
      "The custom eco-friendly boxes have completely elevated our unboxing experience. The quality, print and finish are all top-notch.",
  },
  {
    name: "Neha Sharma",
    role: "Brand Manager, Aura Skincare",
    message:
      "We needed premium packaging that was also sustainable. The team understood our brief perfectly and delivered right on time.",
  },
  {
    name: "Rahul Verma",
    role: "Owner, BrewBox Coffee",
    message:
      "Sturdy, stylish and on-brand. Our customers constantly compliment the packaging. It really helps us stand out on the shelf.",
  },
  {
    name: "Simran Kaur",
    role: "CEO, NatureDrops",
    message:
      "From samples to final delivery, everything was handled smoothly. The team gave great suggestions for materials and finishes.",
  },
  {
    name: "David Roy",
    role: "Founder, BoldBrew",
    message:
      "Our subscription boxes look so much more premium now. The packaging matches our brand perfectly and is eco-conscious too.",
  },
];

function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState("right"); // for slide animation
  const VISIBLE_COUNT = 3;

  const handleNext = () => {
    setDirection("right");
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setStartIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // window of 3 testimonials: 1,2,3 -> 2,3,4 -> 3,4,5 -> ...
  const visibleTestimonials = Array(VISIBLE_COUNT)
    .fill(0)
    .map((_, i) => testimonials[(startIndex + i) % testimonials.length]);

  return (
    <section className="testimonial-wrapper py-5">
      <div className="container">
        {/* heading */}
        <div className="text-center mb-4 mb-lg-5">
          <p className="text-uppercase small fw-semibold test-kicker mb-1">
            What our customers say
          </p>
          <h2 className="fw-bold test-title mb-2">
            Real stories from brands we pack for.
          </h2>
          <p className="text-muted small mb-0">
            D2C brands, small businesses and growing companies trust us for
            packaging that feels premium and planet-friendly.
          </p>
        </div>

        {/* slider row */}
        <div className="testimonial-container">
          {/* left arrow */}
          <button
            type="button"
            className="test-arrow-btn"
            onClick={handlePrev}
            aria-label="Previous testimonials"
          >
            ‹
          </button>

          {/* cards */}
          <div className="testimonial-window">
            <div className="testimonial-track">
              {visibleTestimonials.map((t, index) => (
                <div
                  key={`${t.name}-${index}-${startIndex}`}
                  className={
                    "testimonial-card " +
                    (direction === "right"
                      ? "slide-from-right"
                      : "slide-from-left")
                  }
                  data-aos="fade-up" data-aos-delay={index * 100}
                >
                  <div className="test-quote-mark">“</div>
                  <p className="testimonial-message mb-3">{t.message}</p>
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <div className="d-flex align-items-center gap-2">
                      <div className="test-avatar">
                        {t.name.charAt(0)}
                      </div>
                      <div className="text-start">
                        <div className="fw-semibold test-name">
                          {t.name}
                        </div>
                        <div className="text-muted small test-role">
                          {t.role}
                        </div>
                      </div>
                    </div>
                    <div className="test-stars">★★★★★</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* right arrow */}
          <button
            type="button"
            className="test-arrow-btn"
            onClick={handleNext}
            aria-label="Next testimonials"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
