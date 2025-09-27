import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  X, 
  Crown,
  Grid3X3,
  Home,
  DollarSign,
  Bookmark,
  BookmarkCheck,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [activeTab, setActiveTab] = useState("ho-so");
  const [selectedFeeType, setSelectedFeeType] = useState("mien-phi");
  const [expandedCategories, setExpandedCategories] = useState(["dat-dai"]);
  const [selectedFilters, setSelectedFilters] = useState([
    "Đăng ký đất đai, hồ sơ địa chính, thu hồi đất, giao đất, cho thuê đất, chuyển mục đích sử dụng đất, cấp giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản gắn liền với đất",
    "đất đai",
    "Hồ sơ chuyển giao",
    "Tỉnh Thái Bình",
    "Tỉnh Thái Bình",
    "Tỉnh Thái Bình"
  ]);

  const dataCategories = [
    { id: "dat-dai", name: "Đất đai", count: "91.909", expanded: true },
    { id: "tai-nguyen-nuoc", name: "Tài nguyên nước", count: "91.909", expanded: false },
    { id: "moi-truong", name: "Môi trường", count: "91.909", expanded: false },
    { id: "dia-chat", name: "Địa chất và khoáng sản", count: "91.909", expanded: false },
    { id: "khi-tuong", name: "Khí tượng thủy văn", count: "91.909", expanded: false },
    { id: "bien-doi", name: "Biến đổi khí hậu", count: "91.909", expanded: false },
    { id: "do-dac", name: "Đo đạc và bản đồ", count: "91.909", expanded: false },
    { id: "thanh-tra", name: "Thanh tra, kiểm tra", count: "91.909", expanded: false },
    { id: "vbqppl", name: "VBQPPL của Sở", count: "91.909", expanded: false },
    { id: "du-lieu-khac", name: "Dữ liệu khác", count: "91.909", expanded: false }
  ];

  const subCategories = [
    "Chọn tất cả",
    "Đăng ký đất đai, hồ sơ địa chính, thu hồi đất, giao đất, cho thuê đất, chuyển mục đích sử dụng đất, cấp giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản gắn liền với đất",
    "Đăng ký đất đai",
    "Thống kê, kiểm kê đất đai",
    "Quy hoạch, kế hoạch sử dụng",
    "Giá đất và bản đồ giá đất"
  ];

  const administrativeUnits = [
    "Huyện Quỳnh Phụ",
    "Huyện Hưng Hà", 
    "Huyện Vũ Thư",
    "Huyện Diêm Điền",
    "Huyện Thái Thụy",
    "Thành phố Thái Bình",
    "Huyện Đông Hưng"
  ];

  const records = [
    {
      id: "2003-HS-02217",
      title: "(2003-HS-02217) Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      category: "Đất đai",
      adminUnit: "Sở Tài nguyên và Môi trường Gia Lai",
      fee: "Miễn phí",
      feeType: "free",
      saved: true,
      premium: false
    },
    {
      id: "premium-1",
      title: "Tên văn bản dài ơi là dài. Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      category: "Đất đai", 
      adminUnit: "Thô Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang, tỉnh Hà Giang",
      fee: "10.000đ",
      feeType: "paid",
      saved: false,
      premium: true
    },
    {
      id: "premium-2",
      title: "Tên văn bản dài ơi là dài. Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      category: "Đất đai",
      adminUnit: "Thô Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang, tỉnh Hà Giang", 
      fee: "10.000đ",
      feeType: "paid",
      saved: false,
      premium: true
    },
    {
      id: "premium-3",
      title: "Tên văn bản dài ơi là dài. Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      category: "Đất đai",
      adminUnit: "Thô Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang, tỉnh Hà Giang",
      fee: "10.000đ", 
      feeType: "paid",
      saved: false,
      premium: true
    },
    {
      id: "premium-4",
      title: "Tên văn bản dài ơi là dài. Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      category: "Đất đai",
      adminUnit: "Thô Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang, tỉnh Hà Giang",
      fee: "10.000đ",
      feeType: "paid", 
      saved: false,
      premium: true
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const removeFilter = (filter: string) => {
    setSelectedFilters(prev => prev.filter(f => f !== filter));
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <div className="min-h-screen bg-[#F6F6F6]">
      <div className="max-w-[1170px] mx-auto px-5 py-6">
        {/* Tab Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex flex-col">
            <TabsList className="h-auto bg-transparent p-0 mb-px">
              <TabsTrigger 
                value="ho-so" 
                className="flex flex-col items-center px-4 py-2 rounded-none border-b-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-3 data-[state=active]:border-b-[#288A38] data-[state=active]:text-[#288A38] font-semibold text-base"
              >
                <span>Hồ sơ</span>
                {activeTab === "ho-so" && <div className="w-full h-[3px] bg-[#288A38] rounded-t-sm mt-2" />}
              </TabsTrigger>
              <TabsTrigger 
                value="tai-lieu"
                className="flex flex-col items-center px-4 py-2 rounded-none border-b-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-3 data-[state=active]:border-b-[#288A38] data-[state=active]:text-[#288A38] font-semibold text-base text-[#262A34]"
              >
                <span>Tài liệu</span>
                {activeTab === "tai-lieu" && <div className="w-full h-[3px] bg-[#288A38] rounded-t-sm mt-2" />}
              </TabsTrigger>
            </TabsList>
            <div className="w-full h-px bg-[#E5E5E5]" />
          </div>

          <TabsContent value="ho-so" className="mt-5">
            <div className="flex gap-5">
              {/* Left Sidebar */}
              <div className="w-[400px] flex-shrink-0 space-y-5">
                {/* Fee Type Filter */}
                <div className="bg-white rounded p-5 space-y-5">
                  <h3 className="text-xl font-bold text-[#288A38]">Phí khai thác</h3>
                  <div className="flex gap-3">
                    <Button
                      variant={selectedFeeType === "mien-phi" ? "default" : "outline"}
                      onClick={() => setSelectedFeeType("mien-phi")}
                      className={`px-4 py-2 rounded ${
                        selectedFeeType === "mien-phi"
                          ? "bg-[#288A38]/5 border-[#288A38] text-[#288A38]"
                          : "border-[#E5E5E5] text-[#262A34] bg-white hover:bg-gray-50"
                      }`}
                    >
                      Miễn phí
                    </Button>
                    <Button
                      variant={selectedFeeType === "tinh-phi" ? "default" : "outline"}
                      onClick={() => setSelectedFeeType("tinh-phi")}
                      className={`px-4 py-2 rounded ${
                        selectedFeeType === "tinh-phi"
                          ? "bg-[#288A38]/5 border-[#288A38] text-[#288A38]"
                          : "border-[#E5E5E5] text-[#262A34] bg-white hover:bg-gray-50"
                      }`}
                    >
                      Tính phí
                    </Button>
                  </div>
                </div>

                {/* Data Categories Filter */}
                <div className="bg-white rounded p-5 space-y-5">
                  <h3 className="text-xl font-bold text-[#288A38]">Lĩnh vực dữ liệu</h3>
                  <div className="space-y-6">
                    {dataCategories.map((category) => (
                      <div key={category.id} className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 flex-1">
                            <span className="font-semibold text-[#262A34] text-base">{category.name}</span>
                            <span className="text-sm font-semibold text-[#9D9FA4]">{category.count}</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleCategory(category.id)}
                            className="w-6 h-6 p-0"
                          >
                            {expandedCategories.includes(category.id) ? (
                              <ChevronUp className="w-6 h-6 text-[#676A71]" />
                            ) : (
                              <ChevronDown className="w-6 h-6 text-[#676A71]" />
                            )}
                          </Button>
                        </div>

                        {expandedCategories.includes(category.id) && (
                          <div className="flex gap-4">
                            <div className="w-px bg-[#E5E5E5] ml-2" />
                            <div className="flex-1 space-y-3">
                              <div className="flex items-center gap-3">
                                <Checkbox className="w-6 h-6" />
                                <span className="text-base text-[#262A34]">Chọn tất cả</span>
                              </div>
                              
                              <div className="flex items-center gap-1 p-2 border border-[#E5E5E5] rounded">
                                <Search className="w-6 h-6 text-[#676A71]" />
                                <Input 
                                  placeholder="Tìm loại dữ liệu"
                                  className="border-0 p-0 text-base placeholder:text-[#9D9FA4] focus-visible:ring-0"
                                />
                              </div>

                              <div className="space-y-5">
                                {subCategories.map((subcat, index) => (
                                  <div key={index} className="flex items-start gap-3">
                                    <Checkbox 
                                      className="w-6 h-6 mt-0.5" 
                                      checked={index === 1} 
                                    />
                                    <div className="flex-1 flex justify-between items-start">
                                      <span className={`text-base text-[#262A34] ${index === 0 ? 'font-normal' : ''}`}>
                                        {subcat}
                                      </span>
                                      {index !== 0 && (
                                        <span className="text-xs text-[#9D9FA4] ml-3">91.909</span>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>

                              <Button variant="ghost" className="text-[#262A34] font-semibold p-0 h-auto">
                                Xem thêm
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Administrative Units Filter */}
                <div className="bg-white rounded p-5 space-y-5">
                  <h3 className="text-xl font-bold text-[#288A38]">Đơn vị hành chính</h3>
                  
                  <div className="flex items-center gap-3">
                    <Checkbox className="w-6 h-6" />
                    <span className="text-base text-[#262A34]">Chọn tất cả</span>
                  </div>

                  <div className="flex items-center gap-1 p-2 border border-[#E5E5E5] rounded">
                    <Search className="w-6 h-6 text-[#676A71]" />
                    <Input 
                      placeholder="Tìm nguồn nộp lưu"
                      className="border-0 p-0 text-base placeholder:text-[#9D9FA4] focus-visible:ring-0"
                    />
                  </div>

                  <div className="space-y-6">
                    {administrativeUnits.map((unit, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Checkbox className="w-6 h-6" />
                          <span className="font-semibold text-[#262A34] text-base">{unit}</span>
                        </div>
                        <span className="text-sm font-semibold text-[#9D9FA4]">91.909</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 space-y-4">
                {/* Search Bar */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 flex items-center gap-2 bg-white rounded px-2 py-3">
                    <Search className="w-6 h-6 text-[#676A71] ml-2" />
                    <Input 
                      placeholder="Tìm kiếm hồ sơ"
                      className="border-0 text-base placeholder:text-[#9D9FA4] focus-visible:ring-0"
                    />
                  </div>
                  <Button className="px-5 py-3 bg-[#288A38] hover:bg-[#288A38]/90 text-white font-bold text-base">
                    Tìm kiếm
                  </Button>
                </div>

                {/* Filter Tags */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-base text-[#262A34]">Lọc theo:</span>
                  <Button 
                    variant="secondary" 
                    onClick={clearAllFilters}
                    className="h-8 px-5 bg-[#E5E5E5] hover:bg-[#E5E5E5]/80 text-[#262A34] font-bold text-base"
                  >
                    Xóa tất cả
                  </Button>
                  {selectedFilters.map((filter, index) => (
                    <div key={index} className="flex items-center gap-1 px-1 py-1 bg-white rounded max-w-[500px]">
                      <span className="text-base text-[#262A34] truncate px-2">
                        {filter}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFilter(filter)}
                        className="w-4 h-4 p-0 hover:bg-transparent"
                      >
                        <X className="w-4 h-4 text-[#9D9FA4]" />
                      </Button>
                    </div>
                  ))}
                </div>

                {/* Results Count */}
                <div className="flex items-center gap-1">
                  <span className="text-base font-semibold text-[#262A34]">5/120,000</span>
                  <span className="text-base text-[#262A34]">hồ sơ</span>
                </div>

                {/* Records List */}
                <div className="space-y-6">
                  {records.map((record) => (
                    <div key={record.id} className="bg-white rounded p-3 space-y-4">
                      <div className="space-y-4">
                        {record.premium && (
                          <div className="flex items-center gap-1">
                            <div className="flex items-center justify-center w-6 h-6 bg-[#EFEFEF] rounded p-1">
                              <Crown className="w-4 h-4 text-[#FFB915]" fill="#FFB915" />
                            </div>
                            <Badge className="bg-[#00D4AE] text-white text-xs px-1 py-0.5 rounded">
                              Hồ sơ
                            </Badge>
                          </div>
                        )}
                        
                        <h4 className="text-base font-semibold text-[#262A34] leading-[150%]">
                          {record.title}
                        </h4>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Grid3X3 className="w-6 h-6 text-[#676A71]" />
                            <span className="text-base text-[#676A71]">Lĩnh vực: {record.category}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Home className="w-6 h-6 text-[#676A71]" />
                            <span className="text-base text-[#676A71]">Đơn vị hành chính: {record.adminUnit}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-6 h-6 text-[#676A71]" />
                            <span className="text-base text-[#676A71]">Phí khai thác:</span>
                            <span className={`text-base font-semibold ${record.feeType === 'free' ? 'text-[#288A38]' : 'text-[#288A38]'}`}>
                              {record.fee}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button variant="secondary" className="bg-[#E5E5E5] hover:bg-[#E5E5E5]/80 text-[#262A34] font-bold">
                          Khai thác
                        </Button>
                        <Button variant="ghost" className="text-[#262A34] font-bold">
                          Xem chi tiết
                        </Button>
                        <Button variant="ghost" className="flex items-center gap-2 text-[#262A34] font-bold">
                          {record.saved ? (
                            <>
                              <BookmarkCheck className="w-6 h-6 text-[#288A38]" fill="#288A38" />
                              <span className="text-[#288A38]">Đã lưu</span>
                            </>
                          ) : (
                            <>
                              <Bookmark className="w-6 h-6" />
                              <span>Lưu hồ sơ</span>
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-[#767C81]">Hiển thị số bản ghi</span>
                    <div className="flex items-center justify-between w-[70px] h-8 px-2 bg-white rounded border">
                      <span className="text-base text-[#262A34]">10</span>
                      <ChevronDown className="w-6 h-6 text-[#676A71]" />
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <Button variant="outline" size="icon" className="w-8 h-8 bg-white">
                      <ChevronLeft className="w-6 h-6 text-[#9D9FA4]" />
                    </Button>
                    <Button variant="outline" className="w-8 h-8 bg-white text-[#262A34]">1</Button>
                    <Button variant="outline" className="w-8 h-8 bg-white text-[#262A34]">2</Button>
                    <Button variant="outline" className="w-8 h-8 bg-[#E5E5E5] text-[#262A34]">3</Button>
                    <Button variant="outline" className="w-8 h-8 bg-white text-[#262A34]">...</Button>
                    <Button variant="outline" className="w-8 h-8 bg-white text-[#262A34]">9</Button>
                    <Button variant="outline" className="w-8 h-8 bg-white text-[#262A34]">10</Button>
                    <Button variant="outline" size="icon" className="w-8 h-8 bg-white">
                      <ChevronRight className="w-6 h-6 text-[#9D9FA4]" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tai-lieu" className="mt-5">
            <div className="bg-white rounded p-8 text-center">
              <h3 className="text-xl font-semibold text-[#262A34] mb-4">Tài liệu</h3>
              <p className="text-[#676A71]">Chức năng tài liệu đang được phát triển</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
