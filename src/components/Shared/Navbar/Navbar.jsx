import logo from "../../../assets/images/logo.png";
const Navbar = () => {
  return (
    <div>
      <div className="navbar border-b">
        <div className="navbar-start">
          <div className="dropdown">
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <img className="w-20" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
