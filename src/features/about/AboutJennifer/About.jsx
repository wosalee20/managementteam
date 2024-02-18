import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setLoading } from "../../loader/loaderSlice";
import AboutDesktop from "./AboutDesktop";
import AboutMobile from "./AboutMobile";
import Loader from "../../loader/Loader";

function AboutJennifer() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setLoading(false)); // Set loading to false after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <section className="mb-8 bg-stone-800 lg:ml-[-100px] lg:w-[1000px]">
      {loading ? (
        <Loader />
      ) : (
        <>
          <AboutDesktop />
          <AboutMobile />
        </>
      )}
    </section>
  );
}

export default AboutJennifer;
