import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faSignOutAlt,
  faBars,
  faTimes,
  faTachometerAlt,
  faChalkboardTeacher,
  faBookOpen,
  faTrophy,
  faComments,
  faVial,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (userString) {
      setUser(JSON.parse(userString));
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda akan keluar dari sesi ini",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4F46E5",
      cancelButtonColor: "#9CA3AF",
      confirmButtonText: "Ya, Logout",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        const userString = localStorage.getItem("user");
        const loggedOutUser = userString ? JSON.parse(userString) : null;
        let logoutText = "Jangan lupa untuk terus belajar, ya!";
        if (loggedOutUser && loggedOutUser.role === "instructor") {
          logoutText = "Anda telah keluar dari akun instruktur.";
        }
        localStorage.removeItem("user");
        Swal.fire({
          title: "Berhasil Logout!",
          text: logoutText,
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          window.location.href = "/";
        });
      }
    });
  };

  const baseLinks = [
    { to: "/kelas", text: "Kelas", icon: faBookOpen },
    { to: "/quiz", text: "Kuis", icon: faVial },
    { to: "/forum", text: "Forum", icon: faComments },
    { to: "/pencapaian", text: "Pencapaian", icon: faTrophy },
  ];

  const userNavLinks = [
    { to: "/dashboard", text: "Dashboard", icon: faTachometerAlt },
    ...baseLinks,
  ];

  const instructorNavLinks = [
    {
      to: "/admin/instruktur",
      text: "Dashboard Instruktur",
      icon: faChalkboardTeacher,
    },
    { to: "/admin/quiz", text: "Kuis", icon: faVial },
  ];

  const navLinks =
    user?.role === "instructor" ? instructorNavLinks : userNavLinks;

  const NavLink = ({ to, text, icon, onClick }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
          isActive
            ? "bg-indigo-700 text-white shadow-inner"
            : "text-indigo-100 hover:bg-indigo-700 hover:text-white"
        }`}
      >
        <FontAwesomeIcon icon={icon} />
        <span>{text}</span>
      </Link>
    );
  };

  return (
    <header className="bg-indigo-600 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold flex items-center space-x-2">
          <FontAwesomeIcon icon={faBook} />
          <span>Belajar Pintar</span>
        </h1>

        <nav className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <NavLink key={link.to} {...link} />
          ))}
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-indigo-100 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>Logout</span>
          </button>
        </nav>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                {...link}
                onClick={() => setIsMenuOpen(false)}
              />
            ))}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                handleLogout();
              }}
              className="flex items-center space-x-2 text-indigo-100 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 text-left w-full"
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span>Logout</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
