import { Form } from "react-router-dom";
import Button from "../../ui/Button";

/* eslint-disable no-undef */
function BookAlive() {
  return (
    <div>
      <Form>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            className="input grow"
            name="firstName"
            // value={formData.firstName}
            // onChange={handleInputChange}
            required
          />
          <label className="sm:basis-40">Last Name</label>
          <input
            type="text"
            className="input grow"
            name="lastName"
            // value={formData.lastName}
            // onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Email</label>
          <input
            type="email"
            name="email"
            className="input grow"
            // value={formData.email}
            // onChange={handleInputChange}
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
              //   value={formData.phoneNumber}
              //   onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Occupation</label>
          <input
            type="text"
            name="occupation"
            className="input grow"
            // value={formData.occupation}
            // onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address Line 1</label>
          <div className="grow">
            <input
              type="text"
              name="addressLine1"
              className="input w-full"
              //   value={formData.addressLine1}
              //   onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address Line 2</label>
          <div className="grow">
            <input
              type="text"
              name="addressLine2"
              className="input w-full"
              //   value={formData.addressLine2}
              //   onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address Line 3</label>
          <div className="grow">
            <input
              type="text"
              name="addressLine3"
              className="input w-full"
              //   value={formData.addressLine3}
              //   onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">City</label>
          <div className="grow">
            <input
              type="text"
              name="city"
              className="input w-full"
              //   value={formData.city}
              //   onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Postal Code</label>
          <div className="grow">
            <input
              type="text"
              name="postalCode"
              className="input w-full"
              //   value={formData.postalCode}
              //   onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div>
          <Button type="primary"> Submit </Button>
        </div>
      </Form>
    </div>
  );
}

export default BookAlive;
