import { CiLocationOn } from "react-icons/ci";
import logo from "../../../assets/images/footer-logo.png";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaRegCopyright,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#185C5D] ">
      <footer className="footer text-base-content p-10 items-center justify-center">
        <img className="max-h-[230px] max-w-[900px]" src={logo} alt="" />
      </footer>
      <footer className="footer block lg:flex lg:justify-between border-base-300 border-t px-10 py-4 text-white justify-center">
        <div className="flex justify-center items-center gap-4 text-3xl">
          <FaFacebook />
          <FaInstagramSquare />
          <FaYoutube />
          <FaLinkedin />
        </div>
        <div className="mt-5">
          <span className="flex items-center gap-2">
            <CiLocationOn className="text-2xl" />{" "}
            <p>
              Hosue: 230, New D.O.H.S Lake Road, Lane-16, Mohakhali, Dhaka-1206.
            </p>
          </span>
          <div className=" flex items-center justify-end gap-2">
            <FaRegCopyright className="text-xl" />
            <p>Copyright Lemmesay Ltd. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
<p></p>;
