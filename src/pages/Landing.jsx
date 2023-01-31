import Header from "../components/landing/header";
import Hero from "../components/landing/hero";
import Companies from "../components/landing/companies";
import Features from "../components/landing/features";
import SocialProof from "../components/landing/socialProof";
import Testimonials from "../components/landing/testimonials";
import Pricing from "../components/landing/pricing";
import FAQ from "../components/landing/faq";
import Trail from "../components/landing/trail";
import Footer from "../components/landing/footer";
const Landing = () => {
  return (
    <div className="w-full flex flex-col box-border">
      <Header />
      <Hero />
      <Companies />
      <Features />
      <SocialProof />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Trail />
      <Footer />
    </div>
  );
};

export default Landing;
