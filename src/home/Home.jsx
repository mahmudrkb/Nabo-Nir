import Banner from "./Banner";
import Contact from "./Contact";
import Sale from "./Sale";

const Home = () => {
  return (
    <div className=" min-h-screen">
      <Banner></Banner>
      <Sale></Sale>
      <Contact></Contact>
    </div>
  );
};

export default Home;
