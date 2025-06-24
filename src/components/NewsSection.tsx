import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const featuredNews = [
    {
      id: 1,
      title: 'Оновлення навчальних програм з штучного інтелекту',
      excerpt: 'Кафедра запроваджує нові курси з машинного навчання та нейронних мереж для підготовки спеціалістів нового покоління.',
      date: '2024-06-20',
      author: 'Проф. Іванов І.І.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600',
      featured: true
    },
    {
      id: 2,
      title: 'Студенти перемогли в міжнародному хакатоні',
      excerpt: 'Команда нашої кафедри зайняла перше місце в конкурсі з веб-розробки.',
      date: '2024-06-18',
      author: 'Доц. Петрова А.В.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400'
    },
    {
      id: 3,
      title: 'Нова лабораторія віртуальної реальності',
      excerpt: 'Відкриття сучасної лабораторії для вивчення VR/AR технологій.',
      date: '2024-06-15',
      author: 'Проф. Сидоров В.М.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400'
    },
    {
      id: 4,
      title: 'Партнерство з провідними IT-компаніями',
      excerpt: 'Підписано угоди про співпрацю з топ-10 IT-компаній України.',
      date: '2024-06-12',
      author: 'Зав. кафедри',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400'
    },
    {
      id: 5,
      title: 'Конференція з кібербезпеки',
      excerpt: 'Міжнародна конференція з питань інформаційної безпеки.',
      date: '2024-06-10',
      author: 'Проф. Коваленко О.С.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400'
    },
    {
      id: 6,
      title: 'Стипендіальна програма для обдарованих студентів',
      excerpt: 'Запуск програми підтримки талановитих студентів кафедри.',
      date: '2024-06-08',
      author: 'Адміністрація',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400'
    },
    {
      id: 7,
      title: 'Онлайн курси з Data Science',
      excerpt: 'Запуск дистанційних програм навчання аналізу даних.',
      date: '2024-06-05',
      author: 'Доц. Морозова К.П.',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400'
    },
    {
      id: 8,
      title: 'Модернізація комп\'ютерних класів',
      excerpt: 'Оновлення обладнання в навчальних лабораторіях.',
      date: '2024-06-03',
      author: 'Техслужба',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400'
    },
    {
      id: 9,
      title: 'Випуск молодих спеціалістів 2024',
      excerpt: 'Урочиста церемонія вручення дипломів випускникам кафедри.',
      date: '2024-06-01',
      author: 'Декан факультету',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400'
    }
  ];

  const mainNews = featuredNews[0];
  const sideNews = featuredNews.slice(1, 10);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Головні новини
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Останні події та досягнення кафедри комп'ютерних інформаційних технологій
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Головна новина */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={mainNews.image} 
                  alt={mainNews.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Головна новина
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors">
                  {mainNews.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {mainNews.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(mainNews.date).toLocaleDateString('uk-UA')}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {mainNews.author}
                    </div>
                  </div>
                </div>
                <button className="flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors group">
                  Читати повністю
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          </div>

          {/* Бічні новини */}
          <div className="space-y-6">
            {sideNews.slice(0, 4).map((news) => (
              <article key={news.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="flex">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                      {news.title}
                    </h4>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(news.date).toLocaleDateString('uk-UA')}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Сітка новин */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sideNews.slice(4).map((news) => (
            <article key={news.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {news.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(news.date).toLocaleDateString('uk-UA')}
                  </div>
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {news.author}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/news"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            Переглянути всі новини
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
