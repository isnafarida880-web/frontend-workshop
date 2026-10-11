<script setup>
import { ref } from 'vue'

// 5 Testimoni Konsumen (1 slide berisi 1 testimoni yang rapi dari atas ke bawah)
const testimonials = [
  {
    id: 1,
    name: 'Nadia Larasati',
    role: 'Pecinta Dessert • Jakarta',
    rating: 5,
    tag: 'Mango Sticky Rice',
    titleReview: '“Ketan legit pulen & mangganya super manis!”',
    quote:
      'Jujur ini Mango Sticky Rice paling approved di lidah! Ketannya legit gurih pulen, mangganya manis berair tanpa serat mengganggu, dan saus fla santannya beneran creamy kental ga pelit. Sekali suap langsung auto ketagihan!',
  },
  {
    id: 2,
    name: 'Dimas Wicaksono',
    role: 'Office Worker • Food Enthusiast',
    rating: 5,
    tag: 'Es Pisang Idjo',
    titleReview: '“Sensasi pisang raja asli & kuah sumsum super gurih!”',
    quote:
      'Sensasi Es Pisang Idjo-nya otentik banget! Pisang rajanya empuk manis alami, balutan kulit ijonya lembut kenyal, ditambah bubur sumsum yang super gurih dan sirup khasnya yang wangi. Bikin tenggorokan adem dan mood balik segar.',
  },
  {
    id: 3,
    name: 'Clarissa Maharani',
    role: 'Ibu Rumah Tangga • Langganan Arisan',
    rating: 5,
    tag: 'Salad Buah 500ml',
    titleReview: '“Buahnya renyah garing, keju melimpah ruah!”',
    quote:
      'Salad buahnya juara umum! Buahnya beneran segar garing kress bukan yang benyek, dressing yogurt-nya asam manisnya pas banget ga bikin enek, terus topping parutan kejunya melimpah ruah sampai tumpah-tumpah. Tamu arisan pada nanyain pesen di mana!',
  },
  {
    id: 4,
    name: 'Reza Fahlevi',
    role: 'Food Enthusiast • Jakarta Selatan',
    rating: 5,
    tag: 'Dessert Box Homemade',
    titleReview: '“Kualitas homemade asli dengan bahan premium & gula murni!”',
    quote:
      'Kualitas homemade-nya beneran berasa dari suapan pertama! Terasa sekali menggunakan bahan premium dan gula murni tanpa pemanis buatan. Porsinya padat pas 500ml dengan packaging yang rapi dan higienis. Dapoer Farida’s wajib masuk daftar kuliner favorit!',
  },
  {
    id: 5,
    name: 'Siti Sarah Amalia',
    role: 'Pelanggan Setia • Repeat Order',
    rating: 5,
    tag: 'Paket Komplit Favorit',
    titleReview: '“Porsi semantap ini, rasa juara & ramah di kantong!”',
    quote:
      'Awalnya coba satu cup Mango Sticky karena penasaran, besoknya langsung order lagi bareng Salad Buah dan Es Pisang Idjo buat keluarga. Rasanya konsisten segar, manisnya pas tanpa bikin enek, dan harganya sangat bersahabat. Beneran dessert pembawa bahagia!',
  },
]

const currentIndex = ref(0)
const total = testimonials.length

const nextSlide = () => {
  if (currentIndex.value < total - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = total - 1
  }
}

const goToSlide = (idx) => {
  currentIndex.value = idx
}
</script>

