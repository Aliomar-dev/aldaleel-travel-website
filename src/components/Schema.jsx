import { Helmet } from "react-helmet-async";

const SITE_URL = "https://aldaleeltravel.com";

const DEFAULT_IMAGE =
  "https://aldaleeltravel.com/seo/aldaleel-travel-og.png";

const FACEBOOK_URL =
  "https://www.facebook.com/share/18x9XxeMB5/";

const INSTAGRAM_URL =
  "https://www.instagram.com/aldaleel_travelandtourism";

const BUSINESS_NAME = "Aldaleel Travel & Tourism";

const DEFAULT_DESCRIPTION =
  "Aldaleel Travel & Tourism is a professional travel agency in Riyadh, Saudi Arabia, offering flight bookings, Smart Umrah, Hajj travel support, tour packages, hotel reservations, transportation, airport transfers and visa facilitation.";

const normalizePath = (path = "/") => {
  if (!path || path === "/") {
    return "/";
  }

  const cleanPath = path.split("?")[0].split("#")[0];

  return `/${cleanPath.replace(/^\/+|\/+$/g, "")}`;
};

const createAbsoluteUrl = (value, fallback = SITE_URL) => {
  if (!value) {
    return fallback;
  }

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  const normalizedValue = value.startsWith("/") ? value : `/${value}`;

  return `${SITE_URL}${normalizedValue}`;
};

const defaultServices = [
  {
    name: "Air Ticketing",
    description:
      "Domestic and international flight booking support with professional travel guidance.",
  },
  {
    name: "Smart Umrah",
    description:
      "Smart Umrah travel support including flights, hotel reservations, transportation and journey planning.",
  },
  {
    name: "Hajj Travel Support",
    description:
      "Hajj travel support including flight arrangements, accommodation guidance, transportation and travel planning.",
  },
  {
    name: "International Tour Packages",
    description:
      "Customized international tour packages for families, groups, couples and business travelers.",
  },
  {
    name: "Hotel Reservations",
    description:
      "Hotel reservation support according to destination, travel dates, budget and accommodation needs.",
  },
  {
    name: "Airport Transfers",
    description:
      "Airport pickup and drop-off arrangements for domestic and international travelers.",
  },
  {
    name: "Transport Services",
    description:
      "Reliable transportation arrangements for airport transfers, city travel and complete trip convenience.",
  },
  {
    name: "Visa Facilitation",
    description:
      "Visa facilitation with documentation guidance, application support and travel assistance.",
  },
];

