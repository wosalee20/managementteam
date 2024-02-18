/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

function Donate() {
  const [isMounted, setIsMounted] = useState(false);
  const location = useLocation(); // Use useLocation hook

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    <section
      id="fundraisers-section"
      className={`section w-full ${isMounted ? "animate-flying-in" : ""}`}
    >
      <div className="fundraiser-card">
        <h1 className="join-us">
          Join Us. <br />
          Change Their World.
        </h1>
        <h1 className="change-yours">
          Change Yours. This Will Change
          <br />
          Everything.
        </h1>
        <Link to={generateLinkPath()} role="button" className="donation-btn">
          <span className="donation-btn">
            <span className="donation">DONATE NOW</span>
          </span>
        </Link>
      </div>
      <div className="donation-btn-wrapper">
        <h1 className="each-day">
          Each day, an estimated 734 children <br />
          become orphans
        </h1>
        <h1 className="Aniston-life">
          Aniston Life Foundation is a worldwide non-profit orphanage funding
          organization that are dedicated to looking for the welfare of
          abandoned children and orphans. We help orphans by providing health
          and educational opportunities, stable housing and adoption services.
          <br />
          <br />
          With the help of our charity program for orphans, we’ve developed a
          number of orphanages, infant adoption centers, and schools in
          underserved parts of Philippines, India, Columbia and Africa with
          proper learning resources and tools.
          <br />
          <br />
          Help us donate to orphans and improve their living situations.
          <br />
          <br />
          For further information on how to Donate
          <a href="pages/login.html" target="_blank">
            click here
          </a>
        </h1>
      </div>
    </section>
  );
}

export default Donate;
