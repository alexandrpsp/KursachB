
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, GraduationCap, BookOpen, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '150+', label: 'Студентів' },
    { icon: GraduationCap, value: '25+', label: 'Викладачів' },
    { icon: BookOpen, value: '10+', label: 'Курсів' },
    { icon: Award, value: '5+', label: 'Років роботи' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-800">
              Про нашу кафедру
            </h1>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Кафедра комп'ютерних інформаційних технологій
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Наша кафедра готує спеціалістів у галузі інформаційних технологій. 
                Ми навчаємо студентів програмуванню, веб-розробці, базам даних та іншим 
                сучасним технологіям.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                У нас працюють досвідчені викладачі, які мають практичний досвід роботи 
                в IT-сфері. Вони допомагають студентам отримати актуальні знання та навички.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Студенти беруть участь у проектах, проходять практику в IT-компаніях 
                та готуються до успішної кар'єри в сфері технологій.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                  <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
