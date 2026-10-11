<script setup>
// Props atau emit dapat ditambahkan jika diperlukan interaktivitas lebih lanjut
</script>

<template>
  <section id="home" class="hero-section">
    <!-- Ornamen motif background tipis untuk nuansa mewah -->
    <div class="hero-bg-overlay"></div>

    <div class="hero-content">
      <!-- Badge / Subtitle Pembuka -->
      <div class="ornament-divider">
        <span class="line"></span>
        <span class="sparkle">✦</span>
        <span class="line"></span>
      </div>

      <!-- Logo Desain Besar di Tengah -->
      <div class="hero-brand">
        <h1 class="brand-title">
          <span class="word-dapoer">Dapoer</span>
          <span class="word-faridas">Farida's</span>
        </h1>
      </div>

      <!-- Slogan / Subtitle "Fresh and Home Made" -->
      <p class="brand-tagline">
        <span class="tagline-bullet">~</span>
        fresh and home made
        <span class="tagline-bullet">~</span>
      </p>

      <!-- Aksen Penutup Ornamen Bawah -->
      <div class="ornament-bottom">
        <span class="dots">•••</span>
      </div>
    </div>

    <!-- Scroll Down Indicator -->
    <a href="#menu" class="scroll-indicator" aria-label="Scroll ke menu">
      <span class="mouse-icon">
        <span class="wheel"></span>
      </span>
    </a>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Background warna Maroon elegan dengan gradasi kedalaman visual */
  background: radial-gradient(circle at center, #630c10 0%, #460608 55%, #2e0204 100%);
  color: #f1c071;
  overflow: hidden;
  box-sizing: border-box;
  padding: 120px 24px 80px;
  text-align: center;
}

/* Layer aksen tekstur & glow lembut */
.hero-bg-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(rgba(241, 192, 113, 0.08) 1px, transparent 1px),
    radial-gradient(rgba(241, 192, 113, 0.04) 1px, transparent 1px);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
  opacity: 0.7;
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fadeInHero 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* 1. Ornamen Garis Atas */
.ornament-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 24px;
  width: 100%;
  max-width: 320px;
}

.ornament-divider .line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(241, 192, 113, 0.5), transparent);
}

.ornament-divider .sparkle {
  color: #f1c071;
  font-size: 0.9rem;
  opacity: 0.85;
}

/* 2. Logo Desain Tengah (Dapoer Farida's) */
.hero-brand {
  margin: 0;
  padding: 0;
}

.brand-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(3.2rem, 8vw, 6.2rem);
  font-weight: 700;
  line-height: 1.1;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  gap: 0.28em;
  letter-spacing: -0.02em;
  user-select: none;
  /* Efek drop-shadow untuk nuansa megah */
  filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.55));
}

.word-dapoer {
  color: #f1c071; /* Warna Cream utama */
  font-weight: 700;
  letter-spacing: 1px;
}

.word-faridas {
  color: #fdf5e8; /* Nuansa Cream terang elegan */
  font-style: italic;
  font-weight: 600;
  position: relative;
}

/* 3. Slogan "fresh and home made" */
.brand-tagline {
  font-family: 'Montserrat', sans-serif;
  /* Warna Cream agak gelap sedikit sesuai permintaan */
  color: #d19a4d;
  font-size: clamp(1rem, 2.4vw, 1.45rem);
  font-weight: 400;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  margin: 28px 0 0;
  display: inline-flex;
  align-items: center;
  gap: 14px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

.tagline-bullet {
  color: rgba(209, 154, 77, 0.6);
  font-weight: 300;
}

/* 4. Ornamen Titik Bawah */
.ornament-bottom {
  margin-top: 22px;
}

.ornament-bottom .dots {
  color: #b58039;
  letter-spacing: 8px;
  font-size: 0.85rem;
  opacity: 0.7;
}

/* Scroll indicator animasi */
.scroll-indicator {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  z-index: 2;
  opacity: 0.75;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.scroll-indicator:hover {
  opacity: 1;
  transform: translateX(-50%) translateY(3px);
}

.mouse-icon {
  width: 22px;
  height: 36px;
  border: 2px solid rgba(241, 192, 113, 0.6);
  border-radius: 12px;
  position: relative;
}

.mouse-icon .wheel {
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 7px;
  background-color: #f1c071;
  border-radius: 2px;
  animation: mouseWheel 1.8s infinite;
}

/* Animasi */
@keyframes fadeInHero {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes mouseWheel {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(14px);
  }
}

/* Responsif Mobile */
@media (max-width: 640px) {
  .brand-title {
    flex-direction: column;
    gap: 0;
    line-height: 1.05;
  }

  .brand-tagline {
    letter-spacing: 0.22em;
    gap: 8px;
  }

  .ornament-divider {
    max-width: 220px;
  }
}
</style>
