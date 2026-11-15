import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

/** Set to true to show the Praxis GB wordmark in the header again. */
export const SHOW_PRAXIS_LOGO = false;

type NavBarProps = {
  /** Homepage header: symbol links to `/`, and "node" is a text link. Other routes keep the lockup. */
  home?: boolean;
};

export default function NavBar({ home = false }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        {home ? (
          <>
            <Link
              to="/"
              className={`shrink-0 transition-opacity duration-200 ${
                location.pathname === "/" ? "opacity-100" : "opacity-70 hover:opacity-100"
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
              className="shrink-0 text-xs font-normal text-white/80 transition-colors hover:text-white"
            >
              node
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/"
              className={`shrink-0 transition-opacity duration-200 ${
                location.pathname === "/" ? "opacity-100" : "opacity-70 hover:opacity-100"
              }`}
            >
              {SHOW_PRAXIS_LOGO ? (
                <img
                  src="/praxis-logo.png"
                  alt="Praxis GB"
                  className="h-10 w-auto sm:h-12 md:h-[117px]"
                />
              ) : (
                <span className="sr-only">Praxis GB</span>
              )}
            </Link>

            <Link
              to="/node"
              className={`shrink-0 transition-opacity duration-200 ${
                onNode ? "opacity-100" : "opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src="/node-lockup-horizontal-transparent-dark.png"
                alt="node by Praxis GB"
                width={1811}
                height={306}
                className="h-7 w-auto md:h-8"
              />
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
