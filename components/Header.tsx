import React from 'react';
import { FileDown, Terminal, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  onToggleDark: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, onToggleDark }) => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Akili_B-CV.docx.pdf';
    link.download = 'Akili_Bahati_Resume.pdf';
    document.body.appendChild(link);
    try {
      link.click();
    } finally {
      document.body.removeChild(link);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#F8F9FA]/80 dark:bg-[#111111]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-black dark:bg-white rounded flex items-center justify-center">
            <Terminal className="text-white dark:text-black w-5 h-5" />
          </div>
          <span className="font-mono font-bold tracking-tighter text-sm uppercase dark:text-white">
            AKILI<span className="text-orange-600"> Bahati</span>
          </span>
        </div>

        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden lg:flex items-center gap-6">
            <a href="#about" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-500 transition-colors">About</a>
            <a href="#projects" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-500 transition-colors">Portfolio</a>
            <a href="#experience" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-500 transition-colors">Career</a>
            <a href="#education" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-500 transition-colors">Background</a>
            <a href="#certs" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-500 transition-colors">Certs</a>
            <a href="#contact" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-500 transition-colors">Contact</a>
          </div>

          <div className="h-6 w-[1px] bg-gray-200 dark:bg-gray-700 hidden md:block"></div>

          <button
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
            className="w-9 h-9 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700 hover:border-orange-600 dark:hover:border-orange-500 transition-all duration-300 text-gray-600 dark:text-gray-300"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={handleDownloadResume}
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-orange-600 dark:hover:bg-orange-600 dark:hover:text-white transition-all duration-300"
          >
            Resume <FileDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
