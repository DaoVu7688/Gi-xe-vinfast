import { Mail, Phone, MapPin, Facebook, Youtube, Share2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-bold flex items-center">
              <ShieldCheck className="w-6 h-6 mr-2 text-blue-500" />
              GiaXeVinFastVN
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Đại lý ủy quyền VinFast chuyên cung cấp các dòng xe điện thông minh, 
              tư vấn giá lăn bánh tốt nhất và hỗ trợ thủ tục trả góp nhanh chóng.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition-colors"><Share2 className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Dòng Xe VinFast</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/xe/vf3" className="hover:text-blue-400 transition-colors">VinFast VF 3 - Giá chỉ từ 235 triệu</Link></li>
              <li><Link to="/xe/vf5" className="hover:text-blue-400 transition-colors">VinFast VF 5 Plus</Link></li>
              <li><Link to="/xe/vf6" className="hover:text-blue-400 transition-colors">VinFast VF 6 - B-SUV Thể Thao</Link></li>
              <li><Link to="/xe/vf7" className="hover:text-blue-400 transition-colors">VinFast VF 7 - Đẳng Cấp</Link></li>
              <li><Link to="/xe/vf8" className="xe/vf8">VinFast VF 8 - Toàn Cầu</Link></li>
              <li><Link to="/xe/vf9" className="xe/vf9">VinFast VF 9 - Full Size SUV</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-6">Tư Vấn & Hỗ Trợ</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/bang-gia" className="hover:text-blue-400 transition-colors">Giá lăn bánh tạm tính {currentMonth}/{currentYear}</Link></li>
              <li><Link to="/uu-dai" className="hover:text-blue-400 transition-colors">Chương trình khuyến mãi mới nhất</Link></li>
              <li><Link to="/tra-gop" className="hover:text-blue-400 transition-colors">Thủ tục mua xe trả góp 0.5%</Link></li>
              <li><Link to="/tra-cuu" className="hover:text-blue-400 transition-colors">Tra cứu trạm sạc toàn quốc</Link></li>
              <li><Link to="/chinh-sach" className="hover:text-blue-400 transition-colors">Chính sách bảo hành 10 năm</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Thông Tin Liên Hệ</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                <span>Showroom VinFast TP.HCM | Hà Nội | Đà Nẵng</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                <a href="tel:0901234567" className="hover:text-blue-400 transition-colors">Hotline: 0901 234 567</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                <a href="mailto:info@giaxevinfastvn.com" className="hover:text-blue-400 transition-colors">info@giaxevinfastvn.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>© {currentYear} GiaXeVinFastVN.com - Hệ thống phân phối xe điện VinFast chính hãng.</p>
          <p className="mt-2">Thông tin mang tính chất tham khảo. Quý khách vui lòng liên hệ Hotline để có giá chính xác nhất tại thời điểm mua.</p>
        </div>
      </div>
    </footer>
  );
}
