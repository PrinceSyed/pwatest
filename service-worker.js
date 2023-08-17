self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-game-cache').then((cache) => {
      return cache.addAll([
        './',
        './Build/v2.2.1%20Mobile%20FIxes%20plus%20rp.data',
        './Build/v2.2.1%20Mobile%20FIxes%20plus%20rp.framework',
        './Build/v2.2.1%20Mobile%20FIxes%20plus%20rp.loader',
        './Build/v2.2.1%20Mobile%20FIxes%20plus%20rp.wasm',
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
