import { Helmet } from "react-helmet-async";

const siteUrl = "https://aldaleeltravel.com";
const siteName = "Aldaleel Travel & Tourism";
const defaultImage = `${siteUrl}/seo/aldaleel-travel-og.png`;

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Aldaleel Travel & Tourism",
  alternateName: "Aldaleel Travel and Tourism KSA",
  url: siteUrl,
  logo: `${siteUrl}/aldaleel-logo-green-white.svg`,
  image: defaultImage,
  email: "info@aldaleeltravel.com",
  telephone: "+966531314557",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3401 Prince Bandar Ibn Abd Al Aziz, An Nahdah",
    addressLocality: "Riyadh",
    postalCode: "13551",
    addressCountry: "SA",
  },
  areaServed: {
    "@type": "Country",
    name: "Saudi Arabia",
  },
  description:
    "Aldaleel Travel & Tourism is a professional travel agency in Riyadh, Saudi Arabia offering flights, visa guidance, hotel bookings, Smart Umrah, tours and transport arrangements.",
  sameAs: [
    "https://wa.me/966531314557",
    "https://g.page/r/CUqiIlQhhGsrEAE/review",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Flight Booking",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Visa Guidance",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Hotel Reservations",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Smart Umrah Services",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Transportation Arrangements",
      },
    },
  ],
};

const SEO = ({
  title = "Aldaleel Travel & Tourism | Premium Travel Agency in Riyadh",
  description = "Aldaleel Travel & Tourism provides professional travel services in Riyadh, Saudi Arabia including flight bookings, visa guidance, hotel reservations, Smart Umrah, tours and transportation.",
  keywords = "Aldaleel Travel, travel agency Riyadh, travel agency Saudi Arabia, flights booking Riyadh, visa services Riyadh, hotel booking Saudi Arabia, Smart Umrah, Umrah travel agency, transport services Riyadh, Aldaleel Travel and Tourism KSA",
  path = "/",
  image = defaultImage,
  type = "website",
  schema,
  noIndex = false,
}) => {
  const canonicalUrl = `${siteUrl}${path}`;

  const finalSchema = schema || {
    "@context": "https://schema.org",
    "@graph": [
      businessSchema,
      {
        "@type": "WebSite",
        name: siteName,
        url: siteUrl,
        description:
          "Official website of Aldaleel Travel & Tourism, a travel agency in Riyadh, Saudi Arabia.",
        publisher: {
          "@type": "Organization",
          name: siteName,
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/aldaleel-logo-green-white.svg`,
          },
        },
      },
      {
        "@type": "WebPage",
        name: title,
        url: canonicalUrl,
        description,
      },
    ],
  };

  return (
    <Helmet>
      <html lang="en" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Aldaleel Travel & Tourism" />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="googlebot" content={noIndex ? "noindex, nofollow" : "index, follow"} />

      <link rel="canonical" href={canonicalUrl} />

      <meta name="theme-color" content="#08233a" />
      <meta name="msapplication-TileColor" content="#08233a" />

      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Aldaleel Travel & Tourism" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;