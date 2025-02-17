import img1 from "../assets/img/empty-floor-front-modern-building.jpg";
import img2 from "../assets/img/large-office-buildings.jpg";
import img4 from "../assets/img/mumbai-skyline-skyscrapers-construction.jpg";
import img5 from "../assets/img/shiny-night-city.jpg";
import img6 from "../assets/img/urban-traffic-with-cityscape.jpg";

const Banner = () => {
  return (
    <div className="">
      <div className="container mx-auto  ">
        <div
          className="hero min-h-96"
          style={{
            backgroundImage: `url(${img1})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <p className="mb-5">START SEARCHING</p>
              <h1 className="mb-5 text-5xl font-bold">BEST PROPERTIES</h1>

              <button className="btn bg-blue text-white ">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
