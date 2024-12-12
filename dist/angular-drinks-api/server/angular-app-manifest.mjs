
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/drink"
  },
  {
    "renderMode": 2,
    "route": "/drink/random"
  }
],
  assets: {
    'index.csr.html': {size: 1140, hash: '10f3975b4da37a988c554be8b45cf9afdc2a844b017954f62f24939374befe5d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1653, hash: 'a414c44bf8d2d9fc0f9db365f9be294e9817fcfc2a75b73bf90ca3b0bd376d75', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'drink/index.html': {size: 2251, hash: '9a2b0e7489c597e8157abb3cbe27b4d93b69609e587eefdaa52f7bc34007b53e', text: () => import('./assets-chunks/drink_index_html.mjs').then(m => m.default)},
    'index.html': {size: 2327, hash: '69995bda3e2183a867d6f075b98e4e7d6e01b0cfcf943f2beced6ebde753d03c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'drink/random/index.html': {size: 4373, hash: 'f70a859c4133dc88775931bb7a3c23fddfe9735de84ffc52a4591e0223731022', text: () => import('./assets-chunks/drink_random_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
