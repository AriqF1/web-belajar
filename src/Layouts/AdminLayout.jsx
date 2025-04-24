import Header from "@/Components/Heading";

function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      <Header />
      <div className="flex-grow p-4 sm:p-6">
        <main>{children}</main>
      </div>
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Belajar Pintar. All rights
                reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 transition-colors"
              >
                Bantuan
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 transition-colors"
              >
                Kebijakan Privasi
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 transition-colors"
              >
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AdminLayout;
