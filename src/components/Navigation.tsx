import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { scrollToElement } from "@/lib/scroll";

const navLinks: { name: string; target?: string; path?: string }[] = [
  { name: "Home", path: "/" },
  { name: "Product", path: "/product" },
  { name: "About", path: "/about" },
  { name: "Resources", path: "/resources" },
  { name: "How it works", path: "/how-it-works" },
  { name: "Contact", path: "/contact" },
];

const APP_URL = "https://nodehub.uk";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're on a light background page (not homepage)
  const isLightPage = location.pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link: { target?: string; path?: string }) => {
    setIsMobileMenuOpen(false);

    if (link.path) {
      navigate(link.path);
      return;
    }

    if (link.target) {
      // If not on homepage, navigate to homepage first
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          scrollToElement(link.target!);
        }, 100);
      } else {
        scrollToElement(link.target);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isLightPage ? "nav-apple border-b border-black/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-[980px] mx-auto px-6">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <button
            onClick={() => navigate("/node")}
            className="flex shrink-0 items-center"
          >
            <img
              src={
                isScrolled || isLightPage
                  ? "/node-lockup-horizontal-transparent-light.png"
                  : "/node-lockup-horizontal-transparent-dark.png"
              }
              alt="node by Praxis GB"
              width={1811}
              height={306}
              className="h-[17px] w-auto shrink-0 lg:h-7"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className={`text-xs font-normal transition-colors ${
                  isScrolled || isLightPage
                    ? "text-foreground/80 hover:text-foreground" 
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className={`text-xs font-normal transition-colors ${
                isScrolled || isLightPage
                  ? "text-blue-500 hover:text-blue-600"
                  : "text-blue-400 hover:text-blue-300"
              }`}
            >
              Request Demo
            </button>
            {/* Sign In - links to the dashboard app */}
            <a
              href={APP_URL}
              className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all ${
                isScrolled || isLightPage
                  ? "bg-foreground text-background hover:bg-foreground/85"
                  : "bg-white text-black hover:bg-white/85"
              }`}
            >
              Sign in
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled || isLightPage ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 nav-apple border-t border-black/5">
            <div className="max-w-[980px] mx-auto px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className="text-sm text-foreground/80 hover:text-foreground py-2 transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => { setIsMobileMenuOpen(false); navigate("/contact"); }}
                className="text-sm text-blue-500 hover:text-blue-600 py-2 transition-colors text-left"
              >
                Request Demo
              </button>
              {/* Sign In - mobile */}
              <a
                href={APP_URL}
                className="text-sm font-medium text-foreground py-2 border-t border-black/5 mt-1 pt-3 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign in →
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