const Schema = ({
  pageName = BUSINESS_NAME,
  pageDescription = DEFAULT_DESCRIPTION,
  path = "/",
  canonical,
  image = DEFAULT_IMAGE,
  breadcrumbs = [],
  services = defaultServices,
  faqItems = [],
  includeBusiness = true,
  includeWebsite = true,
  includeServices = true,
}) => {
  const normalizedPath = normalizePath(path);

  const canonicalUrl = canonical
    ? createAbsoluteUrl(canonical)
    : normalizedPath === "/"
      ? `${SITE_URL}/`
      : `${SITE_URL}${normalizedPath}`;

  const imageUrl = createAbsoluteUrl(image, DEFAULT_IMAGE);

  const organizationId = `${SITE_URL}/#organization`;
  const businessId = `${SITE_URL}/#travel-agency`;
  const websiteId = `${SITE_URL}/#website`;
  const webpageId = `${canonicalUrl}#webpage`;
  const breadcrumbId = `${canonicalUrl}#breadcrumb`;

  const organizationSchema = {
    "@type": "Organization",
    "@id": organizationId,
    name: BUSINESS_NAME,
    alternateName: [
      "Aldaleel Travel and Tourism",
      "Aldaleel Travel",
      "Aldaleel Travel and Tourism KSA",
    ],
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/favicon-512.png`,
      width: 512,
      height: 512,
    },
    image: {
      "@type": "ImageObject",
      url: DEFAULT_IMAGE,
      width: 1200,
      height: 630,
    },
    description: DEFAULT_DESCRIPTION,
    email: "info@aldaleeltravel.com",
    telephone: "+966531314557",
    sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+966531314557",
        email: "info@aldaleeltravel.com",
        contactType: "customer service",
        areaServed: "SA",
        availableLanguage: ["English", "Arabic"],
      },
    ],
  };

  const businessSchema = {
    "@type": "TravelAgency",
    "@id": businessId,
    name: BUSINESS_NAME,
    alternateName: [
      "Aldaleel Travel and Tourism",
      "Aldaleel Travel",
    ],
    url: `${SITE_URL}/`,
    parentOrganization: {
      "@id": organizationId,
    },
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/favicon-512.png`,
      width: 512,
      height: 512,
    },
    image: [
      {
        "@type": "ImageObject",
        url: DEFAULT_IMAGE,
        width: 1200,
        height: 630,
      },
    ],
    description: DEFAULT_DESCRIPTION,
    email: "info@aldaleeltravel.com",
    telephone: "+966531314557",
    priceRange: "$$",
    currenciesAccepted: "SAR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "3401 Prince Bandar Ibn Abd Al Aziz, An Nahdah",
      addressLocality: "Riyadh",
      addressRegion: "Riyadh",
      postalCode: "13551",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.774265,
      longitude: 46.738586,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Riyadh",
      },
      {
        "@type": "AdministrativeArea",
        name: "Riyadh Province",
      },
      {
        "@type": "Country",
        name: "Saudi Arabia",
      },
    ],
    sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
    knowsAbout: [
      "Air Ticketing",
      "Domestic Flight Booking",
      "International Flight Booking",
      "Smart Umrah",
      "Umrah Travel Support",
      "Hajj Travel Support",
      "Hajj Travel Planning",
      "International Tour Packages",
      "Family Tour Packages",
      "Hotel Reservations",
      "Airport Transfers",
      "Transport Services",
      "Visa Facilitation",
      "Visa Guidance",
      "Travel Planning",
    ],
    makesOffer: defaultServices.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@id": businessId,
        },
        areaServed: {
          "@type": "Country",
          name: "Saudi Arabia",
        },
      },
    })),
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": websiteId,
    url: `${SITE_URL}/`,
    name: BUSINESS_NAME,
    alternateName: "Aldaleel Travel",
    description: DEFAULT_DESCRIPTION,
    publisher: {
      "@id": organizationId,
    },
    inLanguage: ["en", "ar"],
  };

  const webpageSchema = {
    "@type": "WebPage",
    "@id": webpageId,
    url: canonicalUrl,
    name: pageName,
    description: pageDescription,
    isPartOf: {
      "@id": websiteId,
    },
    about: {
      "@id": businessId,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    breadcrumb: {
      "@id": breadcrumbId,
    },
    inLanguage: "en",
  };

  const finalBreadcrumbs =
    breadcrumbs.length > 0
      ? breadcrumbs
      : normalizedPath === "/"
        ? [
            {
              name: "Home",
              path: "/",
            },
          ]
        : [
            {
              name: "Home",
              path: "/",
            },
            {
              name: pageName,
              path: normalizedPath,
            },
          ];

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": breadcrumbId,
    itemListElement: finalBreadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: createAbsoluteUrl(item.path || "/"),
    })),
  };

  const serviceSchemas =
    includeServices && Array.isArray(services)
      ? services
          .filter((service) => service?.name)
          .map((service, index) => ({
            "@type": "Service",
            "@id": `${canonicalUrl}#service-${index + 1}`,
            name: service.name,
            description:
              service.description ||
              `${service.name} provided by ${BUSINESS_NAME}.`,
            serviceType: service.serviceType || service.name,
            url: service.path
              ? createAbsoluteUrl(service.path)
              : canonicalUrl,
            provider: {
              "@id": businessId,
            },
            areaServed: service.areaServed || {
              "@type": "Country",
              name: "Saudi Arabia",
            },
          }))
      : [];

  const faqSchema =
    Array.isArray(faqItems) && faqItems.length > 0
      ? {
          "@type": "FAQPage",
          "@id": `${canonicalUrl}#faq`,
          mainEntity: faqItems
            .filter(
              (item) =>
                item?.question &&
                item?.answer,
            )
            .map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
        }
      : null;

  const graph = [
    organizationSchema,
    ...(includeBusiness ? [businessSchema] : []),
    ...(includeWebsite ? [websiteSchema] : []),
    webpageSchema,
    breadcrumbSchema,
    ...serviceSchemas,
    ...(faqSchema ? [faqSchema] : []),
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default Schema;