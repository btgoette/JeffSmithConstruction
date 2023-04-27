module.exports = {
  // Uncomment the line below to enable basePath, pages and
  // redirects will then have a path prefix (`/app` in this case)
  //
  // basePath: '/app',

  exportPathMap: async function (defaultPathMap) {
    return {
      "/": { page: "/" },
      "/404": { page: "/404" },
      "/403": { page: "/403" },
      "/policies/privacy-policy": { page: "/policies/privacy-policy" },
      "/policies/cookie-policy": { page: "/policies/cookie-policy" },
      "/services/index": { page: "/services" },
      "/services/commercial-construction": {
        page: "/services/commercial-construction",
      },
      "/services/tenant-improvements": {
        page: "/services/tenant-improvements",
      },
      "/about/index": { page: "/about" },
      "/gallery/index": { page: "/gallery" },
      "/gallery/office-gallery": { page: "/gallery/office-gallery" },
      "/gallery/restaurant-gallery": { page: "/gallery/restaurant-gallery" },
      "/gallery/retail-gallery": { page: "/gallery/retail-gallery" },
      "/testimonials/index": { page: "/testimonials" },
      "contact/index": { page: "/contact" },
      "/contact/careers": { page: "contact/careers" },
    };
  },

  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about/",
        permanent: true,
      },
      {
        source: "/commercial-construction",
        destination: "/services/commercial-construction",
        permanent: true,
      },
      {
        source: "/tenant-improvements",
        destination: "/services/tenant-improvements",
        permanent: true,
      },
      {
        source: "/construction-gallery",
        destination: "/gallery/",
        permanent: true,
      },
      {
        source: "/office-gallery",
        destination: "/gallery/office-gallery",
        permanent: true,
      },
      {
        source: "/restaurant-gallery",
        destination: "/gallery/restaurant-gallery",
        permanent: true,
      },
      {
        source: "/retail-gallery",
        destination: "/gallery/retail-gallery",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact/",
        permanent: true,
      },
      {
        source: "/careers",
        destination: "/contact/careers",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/policies/privacy-policy",
        permanent: true,
      },
      {
        source: "/cookie-policy",
        destination: "/policies/cookie-policy",
        permanent: true,
      },
    ];
  },
};
