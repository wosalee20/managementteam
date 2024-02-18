import { Link, useLocation } from "react-router-dom";

function BookLive() {
  const location = useLocation();

  const determineImageSrc = () => {
    const currentPath = location.pathname;
    if (currentPath.includes("/jennifer-aniston")) {
      return "../jenniferlive.jpg";
    } else if (currentPath.includes("/sandra-bullock")) {
      return "../sandralive.jpg";
    } else if (currentPath.includes("/keanu-reeves")) {
      return "../keanulive.jpg";
    } else {
      // Default image source if none of the conditions are met
      return "../sandralive.jpg";
    }
  };

  const generateLinkPath = () => {
    const segments = location.pathname.split("/"); // Split the path into segments
    if (segments.length >= 3) {
      // Ensure there are at least 3 segments
      segments[2] = "payment-method"; // Replace the second segment
      return segments.join("/"); // Rejoin the segments into a path
    } else {
      return "/payment-method"; // If there aren't enough segments, return a default path
    }
  };

  return (
    <div className="mb-20 flex items-center justify-center transition duration-100">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h2 className="text-xl font-bold transition duration-1000">
            <Link to={generateLinkPath()}>JOIN ME LIVE!!!</Link>
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <Link to={generateLinkPath()}>
            <img
              src={determineImageSrc()}
              alt="booklive"
              className="mx-auto  h-auto w-[200px] max-w-lg transition duration-1000 sm:w-[200px] lg:w-[400px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookLive;
