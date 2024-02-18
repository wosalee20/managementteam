import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react"; // Import Suspense and lazy
import AppLayout from "./ui/Applayout";
import Error from "./ui/Error";
import Loader from "./features/loader/Loader";

// Lazy load components
const Home = lazy(() => import("./ui/Home"));
const Menu = lazy(() => import("./features/menu/menu"));
const PaymentMethod = lazy(
  () => import("./features/paymentMethods/PaymentMethod"),
);
const BitcoinPayment = lazy(
  () => import("./features/paymentMethods/BitcoinPayment"),
);
const UsdtPayment = lazy(() => import("./features/paymentMethods/UsdtPayment"));
const GiftcardPayment = lazy(
  () => import("./features/paymentMethods/GiftcardPayment"),
);
const Contact = lazy(() => import("./features/contact/contact"));
const Donate = lazy(() => import("./features/Donate/donate"));
const Fancard = lazy(() => import("./features/fanCard/fancard"));
const ProductPromotion = lazy(
  () => import("./features/Product Production/ProductPromotion"),
);
const LiveBooking = lazy(() => import("./features/Live Booking/LiveBooking"));
const Reservation = lazy(() => import("./features/Reservation/Reservation"));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/:name/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/:name/fancard",
        element: <Fancard />,
        errorElement: <Error />,
      },
      {
        path: "/:name/donate",
        element: <Donate />,
        errorElement: <Error />,
      },
      {
        path: "/:name/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/:name/product-promotion",
        element: <ProductPromotion />,
        errorElement: <Error />,
      },
      {
        path: "/:name/live-booking",
        element: <LiveBooking />,
        errorElement: <Error />,
      },
      {
        path: "/:name/reservation",
        element: <Reservation />,
        errorElement: <Error />,
      },
      {
        path: "/:name/payment-method",
        element: <PaymentMethod />,
        errorElement: <Error />,
      },
      {
        path: "/:name/menu",
        element: <Menu />,
        errorElement: <Error />,
      },
      {
        path: "/:name/bitcoin-payment",
        element: <BitcoinPayment />,
        errorElement: <Error />,
      },
      {
        path: "/:name/usdt-payment",
        element: <UsdtPayment />,
        errorElement: <Error />,
      },
      {
        path: "/:name/giftcard-payment",
        element: <GiftcardPayment />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
