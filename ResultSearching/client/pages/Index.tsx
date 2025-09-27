import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, X, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterSection from "@/components/FilterSection";
import DocumentCard from "@/components/DocumentCard";

export default function Index() {
  const [activeFilters, setActiveFilters] = useState([
    "Đăng ký đất đai, hồ sơ địa chính, thu hồi đất, giao đất, cho thuê đất, chuyển mục đích sử dụng đất, cấp giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản gắn liền với đất",
    "đất đai",
    "Hồ sơ chuyển giao", 
    "Tỉnh Thái Bình",
    "Tỉnh Thái Bình",
    "Tỉnh Thái Bình"
  ]);

  const removeFilter = (index: number) => {
    setActiveFilters(activeFilters.filter((_, i) => i !== index));
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
  };

  // Sample data for filters
  const dataFieldItems = [
    { id: "land-registration", label: "Đăng ký đất đai, hồ sơ địa chính, thu hồi đất, giao đất, cho thuê đất, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất, quyền sở hữu nhà ở và tài sản gắn liền với đất", count: "91.909", checked: true },
    { id: "land-registry", label: "Đăng ký đất đai", count: "91.909" },
    { id: "land-statistics", label: "Thống kê, kiểm kê đất đai", count: "91.909" },
    { id: "land-planning", label: "Quy hoạch, kế hoạch sử dụng", count: "91.909" },
    { id: "land-price", label: "Giá đất và bản đồ giá đất", count: "91.909" },
  ];

  const otherSections = [
    "Tài nguyên nước", "Môi trường", "Địa chất và khoáng sản", 
    "Khí tượng thủy văn", "Biến đổi khí hậu", "Khí tượng thủy văn",
    "Đo đạc và bản đồ", "Thanh tra, kiểm tra", "VBQPPL của Sở", "Dữ liệu khác"
  ];

  const administrativeUnits = [
    "Huyện Quỳnh Phụ", "Huyện Hưng Hà", "Huyện Vũ Thư", 
    "Huyện Diêm Điền", "Huyện Thái Thụy", "Thành phố Thái Bình", "Huyện Đông Hưng"
  ];

  // Sample documents
  const documents = [
    {
      title: "Tên văn bản dài ơi là dài. Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      location: "Đơn vị hành chính: Thô Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang, tỉnh Hà Giang",
      fileInfo: "Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      price: "Miễn phí",
      isPremium: false
    },
    {
      title: "Tên văn bản dài ơi là dài. Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      location: "Đơn vị hành chính: Thô Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang, tỉnh Hà Giang",
      fileInfo: "Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      price: "10.000đ",
      isPremium: true
    },
    {
      title: "Tên văn bản dài ơi là dài. Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      location: "Đơn vị hành chính: Thô Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang, tỉnh Hà Giang",
      fileInfo: "Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử d��ng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      price: "10.000đ",
      isPremium: true
    },
    {
      title: "Tên văn bản dài ơi là dài. Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      location: "Đơn vị hành chính: Thô Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang, tỉnh Hà Giang",
      fileInfo: "Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      price: "Miễn phí",
      isPremium: false
    },
    {
      title: "Tên văn bản dài ơi là dài. Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      location: "Đơn vị hành chính: Thô Mới, thị trấn Vĩnh Tuy, huy���n Bắc Quang, tỉnh Hà Giang",
      fileInfo: "Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      price: "Miễn phí",
      isPremium: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="flex flex-col items-center gap-5 px-[102px] py-[102px]">
        <div className="w-full max-w-[1170px]">
          {/* Tabs */}
          <Tabs defaultValue="documents" className="w-full">
            <div className="flex flex-col gap-px">
              <TabsList className="bg-transparent p-0 h-auto justify-start border-b border-border rounded-none">
                <TabsTrigger 
                  value="profile" 
                  className="px-4 py-1.5 data-[state=active]:bg-transparent data-[state=active]:text-text-primary data-[state=active]:border-b-2 data-[state=active]:border-green-primary data-[state=active]:rounded-none rounded-none font-semibold text-base leading-6"
                >
                  Hồ sơ
                </TabsTrigger>
                <TabsTrigger 
                  value="documents" 
                  className="px-4 py-1.5 data-[state=active]:bg-transparent data-[state=active]:text-green-primary data-[state=active]:border-b-2 data-[state=active]:border-green-primary data-[state=active]:rounded-none rounded-none font-semibold text-base leading-6"
                >
                  Tài liệu
                </TabsTrigger>
              </TabsList>
              <div className="w-full h-px bg-border"></div>
            </div>

            <TabsContent value="documents" className="mt-5">
              {/* Main Layout */}
              <div className="flex gap-5">
                {/* Left Sidebar - Filters */}
                <div className="w-[400px] flex flex-col gap-5">
                  {/* Fee Filter */}
                  <div className="flex flex-col gap-5 p-5 bg-white rounded border border-border">
                    <h3 className="text-text-primary font-bold text-xl leading-[30px]">
                      Phí khai thác
                    </h3>
                    <div className="flex gap-3">
                      <Badge 
                        variant="outline" 
                        className="px-4 py-2 border-green-primary bg-green-primary/5 text-green-primary font-normal text-base leading-6 rounded"
                      >
                        Miễn phí
                      </Badge>
                      <Badge 
                        variant="outline" 
                        className="px-4 py-2 border-border bg-white text-text-primary font-normal text-base leading-6 rounded"
                      >
                        Tính phí
                      </Badge>
                    </div>
                  </div>

                  {/* Data Fields Filter */}
                  <FilterSection
                    title="Lĩnh vực dữ liệu"
                    items={dataFieldItems}
                    defaultExpanded={true}
                    hasSearch={true}
                    searchPlaceholder="Tìm loại dữ liệu"
                    showViewMore={true}
                  />

                  {/* Other Sections */}
                  {otherSections.map((section) => (
                    <FilterSection
                      key={section}
                      title={section}
                      items={[{ id: section.toLowerCase(), label: section, count: "91.909" }]}
                      isExpandable={true}
                      defaultExpanded={false}
                    />
                  ))}

                  {/* Administrative Units */}
                  <FilterSection
                    title="Đơn vị hành chính"
                    items={administrativeUnits.map(unit => ({ 
                      id: unit.toLowerCase(), 
                      label: unit, 
                      count: "91.909" 
                    }))}
                    hasSearch={true}
                    searchPlaceholder="Tìm nguồn nộp lưu"
                  />
                </div>

                {/* Right Content */}
                <div className="flex-1 flex flex-col gap-4">
                  {/* Search Bar */}
                  <div className="flex gap-3">
                    <div className="flex-1 relative">
                      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6 text-text-secondary" />
                      <Input 
                        placeholder="Tìm kiếm văn bản"
                        className="pl-10 h-12 border-border bg-white text-text-muted"
                      />
                    </div>
                    <Button 
                      size="lg"
                      className="h-12 px-5 bg-green-primary text-white font-semibold text-base leading-6 rounded hover:bg-green-primary/90"
                    >
                      Tìm kiếm
                    </Button>
                  </div>

                  {/* Active Filters */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-text-primary font-normal text-base leading-6">
                      Lọc theo:
                    </span>
                    <Button 
                      variant="secondary" 
                      size="sm"
                      onClick={clearAllFilters}
                      className="h-8 px-5 py-2.5 bg-secondary text-text-primary font-semibold text-base leading-6 rounded"
                    >
                      Xóa tất cả
                    </Button>
                    {activeFilters.map((filter, index) => (
                      <Badge 
                        key={index}
                        variant="secondary"
                        className="max-w-[500px] px-1 py-1 bg-white text-text-primary font-normal text-base leading-6 rounded border border-border flex items-center gap-1"
                      >
                        <span className="truncate">{filter}</span>
                        <X 
                          className="w-4 h-4 text-text-muted cursor-pointer flex-shrink-0" 
                          onClick={() => removeFilter(index)}
                        />
                      </Badge>
                    ))}
                  </div>

                  {/* Results Count */}
                  <div className="flex items-start gap-1">
                    <span className="text-text-primary font-semibold text-base leading-6">
                      5/120,000
                    </span>
                    <span className="text-text-primary font-normal text-base leading-6">
                      Tài liệu
                    </span>
                  </div>

                  {/* Document Cards */}
                  <div className="flex flex-col gap-[22px]">
                    {documents.map((doc, index) => (
                      <DocumentCard 
                        key={index}
                        title={doc.title}
                        location={doc.location}
                        fileInfo={doc.fileInfo}
                        price={doc.price}
                        isPremium={doc.isPremium}
                      />
                    ))}
                  </div>

                  {/* Pagination */}
                  <div className="flex justify-between items-center w-[770px]">
                    <div className="flex items-center gap-3">
                      <span className="text-[#767C81] font-semibold text-sm leading-[21px]">
                        Hiển thị số bản ghi
                      </span>
                      <div className="flex w-[70px] h-8 px-2 py-1.5 justify-between items-center rounded bg-white border border-border">
                        <span className="text-text-primary font-normal text-base leading-6">
                          10
                        </span>
                        <ChevronDown className="w-6 h-6 text-text-secondary" />
                      </div>
                    </div>

                    <div className="flex gap-1">
                      {["<", "1", "2", "3", "...", "9", "10", ">"].map((page, index) => (
                        <Button
                          key={index}
                          variant={page === "3" ? "secondary" : "outline"}
                          size="sm"
                          className={`w-8 h-8 p-0 text-sm font-normal leading-[21px] rounded ${
                            page === "3" ? "bg-secondary text-text-primary" : "bg-white text-text-primary"
                          }`}
                        >
                          {page}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="profile" className="mt-5">
              <div className="text-center py-20 text-text-muted">
                Hồ sơ content would go here
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
}
