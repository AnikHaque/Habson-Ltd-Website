import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
const Brand = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const images = [
    "https://living-brands.co/images/logo.png",
    "https://living-brands.co/images/logo.png",
    "https://living-brands.co/images/logo.png",
    "https://living-brands.co/images/logo.png",
    "https://living-brands.co/images/logo.png",
    "https://living-brands.co/images/logo.png",
    "https://living-brands.co/images/logo.png",
    "https://living-brands.co/images/logo.png",
    "https://living-brands.co/images/logo.png",
    "https://living-brands.co/images/logo.png",
    "https://living-brands.co/images/logo.png",
    "https://living-brands.co/images/logo.png",
    "https://living-brands.co/images/logo.png",
    "https://living-brands.co/images/logo.png",
    "https://living-brands.co/images/logo.png",
    "https://living-brands.co/images/logo.png",
    "https://living-brands.co/images/logo.png",
    "https://living-brands.co/images/logo.png",
    "https://living-brands.co/images/logo.png",
    "https://living-brands.co/images/logo.png",
    "https://living-brands.co/images/logo.png",
    "https://living-brands.co/images/logo.png",
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-4 animate-slideRight">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              className="w-1/5 sm:w-1/4 md:w-1/5 lg:w-1/6 h-32 object-cover"
            />
          ))}
          {images.map((img, index) => (
            <img
              key={index + 20}
              src={img}
              alt={`slide-duplicate-${index}`}
              className="w-1/5 sm:w-1/4 md:w-1/5 lg:w-1/6 h-32 object-cover"
            />
          ))}
        </div>
        <div className="flex space-x-4 animate-slideLeft">
          {images.slice(10, 20).map((img, index) => (
            <img
              key={index + 30}
              src={img}
              alt={`slide-${index}`}
              className="w-1/5 sm:w-1/4 md:w-1/5 lg:w-1/6 h-32 object-cover"
            />
          ))}
          {images.slice(10, 20).map((img, index) => (
            <img
              key={index + 50}
              src={img}
              alt={`slide-duplicate-${index}`}
              className="w-1/5 sm:w-1/4 md:w-1/5 lg:w-1/6 h-32 object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
