import { useState, useEffect } from 'react';
import { Sun, Moon, Menu } from 'lucide-react';

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const NavLinks = () => (
    <ul className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
      <li>
        <a href="#beranda" className="text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400">Beranda</a>
      </li>
      <li>
        <a href="#layanan" className="text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400">Layanan</a>
      </li>
      <li>
        <a href="#kontak" className="text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400">Kontak</a>
      </li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-900/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
        <a href="#beranda" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400"></div>
          <span className="text-base font-bold tracking-tight text-gray-900 dark:text-white">Mas Adek Karya</span>
        </a>

        <div className="hidden lg:block">
          <NavLinks />
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Ganti Tema"
            onClick={onToggleTheme}
            className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white p-2 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white p-2 text-gray-700 hover:bg-gray-50 lg:hidden dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            onClick={() => setOpen((o) => !o)}
            aria-label="Buka menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-gray-900 lg:hidden">
          <NavLinks />
        </div>
      )}
    </header>
  );
}
