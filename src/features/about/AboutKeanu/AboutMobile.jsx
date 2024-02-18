/* eslint-disable react/no-unescaped-entities */
function AboutMobile() {
  return (
    <div className=" relative block lg:hidden">
      <div className="image">
        <img src="../Keanu_Reeves.webp" alt="keanu reeves" className="image" />
      </div>
      <div className="mobile-about-content bg-stone-950 px-4 py-8 text-white">
        <div className="title mb-6 mt-[-210px] text-center text-3xl uppercase md:text-4xl">
          ABOUT
        </div>
        <div>
          <div className="ml-[80px] mt-12 flex w-52 items-center justify-center text-center">
            <img
              src="../keanu2.jpeg"
              alt="keanu reeves"
              className="grayscale filter"
            />
          </div>
          <div className="full-name mb-8 ml-[120px] mt-[-30px]">
            <div className="firstname font-b text-2xl font-extrabold uppercase text-stone-300">
              Keanu
            </div>
            <div className="lastname text-stone-350 text-2xl font-extrabold uppercase">
              Reeves
            </div>
          </div>
          <div className="line_middle mx-auto mb-6 h-px w-10 bg-white"></div>
          <div className="about-content-wrapper text-center text-sm text-stone-300">
            <p className="mb-4">
              I'm Keanu Reeves, born on September 2, 1964,
              <br /> in Beirut, Lebanon,
              <br /> but raised in Toronto, Canada.
              <br /> I've been involved in the entertainment industry for
              decades,
              <br /> known for my diverse roles and unique personality.
            </p>
            <p className="mb-4">
              You might recognize me from iconic films such as "The Matrix"
              trilogy,
              <br /> where I portrayed Neo, a role that became synonymous with
              my name.
              <br /> The success of "The Matrix" propelled me into international
              stardom
              <br /> and allowed me to explore various genres and characters.
            </p>
            <p className="mb-4">
              Throughout my career, I've been fortunate to work with incredibly
              talented
              <br /> directors and actors, contributing to memorable projects
              like "Speed,"
              <br /> "John Wick," and "Bill & Ted's Excellent Adventure."
              <br /> Each role has presented its own challenges and rewards,
              <br /> shaping me both personally and professionally.
            </p>
            <p>
              Beyond acting, I'm passionate about motorcycles, music, and
              martial arts.
              <br /> These interests reflect my desire for exploration and
              self-expression,
              <br /> allowing me to connect with different aspects of life and
              art.
              <br /> I strive to approach every endeavor with dedication and
              authenticity,
              <br /> seeking growth and meaningful experiences along the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMobile;
