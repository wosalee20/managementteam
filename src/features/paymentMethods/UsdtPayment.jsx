import PaymentForm from "../../ui/PaymentForm";

function UsdtPayment() {
  return (
    <div>
      <figure className="mt-5 flex flex-col items-center justify-center">
        <img
          className="h-auto w-64"
          decoding="async"
          src="../usdt.jpg"
          alt=""
        />
      </figure>
      <div className="mt-4">
        <p className="text-center">TNrTviMvm962438aHCU9UitFQVX4peAeEv</p>
      </div>
      <PaymentForm />
    </div>
  );
}

export default UsdtPayment;
