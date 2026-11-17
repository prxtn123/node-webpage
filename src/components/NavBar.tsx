import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHome = location.pathname === "/";
  const onNode = location.pathname === "/node" || location.pathname.startsWith("/node/");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.07] bg-black/90 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3 md:px-10 md:py-[18px]">
        <Link
          to="/"
          className={`shrink-0 transition-opacity duration-200 ${
            onHome ? "opacity-100" : "opacity-70 hover:opacity-100"
          }`}
        >
          <img
            src="/node-symbol-transparent-white.svg"
            alt="Praxis GB home"
            width={1024}
            height={1024}
            className="h-7 w-auto md:h-8"
          />
        </Link>

        <Link
          to="/node"
          aria-label="node"
          aria-current={onNode ? "page" : undefined}
          className={`shrink-0 transition-opacity duration-200 ${
            onNode ? "opacity-100" : "opacity-80 hover:opacity-100"
          }`}
        >
          <img
            src="/node-logo-compact.png"
            alt=""
            width={2736}
            height={596}
            className="block h-4 w-auto"
          />
        </Link>
      </div>
    </header>
  );
}
