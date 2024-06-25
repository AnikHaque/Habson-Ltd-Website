import bg from "../../../assets/images/cta-2-bg.png";
import img1 from "../../../assets/images/cta-round.png";
const Journey = () => {
  const styles = {
    display: "flex",
    justifyContent: "center",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover", // Adjust based on your preference
    backgroundPosition: "center", // Adjust based on your preference
  };
  return (
    <div className="lg:max-w-[1000px] lg:container lg:mx-auto mx-5 my-10">
      <div
        style={styles}
        className="flex justify-center items-center min-h-60 lg:h-[40vh] rounded-badge"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-10 items-center py-10">
          <div>
            <h2 className="text-4xl lg:text-5xl font-sans font-medium text-white">
              Start Your Journey With Us Now
            </h2>
            <button className="bg-white rounded-full mt-5 px-6 py-2 text-[#185C5D] font-semibold">
              Start Now
            </button>
          </div>
          <h2 className="text-4xl lg:text-6xl font-sans font-medium text-white lg:px-20">
            <img className="max-w-60" src={img1} alt="" />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Journey;
