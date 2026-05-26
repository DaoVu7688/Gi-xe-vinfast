import { motion } from 'motion/react';
import { CARS_DATA } from '../constants';
import { Link } from 'react-router-dom';
import LeadForm from '../components/forms/LeadForm';
import { FileText, Calculator, Zap } from 'lucide-react';

export default function Pricing() {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <span className="text-blue-600 font-bold uppercase tracking-widest text-sm flex items-center justify-center">
               <FileText className="w-4 h-4 mr-2" />
               Cập nhật ngày {new Date().toLocaleDateString('vi-VN')}
             </span>
             <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
                Bảng Giá Xe VinFast Tổng Hợp {currentMonth}/{currentYear}
             </h1>
             <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">
                Tổng hợp báo giá tất cả các dòng xe điện VinFast đang phân phối tại Việt Nam. 
                GiaXeVinFastVN cam kết mức giá cạnh tranh nhất và nhiều ưu đãi bí mật qua Hotline.
             </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {CARS_DATA.map((car) => (
                <motion.div 
                  key={car.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
                      <div>
                        <h2 className="text-3xl font-extrabold text-blue-900 mb-1">VinFast {car.name}</h2>
                        <p className="text-gray-500 text-sm italic">{car.tagline}</p>
                      </div>
                      <Link 
                        to={`/xe/${car.id}`}
                        className="bg-blue-50 text-blue-600 px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-600 hover:text-white transition-all text-center"
                      >
                        Thông số chi tiết
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                       <div className="aspect-video relative rounded-2xl overflow-hidden shadow-inner bg-gray-100">
                          <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                       </div>
                       <div className="md:col-span-2 space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                             <div className="bg-gray-50 p-4 rounded-xl">
                                <p className="text-xs text-gray-400 font-bold uppercase">Giá Xe (Thuê Pin)</p>
                                <p className="text-xl font-extrabold text-blue-700">{car.prices[0].priceShell}</p>
                             </div>
                             <div className="bg-gray-50 p-4 rounded-xl">
                                <p className="text-xs text-gray-400 font-bold uppercase">Giá Xe (Mua Pin)</p>
                                <p className="text-xl font-extrabold text-orange-600">
                                  {car.prices[0].priceBattery !== 'N/A' ? car.prices[0].priceBattery : 'Liên Hệ HotLine'}
                                </p>
                             </div>
                          </div>
                          
                          <div className="flex items-center space-x-2 text-sm text-gray-600 bg-blue-50 p-3 rounded-lg border border-blue-100">
                             <Zap className="w-4 h-4 text-blue-500" />
                             <span><strong>Khuyến mãi:</strong> Tặng 1 năm sạc pin miễn phí + Phụ kiện cao cấp.</span>
                          </div>
                          
                          <div className="pt-2">
                             <p className="text-xs text-gray-400 leading-normal italic italic text-red-500 font-medium">
                                * Lưu ý: Giá lăn bánh thay đổi tùy theo khu vực đăng ký (Hà Nội, TP.HCM hay các tỉnh).
                             </p>
                          </div>
                       </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="bg-blue-900 rounded-[32px] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                   <h3 className="text-3xl font-extrabold mb-6 flex items-center">
                     <Calculator className="w-8 h-8 mr-3 text-blue-400" />
                     Dự Toán Chi Phí Lăn Bánh?
                   </h3>
                   <p className="text-blue-100 text-lg mb-10 max-w-xl opacity-90">
                     Phí lăn bánh xe điện bao gồm: Phí biển số, phí đường bộ, bảo hiểm TNDS, phí đăng kiểm... 
                     Đặc biệt quý khách đang được <strong>MIỄN PHÍ 100% Lệ phí trước bạ</strong>.
                   </p>
                   <a href="#lead-form" className="bg-white text-blue-900 px-10 py-4 rounded-xl font-bold hover:shadow-2xl transition shadow-xl shadow-white/20 inline-block text-lg">
                      Tải Bảng Tính Chi Phí Lăn Bánh (Excel)
                   </a>
                </div>
                <div className="absolute right-[-5%] top-[-5%] opacity-10">
                    <Calculator className="w-64 h-64" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <LeadForm title="Nhận Bảng Giá Lăn Bánh" description="Để lại thông tin để nhân viên tư vấn gửi bảng kê chi tiết các khoản phí lăn bánh cho từng dòng xe tại khu vực của bạn." />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
