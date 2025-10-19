<template>
  <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-4 font-weight-normal">Bem Vindo!!!</h1>
      <p class="lead font-weight-normal">Acompanhe nossas melhores promoções e ofertas.</p>
      <a class="btn btn-primary" href="#">Saiba Mais</a>
    </div>
    <div class="product-device box-shadow d-none d-md-block"></div>
    <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
  </div>

  <div class="container mt-4">
    <div v-if="produtoStore.isLoading" class="text-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Carregando...</span>
      </div>
      <p>Carregando produtos...</p>
    </div>

    <div v-else-if="produtoStore.error" class="alert alert-danger" role="alert">
      Erro ao carregar os produtos: {{ produtoStore.error }}
    </div>

    <div v-else class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      <div v-for="product in produtoStore.products" :key="product.id" class="col">
        <ProdutoCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import ProdutoCard from '@/components/ProdutoCard.vue'
import { useProdutoStore } from '@/stores/produto'

// const productStore = useProdutoStore()
const produtoStore = useProdutoStore()

onMounted(() => {
  if (produtoStore.products.length === 0) {
    produtoStore.fetchProducts()
  }
})
</script>

<style></style>
