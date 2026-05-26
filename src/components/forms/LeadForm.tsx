import { motion } from 'motion/react';
import { useState } from 'react';
import { Send, CheckCircle, User, Phone, MessageSquare } from 'lucide-react';

interface LeadFormProps {
  carName?: string;
  title?: string;
  description?: string;
}

export default function LeadForm({ 
  carName = 'Tư vấn chung', 
  title = 'Nhận Báo Giá & Ưu Đãi Mới Nhất',
  description = 'Để lại thông tin để nhận bảng tính giá lăn bánh chi tiết và chương trình khuyến mãi riêng biệt tháng này.'
}: LeadFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 rounded-2xl shadow-xl border border-green-100 text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Đăng Ký Thành Công!</h3>
        <p className="text-gray-600">Cảm ơn quý khách. Tư vấn viên sẽ liên hệ lại trong ít phút để hỗ trợ báo giá xe {carName}.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-6 text-blue-600 font-medium hover:underline"
        >
          Gửi lại yêu cầu khác
        </button>
      </motion.div>
    );
  }

  return (
    <div id="lead-form" className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-100 sticky top-24">
      <h3 className="text-2xl font-extrabold text-blue-900 mb-3">{title}</h3>
      <p className="text-gray-500 mb-8 text-sm leading-relaxed">
        {description}
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            required
            type="text" 
            placeholder="Họ và tên quý khách"
            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            required
            type="tel" 
            placeholder="Số điện thoại"
            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
          />
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
          <textarea 
            rows={3}
            placeholder="Dòng xe quan tâm (VD: VF 3, VF 7 bản Plus...)"
            defaultValue={carName !== 'Tư vấn chung' ? `Tôi quan tâm xe ${carName}` : ''}
            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none"
          />
        </div>

        <button 
          disabled={loading}
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-200 flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-blue-800 transition-all uppercase tracking-wider text-sm active:scale-95"
        >
          {loading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Đang xử lý...
            </span>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Gửi Ngay - Nhận Khuyến Mãi</span>
            </>
          )}
        </button>
      </form>
      
      <p className="mt-4 text-[10px] text-gray-400 text-center italic">
        * Thông tin của quý khách được bảo mật tuyệt đối theo quy định.
      </p>
    </div>
  );
}
