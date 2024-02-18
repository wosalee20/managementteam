import { Link } from "react-router-dom";

function Cards() {
  const currentPath = window.location.pathname;

  const generateLinkPath = () => {
    const segments = currentPath.split("/"); // Split the path into segments
    if (segments.length >= 3) {
      // Ensure there are at least 3 segments
      segments[2] = "payment-method"; // Replace the second segment
      return segments.join("/"); // Rejoin the segments into a path
    } else {
      return currentPath; // If there aren't enough segments, return the original path
    }
  };

  const generateLinks = () => {
    const cardsData = [
      {
        title: "BRONZE",
        benefits: [
          "Exclusive Access",
          "Special Events",
          "Membership Rewards",
          "Instant Updates",
        ],
        amount: "$500",
      },
      {
        title: "SILVER",
        benefits: [
          "Premium Content",
          "Early Access",
          "Exclusive Merchandise",
          "Priority Support",
        ],
        amount: "$1500",
      },
      {
        title: "GOLD",
        benefits: [
          "Behind-the-Scenes",
          "Virtual Meetups",
          "Discounts & Coupons",
          "Exclusive Downloads",
        ],
        amount: "$3000",
      },
      {
        title: "PLATINUM",
        benefits: [
          "Ultimate Fan Experience",
          "Personalized Gifts",
          "Meet & Greet",
          "Exclusive Access Pass",
        ],
        amount: "$5000 - Unlimited",
      },
    ];

    return cardsData.map((card, index) => (
      <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
        <div className="message-wrap text-center">
          <h6 className="title text-black">{card.title}</h6>
          <ul>
            {card.benefits.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>
          <p className="amount">Amount: {card.amount}</p>
          <Link to={generateLinkPath()} className="btn btn-border-2">
            Purchase Now
          </Link>
        </div>
      </div>
    ));
  };

  return (
    <div className="col-xl-12 col-md-6 col-sm-7 ">
      <div className="row justify-center">
        <div className="col-lg-12">
          <div className="section-title section-title-2 text-center">
            <h2 className="title fan-text font-extrabold text-black">
              FAN CARDS
            </h2>
          </div>
        </div>
      </div>
      <div className="message-container">{generateLinks()}</div>
    </div>
  );
}

export default Cards;
