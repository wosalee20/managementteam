import { Link } from "react-router-dom";
import { toggleNavbar } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../utils/logoutUtils";

function Navbar() {
  const isNavbarVisible = useSelector((state) => state.user.isNavbarVisible);
  const dispatch = useDispatch();
  const currentPath = window.location.pathname;

  const handleLogoutClick = () => {
    handleLogout(dispatch);
    toggleDropdown();
  };

  const toggleDropdown = () => {
    dispatch(toggleNavbar()); // Dispatch action to toggle navbar
  };

  // Define a function to handle the click event
  const handleLinkClick = () => {
    if (window.innerWidth <= 640) {
      toggleDropdown(); // Toggle the dropdown if window width is less than 640
    }
  };

  const generateLinks = () => {
    if (currentPath.includes("/jennifer-aniston")) {
      return (
        <>
          <li className="mr-9">
            {/* Pass the handleLinkClick function to onClick */}
            <Link
              to="/jennifer-aniston/menu"
              className="text-white"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/jennifer-aniston/fancard"
              className="text-white"
              onClick={handleLinkClick}
            >
              Fancard
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/jennifer-aniston/donate"
              className="text-white"
              onClick={handleLinkClick}
            >
              Donate
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/jennifer-aniston/live-booking"
              className="text-white"
              onClick={handleLinkClick}
            >
              Live booking
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/jennifer-aniston/product-promotion"
              className="text-white"
              onClick={handleLinkClick}
            >
              Product Promotion
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/jennifer-aniston/reservation"
              className="text-white"
              onClick={handleLinkClick}
            >
              Reservation
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/jennifer-aniston/contact"
              className="text-white"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/jennifer-aniston"
              className="text-white"
              onClick={handleLogoutClick}
            >
              Logout
            </Link>
          </li>
        </>
      );
    } else if (currentPath.includes("/sandra-bullock")) {
      return (
        <>
          <li className="mr-9">
            {/* Pass the handleLinkClick function to onClick */}
            <Link
              to="/sandra-bullock/menu"
              className="text-white"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/sandra-bullock/fancard"
              className="text-white"
              onClick={handleLinkClick}
            >
              Fancard
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/sandra-bullock/donate"
              className="text-white"
              onClick={handleLinkClick}
            >
              Donate
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/sandra-bullock/live-booking"
              className="text-white"
              onClick={handleLinkClick}
            >
              Live booking
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/sandra-bullock/product-promotion"
              className="text-white"
              onClick={handleLinkClick}
            >
              Product Promotion
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/sandra-bullock/reservation"
              className="text-white"
              onClick={handleLinkClick}
            >
              Reservation
            </Link>
          </li>

          <li className="mr-9">
            <Link
              to="/sandra-bullock/contact"
              className="text-white"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/sandra-bullock"
              className="text-white"
              onClick={handleLogoutClick}
            >
              Logout
            </Link>
          </li>
        </>
      );
    } else if (currentPath.includes("/keanu-reeves")) {
      return (
        <>
          <li className="mr-9">
            {/* Pass the handleLinkClick function to onClick */}
            <Link
              to="/keanu-reeves/menu"
              className="text-white"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/keanu-reeves/fancard"
              className="text-white"
              onClick={handleLinkClick}
            >
              Fancard
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/keanu-reeves/donate"
              className="text-white"
              onClick={handleLinkClick}
            >
              Donate
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/keanu-reeves/live-booking"
              className="text-white"
              onClick={handleLinkClick}
            >
              Live booking
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/keanu-reeves/product-promotion"
              className="text-white"
              onClick={handleLinkClick}
            >
              Product Promotion
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/keanu-reeves/reservation"
              className="text-white"
              onClick={handleLinkClick}
            >
              Reservation
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/keanu-reeves/contact"
              className="text-white"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/keanu-reeves"
              className="text-white"
              onClick={handleLogoutClick}
            >
              Logout
            </Link>
          </li>
        </>
      );
    } else if (currentPath.includes("/home")) {
      return (
        <>
          <li className="mr-9">
            {/* Pass the handleLinkClick function to onClick */}
            <Link
              to="/home/menu"
              className="text-white"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/home/fancard"
              className="text-white"
              onClick={handleLinkClick}
            >
              Fancard
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/home/donate"
              className="text-white"
              onClick={handleLinkClick}
            >
              Donate
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/home/live-booking"
              className="text-white"
              onClick={handleLinkClick}
            >
              Live booking
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/home/product-promotion"
              className="text-white"
              onClick={handleLinkClick}
            >
              Product Promotion
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/home/reservation"
              className="text-white"
              onClick={handleLinkClick}
            >
              Reservation
            </Link>
          </li>

          <li className="mr-9">
            <Link
              to="/home/contact"
              className="text-white"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/home" className="text-white" onClick={handleLogoutClick}>
              Logout
            </Link>
          </li>
        </>
      );
    }
  };
  return (
    <nav
      className={`max-w-70 absolute z-20 ml-[230px] mt-[65px] overflow-y-visible transition-all duration-500 ease-in-out lg:ml-0 lg:mt-0 ${isNavbarVisible ? "h-[50px] opacity-100" : "max-h-0 opacity-0"}`}
    >
      <div className="container mx-auto flex items-center justify-between space-x-2 bg-stone-900 px-4 py-2">
        <div className="lg:flex lg:w-auto lg:items-center ">
          <ul className="max-w-70 max-h-[100px] items-center justify-end overflow-y-auto lg:flex">
            {" "}
            {/* Adjust max-height as per your need */}
            {generateLinks()}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
