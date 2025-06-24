
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, User } from 'lucide-react';

const News = () => {
  const allNews = [
    {
      id: 1,
      title: 'Нові курси з програмування',
      excerpt: 'Кафедра запускає нові курси з вивчення Python та JavaScript',
      date: '2024-06-20',
      author: 'Іванов І.І.',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600'
    },
    {
      id: 2,
      title: 'Студенти виграли конкурс',
      excerpt: 'Наші студенти зайняли перше місце в конкурсі з веб-розробки',
      date: '2024-06-18',
      author: 'Петрова А.В.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600'
    },
    {
      id: 3,
      title: 'Нова комп\'ютерна лабораторія',
      excerpt: 'Відкрита нова лабораторія з сучасними комп\'ютерами',
      date: '2024-06-15',
      author: 'Сидоров В.М.',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600'
    },
    {
      id: 4,
      title: 'Співпраця з IT-компаніями',
      excerpt: 'Підписані угоди з великими IT-компаніями для стажувань',
      date: '2024-06-12',
      author: 'Коваленко О.С.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600'
    },
    {
      id: 5,
      title: 'Конференція з IT технологій',
      excerpt: 'Проведена міжнародна конференція з новітніх технологій',
      date: '2024-06-10',
      author: 'Мельник С.А.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600'
    },
    {
      id: 6,
      title: 'Стипендії для кращих студентів',
      excerpt: 'Введені додаткові стипендії для студентів з високими оцінками',
      date: '2024-06-08',
      author: 'Адміністрація',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-800">
            Новини кафедри
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {allNews.map((news) => (
              <article key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-2">
                    {news.title}
                  </h2>
                  <p className="text-gray-600 mb-3">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(news.date).toLocaleDateString('uk-UA')}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {news.author}
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Читати далі →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;
