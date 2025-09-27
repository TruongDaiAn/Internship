import Header from "../components/Header";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ 
  title, 
  description = "Trang này đang được phát triển. Vui lòng quay lại sau hoặc tiếp tục khám phá các tính năng khác."
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-app-bg">
      <Header />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-78px)]">
        <div className="text-center bg-white rounded-lg p-8 shadow-sm max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-app-text-primary">
            {title}
          </h1>
          <p className="text-app-text-secondary mb-6">
            {description}
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
}
