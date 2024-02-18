/* eslint-disable react/no-unescaped-entities */
function AboutDesktop() {
  return (
    <div
      className="about-background relative hidden bg-cover bg-center lg:block "
      style={{ backgroundImage: "url('../about-main-bg.webp')" }}
      id="jennifer-aniston"
    >
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="about-image-text w-full lg:w-1/2">
          <div className="about-image-text-wrapper overflow-hidden grayscale filter transition duration-300">
            <img
              src="../about-main-jen.webp"
              alt="Jennifer Aniston"
              className="w-full"
            />
          </div>
          <div className="full-name absolute bottom-10 left-0 ml-8">
            <div className="firstname text-5xl uppercase">jennifer</div>
            <div className="lastname text-5xl uppercase">aniston</div>
          </div>
        </div>
        <div className="about-content mt-10 w-full text-white lg:ml-16 lg:mt-0 lg:w-1/2">
          <div className="head relative mb-8 text-4xl md:text-5xl">ABOUT</div>
          <div className="about-content-wrapper">
            <p>
              I'm Jennifer Aniston, born on February 11, 1969, in Sherman Oaks,
              Los Angeles, California. You might know me best as Rachel Green
              from the beloved TV show "Friends," which ran from 1994 to 2004.
              Growing up in a family connected to the entertainment industry,
              with my dad being the actor John Aniston, I always felt a deep
              love for performing.
            </p>
            <p>
              After the "Friends" era, I ventured into the world of movies,
              taking on roles in films like "Marley & Me," "The Break-Up," and
              "The Good Girl." I've also explored the world of producing through
              my company, Echo Films, and had the chance to work on some
              exciting projects.
            </p>
            <p>
              One of the films I'm particularly proud of is "Cake," which
              brought me nominations for a Golden Globe and a Screen Actors
              Guild Award. It was a different kind of role for me, and I enjoyed
              the challenge.
            </p>
            <p>
              Beyond the spotlight, I've tried to balance my career with a bit
              of privacy. It's important to me to stay grounded and true to
              myself in an industry that can sometimes be overwhelming. Thanks
              for the support over the years, and I'm excited for what's to
              come!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDesktop;
