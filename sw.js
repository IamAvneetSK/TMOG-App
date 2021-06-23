importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

// This will work!
workbox.routing.registerRoute(
  ({request}) => request.destination === 'image' ||
                  request.destination === 'html' ||
                   request.destination === 'script' ||
                    request.destination === 'style',
  new workbox.strategies.NetworkFirst()
);

// This is test
workbox.precaching.precacheAndRoute(
  [
  {url: 'index.html', revision: '000001'},
  {url: 'assets/bootstrap/css/bootstrap.min.css', revision: null},
  {url: 'assets/fonts/fontawesome-all.min.css', revision: null},
  {url: 'assets/bootstrap/js/bootstrap.min.js', revision: null},
  {url: 'assets/js/jquery.min.js', revision: null},
], {
  // Ignore all URL parameters.
  ignoreURLParametersMatching: [/.*/]
});