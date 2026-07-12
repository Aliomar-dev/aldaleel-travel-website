import { Helmet } from "react-helmet-async";

const SITE_URL = "https://aldaleeltravel.com";

const DEFAULT_TITLE =
  "Aldaleel Travel & Tourism | Premium Travel Agency in Riyadh";

const DEFAULT_DESCRIPTION =
  "Aldaleel Travel & Tourism is a professional travel agency in Riyadh, Saudi Arabia, offering flight bookings, Smart Umrah, Hajj travel support, tour packages, hotel reservations, transportation and visa facilitation.";

const DEFAULT_KEYWORDS =
  "Aldaleel Travel & Tourism, Aldaleel Travel, travel agency Riyadh, travel agency Saudi Arabia, flight booking Riyadh, air ticketing Saudi Arabia, Smart Umrah, Umrah travel services, Hajj travel support, Hajj packages, international tour packages, family tour packages, hotel reservations Riyadh, airport transfers Riyadh, transport services Saudi Arabia, visa facilitation Riyadh, visa assistance Saudi Arabia";

const DEFAULT_IMAGE =
  "https://aldaleeltravel.com/seo/aldaleel-travel-og.png";

const FACEBOOK_URL =
  "https://www.facebook.com/share/18x9XxeMB5/";

const INSTAGRAM_URL =
  "https://www.instagram.com/aldaleel_travelandtourism";

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

const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  path = "/",
  canonical,
  image = DEFAULT_IMAGE,
  imageAlt = "Aldaleel Travel & Tourism travel services in Riyadh",
  type = "website",
  locale = "en_US",
  alternateLocale = "ar_SA",
  language = "en",
  robots = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  noIndex = false,
}) => {
  const normalizedPath = normalizePath(path);

  const canonicalUrl = canonical
    ? createAbsoluteUrl(canonical)
    : normalizedPath === "/"
      ? `${SITE_URL}/`
      : `${SITE_URL}${normalizedPath}`;

  const imageUrl = createAbsoluteUrl(image, DEFAULT_IMAGE);

  const robotsContent = noIndex
    ? "noindex,nofollow,noarchive"
    : robots;

  return (
    <Helmet>
      <html lang={language} />

      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Aldaleel Travel & Tourism" />
      <meta name="publisher" content="Aldaleel Travel & Tourism" />
      <meta name="application-name" content="Aldaleel Travel & Tourism" />
      <meta name="apple-mobile-web-app-title" content="Aldaleel Travel" />

      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content={robotsContent} />

      <meta name="theme-color" content="#27a94f" />
      <meta name="color-scheme" content="light" />
      <meta name="format-detection" content="telephone=no" />
      <meta httpEquiv="content-language" content={language} />

      <link rel="canonical" href={canonicalUrl} />

      {/* Local and geographic information */}
      <meta name="geo.region" content="SA-01" />
      <meta name="geo.placename" content="Riyadh, Saudi Arabia" />
      <meta name="geo.position" content="24.774265;46.738586" />
      <meta name="ICBM" content="24.774265, 46.738586" />

      {/* Open Graph: Facebook, Instagram and WhatsApp */}
      <meta property="og:type" content={type} />
      <meta
        property="og:site_name"
        content="Aldaleel Travel & Tourism"
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content={locale} />
      <meta
        property="og:locale:alternate"
        content={alternateLocale}
      />

      {/* Official social profiles */}
      <meta property="article:publisher" content={FACEBOOK_URL} />
      <meta property="og:see_also" content={FACEBOOK_URL} />
      <meta property="og:see_also" content={INSTAGRAM_URL} />
    </Helmet>
  );
};

export default SEO;