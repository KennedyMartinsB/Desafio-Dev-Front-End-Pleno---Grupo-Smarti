<template>
  <div class="card h-100 shadow-sm border-0">
    <img
      :src="product.image"
      class="card-img-top p-3"
      alt="Imagem do Produto"
      style="height: 200px; object-fit: contain"
    />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title text-truncate">{{ product.title }}</h5>
      <p class="card-text text-success fw-bold mt-auto">R$ {{ product.price.toFixed(2) }}</p>
      <button @click="cartStore.addCarrinho(product)" class="btn btn-primary mt-2 w-100">
        Adicionar ao Carrinho
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useCarrinhoStore } from '@/stores/carrinho'

const cartStore = useCarrinhoStore()

// Define as propriedades (props) que o componente recebe
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>
