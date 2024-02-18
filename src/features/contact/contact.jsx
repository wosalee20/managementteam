import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="container mx-auto mb-5 mt-5 rounded-lg border-2 border-double border-stone-900 bg-stone-300 px-4 py-8">
      <h2 className="mb-6 text-2xl font-bold">Contact Us</h2>
      <div className="mb-4 text-lg font-semibold">
        Management Team Contact Details
      </div>
      <div className="mb-4 text-sm">
        Check out, popular American Actress Jennifer Aniston’s contact address
        details information with verified resources.
      </div>
      <div className="mb-4">&nbsp;</div>
      <div className="mb-4">House Address: Bel Air, California, US</div>
      <div className="mb-4">
        Fan Mail Address: Management Team Slate PR 901 N Highland Avenue Suite
        915 Los Angeles, CA 90038-2412 USA (
        <Link
          to="mailto:managementteamemail98@gmail.com"
          className="text-blue-500 hover:underline"
        >
          managementteamemail98@gmail.com
        </Link>
        )
      </div>
      <div className="mb-4">
        Booking Agent Information: Slate PR (Public Relations Agency) 901 N
        Highland Avenue Suite 915 Los Angeles, CA 90038-2412 USA (Whatsapp
        message only and not reachable for calls)
      </div>
      <div className="mb-4">
        Secondary Mailing Address: Management Team Lighthouse Management and
        Media, Inc. 9000 W. Sunset Blvd. Suite 1520 West Hollywood, CA
        90069-5815 USA (
        <Link
          to="mailto:managementteamemail98@gmail.com"
          className="text-blue-500 hover:underline"
        >
          managementteamemail98@gmail.com
        </Link>
        )
      </div>
      <div className="mb-4">
        Booking Agent Information: Lighthouse Management and Media, Inc. (Talent
        Management Company) 9000 W. Sunset Blvd. Suite 1520 West Hollywood, CA
        90069-5815 USA (
        <Link
          to="mailto:managementteamemail98@gmail.com"
          className="text-blue-500 hover:underline"
        >
          managementteamemail98@gmail.com
        </Link>
        )
      </div>
      <div className="mb-4">
        Phone Number:(She has not shared her phone number with anyone because of
        privacy)
      </div>
      <div className="mb-4">
        Whatsapp Number: (She has not shared her Whatsapp number with anyone
        because of privacy)
      </div>
      <div className="mb-4">
        Email Id:&nbsp;
        <Link
          to="mailto:managementteamemail98@gmail.com"
          className="text-blue-500 hover:underline"
        >
          managementteamemail98@gmail.com
        </Link>
      </div>
      <div className="mb-4">
        Website:&nbsp;
        <Link
          to="http://jenniferaniston.website"
          className="text-blue-500 hover:underline"
          style={{
            textAlign: "var(--text-align)",
            backgroundColor: "rgb(255, 255, 255)",
            fontSize: "1rem",
          }}
        >
          Managementteam.online
        </Link>
      </div>
      <div className="mb-4">Home Town: Eddystone, Pennsylvania</div>
      <div className="mb-4">Current Location: Los Angeles, California</div>
      <div>
        Note: Report to any of the concerned emails or WhatsApp number if
        there’s any suspicious information you get from any imposter or
        impersonation about US. We wait for your response as soon as possible.
      </div>
    </div>
  );
}

export default Contact;
