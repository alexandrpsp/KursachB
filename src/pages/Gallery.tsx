
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800', alt: 'Навчання IT' },
    { id: 2, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800', alt: 'Студенти' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800', alt: 'Конференція' },
    { id: 4, src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800', alt: 'Лекція' },
    { id: 5, src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800', alt: 'Комп\'ютерна лабораторія' },
    { id: 6, src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800', alt: 'Програмування' },
    { id: 7, src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800', alt: 'Код на екрані' },
    { id: 8, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', alt: 'Зустріч команди' },
    { id: 9, src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800', alt: 'Робоче місце' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-800">
            Галерея фото
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image) => (
              <div 
                key={image.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-3">
                  <h3 className="font-medium text-gray-800">{image.alt}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-3xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-1"
              >
                <X size={20} />
              </button>
              <img 
                src={selectedImage} 
                alt="Збільшене фото"
                className="max-w-full max-h-full object-contain rounded"
              />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
