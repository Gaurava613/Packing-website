
import About from "../About/About";
import Box3D from "../Box/Box2D";
import Clients from "../Clients/Clients";
import Contact from "../Contact/Contact";
import EcoFriendly from "../EcoFriendly/EcoFriendly";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Process from "../Process/Process";
import Testimonials from "../Testimonials/Testimonials";
// import StatsSection from "../Stats/stats";
// import VisionSection from "../Vision/vision";

function Home(){
    return(
        <div>
            <Hero/>
            <Process/>
            {/* <VisionSection/>
            <StatsSection/> */}
            <Box3D/>
            <EcoFriendly/>
            <Clients/>
            <Contact/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}
export default Home;