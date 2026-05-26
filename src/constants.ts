export interface CarSpec {
  label: string;
  value: string;
}

export interface CarPrice {
  version: string;
  priceShell: string; // Giá thuê pin
  priceBattery: string; // Giá mua pin
}

export interface CarData {
  id: string;
  name: string;
  tagline: string;
  image: string;
  description: string;
  specs: CarSpec[];
  prices: CarPrice[];
  highlights: string[];
}

export const CARS_DATA: CarData[] = [
  {
    id: 'vf3',
    name: 'VinFast VF 3',
    tagline: 'Gọn gàng - Cá tính - Đột phá',
    image: 'https://images.unsplash.com/photo-1721590219597-bdc1154c866d?q=80&w=1000&auto=format&fit=crop',
    description: 'Mẫu xe điện mini hot nhất hiện nay, phù hợp cho giới trẻ và di chuyển đô thị linh hoạt.',
    specs: [
      { label: 'Dòng xe', value: 'Mini e-SUV' },
      { label: 'Quãng đường', value: '~210 km (NEDC)' },
      { label: 'Số chỗ ngồi', value: '4 chỗ' },
      { label: 'Mâm xe', value: '16 inch' }
    ],
    prices: [
      { version: 'Thuê Pin', priceShell: '235.000.000 VNĐ', priceBattery: 'N/A' },
      { version: 'Mua Pin', priceShell: 'N/A', priceBattery: '315.000.000 VNĐ' }
    ],
    highlights: ['Tiết kiệm chi phí vận hành', 'Đỗ xe cực kỳ dễ dàng', 'Phụ kiện đa dạng cá nhân hóa']
  },
  {
    id: 'vf5',
    name: 'VinFast VF 5 Plus',
    tagline: 'Xe quốc dân cho mọi gia đình',
    image: 'https://images.unsplash.com/photo-1621251913926-80f089903ca7?q=80&w=1000&auto=format&fit=crop',
    description: 'Lựa chọn hàng đầu phân khúc A-SUV với trang bị vượt trội và giá thành hợp lý.',
    specs: [
      { label: 'Dòng xe', value: 'A-SUV' },
      { label: 'Quãng đường', value: '~300 km (NEDC)' },
      { label: 'Số chỗ ngồi', value: '5 chỗ' },
      { label: 'Túi khí', value: '6 túi khí' }
    ],
    prices: [
      { version: 'Thuê Pin', priceShell: '468.000.000 VNĐ', priceBattery: 'N/A' },
      { version: 'Mua Pin', priceShell: 'N/A', priceBattery: '548.000.000 VNĐ' }
    ],
    highlights: ['Hệ thống ADAS thông minh', 'Chi phí bảo dưỡng cực thấp', 'Chống ồn vượt trội']
  },
  {
    id: 'vf6',
    name: 'VinFast VF 6',
    tagline: 'Tuyệt tác nghệ thuật trong phân khúc B',
    image: 'https://images.unsplash.com/photo-1698748303319-3c35df178f5a?q=80&w=1000&auto=format&fit=crop',
    description: 'Thiết kế tinh tế từ Torino Design, VF 6 mang lại trải nghiệm lái thể thao và sang trọng.',
    specs: [
      { label: 'Dòng xe', value: 'B-SUV' },
      { label: 'Quãng đường', value: '381 - 399 km' },
      { label: 'Công suất', value: '174 - 201 hp' },
      { label: 'Màn hình', value: '12.9 inch' }
    ],
    prices: [
      { version: 'Base (Thuê Pin)', priceShell: '675.000.000 VNĐ', priceBattery: 'N/A' },
      { version: 'Plus (Thuê Pin)', priceShell: '765.000.000 VNĐ', priceBattery: 'N/A' }
    ],
    highlights: ['Thiết kế nội thất cao cấp', 'Hỗ trợ lái đường cao tốc', 'Mượt mà trong mọi cung đường']
  },
  {
    id: 'vf7',
    name: 'VinFast VF 7',
    tagline: 'Phá vỡ mọi giới hạn',
    image: 'https://images.unsplash.com/photo-1698748303865-c7255be9d09d?q=80&w=1000&auto=format&fit=crop',
    description: 'C-SUV phong cách phi thuyền tương lai, công suất cực lớn dành cho những người đam mê tốc độ.',
    specs: [
      { label: 'Dòng xe', value: 'C-SUV' },
      { label: 'Tăng tốc 0-100km/h', value: '5.8 giây (Plus)' },
      { label: 'Quãng đường', value: '431 - 496 km' },
      { label: 'Dẫn động', value: 'AWD (Plus)' }
    ],
    prices: [
      { version: 'Base (Thuê Pin)', priceShell: '850.000.000 VNĐ', priceBattery: 'N/A' },
      { version: 'Plus (Thuê Pin)', priceShell: '999.000.000 VNĐ', priceBattery: 'N/A' }
    ],
    highlights: ['Trần kính toàn cảnh (Plus)', 'Công suất lên tới 349 mã lực', 'Cụm đèn LED cánh chim đặc sắc']
  },
  {
    id: 'vf8',
    name: 'VinFast VF 8',
    tagline: 'Chinh phục thế giới',
    image: 'https://images.unsplash.com/photo-1698748303038-f9332e366fd2?q=80&w=1000&auto=format&fit=crop',
    description: 'Mẫu xe điện toàn cầu đầu tiên của Việt Nam, đạt tiêu chuẩn an toàn 5 sao cao nhất.',
    specs: [
      { label: 'Dòng xe', value: 'D-SUV' },
      { label: 'Quãng đường', value: '400 - 471 km' },
      { label: 'Dẫn động', value: '4 bánh toàn thời gian' },
      { label: 'Hệ thống loa', value: '8 - 11 Loa' }
    ],
    prices: [
      { version: 'Eco (Thuê Pin)', priceShell: '1.090.000.000 VNĐ', priceBattery: 'N/A' },
      { version: 'Plus (Thuê Pin)', priceShell: '1.270.000.000 VNĐ', priceBattery: 'N/A' }
    ],
    highlights: ['Kích thước rộng rãi', 'Kết nối thông minh VF Connect', 'Hỗ trợ phanh khẩn cấp tự động']
  },
  {
    id: 'vf9',
    name: 'VinFast VF 9',
    tagline: 'Lựa chọn của những người dẫn đầu',
    image: 'https://images.unsplash.com/photo-1698748302928-c178be05c5c9?q=80&w=1000&auto=format&fit=crop',
    description: 'E-SUV full-size, biểu tượng của sự sang trọng và tiện nghi bậc nhất từ VinFast.',
    specs: [
      { label: 'Dòng xe', value: 'E-SUV' },
      { label: 'Ghế cơ trưởng', value: 'Có (Option 6 chỗ)' },
      { label: 'Hệ thống treo', value: 'Khí nén chủ động' },
      { label: 'Massage ghế', value: 'Hàng ghế trước & sau' }
    ],
    prices: [
      { version: 'Eco (Thuê Pin)', priceShell: '1.491.000.000 VNĐ', priceBattery: 'N/A' },
      { version: 'Plus (Thuê Pin)', priceShell: '1.676.000.000 VNĐ', priceBattery: 'N/A' }
    ],
    highlights: ['Nội thất da cao cấp', 'Không gian cực rộng', 'Tiêu chuẩn an toàn Quốc tế']
  }
];
