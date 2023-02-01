import Hero from "../components/landing/hero";
import Companies from "../components/landing/companies";
import Features from "../components/landing/features";
import SocialProof from "../components/landing/socialProof";
import Testimonials from "../components/landing/testimonials";
import Pricing from "../components/landing/pricing";
import FAQ from "../components/landing/faq";
import Trail from "../components/landing/trail";
const Landing = () => {
  return (
    <div className="w-full flex flex-col box-border">
      <Hero />
      <Companies />
      <Features />
      <SocialProof />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Trail />
    </div>
  );
};

export default Landing;
