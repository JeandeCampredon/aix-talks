/* eslint-disable */
var OLD_CACHE = 'hello-world-page';
var CACHE = '--aix-talks-cache--';
const filesToCache = ['/', '/index.html'];

self.addEventListener('install', function(event) {
  console.log('The service worker is being installed.');
  event.waitUntil(
    caches.open(CACHE).then(function(cache) {
      cache.addAll(filesToCache);
    }),
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.open(OLD_CACHE).then(function(cache) {
      filesToCache.forEach(req => cache.delete(req));
    }),
  );
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  console.log('The service worker is serving the asset.');
  event.respondWith(fromCache(event.request));
  event.waitUntil(update(event.request));
});

function fromCache(request) {
  return caches.open(CACHE).then(function(cache) {
    return cache.match(request);
  });
}

function update(request) {
  console.log('update start');
  return caches.open(CACHE).then(function(cache) {
    return Promise.all([fetch(request), fromCache(request)]).then(function([
      newResponse,
      oldResponse,
    ]) {
      const n = newResponse ? newResponse.clone() : { text: () => Promise.resolve(null) };
      const o = oldResponse ? oldResponse.clone() : { text: () => Promise.resolve(undefined) };

      return Promise.all([o.text(), n.text()]).then(([newString, oldString]) => {
        if (newString === oldString) {
          return null;
        }

        return cache.put(request, newResponse.clone()).then(function() {
          return askRefresh();
        });
      });
    });
  });
}

function askRefresh() {
  return self.clients.matchAll().then(function(clients) {
    clients.forEach(function(client) {
      var message = { type: 'refresh' };
      client.postMessage(JSON.stringify(message));
    });
  });
}
/* eslint-enable */
