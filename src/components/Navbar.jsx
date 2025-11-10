import { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'Teachers', href: '#teachers' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
      scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-gray-900">
          <div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            <Rocket className="h-5 w-5" />
          </div>
          <span>EduSphere</span>
        </div>

        <ul className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#courses"
            onClick={(e) => handleNavClick(e, '#courses')}
            className="px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow hover:shadow-md transition"
          >
            Join a Class
          </a>
          <a
            href="#teachers"
            onClick={(e) => handleNavClick(e, '#teachers')}
            className="px-4 py-2 rounded-md text-sm font-medium border border-gray-300 hover:border-gray-400 text-gray-800"
          >
            Start Teaching
          </a>
        </div>
      </nav>
    </header>
  );
}
