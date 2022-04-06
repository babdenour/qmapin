/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */
import { boot } from 'quasar/wrappers';
// import * as VueGoogleMaps from 'vue2-google-maps';
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files

// const promise = null;

// eslint-disable-next-line no-unused-vars
export default boot(async ({ app, router, Vue }) => {
  // Vue.use(VueGoogleMaps, {
  //   load: {
  //     apiKey: process.env.API_KEY_GOOGLE,
  //     libraries: ['places'],
  //   },
  //   installComponents: true,
  // });
  // const api = process.env.API_KEY_GOOGLE;
  // const id = 'google-cdn';
  // const url = `https://maps.googleapis.com/maps/api/js?key=${api}`;
  // Vue.prototype.$google = function () {
  //   if (!promise) {
  //     promise = new Promise((resolve, reject) => {
  //       if (document.getElementById(id)) {
  //         console.error(`Error loading ${url} async: ${id} is not unique`);
  //         return;
  //       }
  //       const script = document.createElement('script');
  //       script.src = url;
  //       script.async = true;
  //       script.id = id;
  //       script.onload = () => {
  //         resolve();
  //       };
  //       script.onerror = (err) => {
  //         reject(err);
  //       };
  //       document.body.appendChild(script);
  //     });
  //   }
  //   return promise;
  // };
  // const id = 'google-cdn'; // must be unique,
  // const api = process.env.API_KEY_GOOGLE;
  // const url = `https://maps.googleapis.com/maps/api/js?key=${api}`;
  // Vue.prototype.$google = function () {
  //   if (!promise) {
  //     promise = new Promise((resolve, reject) => {
  //       if (document.getElementById(id)) {
  //         console.error(`Error loading ${url} async: ${id} is not unique`);
  //         return;
  //       }
  //       const script = document.createElement('script');
  //       script.src = url;
  //       script.async = true;
  //       script.id = id;
  //       script.onload = () => {
  //         resolve();
  //       };
  //       script.onerror = (err) => {
  //         reject(err);
  //       };
  //       document.body.appendChild(script);
  //     });
  //   }
  //   return promise;
  // };
});
