/* istanbul ignore file */

module.exports = [
  // if you are customizing your runtime cache rules, please note that the
  // first item in the runtime cache configuration array MUST be "start-url"
  {
    // MUST be the same as "start_url" in manifest.json
    urlPattern: '/',
    // use NetworkFirst or NetworkOnly if you redirect un-authenticated user to login page
    // use StaleWhileRevalidate if you want to prompt user to reload when new version available
    handler: 'NetworkFirst',
    options: {
      // don't change cache name
      cacheName: 'start-url',
      expiration: {
        maxEntries: 1,
        maxAgeSeconds: 24 * 60 * 60 // 24 hours
      }
    }
  },
  {
    urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
    // Apply a cache-first strategy.
    handler: 'CacheFirst',
    options: {
      // Use a custom cache name.
      cacheName: 'images',
      // Only cache 10 images.
      expiration: {
        maxEntries: 10
      }
    }
  }
  // {
  //   urlPattern: /\/_next\/data\/.*\.(?:json)\??.*$/,
  //   handler: 'StaleWhileRevalidate',
  //   options: {
  //     // Use a custom cache name.
  //     cacheName: 'props',
  //     // Only cache 10 images.
  //     expiration: {
  //       maxEntries: 10,
  //       maxAgeSeconds: 2 * 60 * 60 // 2 hours
  //     }
  //   }
  // }
];
