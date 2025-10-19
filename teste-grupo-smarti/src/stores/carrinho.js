import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// useCartStore
export const useCarrinhoStore = defineStore('cart', () => {
  const items = ref([])

  const totalItens = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  const valorTotal = computed(() => {
    return items.value.reduce((total, item) => total + item.product.price * item.quantity, 0)
  })

  function addCarrinho(product) {
    const existingItem = items.value.find((item) => item.product.id === product.id)

    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({ product, quantity: 1 })
    }
  }

  function removerDoCarrinho(productId) {
    const index = items.value.findIndex((item) => item.product.id === productId)

    if (index !== -1) {
      const item = items.value[index]
      if (item.quantity > 1) {
        item.quantity--
      } else {
        // Se a quantidade é 1, remove o item do array
        items.value.splice(index, 1)
      }
    }
  }

  function removerTodosProdutos(productId) {
    items.value = items.value.filter((item) => item.product.id !== productId)
  }

  function clearCarrinho() {
    items.value = []
  }

  return {
    items,
    totalItens,
    valorTotal,
    clearCarrinho,
    addCarrinho,
    removerDoCarrinho,
    removerTodosProdutos,
  }
})
