/* eslint-disable react/no-unescaped-entities */
function AboutMobile() {
  return (
    <div className=" relative block lg:hidden">
      <div className="image">
        <img
          src="../sandra-1.jpg"
          alt=""
          className="image h-[200px] w-[400px] opacity-70"
        />
      </div>
      <div className="mobile-about-content bg-stone-950 px-4 py-8 text-white">
        <div className="title mb-6 mt-[-210px] text-center text-3xl uppercase md:text-4xl">
          ABOUT
        </div>
        <div>
          <div className="ml-[80px] mt-12 flex w-52 items-center justify-center text-center">
            <img src="../sandra2.jpeg" className="w-[400px] grayscale filter" />
          </div>
          <div className="full-name mb-8 ml-[120px] mt-[-30px]">
            <div className="firstname font-b text-2xl font-extrabold uppercase text-stone-300">
              sandra
            </div>
            <div className="lastname text-stone-350 text-2xl font-extrabold uppercase">
              bullock
            </div>
          </div>
          <div className="line_middle mx-auto mb-6 h-px w-10 bg-white"></div>
          <div className="about-content-wrapper text-center text-sm text-stone-300">
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

export default AboutMobile;
