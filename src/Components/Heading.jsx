import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="bg-indigo-600 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold flex items-center space-x-2">
          <span>Belajar Pintar</span>
          <FontAwesomeIcon icon={faBook} />
        </h1>
        <nav>
          <div className="flex space-x-8">
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
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
