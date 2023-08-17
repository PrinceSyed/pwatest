self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-game-cache').then((cache) => {
      return cache.addAll([
        './',
        './Build/rp.data',
        './Build/rp.framework',
        './Build/v2/rp.loader',
        './Build/rp.wasm',
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
