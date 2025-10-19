<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <img
        :src="item.product.image"
        alt="Imagem"
        style="width: 50px; height: 50px; object-fit: contain"
        class="me-3 border rounded"
      />
      <div>
        <h6 class="mb-0 text-truncate" style="max-width: 250px">{{ item.product.title }}</h6>
        <small class="text-muted">R$ {{ item.product.price.toFixed(2) }}</small>
      </div>
    </div>

    <div class="d-flex align-items-center">
      <div class="me-3 text-center">
        <span class="d-block fw-bold">Qtd: {{ item.quantity }}</span>
        <small class="d-block text-primary"
          >Total: R$ {{ (item.product.price * item.quantity).toFixed(2) }}</small
        >
      </div>

      <div class="btn-group" role="group">
        <button
          @click="cartStore.removerDoCarrinho(item.product.id)"
          class="btn btn-sm btn-outline-danger"
        >
          -
        </button>
        <button @click="cartStore.addCarrinho(item.product)" class="btn btn-sm btn-outline-success">
          +
        </button>
        <button
          @click="cartStore.removerTodosProdutos(item.product.id)"
          class="btn btn-sm btn-danger ms-2"
        >
          <i class="bi bi-trash">X</i>
        </button>
      </div>
    </div>
  </li>
</template>

<script setup>
import { defineProps } from 'vue'
import { useCarrinhoStore } from '@/stores/carrinho'

const cartStore = useCarrinhoStore()

defineProps({
  item: {
    type: Object, // Deve ser o objeto { product, quantity }
    required: true,
  },
})
</script>
