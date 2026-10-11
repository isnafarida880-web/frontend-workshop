<script setup>
import saladBuahImg from '../assets/image/salad.png'
import mangoStickyImg from '../assets/image/mango.png'
import esPisangIdjoImg from '../assets/image/pisang.png'

// Data Price List sesuai permintaan
const priceList = [
  {
    id: 1,
    name: 'Mango Sticky',
    price: 'Rp. 17.000',
    size: '500ml',
    // Foto produk Mango Sticky Rice asli dari user
    image: mangoStickyImg,
  },
  {
    id: 2,
    name: 'Salad Buah',
    price: 'Rp. 22.000',
    size: '500ml',
    // Gambar nanti diisi sendiri oleh user
    image: saladBuahImg,
  },
  {
    id: 3,
    name: 'Es Pisang Idjo',
    price: 'Rp. 15.000',
    size: '500ml',
    // Foto produk Es Pisang Idjo asli dari user
    image: esPisangIdjoImg,
  },
]
</script>

<template>
  <section id="price" class="price-section">
    <div class="price-container">
      <!-- Section Header -->
      <div class="price-heading">
        <h2 class="price-main-title">Daftar Harga</h2>
        <div class="price-divider">
          <span class="line"></span>
          <span class="sparkle">✦</span>
          <span class="line"></span>
        </div>
      </div>

      <!-- Konsep 3 Sejajar -->
      <div class="price-grid">
        <div
          v-for="item in priceList"
          :key="item.id"
          class="price-card"
        >
          <!-- 3 Space Gambar Kosong (Nanti diisi sendiri oleh user) -->
          <div class="image-placeholder">
            <template v-if="item.image">
              <img :src="item.image" :alt="item.name" class="uploaded-img" />
            </template>
            <template v-else>
              <div class="empty-state">
                <svg
                  class="photo-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
                <span class="placeholder-text">Space Gambar Kosong</span>
                <span class="placeholder-hint">({{ item.name }})</span>
              </div>
            </template>
          </div>

          <!-- Keterangan Item: Text Bold Warna Cream -->
          <div class="price-details">
            <h3 class="item-name">{{ item.name }}</h3>
            <div class="item-pricing">
              <span class="item-price">{{ item.price }}</span>
              <span class="item-size">{{ item.size }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Section Price dengan Background Maroon Mewah */
.price-section {
  width: 100%;
  background: radial-gradient(circle at center, #570a0e 0%, #3e0406 60%, #260103 100%);
  color: #f1c071;
  padding: 90px 24px 110px;
  position: relative;
  box-sizing: border-box;
}

.price-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Judul Section */
.price-heading {
  text-align: center;
  margin-bottom: 54px;
}

.price-main-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(2.2rem, 4vw, 3rem);
  font-weight: 800;
  color: #f1c071; /* Text Cream */
  margin: 0 0 12px;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
}

.price-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  max-width: 260px;
  margin: 0 auto;
}

.price-divider .line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(241, 192, 113, 0.5), transparent);
}

.price-divider .sparkle {
  color: #f1c071;
  font-size: 0.85rem;
}

/* 3 Sejajar Grid */
.price-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  align-items: stretch;
}

/* Card Price */
.price-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(241, 192, 113, 0.22);
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
  backdrop-filter: blur(6px);
}

.price-card:hover {
  transform: translateY(-6px);
  border-color: rgba(241, 192, 113, 0.6);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.45);
}

/* Space Gambar Kosong */
.image-placeholder {
  width: 100%;
  aspect-ratio: 1 / 1;
  background: rgba(0, 0, 0, 0.25);
  border: 2px dashed rgba(241, 192, 113, 0.4);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s ease;
}

.price-card:hover .image-placeholder {
  border-color: rgba(241, 192, 113, 0.75);
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  text-align: center;
  user-select: none;
}

.photo-icon {
  width: 44px;
  height: 44px;
  color: rgba(241, 192, 113, 0.55);
}

.placeholder-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  color: #f1c071; /* Text Cream */
  opacity: 0.9;
  letter-spacing: 0.4px;
}

.placeholder-hint {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  color: rgba(241, 192, 113, 0.65);
}

.uploaded-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Area Detail Keterangan (Text Bold Warna Cream) */
.price-details {
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
}

.item-name {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.35rem;
  font-weight: 800; /* Text BOLD */
  color: #f1c071; /* Warna CREAM */
  margin: 0;
  letter-spacing: 0.3px;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
}

.item-pricing {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.item-price {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: 800; /* Text BOLD */
  color: #fdf5e8; /* Warna Cream terang menonjol */
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
}

.item-size {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  font-weight: 700; /* Text BOLD */
  color: #d19a4d; /* Cream sedikit lebih gelap / hangat */
  background: rgba(241, 192, 113, 0.12);
  padding: 3px 10px;
  border-radius: 3px;
  border: 1px solid rgba(241, 192, 113, 0.25);
}

/* Responsif */
@media (max-width: 900px) {
  .price-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 600px) {
  .price-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .price-section {
    padding: 70px 18px 90px;
  }
}
</style>
