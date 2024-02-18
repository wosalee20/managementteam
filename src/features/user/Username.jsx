import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { toggleNavbar } from "./userSlice";
import { useState } from "react";

function Username() {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    dispatch(toggleNavbar()); // Dispatch action to toggle navbar
  };

  if (!username) return null;

  return (
    <div className="flex items-center" onClick={toggleDropdown}>
      <div className="mr-2 text-sm font-semibold md:block">{username}</div>
      <FontAwesomeIcon
        icon={faAngleDown}
        className={`text-sm text-stone-500 md:hidden ${isDropdownOpen ? "rotate-180" : ""}`}
        // Rotate the arrow if dropdown is open
      />
    </div>
  );
}

export default Username;
