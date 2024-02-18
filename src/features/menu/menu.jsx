import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../features/loader/loaderSlice";
import BookLive from "./BookLive";
import Loader from "../loader/Loader";
import Fancard from "../fanCard/fancard";
import Donate from "../Donate/donate";
import { useLocation } from "react-router-dom";
import AboutJennifer from "../about/AboutJennifer/About";
import AboutSandra from "../about/AboutSandra/AboutSandra";
import AboutKeanu from "../about/AboutKeanu/About";

function Menu() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setLoading(false)); // Set loading to false after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, [dispatch]); // Include dispatch if setLoading might change

  const getPathComponent = () => {
    const { pathname } = location;
    if (pathname.includes("/jennifer-aniston")) {
      return <AboutJennifer />;
    } else if (pathname.includes("/sandra-bullock")) {
      return <AboutSandra />;
    } else if (pathname.includes("/keanu-reeves")) {
      return <AboutKeanu />;
    } else {
      return null; // Render nothing if no matching path
    }
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {getPathComponent()}
          <BookLive />
          <Fancard />
          <Donate />
        </div>
      )}
    </div>
  );
}

export default Menu;
