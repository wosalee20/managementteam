/* eslint-disable react/no-unescaped-entities */
function AboutDesktop() {
  return (
    <div
      className="about-background relative hidden bg-cover bg-center lg:block "
      style={{ backgroundImage: "url('../andra-1.jpeg')" }}
      id="jennifer-aniston"
    >
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="about-image-text w-full lg:w-1/2">
          <div className="about-image-text-wrapper overflow-hidden grayscale filter transition duration-300">
            <img
              src="../sandra2.jpeg"
              alt="Jennifer Aniston"
              className="w-full"
            />
          </div>
          <div className="full-name absolute bottom-10 left-0 ml-8">
            <div className="firstname text-5xl uppercase">Sandra</div>
            <div className="lastname text-5xl uppercase">Bullock</div>
          </div>
        </div>
        <div className="about-content mr-5 mt-10 w-full text-white lg:ml-16 lg:mt-0 lg:w-1/2">
          <div className="head relative mb-8 text-4xl md:text-5xl">ABOUT</div>
          <div className="about-content-wrapper ">
            <p className="mb-4">
              I'm Sandra Bullock, born on July 26, 1964,
              <br /> in Arlington, Virginia,
              <br /> and raised in Nuremberg, Germany, and Arlington, Virginia.
              <br /> With a career spanning decades, I've made my mark in the
              entertainment industry.
            </p>
            <p className="mb-4">
              You might know me from beloved films such as "Speed" and "Miss
              Congeniality,"
              <br /> where I showcased my talent for both action and comedy.
              <br /> These roles catapulted me into the spotlight, earning me
              critical acclaim
              <br /> and a dedicated fan base around the world.
            </p>
            <p className="mb-4">
              Throughout my journey, I've had the privilege of collaborating
              with esteemed
              <br /> directors and fellow actors, bringing memorable characters
              to life
              <br /> in films like "The Blind Side" and "Gravity," for which I
              received
              <br /> widespread recognition and accolades, including an Academy
              Award.
            </p>
            <p>
              Beyond the silver screen, I'm deeply passionate about philanthropy
              <br /> and environmental conservation, using my platform to
              advocate for
              <br /> causes close to my heart. I believe in the power of
              storytelling
              <br /> to inspire change and foster empathy, both on-screen and
              off.
              <br /> As I continue to explore new roles and opportunities,
              <br /> I remain committed to authenticity and connection,
              <br /> embracing the journey with grace and gratitude.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDesktop;
