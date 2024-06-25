import heroImg from "../../../assets/images/hero-img.png";
const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <h2 className=" mb-6 font-sans font-bold tracking-tight text-[#185C5D] text-4xl sm:leading-none lg:text-6xl">
                Crafting Experiences That Unlock Brand Magic
              </h2>
              <p className="text-base text-[#323232] md:text-lg">
                At HABSON, innovation meets imagination to spark wonder and
                create truly magical brand experiences.
              </p>
            </div>
            <button className="bg-[#185C5D] rounded-full text-white px-10 py-3">
              Let&apos;s Talk
            </button>
          </div>
          <div className="relative">
            <img className=" w-[400px]" src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
