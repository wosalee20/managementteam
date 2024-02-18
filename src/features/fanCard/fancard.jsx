import Cards from "./Cards";
import FanCardAnnouncement from "./FancardAnouncement";
import { useEffect, useState } from "react";

function Fancard() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`ml-[2px]  px-5 ${isMounted ? "animate-flying-in" : ""}`}>
      <FanCardAnnouncement />
      <Cards />
    </div>
  );
}

export default Fancard;
