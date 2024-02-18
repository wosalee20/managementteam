import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Reservation() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const generateLinkPath = (path) => {
    // Replace "/payment-method" with the given path
    return location.pathname.replace("/reservation", path);
  };

  return (
    <section
      className={`reservation-section mb-10 mt-10 ${isMounted ? "animate-flying-in" : ""}`}
    >
      <h2 className="mb-4 text-2xl font-bold">Reservation</h2>
      <p className="text-stone-750 mb-4">
        Book appointments, meetings, or interactions with celebrities managed by
        our team.
      </p>
      <div className="rounded-lg border border-stone-300 p-4">
        <h3 className="mb-2 text-lg font-bold">Book a Meeting</h3>
        <p className="text-stone-750">
          Schedule a one-on-one meeting with your favorite celebrity managed by
          our team.
        </p>
        <p className="text-stone-750">
          It would truly not be made possible without the generosity of our
          loyal followers. Booking our Actor/Actress for a reservation requires
          certain fee, please make sure you’re ready before contacting for a
          <span className="font-bold capitalize text-blue-950">
            <Link to={generateLinkPath("/payment-method")}>
              {" "}
              Payment method
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
}

export default Reservation;
