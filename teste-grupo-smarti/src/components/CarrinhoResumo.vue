<template>
  <div class="card shadow-sm">
    <div class="card-header bg-primary text-white">
      <h5 class="mb-0">Resumo do Carrinho</h5>
    </div>
    <div class="card-body">
      <p class="d-flex justify-content-between mb-2">
        <span>Total de Itens:</span>
        <span class="fw-bold text-primary">{{ cartStore.totalItems }}</span>
      </p>
      <hr />
      <p class="d-flex justify-content-between mb-0 fs-5">
        <span>Valor Total:</span>
        <span class="fw-bold text-success">R$ {{ cartStore.valorTotal.toFixed(2) }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { useCarrinhoStore } from '@/stores/carrinho'

const cartStore = useCarrinhoStore()
</script>
