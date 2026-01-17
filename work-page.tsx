"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import FooterSection from "./footer-section";
import MobileMenu from "./mobile-menu";
import MouseFollower from "./mouse-follower";
import GraphicDesignModal from "./components/graphic-design-modal";

const categories = ["All", "websites", "landing page"];

const categoryLabels = {
  All: "All",
  website: "website",
  // Landing Page: "landing page",
};

export default function WorkPage() {
  const projects = [
    {
      title: "Solar Panel Estimator",
      year: "2024",
      category: "websites",
      imageUrl: "/solaris-surge.png",
      link: "https://www.solarissurge.net/",
      description:
        "Interactive web application that helps users calculate solar panel requirements and potential energy savings for their homes.",
    },
    {
      title: "Flowpay Fintech Landing Page",
      year: "2026",
      category: "landing page",
      imageUrl: "/flowpay.png",
      link: "https://flowpay-fintech.netlify.app/",
      description:
        "A sleek and modern landing page template designed in 2025, featuring a clean layout, smooth interactions, and a strong visual hierarchy.",
    },
    {
      title: "Nexus Consulting Landing Page",
      year: "2026",
      category: "landing page",
      imageUrl: "/nexus.png",
      link: "https://nexus-consulting-landingpage.netlify.app/",
      description:
        "A clean, conversion-focused corporate consulting landing page designed to communicate expertise, credibility, and strategic value.",
    },
    {
      title: "Landing Page",
      year: "2025",
      category: "landing page",
      imageUrl: "/landing page.png",
      link: "https://landing-page-templates.netlify.app/",
      description:
        "A sleek and modern landing page template designed in 2025, featuring a clean layout, smooth interactions, and a strong visual hierarchy.",
    },
    {
      title: "Medicore Landing Page",
      year: "2026",
      category: "landing page",
      imageUrl: "/medicore.png",
      link: "https://medicore-landing-page.netlify.app/",
      description:
        "A clean, conversion-focused medical landing page designed to communicate healthcare services with clarity, trust, and professionalism.",
    },
    {
      title: "SaaS Dashboard Pro",
      year: "2025",
      category: "websites",
      imageUrl: "/dashboard pro.png",
      link: "https://ai-dashboard-template.vercel.app/",
      description:
        "A professional SaaS dashboard interface built in 2025, featuring a clean and intuitive layout designed for modern web applications.",
    },
    {
      title: "Legaledge landing page",
      year: "2026",
      category: "landing page",
      imageUrl: "/legaledge.png",
      link: "https://legaledge-landingpage.netlify.app/",
      description:
        "A clean, conversion-focused legal services landing page designed to communicate trust, expertise, and professional credibility.",
    },

    {
      title: "Health Monitoring Dashboard",
      year: "2024",
      category: "websites",
      imageUrl: "/healthsphere.png",
      link: "https://health-monitoring-app2.netlify.app/",
      description:
        "Comprehensive health tracking platform featuring real-time vital signs monitoring and personalized health insights.",
    },
    {
      title: "TravelSphere Booking App",
      year: "2024",
      category: "websites",
      imageUrl: "/Travelsphere.jpg",
      link: "https://bus-booking-system1.netlify.app/",
      description:
        "Modern bus booking system with route planning, seat selection, and secure payment integration for seamless travel experiences.",
    },
    {
      title: "Trentrove E-commerce Website",
      year: "2024",
      category: "websites",
      imageUrl: "/trendtrovy.png",
      link: "https://trendtrovei.netlify.app/",
      description:
        "Full-featured online shopping platform with product catalog, cart functionality, and smooth checkout experience.",
    },
    {
      title: "Emergency Toolkit Website",
      year: "2025",
      category: "websites",
      imageUrl: "/crisisaid.png",
      link: "https://emergency-toolkit.netlify.app/",
      description:
        "Essential resource hub providing emergency preparedness guides, tools, and critical information for crisis situations.",
    },
    {
      title: "Real Estate Landing Page",
      year: "2026",
      category: "landing page",
      imageUrl: "/Haven real estate.png",
      link: "https://haven-real-estate-landing-page.netlify.app/",
      description:
        "A clean, conversion-focused real estate landing page designed to showcase property investment offerings with clarity, trust, and visual hierarchy. Built with a minimal, corporate layout optimized for lead generation",
    },
    // {
    //   title: "Saas Landing Page",
    //   year: "2026",
    //   category: "landing page",
    //   imageUrl: "/nova.png",
    //   link: "https://saas-landingpage1.netlify.app/",
    //   description:
    //     "A clean, conversion-focused SaaS landing page designed to clearly communicate product value, guide user engagement, and support lead generation through a structured, minimal layout",
    // },
    {
      title: "Saas Tech Landing Page",
      year: "2026",
      category: "landing page",
      imageUrl: "/nexasite.png",
      link: "https://saas-tech-landingpage.netlify.app/",
      description:
        "A clean, conversion-focused SaaS tech landing page designed to communicate product capabilities, support user onboarding, and drive engagement through a structured, performance-focused layout",
    },
    {
      title: "HR Software Landing Page",
      year: "2026",
      category: "landing page",
      imageUrl: "/HR.png",
      link: "https://hr-software-landing-page.netlify.app/",
      description:
        "A clean, conversion-focused HR software landing page designed to communicate product value, streamline information flow, and support user onboarding through a structured, professional layout.",
    },
    {
      title: "HR Software Landing Page",
      year: "2026",
      category: "landing page",
      imageUrl: "/workflow.png",
      link: "https://workflowhr-landingpage.netlify.app/",
      description:
        "A clean, conversion-focused HR software landing page designed to communicate product value, streamline information flow, and support user onboarding through a structured, professional layout.",
    },
    {
      title: "Saas AI Powered Landing Page",
      year: "2026",
      category: "landing page",
      imageUrl: "/productflow.png",
      link: "https://productflow-landing-page.netlify.app/",
      description:
        "A modern product landing page designed to highlight AI-powered roadmapping, customer insights, and collaborative workflows through a clean, conversion-focused layout.",
    },
    {
      title: "Saas HR Landing Page",
      year: "2026",
      category: "landing page",
      imageUrl: "/talentio.png",
      link: "https://talentio-hr.netlify.app/",
      description:
        "A clean, conversion-focused HR landing page designed to communicate workforce solutions with clarity, trust, and usability.",
    },
    // {
    //   title: "PointOne Crypto Wallet design",
    //   year: "2024",
    //   category: "ui",
    //   imageUrl: "/productdesign.webp",
    //   link: "https://dribbble.com/shots/25655700-Product-Design-crypto-wallet-design",
    //   description:
    //     "Sleek and intuitive cryptocurrency wallet interface design focused on security and user-friendly transaction management.",
    // },
    // {
    //   title: "WhatsApp Skincare Business Template Kit",
    //   year: "2024",
    //   category: "branding",
    //   imageUrl: "/skincare.png",
    //   link: "",
    //   description:
    //     "A mobile-first WhatsApp business template kit designed for African skincare and beauty entrepreneurs. The kit includes a product menu, catalogue layout, promotional sale flyer, and a mini brand kit to help small businesses present their products professionally, build brand consistency, and drive sales using platforms they already rely on.",
    // },
    // {
    //   title: "WhatsApp Skincare Business Template Kit",
    //   year: "2024",
    //   category: "branding",
    //   imageUrl: "/skicare2.png",
    //   link: "",
    //   description:
    //     "A mobile-first WhatsApp business template kit designed for African skincare and beauty entrepreneurs. The kit includes a product menu, catalogue layout, promotional sale flyer, and a mini brand kit to help small businesses present their products professionally, build brand consistency, and drive sales using platforms they already rely on.",
    // },
    // {
    //   title: "WhatsApp Skincare Business Template Kit",
    //   year: "2024",
    //   category: "branding",
    //   imageUrl: "/skincare3.png",
    //   link: "",
    //   description:
    //     "A mobile-first WhatsApp business template kit designed for African skincare and beauty entrepreneurs. The kit includes a product menu, catalogue layout, promotional sale flyer, and a mini brand kit to help small businesses present their products professionally, build brand consistency, and drive sales using platforms they already rely on.",
    // },

    // {
    //   title: "Bite Base – Food Truck Logo Design Mockups",
    //   year: "2025",
    //   category: "graphic design",
    //   imageUrl: "/biebase.webp",
    //   link: "https://dribbble.com/shots/26269024-Bite-Base-Food-Truck-Logo-Design-Mockups",
    //   description:
    //     "Bold, appetizing branding for a modern food truck featuring vibrant colors and versatile logo applications.",
    // },
    // {
    //   title: "Charcoal Hardwood Branding",
    //   year: "2024",
    //   category: "graphic design",
    //   imageUrl: "/hardwoodcharcoal.webp",
    //   link: "https://dribbble.com/shots/25728199-Charcoal-Packaging-and-mockup-professional-export-box",
    //   description:
    //     "Premium packaging design for hardwood charcoal products with rustic aesthetics and professional export-ready mockups.",
    // },
    // {
    //   title: "FD Foodstore Branding",
    //   year: "2024",
    //   category: "graphic design",
    //   imageUrl: "/FDfoodstore.webp",
    //   link: "https://dribbble.com/shots/25640394-Branding-Logo-Design-for-FD-Foodstore",
    //   description:
    //     "Complete brand identity for a local food store featuring fresh, welcoming design elements and cohesive visual language.",
    // },
    // {
    //   title: "Jabeam Autos Logo Design",
    //   year: "2025",
    //   category: "graphic design",
    //   imageUrl: "/jabeam signpost.png",
    //   link: "https://dribbble.com/shots/26488669-Jabeam-Autos-Automobile-Brand-Logo-Design",
    //   description:
    //     "Professional automotive brand logo with strong, dynamic lines conveying speed, reliability, and modern engineering excellence.",
    // },

    // {
    //   title: "Blue Obsession – Dive Travel Logo Mockup",
    //   year: "2025",
    //   category: "graphic design",
    //   imageUrl: "/blue.webp",
    //   link: "https://dribbble.com/shots/26257399-Blue-Obsession-Dive-Travel-Logo-Mockup",
    //   description:
    //     "Ocean-inspired branding for a dive travel company with fluid design elements evoking underwater adventure and exploration.",
    // },

    // {
    //   title: "Music Cover",
    //   year: "2025",
    //   category: "graphic design",
    //   imageUrl: "/musiccover.jpeg",
    //   link: "https://www.behance.net/gallery/205917009/Album-art",
    //   description:
    //     "Striking album artwork combining bold typography and artistic visuals to capture the essence of the music.",
    // },
    // {
    //   title: "Scent Elixir – Luxury Perfume Brand Flyer Design",
    //   year: "2025",
    //   category: "graphic design",
    //   imageUrl: "/scentelixirr.png",
    //   link: "https://dribbble.com/shots/26397584-Scent-Elixir-Luxury-Perfume-Brand-Flyer-Design",
    //   description:
    //     "Elegant promotional flyer for a premium fragrance line featuring sophisticated layouts and luxurious color palette.",
    // },
    // {
    //   title: "Christian Ebook Formatting & Publishing",
    //   year: "2025",
    //   category: "graphic design",
    //   imageUrl: "/ebook.jpeg",
    //   link: "https://dribbble.com/shots/26102133-Christian-eBook-Design-Purposeful-Living-Divine-Calling",
    //   description:
    //     "Professional ebook design and formatting for Christian literature with clean layouts optimized for digital reading.",
    // },
    // {
    //   title: "Christian Ebook Cover Design",
    //   year: "2025",
    //   category: "graphic design",
    //   imageUrl: "/deepthingsofgod.jpeg",
    //   link: "https://dribbble.com/shots/25848651-E-Book-Cover-design-The-Deep-things-of-God",
    //   description:
    //     "Inspirational cover design for spiritual content featuring meaningful imagery and thoughtful typography.",
    // },
    // {
    //   title: "Kings Night – Premium Club Event Flyer Design",
    //   year: "2025",
    //   category: "graphic design",
    //   imageUrl: "/kingsnight.png",
    //   link: "https://dribbble.com/shots/26397965-Kings-Night-Premium-Club-Event-Flyer-Design",
    //   description:
    //     "High-energy nightclub event flyer with luxurious gold accents and bold design commanding attention.",
    // },
    // {
    //   title: "Real Estate Video Ad",
    //   year: "2025",
    //   category: "video",
    //   imageUrl: "/videos/realestate.mp4",
    //   isVideo: true,
    //   link: "https://dribbble.com/shots/25849166-Greater-Construction-Video-ad",
    //   description:
    //     "Dynamic promotional video showcasing construction services with professional motion graphics and compelling narrative.",
    // },

    // {
    //   title: "Raw Foodstrore Branding",
    //   year: "2025",
    //   category: "graphic design",
    //   imageUrl: "/33.jpeg",
    //   link: "https://dribbble.com/shots/25640394-Branding-Logo-Design-for-FD-Foodstore",
    //   description:
    //     "Organic, natural branding for a raw food store emphasizing health, freshness, and sustainable eating habits.",
    // },
    // {
    //   title: "33 Hours Prayer Culture & 5th Year Anniversary Flyer - (THEM)",
    //   year: "2025",
    //   category: "graphic design",
    //   imageUrl: "/theoil.png",
    //   link: "https://dribbble.com/shots/26397238-33-Hours-Prayer-Culture-5th-Year-Anniversary-Flyer-THEM",
    //   description:
    //     "Commemorative event flyer celebrating a spiritual milestone with powerful imagery and meaningful symbolism.",
    // },
    // {
    //   title: "Professional eBook Design: The Basics of an Exit Strategy",
    //   year: "2025",
    //   category: "graphic design",
    //   imageUrl: "/mockups.png",
    //   link: "https://dribbble.com/shots/26159172-Professional-eBook-Design-The-Basics-of-an-Exit-Strategy",
    //   description:
    //     "Business-focused ebook design with clean layouts and professional formatting for strategic planning content.",
    // },
    // {
    //   title: "Logo Design Exploration | Clean Vector Marks",
    //   year: "2025",
    //   category: "graphic design",
    //   imageUrl: "/logoxx.webp",
    //   link: "https://dribbble.com/shots/26370914-Logo-Design-Exploration-Clean-Vector-Marks",
    //   description:
    //     "Collection of minimal, versatile logo concepts with strong geometry and timeless design principles.",
    // },

    // {
    //   title: "Desert Sage Retreat – Glamping Adventure Logo",
    //   year: "2025",
    //   category: "graphic design",
    //   imageUrl: "/desert.webp",
    //   link: "https://dribbble.com/shots/26263561-Desert-Sage-Retreat-Glamping-Adventure-Logo",
    //   description:
    //     "Nature-inspired branding for a luxury camping experience combining outdoor adventure with comfort and style.",
    // },
    // {
    //   title: "Organic Skincare poster",
    //   year: "2025",
    //   category: "graphic design",
    //   imageUrl: "/skincare.jpeg",
    //   link: "https://dribbble.com/shots/25848733-Skincare-Organics-Flyer-Krina-Organics-Skincare",
    //   description:
    //     "Clean, natural promotional design for organic skincare products highlighting purity and wellness benefits.",
    // },
    // {
    //   title: "Prayer & Fasting Programme Social media Post",
    //   year: "2025",
    //   category: "graphic design",
    //   imageUrl: "/prayer.png",
    //   link: "https://www.behance.net/gallery/216059131/Creative-Flyer-for-Prayer-and-Fasting-Program-2025",
    //   description:
    //     "Spiritual event graphic designed to inspire participation and reflection through thoughtful visual messaging.",
    // },

    // {
    //   title: "Happy Birthday Social Media Post",
    //   year: "2025",
    //   category: "graphic design",
    //   imageUrl: "/birthday.jpeg",
    //   link: "https://dribbble.com/shots/25648603-Birthday-design-mockups",
    //   description:
    //     "Joyful, celebratory birthday design with vibrant colors and festive elements perfect for social sharing.",
    // },
    // {
    //   title: "Night Club Events Poster",
    //   year: "2025",
    //   category: "graphic design",
    //   imageUrl: "/clubflame.webp",
    //   link: "https://dribbble.com/shots/25046847-Electric-Nights-Club-Vibes",
    //   description:
    //     "Electric promotional poster for nightclub events with neon aesthetics and high-energy visual impact.",
    // },
    // {
    //   title: "Crypto Wallet Logo Design",
    //   year: "2025",
    //   category: "graphic design",
    //   imageUrl: "/pointone.jpg",
    //   link: "https://dribbble.com/shots/25655684-Logo-Design-crypto-wallet-product-design",
    //   description:
    //     "Modern, secure logo for cryptocurrency wallet app emphasizing trust, technology, and digital innovation.",
    // },
    // {
    //   title: "Gospel Campaign Banner Design",
    //   year: "2025",
    //   category: "graphic design",
    //   imageUrl: "/fire.jpeg",
    //   link: "https://dribbble.com/shots/25928478-Ignite-the-Fire-Gospel-Campaign-The-Hill-Evangelical-Ministry",
    //   description:
    //     "Powerful campaign banner with fiery imagery designed to inspire spiritual renewal and community engagement.",
    // },
    // {
    //   title: "Fasting & Prayer Poster Design",
    //   year: "2025",
    //   category: "graphic design",
    //   imageUrl: "/rrrr.jpeg",
    //   link: "https://dribbble.com/shots/25848746-Fasting-Prayers-Flier-design-Thehillevangelicalministry",
    //   description:
    //     "Serene and inviting design for spiritual retreat event emphasizing peace, reflection, and devotion.",
    // },
    // {
    //   title: "Night Club Events Poster",
    //   year: "2025",
    //   category: "graphic design",
    //   imageUrl: "/flame.jpeg",
    //   link: "https://dribbble.com/shots/25046865-Pulse-Party-Where-Music-Meets-Fun",
    //   description:
    //     "Vibrant party flyer with bold typography and energetic design perfect for promoting nightlife events.",
    // },
    // {
    //   title: "Health Supplement Video Ad",
    //   year: "2025",
    //   category: "video",
    //   imageUrl: "/videos/pileridvideo.mp4",
    //   isVideo: true,
    //   link: "https://dribbble.com/shots/25497685-Advertising-Video-for-Natural-Pile-Relief-Product",
    //   description:
    //     "Professional product video highlighting natural health benefits with clear messaging and engaging visuals.",
    // },

    // {
    //   title: "A Tribute to Heritage & Culture",
    //   year: "2024",
    //   category: "graphic design",
    //   imageUrl: "/nigeria.jpeg",
    //   link: "https://dribbble.com/shots/25634163-Celebrating-Nigeria-Visual-tribute-to-heritage-and-culture",
    //   description:
    //     "Vibrant cultural celebration design showcasing Nigerian heritage through colors, patterns, and traditional symbolism.",
    // },
    // {
    //   title: "Fresh eggs Label Design",
    //   year: "2024",
    //   category: "graphic design",
    //   imageUrl: "/histokem.webp",
    //   link: "https://dribbble.com/shots/25634173-Branding-Sticker-Design",
    //   description:
    //     "Farm-fresh product label design emphasizing quality, natural sourcing, and brand authenticity.",
    // },
    // {
    //   title: "Hospitality Industry Video Ad",
    //   year: "2024",
    //   category: "video",
    //   imageUrl: "/videos/mipconsultant.mp4",
    //   isVideo: true,
    //   link: "https://dribbble.com/shots/25640422-Motion-Design-for-hospitality-industry",
    //   description:
    //     "Professional service video showcasing hospitality consulting expertise with sophisticated motion design.",
    // },
    // {
    //   title: "Real Estate Video Ad",
    //   year: "2024",
    //   category: "video",
    //   imageUrl: "/videos/planetspace.mp4",
    //   isVideo: true,
    //   link: "https://dribbble.com/shots/25047169-Discover-Your-Dream-Home-Real-Estate-Showcase",
    //   description:
    //     "Captivating property showcase video featuring stunning visuals and compelling storytelling to attract buyers.",
    // },
    // {
    //   title: "Bottle Water Label design",
    //   year: "2024",
    //   category: "graphic design",
    //   imageUrl: "/kingbirthday.webp",
    //   link: "https://dribbble.com/shots/25046947-Noble-Wishes-A-Royal-Birthday-Card",
    //   description:
    //     "Premium bottled water label with clean, refreshing design emphasizing purity and quality.",
    // },
    // {
    //   title: "Real Estate Video Ad",
    //   year: "2024",
    //   category: "video",
    //   imageUrl: "/videos/cornerstone.mp4",
    //   isVideo: true,
    //   link: "https://dribbble.com/shots/25790090-Cornerstone-Building-Construction-Company-Video-Presentation",
    //   description:
    //     "Corporate video presentation highlighting construction expertise with professional production and clear messaging.",
    // },
    // {
    //   title: "Church Graphics",
    //   year: "2024",
    //   category: "graphic design",
    //   imageUrl: "/THEM..webp",
    //   link: "https://dribbble.com/shots/25046947-Noble-Wishes-A-Royal-Birthday-Card",
    //   description:
    //     "Faith-based graphics for church events and communications with uplifting design and meaningful imagery.",
    // },
    // {
    //   title: "Real Estate Video Ad",
    //   year: "2024",
    //   category: "video",
    //   imageUrl: "/videos/CAPconstruction.mp4",
    //   isVideo: true,
    //   link: "https://dribbble.com/shots/25848894-CAP-Construction-Video-Ad",
    //   description:
    //     "Construction company promotional video demonstrating capabilities and completed projects with cinematic quality.",
    // },
    // {
    //   title: "SPA Video Ad",
    //   year: "2024",
    //   category: "video",
    //   imageUrl: "/videos/DDAspa.mp4",
    //   isVideo: true,
    //   link: "https://dribbble.com/shots/25849130-DDA-SPA-video-ad",
    //   description:
    //     "Relaxing spa promotional video with serene visuals and calming aesthetics to attract wellness clients.",
    // },
    // {
    //   title: "Scent Elixir Poster Design",
    //   year: "2024",
    //   category: "graphic design",
    //   imageUrl: "/scent.webp",
    //   link: "https://dribbble.com/shots/25046774-T",
    //   description:
    //     "Luxurious perfume promotion featuring elegant typography and sophisticated color schemes.",
    // },
    // {
    //   title: "Bakery Label design",
    //   year: "2024",
    //   category: "graphic design",
    //   imageUrl: "/bakery.webp",
    //   link: "https://dribbble.com/shots/25046991-Artisan-Loaves-Crafted-with-Love",
    //   description:
    //     "Warm, artisanal bakery branding with handcrafted feel emphasizing quality ingredients and traditional methods.",
    // },
    // {
    //   title: "Shredded Beef Label design",
    //   year: "2024",
    //   category: "graphic design",
    //   imageUrl: "/shreddedbeef.webp",
    //   link: "https://dribbble.com/shots/25697673-Premium-Shredded-Beef-Packaging-Design-Ransomed2foods",
    //   description:
    //     "Premium meat product packaging with bold, appetizing visuals and clear brand identity.",
    // },
    // {
    //   title: "CAP Building Construction Company Logo Design",
    //   year: "2024",
    //   category: "graphic design",
    //   imageUrl: "/cap.jpeg",
    //   link: "https://dribbble.com/shots/25848729-CAP-Construction-Logo-Design",
    //   description:
    //     "Strong, reliable construction company logo conveying stability, professionalism, and building expertise.",
    // },
    // {
    //   title: "Handbills Design",
    //   year: "2024",
    //   category: "graphic design",
    //   imageUrl: "/handbills.png",
    //   link: "https://dribbble.com/shots/25926724-Gospel-Campaign-Flyer-design-The-Hill-Evangelical-Ministry",
    //   description:
    //     "Evangelistic outreach materials with compelling design to engage and invite community participation.",
    // },
    // {
    //   title: "Marksmen Construction Company Logo",
    //   year: "2024",
    //   category: "graphic design",
    //   imageUrl: "/1.png",
    //   link: "https://dribbble.com/shots/25848675-Marks-Men-Construction-Logo-design",
    //   description:
    //     "Professional construction brand identity with precise, geometric design elements reflecting accuracy and craftsmanship.",
    // },
    // {
    //   title: "Corporate Investment Errands Logo",
    //   year: "2024",
    //   category: "graphic design",
    //   imageUrl: "/dirt.jpg",
    //   link: "https://dribbble.com/shots/25848708-Logo-Design-Corporate-Investment-Errands",
    //   description:
    //     "Corporate logo design for investment services with trustworthy, professional aesthetic and modern sensibility.",
    // },
    // {
    //   title: "Gospel Campaign Poster Design",
    //   year: "2024",
    //   category: "graphic design",
    //   imageUrl: "/gospel.jpeg",
    //   link: "https://dribbble.com/shots/25926705-Gospel-Campaign-Flyer-The-Hill-Evangelical-Ministry",
    //   description:
    //     "Inspirational campaign graphics with uplifting imagery designed to motivate and encourage spiritual growth.",
    // },
    // {
    //   title: "FD Foodstore Logo",
    //   year: "2024",
    //   category: "graphic design",
    //   imageUrl: "/fd.jpg",
    //   link: "https://www.behance.net/gallery/219117103/Branding-(Logo-design)-for-FD-Foodstore",
    //   description:
    //     "Fresh, approachable food retail branding with welcoming design that appeals to everyday shoppers.",
    // },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedGraphicDesign, setSelectedGraphicDesign] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isGraphicDesignModalOpen, setIsGraphicDesignModalOpen] =
    useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category.toLowerCase() === activeCategory.toLowerCase(),
        );

  const handleGraphicDesignClick = (project: (typeof projects)[0]) => {
    if (project.category === "graphic design") {
      setSelectedGraphicDesign(project);
      setIsGraphicDesignModalOpen(true);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-32 right-8 lg:right-16 w-8 h-8 lg:w-12 lg:h-12 bg-cyan-400 rounded-full opacity-60" />
        </div>

        {/* Header */}
        <header className="relative z-10 flex justify-between items-center p-4 lg:p-8">
          <Link href="/">
            <div className="text-purple-600 text-xl lg:text-2xl font-bold font-poppins hover:scale-110 transition-transform duration-300 cursor-pointer">
              Tobi Babalola
            </div>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-purple-600 p-2 hover-target"
          >
            <Menu size={20} className="lg:w-6 lg:h-6" />
          </button>
        </header>

        {/* Main content */}
        <main className="relative z-10 container mx-auto px-4 lg:px-8 pt-4 lg:pt-8">
          <div className="max-w-7xl mx-auto">
            {/* Page header */}
            <div className="mb-8 lg:mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-gray-800 mb-6 lg:mb-8 text-center lg:text-left">
                Featured Projects
              </h1>

              {/* Filter tabs - responsive */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full text-xs lg:text-sm font-medium font-montserrat transition-all duration-300 hover-target ${
                      activeCategory === category
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects grid - responsive */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  onClick={() => handleGraphicDesignClick(project)}
                  className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group hover-target ${
                    project.category === "graphic design"
                      ? "cursor-pointer"
                      : ""
                  }`}
                >
                  {project.category !== "graphic design" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="relative h-48 lg:h-64 bg-gradient-to-br from-purple-100 to-purple-200 overflow-hidden">
                        {project.isVideo ? (
                          <video
                            src={project.imageUrl}
                            controls
                            className="w-full h-full object-cover"
                            preload="metadata"
                          />
                        ) : (
                          <img
                            src={project.imageUrl || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        )}
                      </div>
                      <div className="p-4 lg:p-6">
                        <h3 className="text-lg lg:text-xl font-semibold font-poppins text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-500 text-xs lg:text-sm font-montserrat mb-3 lg:mb-4 uppercase tracking-wide">
                          {project.year} &nbsp;|&nbsp;{" "}
                          {project.category.toUpperCase()}
                        </p>
                        <p className="text-gray-600 text-sm font-montserrat leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <>
                      <div className="relative h-48 lg:h-64 bg-gradient-to-br from-purple-100 to-purple-200 overflow-hidden">
                        <img
                          src={project.imageUrl || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="text-center">
                            <p className="text-white font-semibold">
                              View Full Size
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 lg:p-6">
                        <h3 className="text-lg lg:text-xl font-semibold font-poppins text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-500 text-xs lg:text-sm font-montserrat mb-3 lg:mb-4 uppercase tracking-wide">
                          {project.year} &nbsp;|&nbsp;{" "}
                          {project.category.toUpperCase()}
                        </p>
                        <p className="text-gray-600 text-sm font-montserrat leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <FooterSection />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <MouseFollower />
      <GraphicDesignModal
        isOpen={isGraphicDesignModalOpen}
        onClose={() => setIsGraphicDesignModalOpen(false)}
        project={selectedGraphicDesign}
      />
    </>
  );
}
