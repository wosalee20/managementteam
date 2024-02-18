import { Link, useLocation } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
function ProductPromotion() {
  const location = useLocation();

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
    <section className="mb-10 mt-8">
      <div className="mb-4 flex flex-col items-center justify-center md:flex-row md:justify-end">
        <Link to={generateLinkPath()}>
          <p className="rounded-lg border border-stone-900 px-1 py-3 font-bold text-blue-950 hover:text-stone-300 md:px-2 md:py-5">
            Book Now!!!!
          </p>
        </Link>
      </div>
      <h2 className="mb-4 text-2xl font-semibold">Product Promotion</h2>
      <p className="mb-4 text-stone-700">
        Discover featured products endorsed or promoted by celebrities
        represented by our management team.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-stone-300 p-4">
          <h3 className="mb-2 text-lg font-semibold">Promote Your Business</h3>
          <p className="text-stone-600">
            You can promote your business with us and our actress will be your
            brand influencer and help you advertise your product … We assure you
            best of sales and help you meet your target audience
          </p>
        </div>
        <div className="rounded-lg border border-stone-300 p-4">
          <h3 className="mb-2 text-lg font-semibold">Brand Promotion</h3>
          <p className="text-stone-600">
            Maximize your business's impact with our expert brand promotion
            services. Our seasoned influencers, including talented actresses,
            will boost your brand's visibility and drive sales to meet your
            targets. Let's collaborate to craft compelling strategies that
            resonate with your audience and elevate your brand to new heights.
          </p>
          {/* Add pricing and purchase options */}
        </div>
      </div>
    </section>
  );
}

export default ProductPromotion;
