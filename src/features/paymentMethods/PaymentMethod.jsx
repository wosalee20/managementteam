/* eslint-disable react/no-unescaped-entities */
import "animate.css/animate.min.css";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const PaymentMethod = () => {
  const location = useLocation();

  useEffect(() => {
    const cards = document.querySelectorAll(".payment-card");

    cards.forEach((card) => {
      card.classList.add("animate__animated", "animate__zoomInOut");
    });

    setTimeout(() => {
      cards.forEach((card) => {
        card.classList.remove("animate__animated", "animate__zoomInOut");
      });
    }, 3000); // Adjust duration as needed
  }, []);

  const generateLinkPath = (path) => {
    // Replace "/payment-method" with the given path
    return location.pathname.replace("/payment-method", path);
  };

  return (
    <div id="content" className="container mx-auto  px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <h3 className="mb-4 text-2xl font-bold">Choose Payment Method</h3>
        <h5 className="mb-4 text-lg font-bold">Choose Method Of Payment</h5>

        <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 lg:mr-[-400px] lg:grid-cols-4 xl:grid-cols-5">
          <div className="payment-card  mx-auto w-[200px] rounded-md bg-stone-200 p-2 shadow-md">
            <Link to={generateLinkPath("/bitcoin-payment")}>
              <img
                src="../bitcoin.png"
                title="Bitcoin"
                alt="Bitcoin"
                loading="lazy"
                className="w-[200px] sm:h-auto sm:w-auto"
              />
            </Link>
            <h4 className="mt-2 text-xl font-semibold">
              <Link to={generateLinkPath("/bitcoin-payment")}>BITCOIN</Link>
            </h4>
          </div>

          <div className="payment-card mx-auto w-[200px] rounded-md bg-stone-200 p-2 shadow-md">
            <Link to={generateLinkPath("/usdt-payment")}>
              <img
                src="../usdt.png"
                title="tether-usdt-logo"
                alt="tether-usdt-logo"
                loading="lazy"
                className="w-[200px] sm:h-auto sm:w-auto"
              />
            </Link>
            <h4 className="mt-2 text-xl font-semibold">
              <Link to={generateLinkPath("/usdt-payment")}>USDT (Tron)</Link>
            </h4>
          </div>

          <div className="payment-card mx-auto w-[200px] rounded-md bg-stone-200 p-2 shadow-md">
            <Link to={generateLinkPath("/giftcard-payment")}>
              <img
                src="../gift cards.jpg"
                title="asset-1-768×614"
                alt="asset-1-768x614"
                loading="lazy"
                className="w-[200px] sm:h-auto sm:w-full" // Adjusted class
              />
            </Link>
            <h4 className="mt-2 text-xl font-semibold">
              <Link to={generateLinkPath("/giftcard-payment")}>GIFT CARDS</Link>
            </h4>
          </div>

          {/* Add more payment options here for larger screens */}
        </div>

        <div className="mt-8">
          <h5 className="text-lg">
            <Link to={generateLinkPath("/contact")}>
              If Your Preferred Payment Isn't Above Please Kindly Contact
              Management Team Email Address
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
