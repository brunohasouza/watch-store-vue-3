<template>
  <main class="my-8">
    <h3 v-if="errorMessage" class="text-center text-2xl">{{ errorMessage }}</h3>
    <div v-else class="container mx-auto px-6">
      <h3 class="text-2xl text-gray-700 font-medium">Wrist Watch</h3>
      <span class="mt-3 text-gray-500 text-sm">200+ Products</span>
      <div
        class="grid gap-6 mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <product-card
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import axios from 'axios'
  import { onMounted, ref } from 'vue'
  import { Product } from './types'
  import { ProductCard } from '@/components'

  const products = ref<Product[]>([])
  const errorMessage = ref<string>('')

  onMounted(async () => {
    try {
      products.value = (await axios.get('/api/products')).data.products
      console.log(products.value)
    } catch (error) {
      errorMessage.value = 'Problemas ao carregar a lista'
    }
  })
</script>

<style lang="scss" scoped></style>
