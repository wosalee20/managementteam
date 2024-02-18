/* eslint-disable react/no-unescaped-entities */
function AboutMobile() {
  return (
    <div className=" relative block lg:hidden">
      <div className="image">
        <img src="../about-main-bg.webp" alt="" className="image" />
      </div>
      <div className="mobile-about-content bg-stone-950 px-4 py-8 text-white">
        <div className="title mb-6 mt-[-210px] text-center text-3xl uppercase md:text-4xl">
          ABOUT
        </div>
        <div>
          <div className="ml-[80px] mt-12 flex w-52 items-center justify-center text-center">
            <img src="../about-main-jen.webp" className="grayscale filter" />
          </div>
          <div className="full-name mb-8 ml-[120px] mt-[-30px]">
            <div className="firstname font-b text-2xl font-extrabold uppercase text-stone-300">
              jennifer
            </div>
            <div className="lastname text-stone-350 text-2xl font-extrabold uppercase">
              aniston
            </div>
          </div>
          <div className="line_middle mx-auto mb-6 h-px w-10 bg-white"></div>
          <div className="about-content-wrapper text-center text-sm text-stone-300">
            <p className="mb-4">
              I'm Jennifer Aniston, born on February 11, 1969,
              <br /> in Sherman Oaks, Los Angeles, California.
              <br /> You might know me best as Rachel Green
              <br />
              from the beloved TV show "Friends,"
              <br /> which ran from 1994 to 2004.
              <br />
              Growing up in a family connected to the entertainment industry,
              with my dad being the actor John Aniston,
              <br /> I always felt a deep love for performing.
            </p>
            <p className="mb-4">
              After the "Friends" era, I ventured into the
              <br /> world of movies, taking on roles in films like "Marley &
              Me,
              <br />" "The Break-Up," and "The Good Girl." <br />
              I've also explored the world of
              <br /> producing through my company,
              <br /> Echo Films, <br />
              and had the chance to work on some exciting projects.
            </p>
            <p className="mb-4">
              One of the films I'm particularly proud of is "Cake,"
              <br /> which brought me nominations for a <br />
              Golden Globe and a Screen Actors Guild Award.
              <br /> It was a different kind of role for me, <br />
              and I enjoyed the challenge.
            </p>
            <p>
              Beyond the spotlight, I've tried to balance my career
              <br /> with a bit of privacy. <br />
              It's important to me to stay grounded and true <br />
              to myself in an industry that can sometimes be overwhelming.
              <br /> Thanks for the support over the years,
              <br /> and I'm excited for what's to come!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMobile;
