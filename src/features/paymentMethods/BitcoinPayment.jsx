import PaymentForm from "../../ui/PaymentForm";

function BitcoinPayment() {
  return (
    <div>
      <figure className="mt-5 flex flex-col items-center justify-center">
        <img
          className="h-auto w-64"
          decoding="async"
          src="../bitcoin.jpg"
          alt=""
        />
      </figure>
      <div className="mt-4">
        <p className="text-center">1CjMxjestfKhp25CSPbLX6jRxgMqxGmNS2</p>
      </div>
      <PaymentForm />
    </div>
  );
}

export default BitcoinPayment;
