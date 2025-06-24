
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1200',
      title: 'Вивчай IT технології',
      subtitle: 'Навчання програмування',
      description: 'Стань спеціалістом в галузі інформаційних технологій'
    },
    {
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200',
      title: 'Практичні заняття',
      subtitle: 'Роби реальні проекти',
      description: 'Отримуй досвід роботи з сучасними технологіями'
    },
    {
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200',
      title: 'Кар\'єра в IT',
      subtitle: 'Знайди роботу мрії',
      description: 'Наші випускники працюють в кращих IT компаніях'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-96 md:h-screen bg-gray-800">
      <div className="absolute inset-0">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="relative z-10 h-full flex items-center text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-xl md:text-2xl mb-4">
              {slides[currentSlide].subtitle}
            </h2>
            <p className="text-lg mb-6">
              {slides[currentSlide].description}
            </p>
            <div className="space-y-2 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors w-full md:w-auto">
                Дізнатися більше
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded hover:bg-white hover:text-blue-900 transition-colors w-full md:w-auto">
                Наші курси
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
