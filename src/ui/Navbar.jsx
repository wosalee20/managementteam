/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { handleLogout } from "../utils/logoutUtils";
import { useDispatch } from "react-redux";

function Navbar() {
  const currentPath = window.location.pathname;

  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    handleLogout(dispatch);
  };

  // Function to generate links based on the current path
  const generateLinks = () => {
    // Check if the current path includes "/jennifer"
    if (currentPath.includes("/jennifer-aniston")) {
      return (
        <>
          <li className="mr-9">
            <Link to="/jennifer-aniston/menu" className="text-white">
              Home
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/jennifer-aniston/fancard" className="text-white">
              Fan Card
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/jennifer-aniston/donate" className="text-white">
              Donate
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/jennifer-aniston/live-booking" className="text-white">
              Live Booking
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/jennifer-aniston/product-promotion"
              className="text-white"
            >
              Product Promotion
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/jennifer-aniston/reservation" className="text-white">
              Reservation
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/jennifer-aniston/contact" className="text-white">
              Contact
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/jennifer-aniston"
              onClick={handleLogoutClick}
              className="text-white"
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
            <Link to="/sandra-bullock/menu" className="text-white">
              Home
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/sandra-bullock/fancard" className="text-white">
              Fan Card
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/sandra-bullock/donate" className="text-white">
              Donate
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/sandra-bullock/live-booking" className="text-white">
              Live Booking
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/sandra-bullock/product-promotion" className="text-white">
              Product Promotion
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/sandra-bullock/reservation" className="text-white">
              Reservation
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/sandra-bullock/contact" className="text-white">
              Contact
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/sandra-bullock"
              onClick={handleLogoutClick}
              className="text-white"
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
            <Link to="/keanu-reeves/menu" className="text-white">
              Home
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/keanu-reeves/fancard" className="text-white">
              Fan Card
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/keanu-reeves/donate" className="text-white">
              Donate
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/keanu-reeves/live-booking" className="text-white">
              Live Booking
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/keanu-reeves/product-promotion" className="text-white">
              Product Promotion
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/keanu-reeves/reservation" className="text-white">
              Reservation
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/keanu-reeves/contact" className="text-white">
              Contact
            </Link>
          </li>
          <li className="mr-9">
            <Link
              to="/keanu-reeves"
              onClick={handleLogoutClick}
              className="text-white"
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
            <Link to="/home/menu" className="text-white">
              Home
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/home/fancard" className="text-white">
              Fan Card
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/home/donate" className="text-white">
              Donate
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/home/live-booking" className="text-white">
              Live Booking
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/home/product-promotion" className="text-white">
              Product Promotion
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/home/reservation" className="text-white">
              Reservation
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/home/contact" className="text-white">
              Contact
            </Link>
          </li>
          <li className="mr-9">
            <Link to="/home" onClick={handleLogoutClick} className="text-white">
              Logout
            </Link>
          </li>
        </>
      );
    }
  };

  return (
    <nav className="hidden lg:block ">
      <div className="container mx-auto flex items-center justify-between space-x-5 px-4 py-2">
        <div className="lg:flex lg:w-auto lg:items-center">
          <ul className="items-center justify-end lg:flex">
            {generateLinks()}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
