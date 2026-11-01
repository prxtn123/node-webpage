import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { scrollToElement } from "@/lib/scroll";

const footerLinks = {
  product: [
    { name: "Features", target: "features" },
    { name: "Safety", target: "compliance" },
    { name: "Analytics", target: "industrial-future" },
  ],
  company: [
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ],
  legal: [
    { name: "Privacy", path: "/privacy" },
    { name: "Terms", path: "/terms" },
    { name: "GDPR", path: "/gdpr" },
  ],
};

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (target: string) => {
    // Scroll targets live on /node
    if (location.pathname !== "/node") {
      navigate("/node");
      setTimeout(() => {
        scrollToElement(target);
      }, 100);
    } else {
      scrollToElement(target);
    }
  };

  return (
    <footer id="contact" className="bg-[#f5f5f7]">
      {/* CTA Section */}
      <div className="max-w-[980px] mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
            See node
            <br />
            on your site.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We can show you a live system and discuss a pilot on one area of your warehouse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@praxisgb.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-black/80 transition-colors"
            >
              Request Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => handleNavClick("features")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-foreground rounded-full font-medium hover:bg-gray-100 transition-colors border border-black/10"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-black/10">
        <div className="max-w-[980px] mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Brand & Contact */}
            <div className="col-span-2">
              <span className="font-semibold text-lg text-foreground">node</span>
              <p className="text-sm text-muted-foreground mt-3 mb-6 max-w-xs">
                Computer vision for warehouse and logistics safety, processed on site.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="mailto:hello@praxisgb.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4" />
                  hello@praxisgb.com
                </a>
                <a href="tel:+447542315784" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4" />
                  +44 7542 315784
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Manchester, England
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-medium text-foreground text-sm mb-4">Product</h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <button onClick={() => handleNavClick(link.target)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-foreground text-sm mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    {link.path ? (
                      <Link to={link.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.name}
                      </Link>
                    ) : (
                      <button onClick={() => handleNavClick(link.target ?? "home")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-foreground text-sm mb-4">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/10">
          <div className="max-w-[980px] mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-muted-foreground">
              © 2026 Praxis GB Ltd. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              A <span className="text-foreground font-medium">Praxis GB</span> product
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
