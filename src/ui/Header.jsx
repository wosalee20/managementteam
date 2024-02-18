import { Link, useLocation } from "react-router-dom";
import Username from "../features/user/Username";
import Navbar from "./Navbar";
import Logo from "./Logo";

export default function Header() {
  const location = useLocation();
  const isHomePage = ![
    "/jennifer-aniston",
    "/sandra-bullock",
    "/keanu-reeves",
  ].includes(location.pathname);

  // Extracting the individual's name from the current path
  const individualName = location.pathname.split("/")[1];

  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-stone-900 px-4 py-3 pb-8 uppercase text-stone-100 sm:px-6">
      {/* Dynamically creating the link to the individual's root path */}
      <Link to={`/${individualName}`} className="tracking-widest">
        <Logo />
      </Link>
      {isHomePage && window.innerWidth > 640 && <Navbar />}
      <div style={{ zIndex: 2 }}>
        <Username />
      </div>
    </header>
  );
}
