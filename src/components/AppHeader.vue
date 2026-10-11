<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'Price', href: '#price' },
  { name: 'Testimoni', href: '#testimoni' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="['site-header', { 'is-scrolled': isScrolled }]">
    <div class="header-container">
      <!-- 1. Logo Kiri -->
      <a href="#home" class="brand-logo" @click="closeMobileMenu">
        <span class="logo-dapoer">Dapoer</span>
        <span class="logo-faridas">farida's</span>
      </a>

      <!-- 2. Menu Navigasi Tengah (Desktop) -->
      <nav class="nav-menu">
        <ul class="nav-list">
          <li v-for="link in navLinks" :key="link.name" class="nav-item">
            <a :href="link.href" class="nav-link">{{ link.name }}</a>
          </li>
        </ul>
      </nav>

      <!-- 3. Tombol Kontak Kanan -->
      <div class="header-action">
        <a href="#kontak" class="btn-contact">Kontak</a>
        
        <!-- Toggle button untuk tampilan mobile -->
        <button 
          class="mobile-toggle" 
          aria-label="Toggle navigation menu"
          :aria-expanded="isMobileMenuOpen"
          @click="toggleMobileMenu"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <transition name="slide-fade">
      <div v-if="isMobileMenuOpen" class="mobile-menu-drawer">
        <ul class="mobile-nav-list">
          <li v-for="link in navLinks" :key="link.name">
            <a :href="link.href" class="mobile-nav-link" @click="closeMobileMenu">
              {{ link.name }}
            </a>
          </li>
          <li class="mobile-nav-btn-wrapper">
            <a href="#kontak" class="btn-contact mobile-btn" @click="closeMobileMenu">
              Kontak
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<style scoped>
/* Variabel Warna Khusus Header */
:root {
  --color-maroon: #7b1113;
  --color-maroon-dark: #5c0b0d;
  --color-cream: #cc8d26ff;
  --color-cream-hover: #ede0c7;
}

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: transparent;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 20px 0;
}

/* State ketika scroll: transparan dengan backdrop blur & border tipis */
.site-header.is-scrolled {
  background-color: rgba(26, 12, 14, 0.82);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 14px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(246, 235, 217, 0.12);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* 1. Logo Styling */
.brand-logo {
  text-decoration: none;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.65rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  user-select: none;
  transition: transform 0.2s ease;
}

.brand-logo:hover {
  transform: scale(1.02);
}

.logo-dapoer,
.logo-Dapoer {
  color: #f1c071; /* Warna Cream */
  font-weight: 700; /* Tipe Bold */
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.site-header.is-scrolled .logo-dapoer,
.site-header.is-scrolled .logo-Dapoer {
  color: #f6ebd9; /* Cream saat di-scroll */
}

.logo-faridas {
  color: #f1c071; /* Warna Cream */
  font-style: italic;
  font-weight: 800; /* Tipe Bold tegas */
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

/* 2. Nav Menu Styling */
.nav-menu {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 32px;
}

.nav-link {
  text-decoration: none;
  color: #f6ebd9;
  font-weight: 500;
  font-size: 0.98rem;
  position: relative;
  padding: 6px 2px;
  transition: color 0.25s ease;
  letter-spacing: 0.3px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #881315;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
}

.nav-link:hover {
  color: #ffffff;
}

.nav-link:hover::after {
  width: 100%;
}

/* 3. Button Kontak Styling (Box/Kotak, Cream, Hover Animation) */
.header-action {
  display: flex;
  align-items: center;
  gap: 16px;
}

.btn-contact {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #f6ebd9; /* Warna Cream */
  color: #5c0b0d; /* Maroon teks */
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  text-decoration: none;
  border-radius: 0px; /* Bentuk box/kotak */
  padding: 10px 24px;
  border: 2px solid #f6ebd9;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
}

/* Efek Hover Animasi (Slide background maroon dari bawah) */
.btn-contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #7b1113; /* Maroon */
  z-index: -1;
  transform: translateY(100%);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-contact:hover {
  color: #f6ebd9; /* Teks jadi cream */
  border-color: #7b1113;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(123, 17, 19, 0.35);
}

.btn-contact:hover::before {
  transform: translateY(0);
}

.btn-contact:active {
  transform: translateY(0);
}

/* Tombol Hamburger Mobile */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.mobile-toggle .bar {
  display: block;
  width: 100%;
  height: 3px;
  background-color: #f6ebd9;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Responsive Breakpoint */
@media (max-width: 868px) {
  .nav-menu {
    display: none;
  }

  .btn-contact {
    display: none;
  }

  .mobile-toggle {
    display: flex;
  }

  .mobile-menu-drawer {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(26, 12, 14, 0.96);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(246, 235, 217, 0.15);
    padding: 24px;
    box-sizing: border-box;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.3);
  }

  .mobile-nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .mobile-nav-link {
    text-decoration: none;
    color: #f6ebd9;
    font-size: 1.1rem;
    font-weight: 500;
    display: block;
    padding: 8px 0;
  }

  .mobile-nav-btn-wrapper {
    margin-top: 10px;
  }

  .btn-contact.mobile-btn {
    display: flex;
    width: 100%;
    text-align: center;
  }
}

/* Transisi Mobile Menu Drawer */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
