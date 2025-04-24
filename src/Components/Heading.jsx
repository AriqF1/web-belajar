import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const Header = () => {
  const handleLogout = () => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda akan keluar dari akun Anda",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4F46E5",
      cancelButtonColor: "#9CA3AF",
      confirmButtonText: "Ya, Logout",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        Swal.fire({
          title: "Berhasil Logout!",
          text: "Jangan lupa belajar lagi ya!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          window.location.href = "/";
        });
      }
    });
  };

  return (
    <header className="bg-indigo-600 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold flex items-center space-x-2">
          <span>Belajar Pintar</span>
          <FontAwesomeIcon icon={faBook} />
        </h1>
        <nav>
          <div className="flex items-center space-x-8">
            <Link
              to="/dashboard"
              className="hover:underline transition duration-300 ease-in-out transform hover:scale-105"
            >
              Dashboard
            </Link>
            <Link
              to="/kelas"
              className="hover:underline transition duration-300 ease-in-out transform hover:scale-105"
            >
              Kelas
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 hover:underline transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              <span>Logout</span>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
