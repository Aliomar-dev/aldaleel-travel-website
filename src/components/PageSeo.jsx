import SEO from "./SEO";
import Schema from "./Schema";

const PAGE_DATA = {
  home: {
    title: "Aldaleel Travel & Tourism | Travel Agency in Riyadh",
    description:
      "Aldaleel Travel & Tourism is a professional travel agency in Riyadh offering flight bookings, Smart Umrah, Hajj travel support, hotels, transportation, visa facilitation and international tours.",
    keywords:
      "Aldaleel Travel & Tourism, travel agency Riyadh, travel agency Saudi Arabia, flight booking Riyadh, Smart Umrah, Hajj travel support, visa facilitation Riyadh, hotel booking Riyadh, airport transfer Riyadh, international tour packages",
    path: "/",
    imageAlt:
      "Aldaleel Travel & Tourism professional travel services in Riyadh",
    pageName: "Aldaleel Travel & Tourism",
    breadcrumbs: [{ name: "Home", path: "/" }],
    includeBusiness: true,
    includeWebsite: true,
    includeServices: true,
    services: [
      {
        name: "Flight Booking",
        description:
          "Domestic and international flight booking support for travelers in Riyadh and across Saudi Arabia.",
        path: "/expertise",
      },
      {
        name: "Smart Umrah",
        description:
          "Smart Umrah travel support including flight, hotel and transportation arrangements.",
        path: "/expertise",
      },
      {
        name: "Hajj Travel Support",
        description:
          "Hajj travel planning support including flights, accommodation and transportation guidance.",
        path: "/expertise",
      },
      {
        name: "International Tour Packages",
        description:
          "Customized international tour packages for families, couples, groups and business travelers.",
        path: "/tour-packages",
      },
      {
        name: "Hotel Reservations",
        description:
          "Hotel reservation support according to destination, travel dates and budget.",
        path: "/expertise",
      },
      {
        name: "Visa Facilitation",
        description:
          "Visa documentation guidance and application support for international travel.",
        path: "/expertise",
      },
      {
        name: "Airport Transfers",
        description:
          "Airport pickup, drop-off and transportation arrangements for travelers.",
        path: "/expertise",
      },
    ],
  },

  about: {
    title: "About Aldaleel Travel & Tourism | Riyadh",
    description:
      "Learn about Aldaleel Travel & Tourism, a professional Riyadh travel agency providing reliable flight, Umrah, Hajj, hotel, visa, transport and tour planning services.",
    keywords:
      "about Aldaleel Travel & Tourism, Aldaleel Travel Riyadh, trusted travel agency Riyadh, Saudi Arabia travel company, professional travel services Riyadh",
    path: "/about",
    imageAlt: "About Aldaleel Travel & Tourism in Riyadh",
    pageName: "About Aldaleel Travel & Tourism",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
    ],
    includeBusiness: true,
    includeWebsite: true,
    includeServices: false,
  },

  expertise: {
    title: "Travel Services in Riyadh | Aldaleel Travel & Tourism",
    description:
      "Explore flight bookings, Smart Umrah, Hajj travel support, hotel reservations, visa facilitation, airport transfers and complete travel planning services in Riyadh.",
    keywords:
      "travel services Riyadh, flight booking Riyadh, Smart Umrah Riyadh, Hajj travel support, visa services Riyadh, hotel reservations Riyadh, airport transfer Riyadh, Aldaleel Travel services",
    path: "/expertise",
    imageAlt:
      "Flight, Umrah, Hajj, hotel, visa and transport services in Riyadh",
    pageName: "Travel Services in Riyadh",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Travel Services", path: "/expertise" },
    ],
    includeBusiness: true,
    includeWebsite: true,
    includeServices: true,
    services: [
      {
        name: "Air Ticketing",
        serviceType: "Flight Booking Service",
        description:
          "Domestic and international air ticketing with travel guidance and booking support.",
        path: "/expertise",
      },
      {
        name: "Smart Umrah",
        serviceType: "Umrah Travel Service",
        description:
          "Umrah travel support including flights, hotel reservations and transportation planning.",
        path: "/expertise",
      },
      {
        name: "Hajj Travel Support",
        serviceType: "Hajj Travel Service",
        description:
          "Hajj travel guidance covering flight, accommodation and transportation arrangements.",
        path: "/expertise",
      },
      {
        name: "Visa Facilitation",
        serviceType: "Visa Assistance Service",
        description:
          "Visa documentation guidance and application facilitation for international travelers.",
        path: "/expertise",
      },
      {
        name: "Hotel Reservations",
        serviceType: "Hotel Booking Service",
        description:
          "Hotel reservation support based on destination, dates, budget and traveler needs.",
        path: "/expertise",
      },
      {
        name: "Airport Transfers",
        serviceType: "Airport Transportation Service",
        description:
          "Airport pickup, drop-off and local transportation arrangements.",
        path: "/expertise",
      },
      {
        name: "International Tour Planning",
        serviceType: "Tour Planning Service",
        description:
          "Customized international travel planning for families, couples, groups and companies.",
        path: "/tour-packages",
      },
    ],
  },

  tourPackages: {
    title: "International Tour Packages from Riyadh | Aldaleel Travel",
    description:
      "Explore customized international tour packages from Riyadh for families, couples, groups and business travelers with flights, hotels, transport and travel guidance.",
    keywords:
      "tour packages from Riyadh, international tour packages Saudi Arabia, family tour packages Riyadh, holiday packages Riyadh, customized travel packages, Istanbul tour package, Dubai tour package, Malaysia tour package",
    path: "/tour-packages",
    imageAlt:
      "International tour packages by Aldaleel Travel & Tourism",
    pageName: "International Tour Packages",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Tour Packages", path: "/tour-packages" },
    ],
    includeBusiness: true,
    includeWebsite: true,
    includeServices: true,
    services: [
      {
        name: "Family Tour Packages",
        serviceType: "Family Travel Package",
        description:
          "Customized international holiday packages for families departing from Riyadh.",
        path: "/tour-packages",
      },
      {
        name: "Couple Tour Packages",
        serviceType: "Couple Travel Package",
        description:
          "International travel packages designed for couples and private holidays.",
        path: "/tour-packages",
      },
      {
        name: "Group Tour Packages",
        serviceType: "Group Travel Package",
        description:
          "Organized international travel packages for groups and corporate travelers.",
        path: "/tour-packages",
      },
      {
        name: "Customized Tour Packages",
        serviceType: "Custom Travel Package",
        description:
          "Personalized tour planning based on destination, dates, budget and traveler preferences.",
        path: "/tour-packages",
      },
    ],
  },

  blog: {
    title: "Travel News & Guides | Aldaleel Travel & Tourism",
    description:
      "Read official travel news, airline updates, visa information, airport announcements, destination guides, Umrah updates and useful travel advice.",
    keywords:
      "travel news Saudi Arabia, airline updates, visa news, airport news, Umrah updates, destination guides, travel tips Riyadh, Aldaleel Travel blog",
    path: "/blog",
    imageAlt:
      "Travel news, airline updates and destination guides",
    pageName: "Travel News and Guides",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Travel News", path: "/blog" },
    ],
    includeBusiness: true,
    includeWebsite: true,
    includeServices: false,
  },

  privacy: {
    title: "Privacy Policy | Aldaleel Travel & Tourism",
    description:
      "Read the Aldaleel Travel & Tourism privacy policy explaining how website information, enquiries and personal data are handled and protected.",
    keywords:
      "Aldaleel Travel privacy policy, travel website privacy policy, customer information policy, data protection Aldaleel Travel",
    path: "/privacy-policy",
    imageAlt: "Aldaleel Travel & Tourism privacy policy",
    pageName: "Privacy Policy",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Privacy Policy", path: "/privacy-policy" },
    ],
    includeBusiness: false,
    includeWebsite: true,
    includeServices: false,
  },

  terms: {
    title: "Terms & Conditions | Aldaleel Travel & Tourism",
    description:
      "Review the terms and conditions for using Aldaleel Travel & Tourism services, website information, booking enquiries and travel assistance.",
    keywords:
      "Aldaleel Travel terms and conditions, travel booking terms, tourism service conditions, travel website terms Saudi Arabia",
    path: "/terms-and-conditions",
    imageAlt: "Aldaleel Travel & Tourism terms and conditions",
    pageName: "Terms and Conditions",
    breadcrumbs: [
      { name: "Home", path: "/" },
      {
        name: "Terms and Conditions",
        path: "/terms-and-conditions",
      },
    ],
    includeBusiness: false,
    includeWebsite: true,
    includeServices: false,
  },

  thankYou: {
    title: "Thank You | Aldaleel Travel & Tourism",
    description:
      "Thank you for contacting Aldaleel Travel & Tourism. Our travel team will review your enquiry and respond as soon as possible.",
    keywords: "",
    path: "/thank-you",
    imageAlt: "Thank you for contacting Aldaleel Travel & Tourism",
    pageName: "Thank You",
    noIndex: true,
    schemaEnabled: false,
  },
};

const PageSeo = ({ page = "home", faqItems = [] }) => {
  const data = PAGE_DATA[page] || PAGE_DATA.home;

  return (
    <>
      <SEO
        title={data.title}
        description={data.description}
        keywords={data.keywords}
        path={data.path}
        image={data.image}
        imageAlt={data.imageAlt}
        noIndex={data.noIndex || false}
      />

      {data.schemaEnabled !== false && (
        <Schema
          pageName={data.pageName}
          pageDescription={data.description}
          path={data.path}
          image={data.image}
          breadcrumbs={data.breadcrumbs || []}
          services={data.services || []}
          faqItems={faqItems}
          includeBusiness={data.includeBusiness}
          includeWebsite={data.includeWebsite}
          includeServices={data.includeServices}
        />
      )}
    </>
  );
};

export default PageSeo;