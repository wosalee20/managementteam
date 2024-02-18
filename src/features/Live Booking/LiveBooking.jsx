import BookLive from "../menu/BookLive";

function LiveBooking() {
  return (
    <section className="mb-10 mt-8">
      <h2 className="mb-4 text-2xl font-semibold">Live Booking</h2>
      <p className="mb-4 text-stone-700">
        Explore upcoming live events, concerts, or appearances featuring
        celebrities managed by our team.
      </p>
      <div className="rounded-lg border border-stone-300 p-4">
        <h3 className="mb-2 text-lg font-semibold">Upcoming Events</h3>
        <BookLive />
      </div>
    </section>
  );
}

export default LiveBooking;
