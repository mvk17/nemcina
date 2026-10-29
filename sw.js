const CACHE = 'nemcina-v3';
const CORE = ['./', 'index.html', 'gramatika.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-180.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('nemcina-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// stránka: nejdřív síť (aby se načetla nová verze), bez sítě z mezipaměti
// ostatní soubory a písma: z mezipaměti, na pozadí se obnoví
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const isPage = e.request.mode === 'navigate';
  if (isPage) {
    e.respondWith(fetch(e.request).then(r => {
      const cp = r.clone(); caches.open(CACHE).then(c => c.put('index.html', cp)); return r;
    }).catch(() => caches.match('index.html')));
    return;
  }
  // obsah gramatiky: taky nejdřív síť, aby sedl k nové verzi stránky
  if (new URL(e.request.url).pathname.endsWith('gramatika.js')) {
    e.respondWith(fetch(e.request).then(r => {
      const cp = r.clone(); caches.open(CACHE).then(c => c.put('gramatika.js', cp)); return r;
    }).catch(() => caches.match('gramatika.js')));
    return;
  }
  e.respondWith(caches.match(e.request).then(hit => {
    const net = fetch(e.request).then(r => {
      if (r && (r.ok || r.type === 'opaque')) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); }
      return r;
    }).catch(() => hit);
    return hit || net;
  }));
});
