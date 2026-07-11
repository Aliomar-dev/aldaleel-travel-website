import { Helmet } from "react-helmet-async";

const DEFAULT_SITE_URL = "https://aldaleeltravel.com";
const DEFAULT_IMAGE = "https://aldaleeltravel.com/og-image.jpg";

const instagramUrl =
  "https://www.instagram.com/aldaleel_travelandtourism";
const facebookUrl =
  "https://www.facebook.com/share/18x9XxeMB5/";

const defaultDescription =
  "Professional travel agency in Saudi Arabia offering air ticketing, Smart Umrah, tour packages, hotel reservations, transport services and visa facilitation in Riyadh and beyond.";

const defaultKeywords =
  "Aldaleel Travel, Aldaleel Travel and Tourism, travel agency, travel agency Saudi Arabia, travel agency Riyadh, travel services Saudi Arabia, travel services Riyadh, air ticketing, flight booking, flight booking Saudi Arabia, flight booking Riyadh, Smart Umrah, Umrah services, Umrah travel agency, Umrah packages Saudi Arabia, tour packages, international tour packages, family tour packages, hotel reservations, hotel booking Saudi Arabia, hotel booking Riyadh, transport services, airport transfer, visa facilitation, visa assistance, visa guidance, tourism agency Saudi Arabia, travel consultant Saudi Arabia, travel consultant Riyadh";

const SEO = ({
  title = "Aldaleel Travel & Tourism | Premium Travel Agency in Riyadh",
  description = defaultDescription,
  keywords = defaultKeywords,
  path = "/",
  image = DEFAULT_IMAGE,
}) => {
  const canonicalUrl = `${DEFAULT_SITE_URL}${path}`;

  const businessStructuredData = {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    "@id": `${DEFAULT_SITE_URL}/#business`,
    name: "Aldaleel Travel & Tourism",
    alternateName: [
      "Aldaleel Travel and Tourism",
      "Aldaleel Travel and Tourism KSA",
      "Aldaleel Travel",
    ],
    url: DEFAULT_SITE_URL,
    logo: `${DEFAULT_SITE_URL}/favicon.png`,
    image,
    description: defaultDescription,
    email: "info@aldaleeltravel.com",
    telephone: "+966531314557",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3401 Prince Bandar Ibn Abd Al Aziz, An Nahdah",
      addressLocality: "Riyadh",
      addressRegion: "Riyadh",
      postalCode: "13551",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "24.774265",
      longitude: "46.738586",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Riyadh",
      },
      {
        "@type": "Country",
        name: "Saudi Arabia",
      },
      {
        "@type": "Place",
        name: "Kingdom of Saudi Arabia",
      },
    ],
    sameAs: [facebookUrl, instagramUrl],
    knowsAbout: [
      "Air Ticketing",
      "Flight Booking",
      "Smart Umrah",
      "Umrah Travel",
      "Tour Packages",
      "Hotel Reservations",
      "Transport Services",
      "Airport Transfers",
      "Visa Facilitation",
      "Visa Guidance",
      "Travel Planning",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Air Ticketing",
          description:
            "Domestic and international flight booking support with smooth travel guidance.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Smart Umrah",
          description:
            "Umrah travel support including flights, hotels and transport arrangements.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tour Packages",
          description:
            "Customized local and international tour planning for families, groups and business travelers.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hotel Reservations",
          description:
            "Hotel booking support according to destination, budget and travel needs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transport Services",
          description:
            "Transport arrangements for airport transfers, city travel and trip convenience.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Visa Facilitation",
          description:
            "Visa assistance with documentation guidance and application support.",
        },
      },
    ],
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${DEFAULT_SITE_URL}/#website`,
    name: "Aldaleel Travel & Tourism",
    url: DEFAULT_SITE_URL,
    description: defaultDescription,
    publisher: {
      "@id": `${DEFAULT_SITE_URL}/#business`,
    },
    sameAs: [facebookUrl, instagramUrl],
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Aldaleel Travel & Tourism provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aldaleel Travel & Tourism provides air ticketing, Smart Umrah, tour packages, hotel reservations, transport services and visa facilitation.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Aldaleel Travel & Tourism located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aldaleel Travel & Tourism is located at 3401 Prince Bandar Ibn Abd Al Aziz, An Nahdah, Riyadh 13551, Saudi Arabia.",
        },
      },
      {
        "@type": "Question",
        name: "Does Aldaleel Travel & Tourism offer Umrah travel support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Aldaleel Travel & Tourism offers Smart Umrah travel support including flights, hotels and transport arrangements.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Aldaleel Travel & Tourism?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact Aldaleel Travel & Tourism by email at info@aldaleeltravel.com or by phone at +966-53 1314557.",
        },
      },
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Aldaleel Travel & Tourism" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="theme-color" content="#27a94f" />

      <link rel="canonical" href={canonicalUrl} />

      {/* GEO SEO */}
      <meta name="geo.region" content="SA-01" />
      <meta name="geo.placename" content="Riyadh, Saudi Arabia" />
      <meta name="geo.position" content="24.774265;46.738586" />
      <meta name="ICBM" content="24.774265, 46.738586" />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Aldaleel Travel & Tourism" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />

      {/* Social Profiles */}
      <meta property="article:publisher" content={facebookUrl} />
      <meta property="og:see_also" content={facebookUrl} />
      <meta property="og:see_also" content={instagramUrl} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Business / AEO / GEO Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(businessStructuredData)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(websiteStructuredData)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;