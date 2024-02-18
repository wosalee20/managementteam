/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  const handleContinueExploring = () => {
    const currentPath = window.location.pathname;
    window.location.href = `${currentPath}/menu`;
  };

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8  text-xl font-semibold md:text-3xl">
        Welcome to <span className="font-bold">Management Team!</span>
        <br />
        <span className=" text-stone-500">
          where we are passionate about bringing you the latest updates and
          insights straight to your screen, straight from the heart of fandom!
          <br /> We are thrilled to have you join us on this exciting journey.
        </span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button onClick={handleContinueExploring} type="primary">
          Continue Exploring, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
