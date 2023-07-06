import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SkillsSection from "./SkillsSection";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <SkillsSection></SkillsSection>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
