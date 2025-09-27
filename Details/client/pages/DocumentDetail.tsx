import { Button } from "@/components/ui/button";
import { ArrowLeft, Crown } from "lucide-react";
import DocumentBadge from "@/components/DocumentBadge";
import DocumentCard from "@/components/DocumentCard";
import RelatedDocumentCard from "@/components/RelatedDocumentCard";
import SearchBox from "@/components/SearchBox";
import { Bookmark } from "lucide-react";

export default function DocumentDetail() {
  const documentTitle = "(2003-HS-02217) Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang";

  const documentInfo = [
    { label: "Mã hồ sơ:", value: "000.000.06.H22.2004.22.02.1" },
    { label: "Tên hồ sơ:", value: documentTitle },
    { label: "Số hồ sơ:", value: "1" },
    { label: "Tổng số văn bản:", value: "0" },
    { label: "Đơn vị:", value: "Sở Tài nguyên & Môi trường tỉnh Hà Giang" },
    { label: "Mục lục:", value: "Tập lưu hồ sơ thu hồi đất, chuyên mục đích sử dụng đất(1995-2016)" },
    { label: "Loại tài liệu:", value: "Đăng ký đất đai, hồ sơ địa chính, thu hồi đất, giao đất, cho thuê đất, chuyển mục đích sử dụng đất, cấp giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản gắn liền với đất;" },
  ];

  // Mock data for documents
  const documents = Array(10).fill(null).map((_, i) => ({
    id: i + 1,
    title: "Tên văn bản dài ơi là dài. Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
    location: "Đơn vị hành chính: Thô Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang, tỉnh Hà Giang",
    fee: "Miễn phí",
  }));

  const relatedDocuments = Array(5).fill(null).map((_, i) => ({
    id: i + 1,
    title: documentTitle,
    field: "Lĩnh vực: Đất đai",
    location: "Đơn vị hành chính: Thô Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang, tỉnh Hà Giang",
    fee: "Miễn phí",
  }));

  return (
    <div className="min-h-screen bg-bg-light">
      {/* Main content */}
      <div className="mx-auto flex max-w-[1170px] flex-col gap-5 px-6 py-8 pb-32">
        {/* Back button and title */}
        <div className="flex flex-col gap-5">
          <Button 
            variant="secondary" 
            className="flex h-12 w-fit items-center gap-1 bg-gray-light px-5 text-neutral-1 hover:bg-gray-light/80"
          >
            <ArrowLeft className="h-6 w-6" />
            Quay lại
          </Button>
          
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <div className="flex items-center justify-center rounded bg-gray-lighter p-1">
                <Crown className="h-6 w-6 fill-[#FFB915] stroke-[#FFB915]" />
              </div>
              <DocumentBadge type="hoso" />
            </div>
            <h1 className="text-2xl font-bold leading-[1.5] text-neutral-1">
              {documentTitle}
            </h1>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-light"></div>

        {/* Document Information Section */}
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold leading-[1.5] text-green">
              Thông tin hồ sơ
            </h2>
            
            <div className="flex flex-col gap-6 rounded bg-white p-6">
              {/* Tabs */}
              <div className="flex flex-col">
                <div className="flex items-start">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center px-4 py-1.5">
                      <span className="text-base font-semibold text-green">
                        Thông tin cơ bản
                      </span>
                    </div>
                    <div className="h-[3px] w-full rounded-t bg-green"></div>
                  </div>
                  <div className="flex items-center justify-center px-4 py-1.5">
                    <span className="text-base font-semibold text-neutral-1">
                      Thông tin chi tiết
                    </span>
                  </div>
                  <div className="flex items-center justify-center px-4 py-1.5">
                    <span className="text-base font-semibold text-neutral-1">
                      Tài liệu kèm theo
                    </span>
                  </div>
                </div>
                <div className="h-px w-full bg-gray-light"></div>
              </div>

              {/* Document info list */}
              <div className="flex flex-col gap-3">
                {documentInfo.map((info, index) => (
                  <div key={index}>
                    <div className="flex items-start gap-4">
                      <div className="w-40 flex-shrink-0 text-base font-semibold text-neutral-3">
                        {info.label}
                      </div>
                      <div className="flex-1 text-base font-normal text-neutral-1">
                        {info.value}
                      </div>
                    </div>
                    {index < documentInfo.length - 1 && (
                      <div className="mt-3 h-px w-full bg-gray-lighter"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Documents Section */}
          <div className="flex flex-col items-end gap-6">
            <div className="flex w-full items-center justify-between">
              <h2 className="text-2xl font-bold leading-[1.5] text-green">
                Văn bản thuộc hồ sơ
              </h2>
              <SearchBox />
            </div>

            <div className="flex w-full flex-col gap-3">
              {documents.map((doc) => (
                <DocumentCard
                  key={doc.id}
                  title={doc.title}
                  location={doc.location}
                  fee={doc.fee}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-content-light">
                  Hiển thị số bản ghi
                </span>
                <div className="flex h-8 w-[70px] items-center justify-between rounded bg-white px-2">
                  <span className="text-base font-normal text-neutral-1">10</span>
                  <div className="h-6 w-6"></div>
                </div>
              </div>
              
              <div className="flex items-start gap-1">
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  <span className="sr-only">Previous</span>
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  1
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  2
                </Button>
                <Button variant="secondary" size="sm" className="h-8 w-8 p-0 bg-gray-light">
                  3
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  ...
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  9
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  10
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  <span className="sr-only">Next</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Related Documents Section */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold leading-[1.5] text-green">
              Hồ sơ liên quan
            </h2>
            
            <div className="flex flex-col gap-3">
              {relatedDocuments.map((doc) => (
                <RelatedDocumentCard
                  key={doc.id}
                  title={doc.title}
                  field={doc.field}
                  location={doc.location}
                  fee={doc.fee}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 flex h-20 items-center justify-between bg-green-light px-52 backdrop-blur-[15px]">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-neutral-1">
            Phí khai thác:
          </span>
          <span className="text-xl font-bold text-green">
            Miễn phí
          </span>
        </div>
        
        <div className="flex items-start gap-2">
          <Button className="h-10 bg-green text-white hover:bg-green/90">
            Khai thác ngay
          </Button>
          <Button variant="ghost" className="h-10 text-neutral-1">
            <Bookmark className="h-6 w-6" />
            Lưu hồ sơ
          </Button>
        </div>
      </div>
    </div>
  );
}
