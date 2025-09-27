import { Mail, Globe, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full h-[246px] bg-[#244A2A] overflow-hidden">
      {/* Background Mountain Graphics */}
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9891d2aacafc7891169bc94755cbb165735b7e80?width=973" 
        alt="" 
        className="absolute -left-8 -top-7 w-[304px] h-[264px] rotate-[10.443deg] opacity-50"
      />
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f59f854c84c1efb7a9780d54e65f7e6659fa409?width=746" 
        alt="" 
        className="absolute right-8 -top-8 w-[233px] h-[266px] rotate-[-171.567deg] opacity-50"
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1168px] mx-auto px-[120px] py-10 h-full flex items-center justify-between">
        {/* Left Section */}
        <div className="flex flex-col gap-5">
          <h3 className="w-[401px] text-white font-semibold text-lg leading-[27px]">
            Trung tâm Công nghệ thông tin<br />
            Sở Tài nguyên & Môi trường tỉnh Hà Giang
          </h3>
          
          <div className="w-[180px] h-px bg-[#E5E5E5]"></div>
          
          <div className="flex flex-col gap-2">
            <div className="text-white font-normal text-base leading-6">
              Cổng hệ thống
            </div>
            <div className="text-white font-normal text-base leading-6">
              Điều khoản sử dụng
            </div>
          </div>
        </div>

        {/* Right Section - Contact Info */}
        <div className="w-[506px] flex flex-col gap-3">
          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="flex items-center gap-2">
              <Mail className="w-6 h-6 text-white" />
              <span className="w-[100px] text-white font-normal text-base leading-6">
                Email:
              </span>
            </div>
            <span className="text-white font-normal text-base leading-6">
              stnmt.hagiang.gov.vn@gmail.com
            </span>
          </div>

          {/* Website */}
          <div className="flex items-start gap-4">
            <div className="flex items-start gap-2">
              <Globe className="w-6 h-6 text-white" />
              <span className="w-[100px] text-white font-normal text-base leading-6">
                Website:
              </span>
            </div>
            <span className="text-white font-normal text-base leading-6">
              http://stnmt.hagiang.gov.vn/
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-6 h-6 text-white" />
              <span className="text-white font-normal text-base leading-6">
                Số điện thoại:
              </span>
            </div>
            <span className="text-white font-normal text-base leading-6">
              02.437548925
            </span>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-white" />
              <span className="w-[100px] text-white font-normal text-base leading-6">
                Địa chỉ:
              </span>
            </div>
            <span className="flex-1 text-white font-normal text-base leading-6">
              Số 185 Đường Trần Hưng Đạo - thành phố Hà Giang - tỉnh Hà Giang
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
