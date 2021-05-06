import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', exact: true, component: '@/pages/index' },
    { path: '/main', exact: false, component: '@/pages/index' },
  ],
  fastRefresh: {},
  cssModulesTypescriptLoader: {},
  chainWebpack(config, { env, webpack, createCSSRule }) {
    config.module
      .rule('video')
      .test(/\.mp4$/)
      .use('file-loader')
      .loader(require.resolve('file-loader'));
  },
});
