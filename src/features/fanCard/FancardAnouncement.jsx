/* eslint-disable react/no-unescaped-entities */
function FanCardAnnouncement() {
  return (
    <div className="mb-10 ml-2 w-full px-4">
      <h1 className="mb-3 mt-3 text-center text-3xl font-bold uppercase sm:text-2xl">
        Introducing Our Exclusive Fan Cards
      </h1>
      <p className="text-center text-sm sm:text-base">
        At <span className="font-semibold">MANAGEMENT TEAM FAN CLUB</span>, we
        are thrilled to present our latest offering to our dedicated fans – the
        Exclusive Fan Cards! These limited-edition cards are not just a token of
        appreciation; they are your VIP pass to a world of unique benefits and
        unforgettable experiences.
      </p>

      <h2 className="mt-3 text-center text-2xl font-bold sm:text-xl">
        Why You Need Our Fan Card:
      </h2>
      <ul className="mt-2 text-sm sm:text-base">
        <li className="mt-2">
          <strong>Unrivaled Access:</strong> Gain exclusive access to
          behind-the-scenes content, sneak peeks of upcoming releases, and
          personal messages from{" "}
          <span className="font-semibold">MANAGEMENT TEAM</span>.
        </li>
        <li className="mt-2">{/* Add other list items here */}</li>
        <li className="mt-2">{/* Add other list items here */}</li>
      </ul>

      <h2 className="mt-3 text-center text-2xl font-bold sm:text-xl">
        How to Purchase:
      </h2>
      <ol className="mt-2 text-sm sm:text-base">
        <li>
          <strong>Login or Sign Up:</strong> Visit our website and log in to
          your fan account. If you're not a member yet, sign up to unlock a
          world of exclusive content.
        </li>
        <li className="mt-2">
          <strong>Fill the Form:</strong> Complete a simple form to customize
          your Fan Card. Let us know your preferences, and we'll tailor your
          experience to match your unique style.
        </li>
        <li className="mt-2">
          <strong>Secure Payment:</strong> Once you've filled out the form,
          proceed to the secure payment portal. Your Fan Card will be reserved
          just for you upon successful completion.
        </li>
        <li className="mt-2">
          <strong>Enjoy the Benefits:</strong> Congratulations! You're now an
          official holder of an Exclusive Fan Card. Get ready to dive into a
          world of unparalleled experiences and exclusive privileges.
        </li>
      </ol>

      {/* Other content */}
      <p className="mt-2 text-center text-sm sm:text-base">
        Don't miss out on this opportunity to elevate your fan status. Purchase
        your Exclusive Fan Card today and join us on an extraordinary journey
        through the magic of music and connection!
      </p>

      <p className="mt-2 text-center text-sm sm:text-base">
        Thank you for being a part of the{" "}
        <span className="font-semibold">MANAGEMENT FAN CLUB</span> family.
      </p>
    </div>
  );
}

export default FanCardAnnouncement;
