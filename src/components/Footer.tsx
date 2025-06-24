
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Логотип та опис */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl">КІТ</h3>
                <p className="text-sm text-gray-400">Кафедра КІТ</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Кафедра комп'ютерних інформаційних технологій - провідний центр 
              підготовки IT-спеціалістів з багаторічним досвідом та сучасними 
              методами навчання.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Швидкі посилання */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-cyan-400">Швидкі посилання</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Головна сторінка
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Про кафедру
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Новини
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Галерея
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          {/* Освітні програми */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-cyan-400">Освітні програми</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Інженерія програмного забезпечення</li>
              <li className="text-gray-400">Комп'ютерні науки</li>
              <li className="text-gray-400">Кібербезпека</li>
              <li className="text-gray-400">Штучний інтелект</li>
              <li className="text-gray-400">Веб-розробка</li>
              <li className="text-gray-400">Мобільні додатки</li>
            </ul>
          </div>

          {/* Контактна інформація */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-cyan-400">Контакти</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  вул. Університетська, 1<br />
                  м. Київ, 01001, Україна
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href="tel:+380441234567" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +38 (044) 123-45-67
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href="mailto:kit@university.edu.ua" className="text-gray-400 hover:text-white transition-colors text-sm">
                  kit@university.edu.ua
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Кафедра комп'ютерних інформаційних технологій. Всі права захищені.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Політика конфіденційності
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Умови використання
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
