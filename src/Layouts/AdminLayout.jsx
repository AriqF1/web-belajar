import Header from "@/Components/Heading";

function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow p-6">{children}</main>
      <footer className="text-center text-sm text-gray-500 py-4">
        &copy; {new Date().getFullYear()} Belajar Pintar. All rights reserved.
      </footer>
    </div>
  );
}

export default AdminLayout;
