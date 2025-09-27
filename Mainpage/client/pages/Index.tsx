import { Button } from "@/components/ui/button";
import { Search, Bell, ChevronDown, Mail, Globe, Phone, Map, Bookmark, Ticket, X } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
  
  const categories = [
    { name: "Đất đai", count: "91,909 bộ dữ liệu", icon: "https://api.builder.io/api/v1/image/assets/TEMP/c408177515ea671cf988624e5487daad671a7d65?width=108" },
    { name: "Tài nguyên nước", count: "91,909 bộ dữ liệu", icon: "https://api.builder.io/api/v1/image/assets/TEMP/0873f14f4bbc9cd3a6a6bc391958c492bf25aa6b?width=108" },
    { name: "Môi trường", count: "91,909 bộ dữ liệu", icon: "https://api.builder.io/api/v1/image/assets/TEMP/d1c53cd630ba1468dcab50361ac7fdd927e26835?width=108" },
    { name: "Địa chất và khoáng sản", count: "91,909 bộ dữ liệu", icon: "https://api.builder.io/api/v1/image/assets/TEMP/fdab52f984015a92351af71bc98677c29aab53a0?width=108" },
    { name: "Khí tượng thủy văn", count: "91,909 bộ dữ liệu", icon: "https://api.builder.io/api/v1/image/assets/TEMP/8c13beb7700569399c7a7d2685d358d600e175d0?width=108" },
    { name: "Biến đổi khí hậu", count: "91,909 bộ dữ liệu", icon: "https://api.builder.io/api/v1/image/assets/TEMP/c592ded42b7a15072234c650b01562f61e883b74?width=108" },
    { name: "Đo đạc và bản đồ", count: "91,909 bộ dữ liệu", icon: "https://api.builder.io/api/v1/image/assets/TEMP/8846eb015b57881d310eefb8d91d705e7913fe99?width=108" },
    { name: "Thanh tra, kiểm tra", count: "91,909 bộ dữ liệu", icon: "https://api.builder.io/api/v1/image/assets/TEMP/3a3cf5217183747d6e0573660222958bacf3ff75?width=108" },
    { name: "VBQPPL của Sở", count: "91,909 bộ dữ liệu", icon: "https://api.builder.io/api/v1/image/assets/TEMP/302a87a55818376fe302918aa5874a504b93964c?width=108" },
    { name: "Dữ liệu khác", count: "91,909 bộ dữ liệu", icon: "https://api.builder.io/api/v1/image/assets/TEMP/302a87a55818376fe302918aa5874a504b93964c?width=108" }
  ];

  const recentSearches = [
    "Đất đai",
    "Hà Giang", 
    "Đất đai",
    "Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
    "Hang Sơn Đoòng",
    "Đất đai",
    "Đất đai", 
    "Hồ sơ",
    "bàn giao đất",
    "Hồ sơ bàn giao đất"
  ];

  const suggestionCategories = [
    { name: "Đất đai", count: "91,909 bộ d�� liệu", icon: "https://api.builder.io/api/v1/image/assets/TEMP/52012dbe27686ab50773f8bab1939645951e95e0?width=108" },
    { name: "Môi trường", count: "91,909 bộ dữ liệu", icon: "https://api.builder.io/api/v1/image/assets/TEMP/494c3cc83993d57b599479035f40ed1525b96666?width=108" },
    { name: "Địa chất và khoáng sản", count: "91,909 bộ dữ liệu", icon: "https://api.builder.io/api/v1/image/assets/TEMP/eef36383568d06b25f8fed88258324359d263fbd?width=108" },
    { name: "Khí tượng thủy văn", count: "91,909 bộ dữ liệu", icon: "https://api.builder.io/api/v1/image/assets/TEMP/c98949405c8213e2af98d8003e5bfbff21509351?width=108" },
    { name: "Tài nguyên nước", count: "91,909 bộ dữ liệu", icon: "https://api.builder.io/api/v1/image/assets/TEMP/a1153796a668df367468426e8c365b73bc31e51d?width=108" },
    { name: "Biến đổi khí hậu", count: "91,909 bộ dữ liệu", icon: "https://api.builder.io/api/v1/image/assets/TEMP/c592ded42b7a15072234c650b01562f61e883b74?width=108" },
    { name: "Đo đạc và bản đồ", count: "91,909 bộ dữ liệu", icon: "https://api.builder.io/api/v1/image/assets/TEMP/8846eb015b57881d310eefb8d91d705e7913fe99?width=108" },
    { name: "Thanh tra, kiểm tra", count: "91,909 bộ dữ liệu", icon: "https://api.builder.io/api/v1/image/assets/TEMP/3a3cf5217183747d6e0573660222958bacf3ff75?width=108" },
    { name: "VBQPPL của Sở", count: "91,909 bộ dữ liệu", icon: "https://api.builder.io/api/v1/image/assets/TEMP/302a87a55818376fe302918aa5874a504b93964c?width=108" },
    { name: "Dữ liệu khác", count: "91,909 bộ dữ liệu", icon: "https://api.builder.io/api/v1/image/assets/TEMP/302a87a55818376fe302918aa5874a504b93964c?width=108" }
  ];

  const pieChartLegend = [
    { color: "#288A38", label: "Đăng ký đất đai" },
    { color: "#F8BD42", label: "Tài nguyên và mô trường" },
    { color: "#87C946", label: "Thanh tra" },
    { color: "#58BEF1", label: "Dữ liệu lĩnh vực" },
    { color: "#8F7651", label: "Địa chất và khoáng sản" },
    { color: "#527D8F", label: "Tổ chức cán bộ" },
    { color: "#335361", label: "Dữ liệu khác" }
  ];

  const barChartLegend = [
    { color: "#288A38", label: "huyện Quỳnh Phụ" },
    { color: "#F8BD42", label: "huyện Tiền Hải" },
    { color: "#87C946", label: "huyện Vũ Thư" },
    { color: "#58BEF1", label: "huyện Thanh Trì" },
    { color: "#8F7651", label: "huyện Đông Hưng" },
    { color: "#BBB", label: "Đơn vị hành chính khác" }
  ];

  return (
    <div className="min-h-screen bg-[#F6F6F6] relative">
      {/* Header */}
      <header className="mx-8 mt-4 mb-8">
        <div className="flex justify-between items-center p-6 bg-white/60 backdrop-blur-[10px] rounded-xl">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/f212bf2c10060e292a4ea2c1f7a4cbb31ac32106?width=96" 
                alt="Logo" 
                className="w-12 h-12" 
              />
              <h1 className="text-lg font-bold text-[#262A34] leading-[150%]">
                Hệ thống lưu trữ điện tử<br />
                ngành Tài nguyên & Môi trường
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              {/* Bookmark with badge */}
              <div className="relative">
                <Button variant="ghost" size="icon" className="w-8 h-8 p-0">
                  <Bookmark className="w-6 h-6 text-[#262A34]" />
                </Button>
                <div className="absolute -top-1 -right-1 bg-[#288A38] text-white text-xs rounded-full px-1 min-w-[18px] h-[14px] flex items-center justify-center text-[10px] font-normal">
                  99+
                </div>
              </div>
              
              {/* Ticket with badge */}
              <div className="relative">
                <Button variant="ghost" size="icon" className="w-8 h-8 p-0">
                  <Ticket className="w-6 h-6 text-[#262A34]" />
                </Button>
                <div className="absolute -top-1 -right-1 bg-[#288A38] text-white text-xs rounded-full w-[13px] h-[14px] flex items-center justify-center text-[10px] font-normal">
                  1
                </div>
              </div>
              
              {/* Bell notification */}
              <Button variant="ghost" size="icon" className="w-8 h-8 p-0">
                <Bell className="w-6 h-6 text-[#262A34]" />
              </Button>
            </div>
            
            <div className="w-px h-4 bg-[#B2B2B2]"></div>
            
            <div className="flex items-center gap-1">
              <span className="text-[#262A34] font-normal text-base">thanhvannguyen</span>
              <div className="w-9 h-9 bg-[#C9C9CF] rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <ChevronDown className="w-6 h-6 text-[#676A71]" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative mx-8 mb-16">
        <div className="relative h-[565px] rounded-3xl overflow-hidden">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/95d62d66dcb6063ecdd750289bf794db18439bfb?width=2890" 
            alt="Forest background" 
            className="w-full h-full object-cover"
          />
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
            <div className="text-center mb-6">
              <h2 className="text-white text-[40px] font-bold leading-[150%] mb-3 max-w-[948px]">
                Hệ thống lưu trữ điện tử<br />
                ngành Tài nguyên và Môi trường
              </h2>
              <p className="text-white text-base leading-[150%] max-w-2xl">
                Điểm đầu mối công bố dữ liệu mở, cung cấp thông tin về chia sẻ dữ liệu của cơ quan nhà nước
              </p>
            </div>

            {/* Search Bar */}
            <div className="w-full max-w-[948px] bg-white rounded-lg p-4 mb-10">
              <div className="flex gap-2">
                <div className="flex-1 flex items-center gap-2 border border-[#B2B2B2] rounded px-3 py-3">
                  <Search className="w-6 h-6 text-[#676A71]" />
                  <input 
                    type="text" 
                    placeholder="Bạn cần tìm dữ liệu gì?" 
                    className="flex-1 outline-none text-[#9D9FA4] text-base leading-[150%]"
                    onFocus={() => setShowSearchOverlay(true)}
                  />
                </div>
                <Button className="px-6 py-3 bg-[#288A38] hover:bg-[#288A38]/90 text-white font-bold text-base leading-[150%]">
                  Tìm kiếm
                </Button>
              </div>
            </div>

            {/* Statistics */}
            <div className="bg-black/20 backdrop-blur-[10px] rounded-lg px-8 py-3">
              <div className="flex items-center gap-12 text-white">
                <div className="flex items-center gap-2">
                  <span className="text-[32px] font-bold leading-[150%]">9+</span>
                  <span className="text-base leading-[150%]">lĩnh vực</span>
                </div>
                <div className="w-0.5 h-[18px] bg-white"></div>
                <div className="flex items-center gap-2">
                  <span className="text-[32px] font-bold leading-[150%]">132,000</span>
                  <span className="text-base leading-[150%]">hồ sơ</span>
                </div>
                <div className="w-0.5 h-[18px] bg-white"></div>
                <div className="flex items-center gap-2">
                  <span className="text-[32px] font-bold leading-[150%]">2,586,000</span>
                  <span className="text-base leading-[150%]">văn bản</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/40'}`}
              ></div>
            ))}
          </div>
        </div>

        {/* Search Overlay */}
        {showSearchOverlay && (
          <div className="absolute left-1/2 transform -translate-x-1/2 top-[395px] w-[948px] bg-white rounded-lg shadow-[2px_4px_10px_5px_rgba(165,165,165,0.28)] p-6 z-10">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-[#262A34] leading-[150%]">Tìm kiếm gần đây</h3>
                <Button variant="link" className="text-[#676A71] font-bold text-base p-0 h-auto">
                  Xóa
                </Button>
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                {recentSearches.map((search, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 border border-[#EFEFEF] rounded">
                    <span className="text-[#262A34] text-base leading-[150%] line-clamp-1 max-w-[200px]">
                      {search}
                    </span>
                    <Search className="w-4 h-4 text-[#676A71]" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-[#262A34] leading-[150%] mb-4">Gợi ý</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  {suggestionCategories.slice(0, 5).map((category, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 border border-[#E5E5E5] rounded bg-white">
                      <img src={category.icon} alt={category.name} className="w-[54px] h-[54px]" />
                      <div>
                        <h4 className="font-bold text-[#262A34] text-lg leading-[150%]">{category.name}</h4>
                        <p className="text-[#676A71] text-sm font-bold leading-[150%]">{category.count}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {suggestionCategories.slice(5, 10).map((category, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 border border-[#E5E5E5] rounded bg-white">
                      <img src={category.icon} alt={category.name} className="w-[54px] h-[54px]" />
                      <div>
                        <h4 className="font-bold text-[#262A34] text-lg leading-[150%]">{category.name}</h4>
                        <p className="text-[#676A71] text-sm font-bold leading-[150%]">{category.count}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Click overlay to close search */}
      {showSearchOverlay && (
        <div 
          className="fixed inset-0 bg-black/20 z-5"
          onClick={() => setShowSearchOverlay(false)}
        ></div>
      )}

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-8 mb-16">
        <h3 className="text-[32px] font-medium text-center mb-8 text-black leading-[150%]">
          Dữ liệu ngành Tài nguyên và Môi trường
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded p-10 text-center hover:shadow-lg transition-shadow">
              <img 
                src={category.icon} 
                alt={category.name} 
                className="w-[54px] h-[54px] mx-auto mb-2"
              />
              <h4 className="font-bold text-[#262A34] text-lg mb-2 leading-[150%]">
                {category.name}
              </h4>
              <p className="text-[#676A71] text-sm font-bold leading-[150%]">
                {category.count}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Charts Section */}
      <section className="max-w-7xl mx-auto px-8 mb-16">
        <div className="grid lg:grid-cols-2 gap-7">
          {/* Pie Chart */}
          <div className="bg-white rounded-xl p-5">
            <h4 className="text-[32px] font-medium mb-5 text-black leading-[150%]">Thống kê loại tài liệu hồ sơ</h4>
            <div className="flex items-center gap-8">
              <div className="relative w-[270px] h-[270px]">
                <svg width="270" height="270" viewBox="0 0 270 270" className="w-full h-full">
                  <circle opacity="0.1" cx="135" cy="135" r="84.1754" fill="#6BCCFE"/>
                  <path d="M136.017 47.555C136.049 44.7937 133.835 42.5152 131.076 42.6323C113.272 43.3883 96.0629 49.2754 81.5269 59.5821C79.2743 61.1793 78.9195 64.3367 80.6361 66.4997L126.247 123.972C129.174 127.659 135.109 125.629 135.164 120.922L136.017 47.555Z" fill="#345665"/>
                  <path d="M136.017 47.555C136.049 44.7937 133.835 42.5152 131.076 42.6323C116.98 43.231 103.207 47.0485 90.8144 53.7914C88.3887 55.1112 87.6636 58.2043 89.1126 60.5551L125.944 120.31C128.573 124.574 135.142 122.753 135.201 117.744L136.017 47.555Z" fill="#527F92"/>
                  <path d="M136.017 47.555C136.049 44.7937 133.835 42.5152 131.076 42.6324C120.194 43.0946 109.478 45.4764 99.4251 49.6676C96.8763 50.7301 95.836 53.732 97.0348 56.2197L125.744 115.794C128.038 120.554 135.186 118.965 135.248 113.681L136.017 47.555Z" fill="#927852"/>
                  <path d="M136.017 47.555C136.049 44.7937 133.835 42.5152 131.076 42.6324C123.208 42.9666 115.416 44.3046 107.887 46.614C105.247 47.4239 103.92 50.3104 104.871 52.9028L125.623 109.449C127.536 114.663 135.252 113.338 135.316 107.785L136.017 47.555Z" fill="url(#paint0_linear_9280_16274)"/>
                  <path d="M136.017 47.555C136.049 44.7937 133.835 42.5152 131.076 42.6324C126.491 42.8271 121.927 43.363 117.422 44.2355C114.711 44.7606 113.085 47.4899 113.756 50.1687L125.6 97.4651C127.024 103.15 135.382 102.169 135.45 96.3086L136.017 47.555Z" fill="#8ACD47"/>
                  <path d="M137.999 41.2213C138.087 38.4613 135.92 36.1391 133.159 36.1905C131.384 36.2236 129.609 36.3045 127.838 36.4332C125.084 36.6334 123.137 39.1432 123.476 41.8837L127.097 71.1418C127.855 77.2638 136.86 76.853 137.057 70.6875L137.999 41.2213Z" fill="url(#paint1_linear_9280_16274)"/>
                  <circle cx="135.009" cy="135.009" r="60.1253" fill="white" filter="url(#filter0_d_9280_16274)"/>
                  <defs>
                    <filter id="filter0_d_9280_16274" x="49.8835" y="54.8838" width="170.25" height="170.25" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="5"/>
                      <feGaussianBlur stdDeviation="12.5"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9280_16274"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9280_16274" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_9280_16274" x1="88.7739" y1="215.067" x2="181.226" y2="54.9353" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#7AD3FF"/>
                      <stop offset="1" stopColor="#4FBAF0"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_9280_16274" x1="184.413" y1="220.587" x2="85.5866" y2="49.4136" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFD572"/>
                      <stop offset="1" stopColor="#FEBD38"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[32px] font-medium text-[#454459] leading-[150%]">90</div>
                    <div className="text-[32px] font-medium text-[#454459] leading-[150%]">%</div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {pieChartLegend.map((item, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <div className={`w-4 h-4 rounded`} style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-[#262A34] leading-[150%]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white rounded-xl p-5">
            <h4 className="text-[32px] font-medium mb-5 text-black leading-[150%]">Thống kê theo đơn vị hành chính</h4>
            <div className="relative h-48 mb-5">
              {/* Y-axis labels and grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[100000, 80000, 60000, 40000, 20000, 0].map((value, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <span className="text-sm text-[#9D9FA4] w-16 text-right leading-[150%]">{value.toLocaleString()}</span>
                    <div className="flex-1 h-px bg-[#EFEFEF]"></div>
                  </div>
                ))}
              </div>
              
              {/* Bars */}
              <div className="absolute bottom-0 left-16 right-0 h-full flex items-end justify-between px-4">
                {[
                  { height: '100%', color: '#288A38', value: 100000 },
                  { height: '83%', color: '#F8BD42', value: 80000 },
                  { height: '68%', color: '#87C946', value: 60000 },
                  { height: '52%', color: '#58BEF1', value: 40000 },
                  { height: '32%', color: '#8F7651', value: 30000 },
                  { height: '32%', color: '#BBB', value: 35000 }
                ].map((bar, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="text-[10px] text-[#676A71] mb-1 leading-[150%]">{bar.value}</div>
                    <div 
                      className="w-8 rounded-t"
                      style={{ 
                        height: bar.height, 
                        backgroundColor: bar.color 
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Legend */}
            <div className="flex flex-wrap gap-3">
              {barChartLegend.map((item, index) => (
                <div key={index} className="flex items-center gap-1">
                  <div className={`w-4 h-4 rounded`} style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-[#262A34] leading-[150%]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#244A2A] text-white py-12 relative overflow-hidden">
        {/* Background mountain images */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/624a720e0edc2027bc6983380b6780e84c3e7c72?width=973" 
          alt=""
          className="absolute -left-32 -top-28 w-[486px] h-[422px] rotate-[10.443deg] opacity-50"
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/36469dc076a2276e9f615138af6e0dd5bb23a899?width=746" 
          alt=""
          className="absolute right-0 -top-8 w-[373px] h-[426px] rotate-[-171.567deg] opacity-50"
        />
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex justify-between items-start">
            <div className="space-y-5">
              <h5 className="text-lg font-bold max-w-md leading-[150%]">
                Trung tâm Công nghệ thông tin<br />
                Sở Tài nguyên & Môi trường tỉnh Hà Giang
              </h5>
              <div className="w-[180px] h-px bg-[#E5E5E5]"></div>
              <div className="space-y-2">
                <p className="text-base leading-[150%]">Cổng hệ thống</p>
                <p className="text-base leading-[150%]">Điều khoản sử dụng</p>
              </div>
            </div>
            
            <div className="space-y-3 max-w-lg">
              <div className="flex items-start gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-6 h-6" />
                  <span className="text-base w-24 leading-[150%]">Email:</span>
                </div>
                <span className="text-base leading-[150%]">stnmt.hagiang.gov.vn@gmail.com</span>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex items-center gap-2">
                  <Globe className="w-6 h-6" />
                  <span className="text-base w-24 leading-[150%]">Website:</span>
                </div>
                <span className="text-base leading-[150%]">http://stnmt.hagiang.gov.vn/</span>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-6 h-6" />
                  <span className="text-base leading-[150%]">Số điện thoại:</span>
                </div>
                <span className="text-base leading-[150%]">02.437548925</span>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex items-center gap-2">
                  <Map className="w-6 h-6" />
                  <span className="text-base w-24 leading-[150%]">Địa chỉ:</span>
                </div>
                <span className="text-base flex-1 leading-[150%]">
                  Số 185 Đường Trần Hưng Đạo - thành phố Hà Giang - tỉnh Hà Giang
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
