import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  nodeResolve: true,
  watch: true,
  plugins: [
    esbuildPlugin({ ts: true })
  ],
  appIndex: 'index.html',
  rootDir: '.',
  mimeTypes: {
    '**/*.ts': 'js'
  },
  middleware: [
    function rewriteIndex(context, next) {
      const isFile = context.url.includes('.');
      const isNodeModules = context.url.includes('/node_modules/');
      
      // If it's not a file request and not a node_modules request
      if (!isFile && !isNodeModules) {
        // Rewrite to index.html
        context.url = '/index.html';
      }
      return next();
    },
  ],
  plugins: [
    esbuildPlugin({ ts: true }),
  ],
};