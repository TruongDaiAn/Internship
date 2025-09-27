import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to document detail page immediately
    navigate("/document/2003-HS-02217");
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-green border-t-transparent"></div>
        <p className="mt-4 text-neutral-2">Đang tải...</p>
      </div>
    </div>
  );
}
