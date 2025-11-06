import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState(
    (typeof window !== 'undefined' && localStorage.getItem('theme')) || 'light'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-dvh bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-600 dark:border-gray-800 dark:text-gray-300">
        © {new Date().getFullYear()} Mas Adek Karya • CNC Laser Akrilik & Kayu
      </footer>
    </div>
  );
}

export default App;
