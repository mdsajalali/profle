import Footer from "../../components/shared/Footer";
import DesignerContent from "../Designer/DesignerContent/DesignerContent";
import DesignerFeedback from "../Designer/DesignerContent/DesignerFeedback";
import NavTwo from "../Designer/DesignerContent/NavTwo";
import LawyerHero from "./LawyerContent/LawyerHero";
import LawyerUserProfile from "./LawyerContent/LawyerUserProfile";
import MyServices from "./LawyerContent/MyServices";

const Lawyer = () => {
  return (
    <>
      <div className="pb-20">
        <NavTwo />
      </div>
      <LawyerHero />
      <LawyerUserProfile />
      <MyServices />
      <DesignerFeedback title="Genuine Client Testimonials and Success Stories from My Projects" />
      <DesignerContent
        center={true}
        ques="If you have any inquiries"
        title="Let’s Achieve Your Legal Goals Together"
      />
      <Footer />
    </>
  );
};

export default Lawyer;
