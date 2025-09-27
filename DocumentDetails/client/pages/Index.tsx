import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import DocumentBadge from "@/components/DocumentBadge";
import Tabs from "@/components/Tabs";
import InfoRow from "@/components/InfoRow";
import DocumentCard from "@/components/DocumentCard";
import StickyFooter from "@/components/StickyFooter";

export default function Index() {
  const [activeTab, setActiveTab] = useState("basic");

  const tabs = [
    { id: "basic", label: "Thông tin cơ bản" },
    { id: "detail", label: "Thông tin chi tiết" },
    { id: "documents", label: "Tài liệu kèm theo" },
  ];

  const documentTitle = "Văn bản thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang";

  const relatedDocuments = [
    {
      title: "Tên văn bản dài ơi là dài. Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      location: "Thô Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang, tỉnh Hà Giang",
      relatedFile: "Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      price: "Miễn phí"
    },
    {
      title: "Tên văn bản dài ơi là dài. Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      location: "Thô Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang, tỉnh Hà Giang",
      relatedFile: "Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      price: "Miễn phí"
    },
    {
      title: "Tên văn bản dài ơi là dài. Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      location: "Thô Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang, tỉnh Hà Giang",
      relatedFile: "Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      price: "Miễn phí"
    },
    {
      title: "Tên văn bản dài ơi là dài. Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      location: "Thô Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang, tỉnh Hà Giang",
      relatedFile: "Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      price: "Miễn phí"
    },
    {
      title: "Tên văn bản dài ơi là dài. Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      location: "Thô Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang, tỉnh Hà Giang",
      relatedFile: "Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
      price: "Miễn phí"
    }
  ];

  return (
    <div className="min-h-screen bg-app-bg">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8 pb-32">
        {/* Back button and title section */}
        <div className="space-y-5 mb-5">
          <Button 
            variant="secondary" 
            className="bg-grey-light text-content-primary font-bold hover:bg-grey-light/80 h-12 px-5"
          >
            <ArrowLeft className="w-6 h-6 mr-1" />
            Quay lại
          </Button>
          
          <div className="space-y-2">
            <DocumentBadge isPremium={true} type="Tài liệu" />
            <h1 className="text-2xl font-bold text-content-primary leading-normal">
              {documentTitle}
            </h1>
          </div>
        </div>

        <div className="h-px bg-grey-light mb-20"></div>

        {/* Document Information Section */}
        <div className="space-y-20">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-app-green">Thông tin văn bản</h2>
            
            <div className="bg-white rounded p-6 space-y-6">
              <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
              
              <div className="space-y-0">
                <InfoRow 
                  label="Mã văn bản:" 
                  value="000.000.06.H22.2004.22.02.1" 
                />
                <InfoRow 
                  label="Trích yếu:" 
                  value="Quyết định số 2559/QĐ-UB + Bản đồ" 
                />
                <InfoRow 
                  label="Số văn bản:" 
                  value="1" 
                />
                <InfoRow 
                  label="Thuộc hồ sơ" 
                  value="(2003-HS-02217) Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang"
                  valueLink={true}
                />
                <InfoRow 
                  label="Đơn vị:" 
                  value="Sở Tài nguyên & Môi trường tỉnh Hà Giang" 
                />
                <InfoRow 
                  label="Mục lục:" 
                  value="Tập lưu hồ sơ thu hồi đất, chuyên mục đích sử dụng đất(1995-2016)" 
                />
                <InfoRow 
                  label="Loại tài liệu:" 
                  value="Đăng ký đất đai, hồ sơ địa chính, thu hồi đất, giao đất, cho thuê đất, chuyển mục đích sử dụng đất, cấp giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản gắn liền với đất;" 
                />
              </div>
            </div>
          </div>

          {/* Related Documents Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-app-green">Văn bản liên quan</h2>
            
            <div className="space-y-3">
              {relatedDocuments.map((doc, index) => (
                <DocumentCard
                  key={index}
                  title={doc.title}
                  location={doc.location}
                  relatedFile={doc.relatedFile}
                  price={doc.price}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <StickyFooter />
    </div>
  );
}
