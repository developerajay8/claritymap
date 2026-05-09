
import AboutSection from "./users/aboutsection";
import BackgroundEffects from "./users/backgroundeffect";
import ContactSection from "./users/contactsection";
import CTASection from "./users/ctasection";
import ExpertiseSection from "./users/expertisesection";
import Footer from "./users/footer";
import Hero from "./users/hero";
import Navbar from "./users/navbar";
import PortfolioSection from "./users/portfoliosection";
import ProcessSection from "./users/processsection";
import ServicesSection from "./users/servicessection";
import TestimonialsSection from "./users/testimonialssection";
// import VideoSection from "./users/videosection";

export default function Home() {
  return (
   


    <main className="min-h-screen bg-[#050505] overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      {/* <VideoSection /> */}
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <ExpertiseSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection/>
      <Footer />
    </main>
  );
}
