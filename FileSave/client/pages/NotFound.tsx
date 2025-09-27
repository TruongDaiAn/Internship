import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-app-bg">
      <Header />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-78px)]">
        <div className="text-center bg-white rounded-lg p-8 shadow-sm">
          <h1 className="text-4xl font-bold mb-4 text-app-text-primary">404</h1>
          <p className="text-xl text-app-text-secondary mb-6">
            Oops! Trang không tồn tại
          </p>
          <p className="text-app-text-muted mb-6">
            Trang bạn đang tìm kiếm không thể được tìm thấy.
          </p>
          <a 
            href="/" 
            className="inline-flex h-10 px-5 py-2.5 justify-center items-center gap-1 rounded bg-app-primary text-white font-semibold text-base leading-6 hover:bg-green-700 transition-colors"
          >
            Quay về trang chủ
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
