import Companies from "../Home/HomeContent/Companies";
import PhotographyNav from "../Photography/PhotographyContent/PhotographyNav";
import Footer from "../../components/shared/Footer";
import FitnessHero from "./FitnessContent/FitnessHero";
import FitnessOffers from "./FitnessContent/FitnessOffers";
import FitnessUserProfile from "./FitnessContent/FitnessUserProfile";
import Testimonials from "./FitnessContent/Testimonials";
import DesignerContent from "../Designer/DesignerContent/DesignerContent";

const Fitness = () => {
  return (
    <>
      <PhotographyNav />
      <FitnessHero />
      <Companies />
      <FitnessUserProfile />
      <FitnessOffers />
      <Testimonials />
      <DesignerContent
        center={true}
        ques="If you have any inquiries"
        title="Let's Make Your Fitness Goals a Reality"
      />
      <Footer />
    </>
  );
};

export default Fitness;
