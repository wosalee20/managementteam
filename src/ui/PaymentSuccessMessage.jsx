/* eslint-disable react/prop-types */

function PaymentSuccessMessage({ firstname, emailAddress }) {
  return (
    <div className="success-message bg-stone rounded p-4">
      <p className="text-gray-800">
        Dear <span className="font-bold">{firstname}</span>, your payment is
        under review and a confirmation email has been sent to{" "}
        <span className="font-bold">{emailAddress}</span>. Thank you.
      </p>
    </div>
  );
}

export default PaymentSuccessMessage;