<template>
  <section id="testimoni" class="testimoni-section">
    <div class="testimoni-container">
      <!-- Section Header -->
      <div class="testimoni-heading">
        <p class="tagline">Cerita Pelanggan Setia</p>
        <h2 class="testimoni-main-title">Testimoni Konsumen</h2>
        <div class="heading-ornament">
          <span class="line"></span>
          <span class="sparkle">✦</span>
          <span class="line"></span>
        </div>
      </div>

      <!-- Slider 1 Slide = 1 Testimoni -->
      <div class="slider-wrapper">
        <!-- Tombol Slide Kiri -->
        <button
          class="nav-btn prev-btn"
          aria-label="Testimoni sebelumnya"
          @click="prevSlide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="arrow-icon"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <!-- Viewport Single Card (1 Slide = 1 Testimoni Rapi Atas ke Bawah) -->
        <div class="viewport">
          <div
            class="slides-track"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="item in testimonials"
              :key="item.id"
              class="single-slide"
            >
              <article class="single-card">
                <!-- Urutan 1: Rating Bintang 5 -->
                <div class="star-row" aria-label="Rating 5 Bintang">
                  <span v-for="star in item.rating" :key="star" class="star">★</span>
                </div>

                <!-- Urutan 2: Badge Nama Menu / Tag -->
                <div class="badge-row">
                  <span class="menu-tag">{{ item.tag }}</span>
                </div>

                <!-- Urutan 3: Headline / Judul Review Bold Maroon -->
                <h3 class="review-title">{{ item.titleReview }}</h3>

                <!-- Urutan 4: Teks Review Lengkap Mengalir ke Bawah -->
                <p class="review-body">{{ item.quote }}</p>

                <!-- Urutan 5: Garis Pemisah Halus -->
                <div class="card-separator"></div>

                <!-- Urutan 6: Data Konsumen di Bawah -->
                <div class="author-block">
                  <div class="avatar-box">
                    {{ item.name.charAt(0) }}
                  </div>
                  <div class="author-meta">
                    <h4 class="author-name">{{ item.name }}</h4>
                    <p class="author-role">{{ item.role }}</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        <!-- Tombol Slide Kanan -->
        <button
          class="nav-btn next-btn"
          aria-label="Testimoni selanjutnya"
          @click="nextSlide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="arrow-icon"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <!-- Navigasi Dot Bulat Bawah -->
      <div class="dots-container">
        <button
          v-for="(item, index) in testimonials"
          :key="item.id"
          :class="['dot', { active: currentIndex === index }]"
          :aria-label="`Pilih slide ${index + 1}`"
          @click="goToSlide(index)"
        ></button>
      </div>

      <!-- Penunjuk Nomor Urut Slide -->
      <p class="counter-text">
        <span class="curr-num">0{{ currentIndex + 1 }}</span> / 0{{ total }}
      </p>
    </div>
  </section>
</template>

<style scoped>
/* Background Cream Lembut, Senada dengan Section Menu */
.testimoni-section {
  width: 100%;
  background-color: #fcf6ea;
  color: #3b1417;
  padding: 90px 24px 110px;
  position: relative;
  box-sizing: border-box;
}

.testimoni-container {
  max-width: 900px;
  margin: 0 auto;
}

/* 1. Header Section */
.testimoni-heading {
  text-align: center;
  margin-bottom: 50px;
}

.tagline {
  font-family: 'Montserrat', sans-serif;
  color: #92181b;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  margin: 0 0 10px;
}

.testimoni-main-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(2.2rem, 4vw, 3rem);
  font-weight: 800; /* Bold */
  color: #7b1113; /* Maroon */
  margin: 0 0 14px;
  letter-spacing: -0.5px;
}

.heading-ornament {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  max-width: 240px;
  margin: 0 auto;
}

