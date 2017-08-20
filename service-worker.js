/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["./css/materialize.css","ada38ff212810361fb7f84dc974b4420"],["./css/style.css","bf7631f96dbb58e74551d1ece4a474ef"],["./css/style.min.css","b7eed8ed5c16df6e976776809a3b864a"],["./css/themes/all-themes.css","c33cd26f0f895ee47b248fbd758ebc0a"],["./css/themes/all-themes.min.css","79e35a3a8b5909a306ddbde57622da19"],["./css/themes/theme-amber.css","2291d216543f5901aac26eda58905da0"],["./css/themes/theme-amber.min.css","c667e48a6e1c821f1a37dc96af4902f4"],["./css/themes/theme-black.css","503adcce53b3d052dec845febb218b43"],["./css/themes/theme-black.min.css","ab22d96ba28373a314e5ed716e5d4987"],["./css/themes/theme-blue-grey.css","9bd8c4ac396a63fbb129bd8e65717f40"],["./css/themes/theme-blue-grey.min.css","268d8927d41dedb58bf9c477313e0932"],["./css/themes/theme-blue.css","a1f47b5467de068845adbb6d84501e90"],["./css/themes/theme-blue.min.css","017ea9c6956ca7a1a0b8beb85f8f2bcd"],["./css/themes/theme-brown.css","d957b9de2057928432ad05c1714ad7a0"],["./css/themes/theme-brown.min.css","9cc6368d2d2a29d94ee34597f4957c7a"],["./css/themes/theme-cyan.css","f8449341e12a096109d58c44eefa949b"],["./css/themes/theme-cyan.min.css","20cae58aed2c923dddacd04db443f892"],["./css/themes/theme-deep-orange.css","6b637a18fa4f417e85f298a74e915f52"],["./css/themes/theme-deep-orange.min.css","a3285435893a1610c63a9a63523c0c63"],["./css/themes/theme-deep-purple.css","efdda8bb712ce40e9c30ff2a2b69d99b"],["./css/themes/theme-deep-purple.min.css","92c87c77b264bf2d67d8068bbb3e55cf"],["./css/themes/theme-green.css","f9aeafef882be5e4da595b558e03ca94"],["./css/themes/theme-green.min.css","996b04297dd3f8d7df1dfa8b3fcc880c"],["./css/themes/theme-grey.css","9f5ef81f33ce5f3042d9bfda0f5f2b23"],["./css/themes/theme-grey.min.css","128fd0d5c7de95b3258d70347a0e6bc1"],["./css/themes/theme-indigo.css","00b904e111cda68a09200c80c063c1f7"],["./css/themes/theme-indigo.min.css","76490aad6a5bb90256ac38e4af5d97d5"],["./css/themes/theme-light-blue.css","1a03dd8cecc95f8491b5dcedb4bc4692"],["./css/themes/theme-light-blue.min.css","358c73f90d4d204b63b0de3ac4e5795c"],["./css/themes/theme-lime.css","4365a9230f7b3c79f22d3db159fd9c26"],["./css/themes/theme-lime.min.css","3d79fbc662e90459196b7686ff19976d"],["./css/themes/theme-orange.css","ac371c5dbb01d241edc6c451959f0c1b"],["./css/themes/theme-orange.min.css","6c542a3d07642a82e28aa66fbc318cba"],["./css/themes/theme-pink.css","628c321dc37f622cfc2513a47770a61d"],["./css/themes/theme-pink.min.css","df93be2bd69db399ec55e97325b378eb"],["./css/themes/theme-purple.css","8405b287117e488535a2ed357e5e0653"],["./css/themes/theme-purple.min.css","b678c78b0e2cdda6412893994a24409f"],["./css/themes/theme-red.css","5442c942d17a782b7c8e89501dd6a356"],["./css/themes/theme-red.min.css","0954bd9b088ce7bd231f722dd07737fa"],["./css/themes/theme-teal.css","4a4a5c954aa817fc3d50c802eae3b16e"],["./css/themes/theme-teal.min.css","d2659061863c73ebac4aa94d4b3cdeb1"],["./css/themes/theme-yellow.css","2464a857d0385dc59a94cc81e9fb569a"],["./css/themes/theme-yellow.min.css","a79506b94a96bf8ff6b6b70743da8fd3"],["./dashboard.ejs","bc5ddae80fd9063a09c503232c5cf555"],["./feed.ejs","055a6e975babbd4326f2a330ddd0c71d"],["./feed_partial.ejs","51574147c4e7fde4e60b25080008b343"],["./head.ejs","35f75ad88b7e7254ae92f24e950f0144"],["./i-can-help.ejs","7689164154c551620c48edf4f2f30e14"],["./i-need-help.ejs","2cd0d2ee9697bb3aea9d43a48443d5c5"],["./i_can_help_partial.ejs","0637aed587bd48789d582cc38dd729de"],["./i_need_help_partial.ejs","69d3db44106d487b3989914faaa9e2e8"],["./images/animation-bg.jpg","3d2851cdfdb8a04676e33730e3acf133"],["./images/screenshot.png","8a776463c266598781fbbf7edd2fdfd0"],["./images/thumbs-up.png","946591ba052321455cc44833faa0f363"],["./images/user-img-background.jpg","7f354e93c30f9d51fc3aa5e851918e4c"],["./images/user.jpg","7abff1ffa7111ffb01ed00a591476740"],["./images/user.png","e48ac6d28ca469738071620edbdb7d17"],["./include_custom_js.ejs","b2bb51368c07102231eabfa383ed85e7"],["./include_js_plugins.ejs","b1d5f87b735c9ac223e9df155be0ba29"],["./index.html","cc968e5a8c7d7c14be5f8c113929f71e"],["./index1.ejs","f294edf4f5db3209f0dd561e0897bd79"],["./js/admin.js","917e7358c52963dd2de3e9924ec8577f"],["./js/demo.js","b24e53ebae68fb86db7e0c4988ac73a2"],["./js/helpers.js","c34b9a1da9425e9e63ae962040cd344b"],["./js/script.js","11442968b4c637b838d69e53b8ec7de4"],["./map.ejs","1318f0ee963d61e3b57cef8461307e1a"],["./maps_partial.ejs","bafd0f4967c7da29deba2ddc85205ff4"],["./navbar.ejs","aca6c95cea7328f8bc538f7d65bfa4cf"],["./page_loader.ejs","0c243ecde10269cfe57e2be39503f6f8"],["./search_bar.ejs","5d433fb1745e6ae610d3de639a82c863"],["./sidebar.ejs","9f311c034985dee602938d9958b2303b"],["./sign-in-partial.ejs","da0b08eac927ff07a30957fafadf76dc"],["./sign-in.ejs","6242b6623ad81f110d37d4d0be16cc58"],["./sign-up-partial.ejs","c8e79350f86212a1697316116b3b72ed"],["./sign-up.ejs","6a01034b12d3c8925f38e2287a96712c"],["/","ea3eaec957295eac58cabae6b2870a06"],["/sign-in","24898f64bc4722e9a67710f058c39eb7"]];
var cacheName = 'sw-precache-v3-udhavi-frontend-' + (self.registration ? self.registration.scope : '');




var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});




