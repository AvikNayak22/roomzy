import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/logo.png";
import { FaUser, FaSignInAlt, FaSignOutAlt, FaBuilding } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="logo"
                priority={true}
                width={64}
                height={64}
                className="h-12 w-12"
              />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <Link
                  href="/"
                  className="rounded-md px-4 py-2 text-sm font-semibold text-gray-700 transition duration-300 hover:bg-emerald-500 hover:text-white"
                >
                  Rooms
                </Link>
                <Link
                  href="/bookings.html"
                  className="rounded-md px-4 py-2 text-sm font-semibold text-gray-700 transition duration-300 hover:bg-emerald-500 hover:text-white"
                >
                  Bookings
                </Link>
                <Link
                  href="/add-room.html"
                  className="rounded-md px-4 py-2 text-sm font-semibold text-gray-700 transition duration-300 hover:bg-emerald-500 hover:text-white"
                >
                  Add Room
                </Link>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <Link
                href="login.html"
                className="text-gray-700 transition duration-300 hover:text-emerald-500"
              >
                <FaSignInAlt className="inline mr-2 text-lg" /> Login
              </Link>
              <Link
                href="register.html"
                className="text-gray-700 transition duration-300 hover:text-emerald-500"
              >
                <FaUser className="inline mr-2 text-lg" /> Register
              </Link>
              <Link
                href="my-rooms.html"
                className="text-gray-700 transition duration-300 hover:text-emerald-500"
              >
                <FaBuilding className="inline mr-2 text-lg" /> My Rooms
              </Link>
              <Link
                href="login.html"
                className="text-gray-700 transition duration-300 hover:text-emerald-500"
              >
                <FaSignOutAlt className="inline mr-2 text-lg" /> Sign Out
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="space-y-1 px-4 pb-3 pt-2">
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-emerald-500 hover:text-white"
          >
            Rooms
          </Link>
          <Link
            href="/bookings.html"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-emerald-500 hover:text-white"
          >
            Bookings
          </Link>
          <Link
            href="/add-room.html"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-emerald-500 hover:text-white"
          >
            Add Room
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
