import React from "react";
import Button from "./Button";
import { AlertTriangle } from "lucide-react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    s;
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-lg">
            <AlertTriangle className="mx-auto h-16 w-16 text-red-500 mb-4" />
            <h1 className="text-2xl font-bold text-red-600">
              Terjadi Kesalahan
            </h1>
            <p className="mt-2 text-gray-600">
              Maaf, aplikasi mengalami masalah yang tidak terduga. Silakan coba
              muat ulang halaman.
            </p>
            <details className="text-left text-xs text-gray-500 bg-gray-50 p-2 rounded-md mt-4">
              <summary className="cursor-pointer">Detail Error</summary>
              <pre className="mt-2 whitespace-pre-wrap">
                {this.state.error.toString()}
              </pre>
            </details>
            <Button
              onClick={() => window.location.reload()}
              className="mt-6 bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Muat Ulang Halaman
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
