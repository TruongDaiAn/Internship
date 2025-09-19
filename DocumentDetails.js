// File: DocumentDetails.js
// React component generated from HTML layout

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-query";

// Redux slices (assume setup elsewhere; shown here as placeholder)
const selectUser = (state) => state.user;
const selectNotificationCount = (state) => state.notifications;
const selectTicketCount = (state) => state.tickets;

// Mock fetch for documents list (replace `fetchDocuments` with real call)
const fetchDocuments = async ({ queryKey }) => {
  // example: fetch(`/api/documents?search=${queryKey[1]}&page=${queryKey[2]}`)
  // return await res.json();
  return { data: [], total: 2000, currentPage: 1, pageSize: 20 };
};

const TABS = [
  "Thông tin cơ bản",
  "Trường tin mô tả",
  "Tài liệu kèm theo"
];

const relatedProfiles = [
  {
    code: "(2003-HS-02014)",
    description:
      "Hồ sơ về chuyển mục đích sử dụng đất của hộ dân tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang, tỉnh Hà Giang. "
  },
  {
    code: "(2003-HS-01345)",
    description:
      "Hồ sơ về bồi thường, hỗ trợ, tái định cư khi nhà nước thu hồi đất tại thị trấn Bắc Quang, tỉnh Hà Giang."
  }
];

