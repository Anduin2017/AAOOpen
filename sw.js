var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    '/index.html',
    '/node_modules/bootstrap/dist/css/bootstrap.min.css',
    '/node_modules/font-awesome/css/font-awesome.min.css',
    '/node_modules/sweetalert2/dist/sweetalert2.min.css',
    '/css/AiurUI.css',
    '/node_modules/jquery/dist/jquery.min.js',
    '/node_modules/popper.js/dist/umd/popper.min.js',
    '/node_modules/bootstrap/dist/js/bootstrap.min.js',
    '/node_modules/sweetalert2/dist/sweetalert2.min.js',
    '/js/AiurUI.js'
];
self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
});