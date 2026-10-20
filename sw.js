// Service Worker para Cogitador de Campo: La Roca
const CACHE_NAME = 'cogitador-la-roca-v1.2';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/style.css',
  './js/data.js',
  './js/modules/mathhammer_adv.js',
  './js/modules/army_validator.js',
  './js/modules/battle_enhancements.js',
  './js/modules/pariah_nexus_deck.js',
  './js/modules/army_importer.js',
  './js/modules/tactical_tools.js',
  './js/app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon.svg'
];

// Instalación: Precargar recursos esenciales para funcionamiento 100% offline
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-almacenando en caché los activos del Cogitador...');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activación: Limpieza de cachés antiguas y control inmediato
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Eliminando caché antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Estrategia de Fetch: Network-First con fallback inmediato a Caché (modo offline total)
self.addEventListener('fetch', (event) => {
  // Ignorar peticiones no HTTP/HTTPS (extensiones, etc.)
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Si la respuesta de red es válida, actualizar la copia en caché en segundo plano
        if (networkResponse && networkResponse.status === 200 && event.request.method === 'GET') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Sin conexión (modo offline en torneos o mesas sin WiFi): servir desde la caché
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // Si es una petición de navegación y falla, devolver index.html
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
