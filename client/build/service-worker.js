/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
<<<<<<< HEAD
  "/precache-manifest.1cb49b0e51f8c37d7285cb0cbac73404.js"
=======
  "/precache-manifest.5d02ec06e37ecdeb7233f2221d97b6b6.js"
>>>>>>> 5a826aab6be8f6cacb829be893aa7c3a89c9113d
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {
  
<<<<<<< HEAD
  blacklist: [/^\/_/,/\/[^\/?]+\.[^\/]+$/],
=======
  blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
>>>>>>> 5a826aab6be8f6cacb829be893aa7c3a89c9113d
});
