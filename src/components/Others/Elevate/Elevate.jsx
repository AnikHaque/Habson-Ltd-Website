import bg from "../../../assets/images/cta-bg.png";
const Elevate = () => {
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
        className="flex justify-center items-center min-h-60 lg:h-[30vh] rounded-badge"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10">
          <h2 className="text-4xl lg:text-5xl font-sans font-medium text-white lg:pr-5">
            Elevate Your Brand Today!
          </h2>
          <div>
            <p className="text-white">
              Ready to transform your digital presence? Let&apos;s create magic
              together! book our services now!
            </p>
            <button className="bg-white rounded-full mt-5 px-6 py-2 text-[#185C5D] font-semibold">
              Book A Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elevate;
