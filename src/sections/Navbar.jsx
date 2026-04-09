import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "https://sochau.cloud", label: "Superadmin Portal" },
];

export default function Navbar({ scrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "nav-blur" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="font-heading text-2xl font-bold tracking-tight"
              onClick={handleLinkClick}
            >
              Sochau<span className="text-accent">X</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={link.label === "Superadmin Portal"
                    ? "px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent/90 transition-colors"
                    : `text-sm font-medium transition-colors hover:text-accent ${
                        location.pathname === link.href
                          ? "text-accent"
                          : "text-secondary"
                      }`}
                >
                  {link.label}
                </Link>
              ))}
              <ThemeToggle />
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <button
                className="relative w-10 h-10 flex items-center justify-center"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-5">
                  <span
                    className={`absolute left-0 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                      mobileOpen
                        ? "top-1/2 rotate-45 translate-y-[-50%]"
                        : "top-1"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                      mobileOpen ? "opacity-0 translate-x-[-10px]" : "translate-y-[-50%]"
                    }`}
                  />
                  <span
                    className={`absolute left-0 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                      mobileOpen
                        ? "top-1/2 -rotate-45 translate-y-[-50%]"
                        : "top-4"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-primary/95 backdrop-blur-lg transition-all duration-300 md:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={handleLinkClick}
                className={`${
                  link.label === "Superadmin Portal"
                    ? "px-6 py-3 bg-accent text-white font-medium rounded-xl hover:bg-accent/90 transition-colors"
                    : `text-3xl font-heading font-bold py-4 px-8 transition-all duration-300 ${
                        mobileOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      } ${
                        location.pathname === link.href
                          ? "text-accent"
                          : "text-secondary hover:text-primary"
                      }`
                }`}
                style={{
                  transitionDelay: mobileOpen && link.label !== "Superadmin Portal" ? `${index * 80}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div
            className={`absolute bottom-20 flex items-center gap-6 transition-all duration-300 ${
              mobileOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: mobileOpen ? "400ms" : "0ms" }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
