import Companies from "../Home/HomeContent/Companies";
import Footer from "../../components/shared/Footer";
import PhotographyHero from "./PhotographyContent/PhotographyHero";
import PhotographyNav from "./PhotographyContent/PhotographyNav";
import PhotographyShowcase from "./PhotographyContent/PhotographyShowcase";
import user_profile from "../../assets/images/photography/photography_user.png";
import UserProfileTwo from "../Designer/DesignerContent/UserProfileTwo";
import DesignerFeedback from "../Designer/DesignerContent/DesignerFeedback";
import DesignerContent from "../Designer/DesignerContent/DesignerContent";

const Photography = () => {
  return (
    <>
      <PhotographyNav />
      <PhotographyHero />
      <Companies name="Photography Mastery Award" />
      <UserProfileTwo user_profile={user_profile} />
      <PhotographyShowcase />
      <DesignerFeedback title="Genuine Client Feedback and Success Stories from My Work" />
      <DesignerContent center={true} ques="If you have any inquiries" />
      <Footer />
    </>
  );
};

export default Photography;
