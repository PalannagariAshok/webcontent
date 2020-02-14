const cacheName = "akshaya"
const cacheAssets = ['index.html', 'main.js']

self.addEventListener('install', (e) => {
	console.log("service worker: Installed");
	e.waitUntil(
		caches.open(cacheName)
			.then(cache => {
				console.log('sw:caching files')
				cache.addAll(cacheAssets)})
			.then(() => self.skipWaiting())
			)
})

self.addEventListener('activate', (e) => {
	console.log("service worker: activated")
	e.waitUntil(
		caches.keys().then( cacheNames =>{
			return Promise.all(
				cacheNames.map(cache => {
					if(cache !== cacheName){
						return caches.delete(cache);
					}
				}))
		}))
});

self.addEventListener('fetch', e =>{
	e.respondWith(
		fetch(e.request).catch(() => caches.match(e.request)));
})