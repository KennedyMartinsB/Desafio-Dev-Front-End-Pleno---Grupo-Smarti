import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// useCartStore
export const useCarrinhoStore = defineStore('cart', () => {
  // Estado: Array de objetos { product, quantity }
  const items = ref([])

  // Getters (Computeds)
  const totalItens = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  const valorTotal = computed(() => {
    return items.value.reduce((total, item) => total + item.product.price * item.quantity, 0)
  })

  // Actions
  function addToCart(product) {
    const existingItem = items.value.find((item) => item.product.id === product.id)

    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({ product, quantity: 1 })
    }
  }

  function removeFromCart(productId) {
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

  function removeAllOfProduct(productId) {
    items.value = items.value.filter((item) => item.product.id !== productId)
  }

  return {
    items,
    totalItens,
    valorTotal,
    addToCart,
    removeFromCart,
    removeAllOfProduct,
  }
})
