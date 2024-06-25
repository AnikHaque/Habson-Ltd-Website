import bg from "../../../assets/images/about-bg.png";
import arrowIcon from "../../../assets/images/about-arrow.png";
const About = () => {
  const styles = {
    display: "flex",
    justifyContent: "center",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover", // Adjust based on your preference
    backgroundPosition: "center", // Adjust based on your preference
  };
  return (
    <div className="lg:max-w-[1300px] lg:container lg:mx-auto mx-5 my-10">
      <div
        style={styles}
        className="flex justify-center items-center min-h-60 lg:h-[30vh] rounded-badge"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="text-center">
            <h2 className="text-2xl lg:text-4xl font-sans font-bold  lg:pr-5 mb-2">
              What defines us
            </h2>
            <div className="flex justify-center">
              <img src={arrowIcon} className="w-36 rotate-180 " alt="" />
            </div>
          </div>
          <div>
            <p className="text-xl font-bold text-[#185C5D] mb-5">
              We&apos;re brand architects, crafting narratives with precision,
              fueled by innovation and seamless integration.
            </p>
            <p>
              “Living Brands” is fueled by an unquenchable drive to make your
              brand a global force. We believe in the power of collaboration,
              bringing together the best creative minds, in-house specialists,
              industry partners, and technology leaders - pushing the boundaries
              of what&apos;s possible in digital marketing, crafting impactful
              campaigns that ignite brand growth
            </p>
            <button className="bg-[#185C5D] rounded-full mt-5 px-6 py-2 text-white">
              Discover Our Dynamic Culture
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
