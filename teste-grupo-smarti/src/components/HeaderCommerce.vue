<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
    <div class="container">
      <router-link to="/produtos" class="navbar-brand">
        <img src="../assets/img/marketplace-logo.png" alt="Market-logo" class="logo-market" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/produtos" class="nav-link" active-class="active"
              >Produtos</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/carrinho" class="nav-link position-relative" active-class="active">
              Carrinho
              <span
                v-if="cartStore.totalItems > 0"
                class="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle"
              >
                {{ cartStore.totalItems }}
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useCarrinhoStore } from '@/stores/carrinho'
const cartStore = useCarrinhoStore()
</script>

<style>
.logo-market {
  width: 40px;
}
</style>
