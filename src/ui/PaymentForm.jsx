/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Form, useLocation } from "react-router-dom";
import Button from "./Button";
import FileUploader from "./FileUploader";
import PaymentSuccessMessage from "./PaymentSuccessMessage";
import Loader from "../features/loader/Loader";

function PaymentForm() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    cardType: "",
    giftCardType: "",
    paymentReason: "",
    giftCardId: "",
    amount: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // State to manage loading

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "cardType" && formData.paymentReason === "fancard") {
      const cardAmount = value.split("-").pop();
      setFormData((prevData) => ({
        ...prevData,
        amount: cardAmount,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form submission begins

    try {
      const filteredFormData = Object.fromEntries(
        Object.entries(formData).filter(([key, value]) => value.trim() !== ""),
      );

      const formDataToSend = new FormData();
      for (const [key, value] of Object.entries(filteredFormData)) {
        formDataToSend.append(key, value);
      }
      formDataToSend.append("file", selectedFile);

      console.log("Current data:", filteredFormData);

      const response = await fetch("http://localhost:3000/api/send-email", {
        method: "POST",
        body: formDataToSend,
      });
      console.log(response);
      if (response.ok) {
        console.log("Email sent successfully!");
        setSubmissionSuccess(true);
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false); // Set loading to false when form submission finishes
    }
  };

  return (
    <div className="px-4 py-6">
      {loading && <Loader />}
      {!submissionSuccess && !loading && (
        <>
          <h2 className="mb-8 text-xl font-semibold">
            Ready to Make Payment? Let's go!
          </h2>
          <Form onSubmit={handleSubmit}>
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
              <label className="sm:basis-40">First Name</label>
              <input
                type="text"
                className="input grow"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <label className="sm:basis-40">Last Name</label>
              <input
                type="text"
                className="input grow"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
              <label className="sm:basis-40">Phone number</label>
              <div className="grow">
                <input
                  type="tel"
                  name="phoneNumber"
                  className="input w-full"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
              <label className="sm:basis-40">Email Address</label>
              <div className="grow">
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
              <label className="sm:basis-40">Address</label>
              <div className="grow">
                <input
                  type="text"
                  name="address"
                  className="input w-full"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
              <label className="sm:basis-40">Payment Reason</label>
              <div className="grow">
                <select
                  name="paymentReason"
                  className="input w-full"
                  value={formData.paymentReason}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">-- Select a Payment Reason --</option>
                  <option value="live booking">Live Booking</option>
                  <option value="fancard">FanCard</option>
                  <option value="product promotion">Product Promotion</option>
                  <option value="donation">Donation</option>
                </select>
              </div>
            </div>
            {formData.paymentReason === "fancard" && (
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                <label className="sm:basis-40">Select Card</label>
                <div className="grow">
                  <select
                    name="cardType"
                    className="input w-full"
                    value={formData.cardType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select a Card Type --</option>
                    <option value="bronze-$500">Bronze - $500</option>
                    <option value="silver-1500">Silver - $1500</option>
                    <option value="gold-$3000">Gold - $3000</option>
                    <option value="platinum-$5000">
                      Platinum - $5000 (Unlimited)
                    </option>
                  </select>
                </div>
              </div>
            )}
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
              <label className="sm:basis-40">Amount</label>
              <div className="grow">
                <input
                  type="text"
                  name="amount"
                  className="input w-full"
                  value={formData.amount}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {location.pathname.includes("/giftcard-payment") && (
              <>
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                  <label className="sm:basis-40">Select Gift Card</label>
                  <div className="grow">
                    <select
                      name="giftCardType"
                      className="input w-full"
                      value={formData.giftCardType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">-- Select a Gift Card --</option>
                      <option value="Amazon">Amazon</option>
                      <option value="iTunes">iTunes</option>
                      <option value="Starbucks">Starbucks</option>
                      <option value="Steam">Steam</option>
                      <option value="Walmart">Walmart</option>
                      <option value="Nike">Nike</option>
                      <option value="Best Buy">Best Buy</option>
                    </select>
                  </div>
                </div>

                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                  <label className="sm:basis-40">Gift Card ID</label>
                  <div className="grow">
                    <input
                      type="text"
                      name="giftCardId"
                      className="input w-full"
                      value={formData.giftCardId}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </>
            )}
            <FileUploader handleFileSelect={handleFileSelect} />
            <div>
              <Button type="primary">Submit</Button>
            </div>
          </Form>
        </>
      )}
      {submissionSuccess && (
        <PaymentSuccessMessage
          firstname={formData.firstName}
          emailAddress={formData.email}
        />
      )}
    </div>
  );
}

export default PaymentForm;
