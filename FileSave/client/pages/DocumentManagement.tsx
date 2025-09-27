import { useState } from "react";
import { Search, ChevronDown, Crown, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../components/Header";

interface Document {
  id: string;
  title: string;
  type: "document";
  price: number;
  isPremium: boolean;
  isSelected: boolean;
}

const sampleDocuments: Document[] = [
  {
    id: "1",
    title: "Tên văn bản dài ơi là dài. Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
    type: "document",
    price: 10000,
    isPremium: true,
    isSelected: false,
  },
  {
    id: "2", 
    title: "Tên văn bản dài ơi là dài. Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
    type: "document",
    price: 10000,
    isPremium: true,
    isSelected: false,
  },
  {
    id: "3",
    title: "Tên văn bản dài ơi là dài. Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
    type: "document", 
    price: 10000,
    isPremium: true,
    isSelected: false,
  },
  {
    id: "4",
    title: "Tên văn bản dài ơi là dài. Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
    type: "document",
    price: 10000,
    isPremium: true,
    isSelected: false,
  },
  {
    id: "5",
    title: "Tên văn bản dài ơi là dài. Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
    type: "document",
    price: 10000,
    isPremium: true,
    isSelected: false,
  },
];

export default function DocumentManagement() {
  const [activeTab, setActiveTab] = useState<"records" | "documents">("records");
  const [documents, setDocuments] = useState<Document[]>(sampleDocuments);
  const [selectAll, setSelectAll] = useState(false);

  const selectedDocuments = documents.filter(doc => doc.isSelected);
  const totalCost = selectedDocuments.reduce((sum, doc) => sum + doc.price, 0);

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setDocuments(docs => docs.map(doc => ({ ...doc, isSelected: newSelectAll })));
  };

  const handleDocumentSelect = (id: string) => {
    setDocuments(docs => docs.map(doc => 
      doc.id === id ? { ...doc, isSelected: !doc.isSelected } : doc
    ));
    
    // Update select all state
    const updatedDocs = documents.map(doc => 
      doc.id === id ? { ...doc, isSelected: !doc.isSelected } : doc
    );
    setSelectAll(updatedDocs.every(doc => doc.isSelected));
  };

  return (
    <div className="min-h-screen bg-app-bg">
      <Header />
      
      {/* Hero background */}
      <div className="relative">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/38aa65fc62acf2c5e9517bf28ad9dbd95a08cd42?width=2890"
          alt="Background"
          className="w-full h-[565px] object-cover rounded-[20px] mx-8 mt-6"
        />
        
        {/* Main content overlay */}
        <div className="absolute top-[109px] left-1/2 transform -translate-x-1/2 w-full max-w-[959px] px-4">
          {/* Title and Search Section */}
          <div className="bg-white rounded p-3 mb-3">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-app-text-primary font-bold text-[32px] leading-[48px]">
                Tài liệu đã lưu
              </h1>
            </div>

            {/* Search filters */}
            <div className="flex items-center gap-2">
              {/* Search input */}
              <div className="flex w-[332px] h-12 px-2 py-1.5 items-center gap-1 rounded border border-app-gray-100">
                <Search className="w-6 h-6 text-app-text-secondary" strokeWidth={1.5} />
                <span className="text-app-text-muted font-normal text-base leading-6">
                  Tìm kiếm tài liệu
                </span>
              </div>

              {/* Field dropdown */}
              <div className="flex h-12 px-2 py-1.5 justify-between items-center flex-1 rounded border border-app-gray-100">
                <span className="text-app-text-muted font-normal text-base leading-6">
                  Lĩnh vực
                </span>
                <ChevronDown className="w-6 h-6 text-app-text-secondary" strokeWidth={1.5} />
              </div>

              {/* Document type dropdown */}
              <div className="flex h-12 px-2 py-1.5 justify-between items-center flex-1 rounded border border-app-gray-100">
                <span className="text-app-text-muted font-normal text-base leading-6">
                  Loại tài liệu
                </span>
                <ChevronDown className="w-6 h-6 text-app-text-secondary" strokeWidth={1.5} />
              </div>

              {/* Administrative unit dropdown */}
              <div className="flex h-12 px-2 py-1.5 justify-between items-center flex-1 rounded border border-app-gray-100">
                <span className="text-app-text-muted font-normal text-base leading-6">
                  Đơn vị hành chính
                </span>
                <ChevronDown className="w-6 h-6 text-app-text-secondary" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Tabs and Content Section */}
          <div className="bg-white rounded p-3">
            {/* Tabs */}
            <div className="flex flex-col">
              <div className="flex items-start">
                <button
                  onClick={() => setActiveTab("records")}
                  className={`flex flex-col justify-center items-center ${
                    activeTab === "records" ? "" : "pb-2"
                  }`}
                >
                  <div className="flex px-4 py-1.5 justify-center items-center gap-2.5">
                    <span className={`font-semibold text-base leading-6 ${
                      activeTab === "records" ? "text-app-primary" : "text-app-text-primary"
                    }`}>
                      Hồ sơ
                    </span>
                  </div>
                  {activeTab === "records" && (
                    <div className="h-[3px] self-stretch rounded-t-[2px] bg-app-primary"></div>
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("documents")}
                  className={`flex px-4 py-1.5 justify-center items-center gap-2.5 ${
                    activeTab === "documents" ? "" : "pb-2"
                  }`}
                >
                  <span className={`font-semibold text-base leading-6 ${
                    activeTab === "documents" ? "text-app-primary" : "text-app-text-primary"
                  }`}>
                    Văn bản
                  </span>
                  {activeTab === "documents" && (
                    <div className="h-[3px] self-stretch rounded-t-[2px] bg-app-primary"></div>
                  )}
                </button>
              </div>
              <div className="w-full h-px bg-app-gray-100"></div>
            </div>

            {/* Select all and delete section */}
            <div className="flex justify-between items-center h-10 my-3">
              <div className="flex items-start gap-2">
                <button
                  onClick={handleSelectAll}
                  className="flex w-6 h-6 justify-center items-center"
                >
                  <div className={`w-6 h-6 rounded border-[1.75px] ${
                    selectAll 
                      ? "bg-app-primary border-app-primary" 
                      : "border-app-text-muted"
                  } flex items-center justify-center`}>
                    {selectAll && (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </button>
                <span className="text-app-text-primary font-semibold text-base leading-6">
                  Chọn tất cả 25 hồ sơ
                </span>
              </div>

              {selectedDocuments.length > 0 && (
                <button className="flex h-10 px-5 py-2.5 justify-center items-center gap-1 rounded bg-app-gray-100 hover:bg-gray-200 transition-colors">
                  <Trash2 className="w-6 h-6 text-app-text-primary" strokeWidth={1.5} />
                  <span className="text-app-text-primary text-center font-semibold text-base leading-6">
                    Xóa ({selectedDocuments.length})
                  </span>
                </button>
              )}
            </div>

            {/* Documents list */}
            <div className="flex flex-col gap-5">
              {documents.map((doc, index) => (
                <div key={doc.id}>
                  {index > 0 && <div className="w-full h-px bg-app-gray-100"></div>}
                  
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleDocumentSelect(doc.id)}
                      className="flex w-6 h-6 justify-center items-center"
                    >
                      <div className={`w-6 h-6 rounded border-[1.75px] ${
                        doc.isSelected 
                          ? "bg-app-primary border-app-primary" 
                          : "border-app-text-muted"
                      } flex items-center justify-center`}>
                        {doc.isSelected && (
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    </button>

                    {/* Document card */}
                    <div className="flex p-3 flex-col items-start gap-4 flex-1 rounded bg-white">
                      <div className="flex flex-col items-start gap-4 self-stretch">
                        <div className="flex flex-col items-start gap-4 self-stretch">
                          <div className="flex flex-col items-start gap-1 self-stretch">
                            <div className="flex items-center gap-1">
                              {/* Premium badge */}
                              <div className="flex w-6 h-6 p-1 justify-center items-center gap-2.5 rounded bg-app-gray-50">
                                <Crown className="w-[18px] h-[18px] text-app-gold fill-app-gold" strokeWidth={1.5} />
                              </div>
                              
                              {/* Document type badge */}
                              <div className="flex w-[53px] h-6 px-1 py-0.5 justify-center items-center gap-2.5 rounded bg-app-purple">
                                <span className="text-white font-medium text-xs leading-[18px]">
                                  Tài liệu
                                </span>
                              </div>
                            </div>

                            {/* Document title */}
                            <div className="flex items-start gap-1 self-stretch">
                              <div className="flex items-start gap-4 flex-1">
                                <span className="flex-1 text-app-text-primary font-semibold text-base leading-6">
                                  {doc.title}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Price section */}
                          <div className="flex flex-col items-start gap-2 self-stretch">
                            <div className="flex items-start gap-2">
                              {/* Custom money icon */}
                              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                <path d="M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z" stroke="#676A71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3 8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H19C19.5304 6 20.0391 6.21071 20.4142 6.58579C20.7893 6.96086 21 7.46957 21 8V16C21 16.5304 20.7893 17.0391 20.4142 17.4142C20.0391 17.7893 19.5304 18 19 18H5C4.46957 18 3.96086 17.7893 3.58579 17.4142C3.21071 17.0391 3 16.5304 3 16V8Z" stroke="#676A71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M18 12H18.01" stroke="#676A71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 12H6.01" stroke="#676A71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              <span className="text-app-text-secondary font-normal text-base leading-6">
                                Phí khai thác:
                              </span>
                              <span className="text-app-primary font-semibold text-base leading-6">
                                {doc.price.toLocaleString('vi-VN')}đ
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center gap-3">
                <span className="text-app-text-light font-semibold text-sm leading-[21px]">
                  Hiển thị số bản ghi
                </span>
                <div className="flex w-[70px] px-2 py-1.5 justify-between items-center rounded border border-app-gray-100 bg-white">
                  <span className="text-app-text-primary font-normal text-base leading-6">
                    10
                  </span>
                  <ChevronDown className="w-6 h-6 text-app-text-secondary" strokeWidth={1.5} />
                </div>
              </div>

              {/* Pagination buttons */}
              <div className="flex h-[41px] items-start">
                <div className="flex w-10 p-2.5 justify-center items-center self-stretch rounded-l border border-app-gray-100 bg-white hover:bg-gray-50 cursor-pointer transition-colors">
                  <ChevronLeft className="w-4 h-4 text-app-text-secondary" strokeWidth={1.5} />
                </div>
                <div className="flex w-10 flex-col justify-center items-center self-stretch bg-app-gray-100">
                  <div className="h-px self-stretch bg-app-gray-100"></div>
                  <div className="flex px-2 py-2.25 justify-center items-center gap-2.5">
                    <span className="text-app-text-primary font-semibold text-sm leading-[21px]">1</span>
                  </div>
                  <div className="h-px self-stretch bg-app-gray-100"></div>
                </div>
                <div className="flex w-10 flex-col justify-center items-center self-stretch bg-white">
                  <div className="h-px self-stretch bg-app-gray-100"></div>
                  <div className="flex px-2 py-2.25 justify-center items-center gap-2.5">
                    <span className="text-app-gray-400 font-semibold text-sm leading-[21px]">2</span>
                  </div>
                  <div className="h-px self-stretch bg-app-gray-100"></div>
                </div>
                <div className="flex w-10 flex-col justify-center items-center self-stretch bg-white">
                  <div className="h-px self-stretch bg-app-gray-100"></div>
                  <div className="flex px-2 py-2.25 justify-center items-center gap-2.5">
                    <span className="text-app-gray-400 font-semibold text-sm leading-[21px]">...</span>
                  </div>
                  <div className="h-px self-stretch bg-app-gray-100"></div>
                </div>
                <div className="flex w-10 flex-col justify-center items-center self-stretch bg-white">
                  <div className="h-px self-stretch bg-app-gray-100"></div>
                  <div className="flex px-2 py-2.25 justify-center items-center gap-2.5">
                    <span className="text-app-gray-400 font-semibold text-sm leading-[21px]">9</span>
                  </div>
                  <div className="h-px self-stretch bg-app-gray-100"></div>
                </div>
                <div className="flex w-10 flex-col justify-center items-center self-stretch bg-white">
                  <div className="h-px self-stretch bg-app-gray-100"></div>
                  <div className="flex px-2 py-2.25 justify-center items-center gap-2.5">
                    <span className="text-app-gray-400 font-semibold text-sm leading-[21px]">10</span>
                  </div>
                  <div className="h-px self-stretch bg-app-gray-100"></div>
                </div>
                <div className="flex w-10 p-2.5 justify-center items-center self-stretch rounded-r border border-app-gray-100 bg-white hover:bg-gray-50 cursor-pointer transition-colors">
                  <ChevronRight className="w-4 h-4 text-app-text-secondary" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom action bar */}
      {selectedDocuments.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 flex w-full px-[276px] py-5 justify-between items-center bg-app-primary/20 app-backdrop h-20">
          <div className="flex items-center gap-5">
            <span className="text-app-text-primary font-semibold text-lg leading-[27px]">
              Đã chọn:
            </span>
            <div className="flex items-center gap-2">
              <span className="text-app-text-primary font-semibold text-lg leading-[27px]">
                {selectedDocuments.length} hồ sơ
              </span>
              <div className="w-[3px] h-[3px] rounded-full bg-app-text-muted"></div>
              <span className="text-app-text-primary font-semibold text-lg leading-[27px]">
                {selectedDocuments.length} văn bản
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-app-text-primary font-semibold text-lg leading-[27px]">
              Tổng phí khai thác:
            </span>
            <span className="text-app-primary font-bold text-xl leading-[30px]">
              {totalCost.toLocaleString('vi-VN')}đ
            </span>
          </div>

          <button className="flex h-10 px-5 py-2.5 justify-center items-center gap-1 rounded bg-app-primary hover:bg-green-700 transition-colors">
            <span className="text-white text-center font-semibold text-base leading-6">
              Tạo phiếu khai thác ({selectedDocuments.length})
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
