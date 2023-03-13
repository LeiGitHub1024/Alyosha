
self.addEventListener("install", (event) => {
  // console.log("service worker: install", event);
});

self.addEventListener('activate', async event => {
  // console.log("service worker: activate", event);
});

self.addEventListener("fetch", (event) => {
  console.debug("network fetch:", event);
});

self.addEventListener("push", e => {
  // const { title, text, url } = e.data.json();
  const title = "Service Worker";
  const text = e.data.text();
  const options = {
    title: title,
    body: text,
    // data: url,
  };
  e.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", e => {
  // console.log("service worker: notificationclick", e.notification);
});