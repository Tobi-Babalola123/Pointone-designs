import React from "react";

const services = [
  {
    title: "Brand Identity & Logo Design",
    price: "From ₦25,000",
    bullets: [
      "3–5 logo concepts",
      "Colour palette",
      "Typography guide",
      "Brand mockups",
    ],
  },
  {
    title: "Flyer, Poster & Social Media Design",
    price: "From ₦10,000",
    bullets: ["Event flyers", "Social media graphics", "Print-ready files"],
  },
  {
    title: "Newsletter & Document Layout",
    price: "From ₦20,000",
    bullets: [
      "PDF newsletters",
      "Presentation-ready layouts",
      "Print & digital",
    ],
  },
  {
    title: "Website Design & Development",
    price: "Landing From ₦70,000 • Full From ₦150,000",
    bullets: ["Responsive design", "SEO-ready", "CMS or static site options"],
  },
  {
    title: "Advanced Web Apps (UI/UX + Frontend + Backend)",
    price: "From ₦400,000",
    bullets: ["Custom dashboards", "API integration", "Admin panels"],
  },
  {
    title: "Motion Graphics & Video Ads",
    price: "From ₦15,000",
    bullets: ["Short promos", "Social ads", "Text animations"],
  },
];

const PricingSection = () => {
  return (
    <section id="services" className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
            Services & Starting Rates
          </h2>
          <p className="mt-2 md:mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Clear starting prices to help you decide fast. Custom quotes
            available.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {services.map((s, idx) => (
            <article
              key={idx}
              className="bg-card border border-border rounded-2xl p-4 sm:p-5 lg:p-6 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-card-foreground leading-tight">
                  {s.title}
                </h3>
                <span className="text-sm sm:text-base lg:text-lg font-bold text-purple-600 break-words">
                  {s.price}
                </span>
              </div>

              <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-muted-foreground text-xs sm:text-sm">
                {s.bullets.map((b, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 mr-2 flex-shrink-0 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <span className="text-xs text-muted-foreground">
                  70% upfront • 2 free revisions
                </span>
                <a
                  href="#contact"
                  className="inline-block text-center rounded-lg px-4 py-2.5 text-xs sm:text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                >
                  Get a quote
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 md:mt-10 text-center text-xs sm:text-sm text-muted-foreground px-4">
          <p className="leading-relaxed">
            <strong className="text-foreground">Note:</strong> Prices shown are{" "}
            <em>starting rates</em>. Final quotes depend on project scope,
            complexity and delivery time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
