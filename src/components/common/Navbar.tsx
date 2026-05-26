import { motion } from 'motion/react';
import { Phone, Menu, X, CarFront, Calculator, Gift, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Trang Chủ', path: '/' },
  { name: 'Bảng Giá Xe', path: '/bang-gia' },
  { name: 'Ưu Đãi Tháng', path: '/uu-dai' },
  { name: 'Lái Thử', path: '/lai-thử' },
  { name: 'Liên Hệ', path: '/lien-he' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav id="navbar" className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <CarFront className="h-8 w-8 text-blue-600 mr-2 group-hover:scale-110 transition-transform" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
                GiaXeVinFastVN
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === item.path ? 'text-blue-600 border-b-2 border-blue-600 py-1' : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:0901234567"
              className="flex items-center bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
            >
              <Phone className="w-4 h-4 mr-2" />
              0901 234 567
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-2 shadow-xl"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 px-3">
            <a
              href="tel:0901234567"
              className="flex items-center justify-center w-full bg-blue-600 text-white py-3 rounded-xl font-bold"
            >
              <Phone className="w-5 h-5 mr-3" />
              GỌI NGAY: 0901 234 567
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
