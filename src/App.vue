<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import MenuSection from './components/MenuSection.vue'
import PriceSection from './components/PriceSection.vue'
import TestimoniSection from './components/TestimoniSection.vue'
import OrderSection from './components/OrderSection.vue'
</script>

<template>
  <div class="site-wrapper">
    <!-- Header Navigation -->
    <AppHeader />

    <!-- Main Content -->
    <main>
      <!-- 1. Hero Section (Maroon + Logo Cream di tengah) -->
      <HeroSection />

      <!-- 2. Menu Section (Background Cream + Teks Bold Maroon + 3 Menu) -->
      <MenuSection />

      <!-- 3. Price Section (3 Sejajar + Teks Bold Cream + 3 Space Gambar Kosong) -->
      <PriceSection />

      <!-- 4. Testimoni Section (Slider 5 Testimoni Rapi Atas ke Bawah) -->
      <TestimoniSection />

      <!-- 5. Order Section & Footer (happy orders + Contact Us + Area Demak Semarang Kudus) -->
      <OrderSection />
    </main>
  </div>
</template>

<style>
/* Reset dasar untuk halaman */
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  background-color: #2e0204;
  font-family: 'Montserrat', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.site-wrapper {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
