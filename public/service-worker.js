/*
  CACHEBUSTING SERVICE WORKER
  https://petrapixel.neocities.org/coding/cachebusting

  This file needs to be placed in your website's root folder (the one your homepage is in),
  NOT a subfolder! Otherwise, it will not work!

  There is no need for you to edit this file.
  (The default values for the variables work just fine.)

  This service worker is using a stale-while-revalidate with immediate update strategy.
*/

/* ***************************************************** **/

// Name for the site cache. This doesn't matter, and doesn't have to be updated.
// However, if you want to, you can increase the version number to get a completely clean
// slate for your site cache. In normal cases that shouldn't be necessary.
const CACHE_NAME = "site-cache-v1"; // Cache storage name

// By default, this service worker deals with all kinds of files.
// If you only want to cache certain file types, set this variable to false
// and define the file types you want in the next variable.
const CACHE_ALL_FILE_TYPES = true;

// File types that you want to apply cachebusting too.
// Only taken into account if CACHE_ALL_FILE_TYPES is false.
const FILE_TYPES_TO_CACHE = [".html", ".css", ".js"]; // Files we want to cache

// Add any pages here you want to pre-cache (e.g. homepage = "/").
// Typically not necessary.
const PRE_CACHE = [];

/* ***************************************************** **/

/*

  Start of Service Worker functionality.
  Don't touch anything if you don't know what you're doing.

*/

self.addEventListener("install", (event) => {
  // Pre-cache files:
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRE_CACHE);
    })
  );
  // Immediately activate the service worker:
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle requests from the same origin (your website):
  if (url.origin !== self.location.origin) {
    // (You can remove this, but I wouldn't recommend it)
    return;
  }

  // Check if current request is a file type we want to cache:
  if (CACHE_ALL_FILE_TYPES || FILE_TYPES_TO_CACHE.some((ext) => url.pathname.endsWith(ext))) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache.match(request).then((cachedResponse) => {
          // Fetch a fresh version in the background
          const fetchPromise = fetch(request).then((networkResponse) => {
            // 1.
            // Check if the content of the file has changed (if not, serve cached file):
            const newLastModified = networkResponse.headers.get("Last-Modified");
            if (cachedResponse) {
              const oldLastModified = cachedResponse.headers?.get("Last-Modified");
              if (newLastModified && oldLastModified && newLastModified === oldLastModified) {
                return cachedResponse;
              }
            }

            // 2.
            // Delete the old version of the file in the cache:
            cache.delete(request).then(() => {
              // Save the new version of the file into the cache:
              cache.put(request, networkResponse.clone());
            });

            // 3.
            // Notify the page that an update is available:
            // (This message will be caught by the JavaScript on your page,
            // which will then reload the file or page as necessary.)
            self.clients.matchAll().then((clients) => {
              clients.forEach((client) => {
                client.postMessage({
                  type: "UPDATE_FOUND",
                  url: request.url,
                });
              });
            });

            // 4.
            // Immediately return the new version of the file:
            return networkResponse;
          });

          // Serve the cached version immediately, but update in the background:
          return cachedResponse || fetchPromise;
        })
      )
    );
  }
});
