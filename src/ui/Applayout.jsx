/* eslint-disable no-unused-vars */
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "../features/loader/Loader";
import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar ";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="relative grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}
      <Header />
      {!isHomePage && window.innerWidth < 640 && <MobileNavbar />}
      <div className="">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
        </main>
      </div>
      {!isHomePage && <Footer />}
    </div>
  );
}
