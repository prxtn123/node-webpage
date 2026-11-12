import { ArrowRight } from "lucide-react";
import { scrollToElement } from "@/lib/scroll";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background photo — warehouse / logistics floor */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-node.jpg"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>


      {/* Content */}
      <div className="relative z-10 max-w-[980px] mx-auto px-6 pt-20 pb-32 text-center">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/node-lockup-horizontal-transparent-dark.png"
            alt="node by Praxis GB"
            width={1811}
            height={306}
            className="mx-auto h-auto w-full max-w-[19rem] sm:max-w-[26rem] md:max-w-[30rem] lg:max-w-[34rem]"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight mb-6">
          Catch near misses on the floor,
          <br />
          not in the accident book.
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/70 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          node is a standalone, self-contained system. It uses its own cameras and its own network to flag pedestrian and MHE conflicts, missing hi-vis and walkway breaches as they happen.{" "}
          <br className="hidden md:block" />
          Processing stays on site, with no cloud required. It is not connected to your IT network or CCTV.
        </p>

        {/* CTA Links */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => scrollToElement("product")}
            className="inline-flex items-center gap-2 text-xl text-blue-400 hover:text-blue-300 transition-colors"
          >
            Learn more
            <ArrowRight className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollToElement("contact")}
            className="inline-flex items-center gap-2 text-xl text-white/80 hover:text-white transition-colors"
          >
            Request a demo
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