.heading-ornament .line {
  flex: 1;
  height: 2px;
  background: linear-gradient(90deg, transparent, #7b1113, transparent);
}

.heading-ornament .sparkle {
  color: #7b1113;
  font-size: 0.85rem;
}

/* 2. Slider Wrapper & Navigasi */
.slider-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.nav-btn {
  background: #7b1113; /* Warna Maroon */
  color: #f1c071; /* Warna Cream */
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 18px rgba(123, 17, 19, 0.22);
  flex-shrink: 0;
}

.nav-btn:hover {
  background: #560a0c;
  transform: scale(1.08);
  box-shadow: 0 8px 22px rgba(123, 17, 19, 0.35);
}

.nav-btn:active {
  transform: scale(0.96);
}

.arrow-icon {
  width: 22px;
  height: 22px;
}

/* 3. Viewport (1 Slide = 1 Testimoni) */
.viewport {
  width: 100%;
  max-width: 780px;
  overflow: hidden;
  margin: 0 16px;
  border-radius: 8px;
}

.slides-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  width: 100%;
  align-items: stretch;
}

.single-slide {
  min-width: 100%;
  width: 100%;
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 6px;
  display: flex;
}

/* 4. Single Card: Layout Tertata Rapi dari Atas ke Bawah Tanpa Terpotong */
.single-card {
  width: 100%;
  background-color: #ffffff;
  border: 1px solid rgba(123, 17, 19, 0.12);
  border-top: 5px solid #7b1113; /* Aksen Maroon Atas */
  border-radius: 8px;
  padding: 38px 40px 32px;
  box-shadow: 0 10px 28px rgba(123, 17, 19, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  overflow: visible;
}

/* 1. Bintang */
.star-row {
  color: #df9b2d; /* Emas */
  font-size: 1.35rem;
  letter-spacing: 4px;
  margin-bottom: 10px;
  line-height: 1;
}

/* 2. Badge Menu */
.badge-row {
  margin-bottom: 18px;
}

.menu-tag {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  color: #7b1113; /* Maroon */
  background: rgba(123, 17, 19, 0.08);
  padding: 4px 14px;
  border-radius: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  display: inline-block;
}

/* 3. Judul Review Bold */
.review-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(1.15rem, 2.2vw, 1.4rem);
  font-weight: 700;
  color: #7b1113; /* Maroon */
  margin: 0 0 14px;
  line-height: 1.4;
  word-wrap: break-word;
  max-width: 100%;
}

/* 4. Body Teks Review (Mengalir Bebas, Rapi, Tanpa Terpotong) */
.review-body {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  font-weight: 500;
  font-style: italic;
  line-height: 1.75;
  color: #4a1e22; /* Teks senada maroon tua hangat */
  margin: 0 0 24px;
  max-width: 620px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* 5. Separator Halus */
.card-separator {
  width: 50px;
  height: 2px;
  background-color: rgba(123, 17, 19, 0.15);
  margin-bottom: 20px;
}

/* 6. Identitas Pengulas */
.author-block {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: auto;
}

.avatar-box {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #7b1113;
  color: #f1c071;
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(123, 17, 19, 0.2);
}

.author-meta {
  text-align: left;
}

.author-name {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.05rem;
  font-weight: 800; /* BOLD */
  color: #7b1113; /* Maroon */
  margin: 0 0 2px;
}

.author-role {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.82rem;
  font-weight: 500;
  color: #8c5d62;
  margin: 0;
}

/* 5. Indikator Dots & Counter */
.dots-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 32px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background: rgba(123, 17, 19, 0.25);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.35s ease;
}

.dot.active {
  width: 32px;
  background: #7b1113;
}

.counter-text {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: #7b1113;
  margin: 14px 0 0;
  letter-spacing: 1px;
}

.counter-text .curr-num {
  font-weight: 800;
}

/* Responsif Mobile */
@media (max-width: 768px) {
  .single-card {
    padding: 28px 20px 24px;
  }

  .viewport {
    margin: 0 4px;
    max-width: 100%;
  }

  .nav-btn {
    width: 38px;
    height: 38px;
  }

  .arrow-icon {
    width: 18px;
    height: 18px;
  }

  .review-title {
    font-size: 1.15rem;
  }

  .review-body {
    font-size: 0.98rem;
    line-height: 1.65;
  }

  .author-meta {
    text-align: center;
  }

  .author-block {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
