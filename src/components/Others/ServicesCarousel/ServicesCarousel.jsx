import Slider from "react-slick";
import "./custom.css";

const ServicesCarousel = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-10">
      <div className="container mx-auto">
        <div className="slider-container">
          <Slider {...settings} className="px-10">
            <div className="hover-container h-[700px] border-r-2 hover:text-white group">
              <div className="text-center h-full flex items-center justify-center p-5">
                <div>
                  <h3 className="text-5xl font-bold text-gray-400 group-hover:text-white transition-colors duration-300 mb-5">
                    Brand Strategy
                  </h3>
                  <p className="carousel-p hidden-on-hover text-justify ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed, libero. Molestias quaerat, facilis laboriosam aut
                    tempora ab quidem? Ullam nemo quis facilis nostrum sint
                    maxime doloremque consequatur vero assumenda distinctio!
                  </p>
                </div>
              </div>
            </div>
            <div className="hover-container h-[700px] border-r-2 hover:text-white group">
              <div className="text-center h-full flex items-center justify-center p-5">
                <div>
                  <h3 className="text-5xl font-bold text-gray-400 group-hover:text-white transition-colors duration-300 mb-5">
                    Brand Strategy
                  </h3>
                  <p className="carousel-p hidden-on-hover text-justify ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed, libero. Molestias quaerat, facilis laboriosam aut
                    tempora ab quidem? Ullam nemo quis facilis nostrum sint
                    maxime doloremque consequatur vero assumenda distinctio!
                  </p>
                </div>
              </div>
            </div>
            <div className="hover-container h-[700px] border-r-2 hover:text-white group">
              <div className="text-center h-full flex items-center justify-center p-5">
                <div>
                  <h3 className="text-5xl font-bold text-gray-400 group-hover:text-white transition-colors duration-300 mb-5">
                    Brand Strategy
                  </h3>
                  <p className="carousel-p hidden-on-hover text-justify ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed, libero. Molestias quaerat, facilis laboriosam aut
                    tempora ab quidem? Ullam nemo quis facilis nostrum sint
                    maxime doloremque consequatur vero assumenda distinctio!
                  </p>
                </div>
              </div>
            </div>
            <div className="hover-container h-[700px] border-r-2 hover:text-white group">
              <div className="text-center h-full flex items-center justify-center p-5">
                <div>
                  <h3 className="text-5xl font-bold text-gray-400 group-hover:text-white transition-colors duration-300 mb-5">
                    Brand Strategy
                  </h3>
                  <p className="carousel-p hidden-on-hover text-justify ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed, libero. Molestias quaerat, facilis laboriosam aut
                    tempora ab quidem? Ullam nemo quis facilis nostrum sint
                    maxime doloremque consequatur vero assumenda distinctio!
                  </p>
                </div>
              </div>
            </div>
            <div className="hover-container h-[700px] border-r-2 hover:text-white group">
              <div className="text-center h-full flex items-center justify-center p-5">
                <div>
                  <h3 className="text-5xl font-bold text-gray-400 group-hover:text-white transition-colors duration-300 mb-5">
                    Brand Strategy
                  </h3>
                  <p className="carousel-p hidden-on-hover text-justify ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed, libero. Molestias quaerat, facilis laboriosam aut
                    tempora ab quidem? Ullam nemo quis facilis nostrum sint
                    maxime doloremque consequatur vero assumenda distinctio!
                  </p>
                </div>
              </div>
            </div>
            <div className="hover-container h-[700px] border-r-2 hover:text-white group">
              <div className="text-center h-full flex items-center justify-center p-5">
                <div>
                  <h3 className="text-5xl font-bold text-gray-400 group-hover:text-white transition-colors duration-300 mb-5">
                    Brand Strategy
                  </h3>
                  <p className="carousel-p hidden-on-hover text-justify ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed, libero. Molestias quaerat, facilis laboriosam aut
                    tempora ab quidem? Ullam nemo quis facilis nostrum sint
                    maxime doloremque consequatur vero assumenda distinctio!
                  </p>
                </div>
              </div>
            </div>
            <div className="hover-container h-[700px] border-r-2 hover:text-white group">
              <div className="text-center h-full flex items-center justify-center p-5">
                <div>
                  <h3 className="text-5xl font-bold text-gray-400 group-hover:text-white transition-colors duration-300 mb-5">
                    Brand Strategy
                  </h3>
                  <p className="carousel-p hidden-on-hover text-justify ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed, libero. Molestias quaerat, facilis laboriosam aut
                    tempora ab quidem? Ullam nemo quis facilis nostrum sint
                    maxime doloremque consequatur vero assumenda distinctio!
                  </p>
                </div>
              </div>
            </div>
            <div className="hover-container h-[700px] border-r-2 hover:text-white group">
              <div className="text-center h-full flex items-center justify-center p-5">
                <div>
                  <h3 className="text-5xl font-bold text-gray-400 group-hover:text-white transition-colors duration-300 mb-5">
                    Brand Strategy
                  </h3>
                  <p className="carousel-p hidden-on-hover text-justify ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed, libero. Molestias quaerat, facilis laboriosam aut
                    tempora ab quidem? Ullam nemo quis facilis nostrum sint
                    maxime doloremque consequatur vero assumenda distinctio!
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
