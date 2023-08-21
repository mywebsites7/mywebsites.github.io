
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/mac/projectreact/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/mac/projectreact/src/pages/404.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/mac/projectreact/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/mac/projectreact/src/pages/index.js")),
  "component---src-pages-success-js": preferDefault(require("/Users/mac/projectreact/src/pages/success.js")),
  "component---src-templates-page-template-js": preferDefault(require("/Users/mac/projectreact/src/templates/pageTemplate.js"))
}

