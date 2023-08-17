self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-game-cache').then((cache) => {
      return cache.addAll([
        './',
        // Add paths to assets you want to cache, e.g.
        './Build/v2.2.1 Mobile FIxes plus rp.js',
        './Build/YourProjectName.json',
        // ... other asset files
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
