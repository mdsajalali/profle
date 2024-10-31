import Testimonials from "../Fitness/FitnessContent/Testimonials";
import Companies from "../Home/HomeContent/Companies";
import Contact from "../Home/HomeContent/Contact";
import Footer from "../../components/shared/Footer";
import FreelancerUserProfile from "./FreelancerContent/FreelancerUserProfile";
import user_profile from "../../assets/images/freelancer/user.png";
import FreelancerOffers from "./FreelancerContent/FreelancerOffers";
import FreelancerHero from "./FreelancerContent/FreelancerHero";
import FreelancerNav from "./FreelancerContent/FreelancerNav";

const Freelancer = () => {
  return (
    <>
      <div className="lg:pb-[80px] md:pb-[70px] pb-[52px]">
        <FreelancerNav />
      </div>
      <FreelancerHero />
      <Companies name="Photography Mastery Award" />
      <FreelancerUserProfile user_profile={user_profile} />
      <FreelancerOffers />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Freelancer;
