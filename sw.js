const CACHE = "tp-v1";
const ASSETS = [
  "/Planner_2.0/",
  "/Planner_2.0/index.html",
];

// При установке — кэшируем базовые файлы
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

// При активации — удаляем старые кэши
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Запросы: сначала сеть, при ошибке — кэш
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  // Firebase/Firestore запросы не кэшируем
  if (e.request.url.includes("firestore.googleapis.com") ||
      e.request.url.includes("firebase") ||
      e.request.url.includes("googleapis.com")) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
