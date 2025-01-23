import React, { useState, useEffect } from "react";
import images from "../../assets/crouselImages";
import ProductList from "../ProductList/ProductList";

const CustomCarousel = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Add an interval duration (in milliseconds)
  const SLIDE_INTERVAL = 3000; // 3 seconds

  useEffect(() => {
    const lastSlide = Object.values(images)[Object.values(images).length - 1];
    const firstSlide = Object.values(images)[0];
    const slidesWithClones = [lastSlide, ...Object.values(images), firstSlide];
    setSlides(slidesWithClones);
  }, []);

  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 500); // Match this with your transition duration
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, SLIDE_INTERVAL);

    // Clear the interval on unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleSlideChange = (newIndex) => {
    setIsTransitioning(true);
    setCurrentIndex(newIndex);

    // Handle infinite scroll logic
    if (newIndex === slides.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 500);
    } else if (newIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(slides.length - 2);
      }, 500);
    }
  };

  const handlePrev = () => {
    handleSlideChange(currentIndex - 1);
  };

  const handleNext = () => {
    handleSlideChange(currentIndex + 1);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  if (slides.length === 0) return null;

  return (
    <div className="relative overflow-hidden w-full h-full">
      {/* Main Slider Container */}
      <div
        className="flex shadow-2xl"
        style={{
          transform: `translateX(-${currentIndex * 100}vw)`,
          transition: isTransitioning ? "transform 500ms ease-in-out" : "none",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((src, index) => (
          <div key={index} className="w-screen h-full flex-shrink-0">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div  className="w-full h-screen absolute top-0 bg-gradient-to-t from-black to-transparent" />

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Object.values(images).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index + 1 ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => handleSlideChange(index + 1)}
          />
        ))}
      </div>

      {/* Navigation Arrows - Now using flex to position them */}
      <div className=" absolute top-0 inset-0 flex items-start justify-between pointer-events-none">
        <button
          onClick={handlePrev}
          className="pointer-events-auto ml-4 mt-20 bg-opacity-50 text-black p-2"
        >
          <i className="fi fi-rs-angle-left text-4xl bg-transparent"></i>
          <i className="fi fi-rs-angle-left -ml-8 text-4xl bg-transparent text-white opacity-50"></i>
        </button>
        <button
          onClick={handleNext}
          className="pointer-events-auto mr-4 mt-20 bg-opacity-50 text-black p-2"
        >
          <i className="fi fi-rs-angle-right text-4xl bg-transparent text-white opacity-50"></i>
          <i className="fi fi-rs-angle-right text-4xl bg-transparent -ml-8 "></i>
        </button>
      </div>
    </div>
  );
};

export default CustomCarousel;
