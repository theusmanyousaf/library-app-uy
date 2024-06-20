import { useState } from 'react';
import Logo from '../../assets/Logo.svg'

export default function Header() {
  const [landingsOpen, setLandingsOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <header>
      <div className="mx-auto px-4 py-8 flex justify-between items-center">
        <a href="/"><img src={Logo} alt='logo' /></a>
        <nav className="flex items-center space-x-8 ml-auto">
          <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
          <div className="relative">
            <button
              className="flex items-center text-gray-700 hover:text-blue-500"
              onClick={() => setLandingsOpen(!landingsOpen)}
            >
              Landings
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {landingsOpen && (
              <div className="absolute mt-2 w-48 bg-white shadow-lg rounded">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Landing 1</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Landing 2</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Landing 3</a>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className="flex items-center text-gray-700 hover:text-blue-500"
              onClick={() => setPagesOpen(!pagesOpen)}
            >
              Pages
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {pagesOpen && (
              <div className="absolute mt-2 w-48 bg-white shadow-lg rounded">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Page 1</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Page 2</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Page 3</a>
              </div>
            )}
          </div>
          <a href="#" className="text-gray-700 hover:text-blue-500">Docs</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Help</a>
          <button className="text-blue-600 border-2 border-blue-600 px-4 py-1 rounded-md hover:bg-blue-50">
            <a href="/search">Search</a>
          </button>
        </nav>
      </div>
    </header>
  )
}
