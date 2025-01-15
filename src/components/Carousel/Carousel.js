import React, { useState, useEffect } from "react";
import images from "../../assets/crouselImages";

const CustomCarousel = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    // Create the infinite array by adding copies at the start and end
    const lastSlide = Object.values(images)[Object.values(images).length - 1];
    const firstSlide = Object.values(images)[0];
    const slidesWithClones = [lastSlide, ...Object.values(images), firstSlide];
    setSlides(slidesWithClones);
  }, []);

  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Match this with your transition duration
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

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
    <div className="relative overflow-hidden ">
      <div
        className="flex"
        style={{
          transform: `translateX(-${currentIndex * 100}vw)`,
          transition: isTransitioning ? "transform 500ms ease-in-out" : "none",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((src, index) => (
          <div key={index} className="w-screen h-screen flex-shrink-0">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute mt-8 left-1/2 transform -translate-x-1/2 flex gap-2">
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

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-black p-2 "
      >
        <i className="fi fi-rs-angle-left text-4xl bg-transparent"></i>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-black p-2 "
      >
        <i className="fi fi-rs-angle-right text-4xl bg-transparent"></i>
      </button>
    </div>
  );
};

export default CustomCarousel;