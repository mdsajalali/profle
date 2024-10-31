import Footer from "../../components/shared/Footer";
import AwesomeFeatures from "./ViewDemoContent/AwesomeFeatures";
import CustomizableElementor from "./ViewDemoContent/CustomizableElementor";
import Faq from "./ViewDemoContent/Faq";
import ViewDemoHero from "./ViewDemoContent/ViewDemoHero";
import ViewDemoNav from "./ViewDemoContent/ViewDemoNav";
import WebsitePreview from "./ViewDemoContent/WebsitePreview";

const ViewDemo = () => {
  return (
    <div>
      <div className="pb-[82px]">
        <ViewDemoNav />
      </div>
      <ViewDemoHero />
      <WebsitePreview />
      <CustomizableElementor />
      <AwesomeFeatures />
      <Faq />
      <Footer />
    </div>
  );
};

export default ViewDemo;
