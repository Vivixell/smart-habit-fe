import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Features from "@/components/Features";
import ContactSection from "@/components/ContactSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main>
      <section id="navbar">
        <Navbar />
      </section>
      <section id="hero">
        <HeroSlider />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="cta">
        <CTASection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </main>
  );
}
