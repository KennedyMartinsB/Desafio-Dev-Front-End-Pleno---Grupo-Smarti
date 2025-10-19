import { defineStore } from 'pinia'
import { ref } from 'vue'

// useProductStore
export const useProdutoStore = defineStore('product', () => {
  const products = ref([])
  const isLoading = ref(false)
  const error = ref(null)

  async function fetchProducts() {
    isLoading.value = true
    error.value = null
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      if (!response.ok) {
        throw new Error('Falha ao buscar produtos.')
      }
      products.value = await response.json()
    } catch (err) {
      error.value = err.message
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  return { products, isLoading, error, fetchProducts }
})
