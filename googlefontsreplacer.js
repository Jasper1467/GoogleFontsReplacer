// ==UserScript==
// @name        GoogleFontsReplacer
// @namespace   Violentmonkey Scripts
// @grant       none
// @version     1.0
// @author      Jasper1467
// @description 10/22/2023, 3:26:40 PM
// ==/UserScript==

let ALLOW_DEBUGGING = false;

window.addEventListener("load", () => {
  // replace google fonts
  document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
    if (link.href.includes("https://fonts.googleapis.com/css")) {
      if (ALLOW_DEBUGGING) {
        console.log(`[pre] ${link.href}`);
      }

      link.href.replace("https://fonts.googleapis.com/css", "https://fonts.bunny.net/css");

      if (ALLOW_DEBUGGING) {
        console.log(`[post] ${link.href}`);
      }
    }
  });
});
