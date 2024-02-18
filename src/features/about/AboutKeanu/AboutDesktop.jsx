/* eslint-disable react/no-unescaped-entities */
function AboutDesktop() {
  return (
    <div
      className="about-background relative hidden bg-cover bg-center lg:block "
      style={{ backgroundImage: "url('../')" }}
      id="jennifer-aniston"
    >
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="about-image-text w-full lg:w-1/2">
          <div className="about-image-text-wrapper overflow-hidden grayscale filter transition duration-300">
            <img src="../keanu2.jpeg" alt="keanu-reeves" className="w-full" />
          </div>
          <div className="full-name absolute bottom-10 left-0 ml-8">
            <div className="firstname text-5xl uppercase">Keanu</div>
            <div className="lastname text-5xl uppercase">Reeves</div>
          </div>
        </div>
        <div className="about-content mt-10 w-full text-white lg:ml-16 lg:mt-0 lg:w-1/2">
          <div className="head relative mb-8 text-4xl md:text-5xl">ABOUT</div>
          <div className="about-content-wrapper ">
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

export default AboutDesktop;
