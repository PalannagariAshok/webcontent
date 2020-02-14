const cacheName = "akshaya1"
const cacheAssets = ['index.html', 'main.js']

self.addEventListener('install', (e) => {
	console.log("service worker: Installed");
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
		fetch(e.request)
			.then(res => {
				const resClone = res.clone();
				caches
					.open(cacheName)
					.then(cache => {
						cache.put(e.request, resClone);
					});
					return res;
			}).catch(err => caches.match(e.request).then(res => res))
		);
})