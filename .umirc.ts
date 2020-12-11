import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/list', component: '@/pages/list'},
    { path: '/creat', component: '@/pages/creat'},
  ],
  
});