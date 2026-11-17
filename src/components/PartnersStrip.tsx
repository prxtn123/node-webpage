const partners = [
  {
    name: "Greater Manchester Growth Hub",
    href: "https://www.businessgrowthhub.com/",
    src: "/partners/greater-manchester-growth-hub.svg",
    width: 176,
    height: 75,
  },
  {
    name: "University of Manchester",
    href: "https://www.manchester.ac.uk/",
    src: "/partners/university-of-manchester.png",
    width: 206,
    height: 86,
  },
] as const;

export const PartnersStrip = () => {
  return (
    <div className="border-t border-black/10">
      <div className="max-w-[980px] mx-auto px-6 py-6 flex flex-col items-center gap-3">
        <p className="text-xs font-medium text-muted-foreground">In partnership with</p>
        <ul className="flex flex-col items-center gap-5 sm:flex-row sm:gap-12">
          {partners.map((partner) => (
            <li key={partner.name}>
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground/40"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className="h-12 w-auto"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PartnersStrip;
