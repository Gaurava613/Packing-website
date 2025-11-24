import { NavLink } from "react-router-dom";
const bannerUrl = "/images/school-banner.jpg";
function Hero() {
  return (
    <div>
    <section className="hero-section" data-aos="fade-up">
        {/* Background container */}
        <img src="/assets/hero.png"  alt="Hero banner" style={{ width: "100%" }} />
      </section>
    </div>
  )
}
export default Hero;