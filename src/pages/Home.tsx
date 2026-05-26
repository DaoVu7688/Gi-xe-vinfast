import { motion } from 'motion/react';
import { ArrowRight, Zap, Shield, Wallet, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CARS_DATA } from '../constants';
import LeadForm from '../components/forms/LeadForm';

export default function Home() {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1698748303319-3c35df178f5a?q=80&w=2000&auto=format&fit=crop" 
            alt="VinFast EV Hero" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600/20 text-blue-400 text-sm font-semibold border border-blue-600/30 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Ưu đãi VinFast tháng {currentMonth}/{currentYear}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Bảng Giá Xe VinFast <br/> 
              <span className="text-blue-500">Lăn Bánh Mới Nhất</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Nhận ngay ưu đãi 100% lệ phí trước bạ, hỗ trợ lãi suất 0.5% và nhiều phần quà hấp dẫn khi đặt cọc xe điện VinFast ngay hôm nay. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#leads" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
                Nhận Báo Giá Chi Tiết
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <Link to="/bang-gia" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-white/20 transition-all">
                Xem Bảng Giá Xe
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats/Benefits */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-xl"><Shield className="w-8 h-8 text-blue-600" /></div>
              <div>
                <h4 className="font-bold text-gray-900">Bảo Hành 10 Năm</h4>
                <p className="text-sm text-gray-500">Hoặc 200,000 km cho toàn bộ Pin</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="bg-green-100 p-3 rounded-xl"><Zap className="w-8 h-8 text-green-600" /></div>
              <div>
                <h4 className="font-bold text-gray-900">Chi Phí Cực Thấp</h4>
                <p className="text-sm text-gray-500">Tiết kiệm 90% so với xe xăng</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="bg-orange-100 p-3 rounded-xl"><Wallet className="w-8 h-8 text-orange-600" /></div>
              <div>
                <h4 className="font-bold text-gray-900">Thu Cũ Đổi Mới</h4>
                <p className="text-sm text-gray-500">Ưu đãi 30 triệu đồng tiền mặt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Grid */}
      <section className="py-24 bg-white" id="models">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-lg font-bold text-blue-600 uppercase tracking-widest mb-3">Line-up VinFast</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Chọn Dòng Xe Bạn Quan Tâm</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CARS_DATA.map((car) => (
              <motion.div 
                key={car.id}
                whileHover={{ y: -10 }}
                className="group relative bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-1">{car.name}</h4>
                  <p className="text-blue-600 text-sm font-medium mb-4">{car.tagline}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {car.specs.slice(0, 2).map((spec) => (
                      <div key={spec.label}>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">{spec.label}</p>
                        <p className="text-sm font-semibold text-gray-700">{spec.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400 uppercase">Giá từ</p>
                      <p className="text-xl font-extrabold text-blue-700">{car.prices[0].priceShell}</p>
                    </div>
                    <Link 
                      to={`/xe/${car.id}`} 
                      className="bg-gray-100 text-gray-900 p-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Ads Optimized Content Section */}
      <section className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                Tại sao chọn Mua Xe Điện <br />
                Tại Chính Hãng VinFast?
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Công nghệ ADAS thông minh', desc: 'Hệ thống hỗ trợ lái nâng cao tự động, cảnh báo va chạm, giữ làn đường.' },
                  { title: 'Hạ tầng trạm sạc phủ khắp', desc: '150.000 cổng sạc trên 63 tỉnh thành, sạc mọi lúc mọi nơi.' },
                  { title: 'Chi phí sạc điện siêu rẻ', desc: 'Chỉ tương đương 400 - 500 đ/km, thấp hơn xe máy tay ga.' },
                  { title: 'Kết nối VF Connect', desc: 'Quản lý xe qua điện thoại, trợ lý ảo tiếng Việt Viva cực nhạy.' },
                ].map((item, i) => (
                  <div key={i} className="flex space-x-4">
                    <div className="bg-blue-600 w-2 h-2 rounded-full mt-2 shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
