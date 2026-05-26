import { motion } from 'motion/react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { CARS_DATA } from '../constants';
import LeadForm from '../components/forms/LeadForm';
import { Check, Info, ArrowLeft, Star, PhoneCall } from 'lucide-react';

export default function CarDetail() {
  const { id } = useParams();
  const car = CARS_DATA.find(c => c.id === id);
  
  if (!car) return <Navigate to="/" />;

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-20">
      {/* Car Hero Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-blue-600 flex items-center"><ArrowLeft className="w-4 h-4 mr-1" /> Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{car.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl bg-white p-2">
                <img src={car.image} alt={car.name} className="w-full h-full object-cover rounded-[36px]" />
                <div className="absolute top-8 left-8">
                    <span className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg shadow-blue-400/20 flex items-center">
                        <Star className="w-3 h-3 mr-1 fill-white" />
                        Best Seller
                    </span>
                </div>
              </div>
            </motion.div>

            <div>
              <h1 id="car-h1" className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-4 tracking-tight">
                Giá Xe {car.name} Lăn Bánh Tháng {currentMonth}/{currentYear}
              </h1>
              <p className="text-xl text-blue-600 font-semibold mb-6 italic">"{car.tagline}"</p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {car.description} Nhận ưu đãi độc quyền dành riêng cho khách hàng đăng ký trực tuyến tại giaxevinfastvn.com.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {car.specs.map((spec) => (
                  <div key={spec.label} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-tighter">{spec.label}</p>
                    <p className="text-sm font-extrabold text-gray-800">{spec.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                 <a href="#leads" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                   Nhận Báo Giá Lăn Bánh
                 </a>
                 <a href="tel:0901234567" className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold flex items-center hover:bg-blue-50 transition">
                   <PhoneCall className="w-5 h-5 mr-2" />
                   Hotline: 0901 234 567
                 </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Comparison Section */}
      <section className="py-24 bg-white" id="leads">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center">
                <Info className="w-8 h-8 text-blue-600 mr-3" />
                Bảng Giá & Thông Số Chi Tiết
              </h2>

              <div className="overflow-x-auto mb-12 rounded-3xl border border-gray-100 shadow-xl">
                <table className="w-full text-left">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-5 font-bold uppercase text-xs tracking-wider">Phiên Bản</th>
                      <th className="px-6 py-5 font-bold uppercase text-xs tracking-wider">Giá Thuê Pin</th>
                      <th className="px-6 py-5 font-bold uppercase text-xs tracking-wider">Giá Mua Pin</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {car.prices.map((price, idx) => (
                      <tr key={idx} className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-6 font-bold text-gray-900 uppercase text-sm">{price.version}</td>
                        <td className="px-6 py-6 text-blue-700 font-extrabold text-lg">{price.priceShell}</td>
                        <td className="px-6 py-6 text-orange-600 font-extrabold text-lg">{price.priceBattery}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ưu Điểm Vượt Trội Của {car.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {car.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                    <div className="bg-green-500 rounded-full p-1"><Check className="w-4 h-4 text-white" /></div>
                    <span className="font-semibold text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
              
              {/* Additional Conversion Helper */}
              <div className="mt-12 p-8 bg-blue-900 rounded-[32px] text-white overflow-hidden relative group">
                <div className="relative z-10">
                    <h4 className="text-2xl font-bold mb-2">Quà tặng đặc biệt chỉ có tại hệ thống!</h4>
                    <p className="text-blue-100 opacity-80 max-w-lg mb-6 leading-relaxed">
                        Tặng bộ phụ kiện cao cấp trị giá 15.000.000 VNĐ, thảm sàn 6D, camera hành trình và gói bảo hiểm thân vỏ khi mua xe trong tuần này.
                    </p>
                    <a href="#lead-form" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-xl font-bold hover:shadow-2xl transition shadow-xl shadow-white/10">
                        Đặt Cọc Nhận Voucher Ngay
                    </a>
                </div>
                <div className="absolute right-[-10%] bottom-[-20%] opacity-10 scale-150 rotate-12 transition-transform group-hover:scale-175">
                    <Sparkles className="w-64 h-64" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <LeadForm carName={car.name} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