const DocumentDetails = ({
  children,
  profile = {
    code: "(2003-HS-02217)",
    name:
      "Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang",
    isPremium: true,
    fields: [
      { label: "Mã hồ sơ:", value: "000.000.06.H22.2004.22.02.1" },
      { label: "Tên hồ sơ:", value: "(2003-HS-02217) Hồ sơ thu hồi đất chuyên dùng của Cửa hàng HTX mua bán Vĩnh Tuy, chuyển mục đích sử dụng sang loại đất ở, để bán giá quyền sử dụng đất tại thôn Mới, thị trấn Vĩnh Tuy, huyện Bắc Quang" },
      { label: "Số hồ sơ:", value: "1" },
      { label: "Tổng số văn bản:", value: "0" },
      { label: "Đơn vị:", value: "Sở Tài nguyên & Môi trường tỉnh Hà Giang" },
      { label: "Mục lục:", value: "Tập lưu hồ sơ thu hồi đất, chuyên mục đích sử dụng đất(1995-2016)" },
      { label: "Loại tài liệu:", value: "Đăng ký đất đai, hồ sơ địa chính, thu hồi đất, giao đất, cho thuê đất, chuyển mục đích sử dụng đất, cấp giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản gắn liền với đất;" }
    ]
  }
}) => {
  // Redux state selectors (connected in real project)
  const user = useSelector(selectUser) || {
    username: "thanhvannguyen",
    avatar:
      "https://app.codigma.io/api/uploads/assets/c5cd7abb-dcd8-44e0-99c4-fc6533e32bf5.svg"
  };
  const notifications = useSelector(selectNotificationCount) ?? 99;
  const tickets = useSelector(selectTicketCount) ?? 1;

  // Tabs state
  const [tab, setTab] = useState(0);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // React Query for document list (empty for now)
  const { data } = useQuery(
    ["documents", search, page],
    fetchDocuments,
    { keepPreviousData: true }
  );
  const totalDocs = data?.total ?? 2000;
  const pageSize = data?.pageSize ?? 20;
  const numPages = Math.ceil(totalDocs / pageSize);

  // Pagination range for demo
  const pages = [1, 2, 3, numPages];

  return (
    <div className="min-h-screen bg-gray-100 text-[#262A34] font-inter text-[15px]">
      {/* Header */}
      <header className="bg-white shadow-[inset_0_-1px_0_#EDEDED] flex items-center justify-between px-9 h-[70px] sticky top-0 left-0 z-50 max-[650px]:px-3 max-[650px]:h-14">
        <div className="flex items-center gap-[14px] logo">
          <img
            src="https://app.codigma.io/api/uploads/assets/7cd79c71-71fd-474e-aa44-f6836253d3a2.svg"
            alt="Logo"
            className="w-[54px] h-[54px] object-contain max-[650px]:w-9 max-[650px]:h-9"
          />
          <div className="text-lg font-semibold leading-[22px] text-[#262A34] max-[650px]:text-[14px] logo-name">
            Hệ thống lưu trữ điện tử<br />ngành Tài nguyên &amp; Môi trường
          </div>
        </div>
        <div className="flex items-center gap-6 header-actions">
          <div
            className="relative flex items-center justify-center w-9 h-9 bg-[#E5E5E5] rounded-[6px] cursor-pointer nav-icon"
            aria-label="Notifications"
          >
            <img
              src="https://app.codigma.io/api/uploads/assets/c0e5612c-da38-4f0c-a3f8-7b2ec063dc24.svg"
              alt="Notifications"
              className="w-[18px] h-[18px]"
            />
            <span className="absolute top-1 left-4 min-w-[18px] h-4 px-1 bg-[#288A38] text-white rounded-[20px] text-[10px] font-bold flex items-center justify-center leading-4 z-10 badge">
              {notifications > 99 ? "99+" : notifications}
            </span>
          </div>
          <div
            className="relative flex items-center justify-center w-9 h-9 bg-[#E5E5E5] rounded-[6px] cursor-pointer nav-icon"
            aria-label="Tickets"
          >
            <img
              src="https://app.codigma.io/api/uploads/assets/496dc8cf-3277-41a1-9799-429e24b857dc.svg"
              alt="Tickets"
              className="w-[18px] h-[18px]"
            />
            <span className="absolute top-1 left-4 min-w-[18px] h-4 px-1 bg-[#288A38] text-white rounded-[20px] text-[10px] font-bold flex items-center justify-center leading-4 z-10 badge">
              {tickets}
            </span>
          </div>
          <div className="relative flex items-center justify-center w-9 h-9 bg-[#E5E5E5] rounded-[6px] cursor-pointer nav-icon" aria-label="Bell">
            <img
              src="https://app.codigma.io/api/uploads/assets/486ce4f5-f293-4696-a540-994448e2cce8.svg"
              alt="Bell"
              className="w-[18px] h-[18px]"
            />
          </div>
          <div className="flex items-center gap-2 text-[15px] font-medium text-[#262A34] profile">
            <span>{user.username}</span>
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-8 h-8 rounded-full bg-[#F2F2F2]"
            />
            <img
              src="https://app.codigma.io/api/uploads/assets/0734f580-eff0-4221-ac0b-41a71a4827b5.svg"
              alt="Expand"
              className="w-[17px] h-[17px] ml-[3px]"
            />
          </div>
        </div>
      </header>
      <main className="max-w-[1100px] mx-auto my-10 px-6 main-content max-[1020px]:max-w-[99vw] max-[650px]:px-1 max-[650px]:mt-6">
        {/* Section: Thông tin hồ sơ */}
        <div className="text-[22px] font-bold mb-5 mt-0 text-[#262A34] section-title max-[650px]:text-[19px]">
          Thông tin hồ sơ
        </div>
        <section className="bg-white rounded-lg shadow-card p-6 mb-8 card max-[650px]:p-[13px]">
          <div className="flex items-center justify-between gap-4 mb-2 card-header">
            <div className="text-[#262A34] font-semibold text-[17px] leading-[26px] max-w-[930px]">{profile.code} {profile.name}</div>
            {profile.isPremium && (
              <div className="bg-[#EAFAEC] text-[#288A38] text-[13px] font-bold rounded-2xl py-[3px] px-[14px]">Premium</div>
            )}
          </div>
          <div className="flex border-b-[1.5px] border-[#E5E5E5] mb-[18px] items-end tabs">
            {TABS.map((t, i) => (
              <button
                key={t}
                type="button"
                className={`relative py-2 pr-7 pb-[13px] pl-0 text-[15px] font-semibold bg-transparent border-0 cursor-pointer tab transition-colors duration-100 ${tab === i ? "text-[#288A38] tab active after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[3px] after:rounded-t after:bg-[#288A38]" : "text-[#262A34] hover:text-[#288A38]"}`}
                onClick={() => setTab(i)}
                aria-current={tab === i ? "page" : undefined}
              >
                {t}
              </button>
            ))}
          </div>
          {/* Card Body */}
          <div className="pt-0 card-body">
            {profile.fields.map(({ label, value }, idx) => (
              <div className="flex mb-[11px] items-start text-[15px] info-row" key={idx}>
                <div className="text-[#878B91] min-w-[135px] font-medium leading-[1.6] flex-shrink-0">{label}</div>
                <div className="text-[#262A34] font-normal leading-[23px] flex-1 break-words mr-[2vw]">{value}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Section: Văn bản thuộc hồ sơ */}
        <div className="text-[22px] font-bold mb-5 mt-0 text-[#262A34] section-title max-[650px]:text-[19px]">
          Văn bản thuộc hồ sơ
        </div>
        <section className="bg-white rounded-lg shadow-card p-6 mb-8 card max-[650px]:p-[13px]">
          <div className="flex items-center justify-between gap-4 mb-3.5 card-header" style={{ marginBottom: "12px" }}>
            <div className="relative min-w-[260px] flex-none search-bar">
              <input
                type="text"
                className="h-9 w-[260px] max-w-full border border-[#DEDEDE] rounded-[7px] px-3 pr-9 text-[15px] bg-[#FAFAFA] text-[#656B70] outline-none"
                placeholder="Tìm kiếm văn bản..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                aria-label="Tìm kiếm văn bản"
              />
              <img
                src="https://app.codigma.io/api/uploads/assets/5174c360-7217-4c5d-8219-57871b2ca540.svg"
                alt="Search"
                className="absolute right-3 top-2 w-[19px] h-[19px] opacity-60 pointer-events-none"
                style={{ opacity: ".63" }}
              />
            </div>
            <div className="text-[#878B91] text-[15px] font-medium flex-none showing-info">
              Hiển thị: {(page - 1) * pageSize + 1}-{Math.min(page * pageSize, totalDocs)}/{totalDocs} văn bản
            </div>
          </div>
          {/* Data Table */}
          {data?.data && data.data.length > 0 ? (
            // Replace with table grid when implementing actual rows
            <div className="py-3 text-center text-[#B8BABD] font-medium text-[15px]">Có dữ liệu</div>
          ) : (
            <div className="pt-3 text-center text-[#B8BABD] font-medium text-[15px]">Không có dữ liệu</div>
          )}
          {/* Pagination */}
          <div className="flex items-center justify-end gap-2 mt-[18px] min-h-9 select-none pagination">
            <button
              className="flex items-center justify-center w-[31px] h-[31px] bg-[#F3F4F6] rounded-[7px] text-[#6F747B] text-[15px] font-semibold outline-none border-none transition-colors duration-100 cursor-pointer pagination-arrow"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              aria-label="Trang trước"
            >
              <img
                src="https://app.codigma.io/api/uploads/assets/0c6dbf03-b8ec-4d87-9d88-602cc08cda7a.svg"
                alt="Prev"
                className="w-[14px] h-[14px]"
                style={{ opacity: ".72" }}
              />
            </button>
            {pages.slice(0, 3).map((p) => (
              <button
                key={p}
                className={`flex items-center justify-center w-[31px] h-[31px] bg-[#F3F4F6] rounded-[7px] text-[15px] font-semibold outline-none border-none transition-colors duration-100 cursor-pointer pagination-btn ${page === p ? "bg-[#EAFAEC] text-[#288A38] active" : "text-[#6F747B]"}`}
                onClick={() => setPage(p)}
                aria-current={page === p ? "page" : undefined}
              >
                {p}
              </button>
            ))}
            <span className="text-[#B8BABD] text-[15px] px-0.5 select-none">...</span>
            <button
              className={`flex items-center justify-center w-[31px] h-[31px] bg-[#F3F4F6] rounded-[7px] text-[15px] font-semibold outline-none border-none transition-colors duration-100 cursor-pointer pagination-btn ${page === numPages ? "bg-[#EAFAEC] text-[#288A38] active" : "text-[#6F747B]"}`}
              onClick={() => setPage(numPages)}
            >
              {numPages}
            </button>
            <button
              className="flex items-center justify-center w-[31px] h-[31px] bg-[#F3F4F6] rounded-[7px] text-[#6F747B] text-[15px] font-semibold outline-none border-none transition-colors duration-100 cursor-pointer pagination-arrow"
              onClick={() => setPage(page + 1)}
              disabled={page === numPages}
              aria-label="Trang sau"
            >
              <img
                src="https://app.codigma.io/api/uploads/assets/0c6dbf03-b8ec-4d87-9d88-602cc08cda7a.svg"
                alt="Next"
                className="w-[14px] h-[14px]"
                style={{ transform: "rotate(180deg)", opacity: ".72" }}
              />
            </button>
          </div>
        </section>
        {/* Section: Hồ sơ liên quan */}
        <div className="text-[22px] font-bold mb-5 mt-0 text-[#262A34] section-title max-[650px]:text-[19px]">
          Hồ sơ liên quan
        </div>
        <section className="bg-white rounded-lg shadow-card p-6 mb-6 card max-[650px]:p-[13px]">
          <div className="flex flex-wrap gap-[18px] related-list">
            {relatedProfiles.map((rp, idx) => (
              <div
                key={rp.code}
                className="flex-1 min-w-[300px] max-w-[400px] bg-[#F6FFF7] rounded-[6px] p-[17px_18px_14px_18px] border border-[#EAF7EA] text-[15px] text-[#262A34] font-medium box-border shadow-[0_1.1px_0_rgba(40,138,56,.05)] related-item max-[650px]:min-w-[140px]"
              >
                <div className="mb-1 font-semibold text-[#288A38] text-[15px] related-item-title">{rp.code}</div>
                {rp.description}
              </div>
            ))}
          </div>
        </section>
        {children}
      </main>
      {/* Footer */}
      <footer className="w-screen bg-[#244A2A] text-white pt-[38px] pb-[22px] footer max-[650px]:pt-5 max-[650px]:pb-5">
        <div className="max-w-[1160px] mx-auto flex justify-between flex-wrap text-[15px] font-medium gap-[60px] leading-[1.88] footer-content max-[1020px]:flex-col max-[1020px]:gap-7 max-[650px]:text-[13.5px]">
          <div className="min-w-[340px] max-w-[430px]">
            <div className="font-bold mb-2">
              Trung tâm Công nghệ thông tin<br />
              Sở Tài nguyên &amp; Môi trường tỉnh Hà Giang
            </div>
            <div>
              <span className="text-[#B9E2BC]">Cổng hệ thống</span> | <span className="text-[#B9E2BC]">Điều khoản sử dụng</span>
            </div>
          </div>
          <div className="min-w-[300px] leading-[1.6]">
            <div>Email: stnmt.hagiang.gov.vn@gmail.com</div>
            <div>
              Website:{" "}
              <a
                href="http://stnmt.hagiang.gov.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >http://stnmt.hagiang.gov.vn/</a>
            </div>
            <div>Số điện thoại: 02.437548925</div>
            <div>Địa chỉ: Số 185 Đường Trần Hưng Đạo - thành phố Hà Giang - tỉnh Hà Giang</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DocumentDetails;