import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import Companies from "./HomeContent/Companies";
import Contact from "./HomeContent/Contact";
import Feedback from "./HomeContent/Feedback";
import Hero from "./HomeContent/Hero";
import Projects from "./HomeContent/Projects";
import UserProfile from "./HomeContent/UserProfile";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <UserProfile />
      <Companies name="Companies that I helped to grow" />
      <Projects />
      <Feedback />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
