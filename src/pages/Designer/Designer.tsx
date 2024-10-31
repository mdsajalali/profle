import Companies from "../Home/HomeContent/Companies";
import Footer from "../../components/shared/Footer";
import user_profile from "../../assets/images/hero_two/user_profile.png";
import NavTwo from "./DesignerContent/NavTwo";
import DesignerHero from "./DesignerContent/DesignerHero";
import UserProfileTwo from "./DesignerContent/UserProfileTwo";
import ProjectsTwo from "./DesignerContent/ProjectsTwo";
import DesignerFeedback from "./DesignerContent/DesignerFeedback";
import DesignerContent from "./DesignerContent/DesignerContent";

const Designer = () => {
  return (
    <>
      <div className="lg:pb-[80px] md:pb-[70px] pb-[53px]">
        <NavTwo />
      </div>
      <DesignerHero />
      <Companies name="Companies that I helped to grow" />
      <UserProfileTwo user_profile={user_profile} />
      <ProjectsTwo />
      <DesignerFeedback title=" Authentic Client Feedback and Success Stories from My Projects" />
      <DesignerContent title=" Let’s turn your vision into reality." />
      <Footer />
    </>
  );
};

export default Designer;
