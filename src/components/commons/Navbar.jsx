
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="container-logo-menu text-2xl font-bold col-3">
          <img src='./logo-ipms.png' className="w-20" alt='IPMS' /> IPMS Orizaba
        </Link>

        {/* Botón del menú en mobile */}
        <button
          className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú en desktop */}
        <ul className="hidden lg:flex space-x-6 col-9">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-gray-300">
              Galería
            </Link>
          </li>
        </ul>
      </div>

      {/* Menú en mobile */}
      {menuOpen && (
        <ul className="lg:hidden flex flex-col space-y-4 bg-gray-900 p-4 text-center">
          <li>
            <Link href="/" className="block p-2 hover:bg-gray-700 rounded" onClick={() => setMenuOpen(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/about" className="block p-2 hover:bg-gray-700 rounded" onClick={() => setMenuOpen(false)}>
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block p-2 hover:bg-gray-700 rounded" onClick={() => setMenuOpen(false)}>
              Contacto
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
