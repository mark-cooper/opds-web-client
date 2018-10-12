# Setup

Requires node.

```bash
npm install
npm run prepublish
```

## Local dev / test

```bash
npm run-script dev
```

This starts the client and sever on: http://localhost:3000

## Docker

```bash
docker build -t opds-web-client-server .
docker run -it --rm -p 3000:3000 opds-web-client-server
```

This starts the client and sever on: http://localhost:3000

## Client with remote server

Add this content to an `index.html` (modify `proxyUrl` as needed):

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>OPDS Web Client</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    <style>
      body { margin: 0; }
    </style>
  </head>
  <body>
    <div id="opds-web-client"></div>
    <script src="https://unpkg.com/opds-web-client@latest/dist/opds-web-client.js"></script>
    <link href="https://unpkg.com/opds-web-client@latest/dist/opds-web-client.css" rel="stylesheet" />
    <script>
      var title = document.title;
      var client = new OPDSWebClient({
        headerTitle: "OPDS Web Client",
        proxyUrl: "https://opds-browser-demo.herokuapp.com/proxy",
        pageTitleTemplate: function(collectionTitle, bookTitle) {
          var details = bookTitle || collectionTitle;
          return title + (details ? " - " + details : "");
        },
        pathFor: function (collectionUrl, bookUrl) {
          var path = "/";
          path += collectionUrl ? `collection/${encodeURIComponent(collectionUrl)}/` : "";
          path += bookUrl ? `book/${encodeURIComponent(bookUrl)}/` : "";
          return path;
        },
        pathPattern: "/(collection/:collectionUrl/)(book/:bookUrl/)",
        epubReaderUrlTemplate: function (epubUrl) {
          return "/reader?url=" + encodeURIComponent(new URL("/pub/" + btoa(epubUrl) + "/manifest.json", window.location.href).href);
        }
      }, "opds-web-client");
    </script>
  </body>
</html>
```

Use a local web server to test i.e. `php -S 127.0.0.1:8000`.

This file can be hosted anywhere (i.e. CDN) that can access `proxyUrl`.

---
