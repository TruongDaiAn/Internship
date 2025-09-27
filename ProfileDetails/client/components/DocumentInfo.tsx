import React, { useState } from 'react';
import { Tab } from './Tab';
import { InfoRow } from './InfoRow';
import { FileItem } from './FileItem';

interface DocumentInfoProps {
  className?: string;
}

export function DocumentInfo({ className }: DocumentInfoProps) {
  const [activeTab, setActiveTab] = useState<'basic' | 'detailed' | 'documents'>('detailed');
  const [isExpanded, setIsExpanded] = useState(false);

  const documentData = {
    recordNumber: '000.00.06.H22',
    administrativeUnit: 'Thị trấn Vĩnh Tuy - Huyện Bắc Quang - Tỉnh Hà Giang',
    physicalCondition: 'Bình thường',
    contentSummary: 'Thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mói, thị trấn Vĩnh Tuy, huyện Bắc Quang',
    documentTime: '-',
    totalDocuments: '-',
    catalogNumber: '2003.0',
    usageMode: 'Bình thường',
    informationSymbol: 'c7d657b9-d75c-4b64-ad78-579c358375b3',
    pageCount: '1.0',
    archiveCode: '2003-HS-02217',
    pageNumber: '-',
    keywords: '-',
    retentionPeriod: 'Vĩnh viễn',
    startTime: '20-03-2019',
    endTime: '20-03-2029',
    notes: '-',
    language: 'Việt Nam',
    archiveCollectionCode: '000.00.06.H22',
    documentType: 'Tên loại văn bản'
  };

  const files = [
    { fileName: 'exelImportVer2.rar', fileSize: '0.797 MB' },
    { fileName: 'exelImportVer2.rar', fileSize: '0.797 MB' },
    { fileName: 'exelImportVer2.rar', fileSize: '0.797 MB' }
  ];

  const basicInfo = [
    { label: 'Số và ký hiệu hồ sơ', value: documentData.recordNumber },
    { label: 'Đơn vị hành chính', value: documentData.administrativeUnit },
    { label: 'Tình trạng vật lý', value: documentData.physicalCondition },
    { label: 'Trích yếu nội dung', value: documentData.contentSummary },
    { label: 'Thời gian tài liệu', value: documentData.documentTime },
    { label: 'Tổng số tài liệu trong hồ sơ', value: documentData.totalDocuments }
  ];

  const allDetailedInfo = [
    { label: 'Số và ký hiệu hồ sơ', value: documentData.recordNumber },
    { label: 'Đơn vị hành chính', value: documentData.administrativeUnit },
    { label: 'Tình trạng vật lý', value: documentData.physicalCondition },
    { label: 'Trích yếu nội dung', value: documentData.contentSummary },
    { label: 'Thời gian tài liệu', value: documentData.documentTime },
    { label: 'Tổng số tài liệu trong hồ sơ', value: documentData.totalDocuments },
    { label: 'Mục lục số hoặc năm hình thành hồ sơ', value: documentData.catalogNumber },
    { label: 'Chế độ sử dụng', value: documentData.usageMode },
    { label: 'Ký hiệu thông tin', value: documentData.informationSymbol },
    { label: 'Số lượng tờ', value: documentData.pageCount },
    { label: 'Mã cơ quan lưu trữ', value: documentData.archiveCode },
    { label: 'Số lượng trang', value: documentData.pageNumber },
    { label: 'Từ khóa', value: documentData.keywords },
    { label: 'Thời hạn bảo quản', value: documentData.retentionPeriod },
    { label: 'Thời gian bắt đầu', value: documentData.startTime },
    { label: 'Thời gian kết thúc', value: documentData.endTime },
    { label: 'Chú giải', value: documentData.notes },
    { label: 'Ngôn ngữ', value: documentData.language },
    { label: 'Mã phông/công trình/sưu tập lưu trữ', value: documentData.archiveCollectionCode },
    { label: 'Tên loại văn bản', value: documentData.documentType }
  ];

  const displayedInfo = isExpanded ? allDetailedInfo : basicInfo;

  const renderTabContent = () => {
    if (activeTab === 'documents') {
      return (
        <div className="flex p-5 flex-col items-start gap-4 w-full border border-grey-light rounded-lg">
          <div className="flex flex-col items-start gap-1 w-full">
            <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-16 w-full">
              <div className="w-full sm:w-80 text-content-neutral-1 text-base font-bold leading-6">
                Tên file
              </div>
              <div className="text-content-neutral-1 text-base font-bold leading-6">
                Dung lượng
              </div>
            </div>
            <div className="w-full h-px bg-grey-light" />
          </div>
          <div className="flex flex-col items-start gap-4 w-full">
            {files.map((file, index) => (
              <div key={index} className="flex flex-col items-start gap-4 w-full">
                <FileItem fileName={file.fileName} fileSize={file.fileSize} />
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-start gap-3 w-full">
        {displayedInfo.map((info, index) => (
          <InfoRow 
            key={index}
            label={info.label} 
            value={info.value}
            showDivider={index < displayedInfo.length - 1}
          />
        ))}
        {activeTab === 'detailed' && (
          <button 
            className="flex h-10 px-5 py-2.5 justify-center items-center gap-1 rounded hover:bg-gray-50 transition-colors"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span className="text-content-neutral-1 text-base font-bold leading-6">
              {isExpanded ? 'Rút gọn' : 'Xem thêm'}
            </span>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            >
              <g clipPath="url(#clip0_12752_3507)">
                <path 
                  d="M16 11L12 15L8 11" 
                  stroke="#262A34" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_12752_3507">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </button>
        )}
      </div>
    );
  };

  return (
    <div className={`flex flex-col items-start gap-4 w-full max-w-[1169px] ${className}`}>
      <h1 className="text-green text-xl sm:text-2xl font-bold leading-9 px-2 sm:px-0">
        Thông tin hồ sơ
      </h1>

      <div className="flex w-full p-4 sm:p-6 flex-col items-start gap-6 rounded bg-white shadow-sm">
        <div className="flex flex-col items-start w-full">
          <div className="flex items-start overflow-x-auto w-full">
            <Tab
              isSelected={activeTab === 'basic'}
              onClick={() => setActiveTab('basic')}
            >
              Thông tin cơ bản
            </Tab>
            <Tab
              isSelected={activeTab === 'detailed'}
              onClick={() => setActiveTab('detailed')}
            >
              Thông tin chi tiết
            </Tab>
            <Tab
              isSelected={activeTab === 'documents'}
              onClick={() => setActiveTab('documents')}
            >
              Tài liệu kèm theo
            </Tab>
          </div>
          <div className="w-full h-px bg-grey-light" />
        </div>
        
        {renderTabContent()}
      </div>
    </div>
  );
}
