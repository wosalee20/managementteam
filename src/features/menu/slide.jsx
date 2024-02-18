import { useEffect, useState } from "react";

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideIndex]);

  function plusSlides(n) {
    setSlideIndex(slideIndex + n);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  return (
    <div className="slideshow-container relative mx-auto max-w-3xl">
      <div className="mySlides fade">
        <div className="numbertext">1 / 3</div>
        <img src="./jen-1.jpg" className="w-10" alt="Slide 1" />
        <div className="text">Caption Text</div>
      </div>

      <div className="mySlides fade">
        <div className="numbertext">2 / 3</div>
        <img src="img2.jpg" className="w-[200px]" alt="Slide 2" />
        <div className="text">Caption Two</div>
      </div>

      <div className="mySlides fade">
        <div className="numbertext">3 / 3</div>
        <img src="img3.jpg" className="w-full" alt="Slide 3" />
        <div className="text">Caption Three</div>
      </div>

      <a className="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        &#10095;
      </a>

      <div className="mt-4 flex justify-center">
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
}

export default Slideshow;
