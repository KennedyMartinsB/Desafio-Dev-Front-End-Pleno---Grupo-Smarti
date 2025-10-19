import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '@/pages/ProdutosView.vue'
import CartView from '@/pages/CarrinhoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/produtos',
      component: ProductsView,
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: ProductsView,
    },
    {
      path: '/carrinho',
      name: 'carrinho',
      component: CartView,
    },
  ],
})

export default router
