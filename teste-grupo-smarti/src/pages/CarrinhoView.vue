<template>
  <div class="container mt-4 carrinho-section">
    <h1 class="display-4 font-weight-normal">Carrinho De Compras</h1>

    <div class="row mt-5">
      <div class="col-lg-8">
        <div v-if="cartStore.items.length === 0" class="alert alert-info">
          Seu carrinho está vazio. Adicione alguns produtos!
        </div>
        <ul v-else class="list-group">
          <CarrinhoItem v-for="item in cartStore.items" :key="item.product.id" :item="item" />
        </ul>
      </div>
      <div class="col-lg-4">
        <CarrinhoResumo />
        <button
          v-if="cartStore.items.length > 0"
          class="btn btn-success w-100 mt-3"
          @click="simularCompra()"
        >
          Finalizar Compra
        </button>
        <button v-else class="btn btn-success w-100 mt-3" @click="backHome()">
          Voltar para a home
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCarrinhoStore } from '@/stores/carrinho'
import CarrinhoItem from '@/components/CarrinhoItem.vue'
import CarrinhoResumo from '@/components/CarrinhoResumo.vue'
import { useRouter } from 'vue-router'

const cartStore = useCarrinhoStore()
const router = useRouter()

const simularCompra = () => {
  cartStore.clearCarrinho()
  alert('Compra realizada com sucesso!!!')
  router.push('/produtos')
  // window.location.reload()
}

const backHome = () => {
  router.push('/')
}
</script>

<style>
.carrinho-section {
  height: 80vh;
}
</style>
