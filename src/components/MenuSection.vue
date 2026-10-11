<script setup>
import saladBuahImg from '../assets/image/salad.png'
import mangoStickyImg from '../assets/image/mango.png'
import esPisangIdjoImg from '../assets/image/pisang.png'

// Data Menu sesuai gambar referensi
const menuItems = [
  {
    id: 1,
    title: 'Mango Sticky Rice',
    // Foto asli produk Mango Sticky Rice dari user
    image: mangoStickyImg,
    description:
      'Mangga ketan, cemilan lokal yang sehat tinggi vitamin dan karbohidrat, menggunakan ketan premium dengan tambahan saus fla nya yang creamy dan mannga arumanis super, selain look nya yang cantik kalian pasti bakal repeat order ketika sudah nyobain, karena seenak itu',
  },
  {
    id: 2,
    title: 'Salad Buah',
    // Unsplash photo untuk fresh fruit salad with creamy topping & berrie
    image: saladBuahImg,
    description:
      'Menggunakakan Buah-buah an yang fresh, tidak hanya itu kami juga menambahkan yogurt untuk menambahkan kebutuhan nutrisi anda , dengan soaus salad yang lezat di tambah parutan keju yang melimpah,salad ini sering menjadi incaran kalangan anak" muda',
  },
  {
    id: 3,
    title: 'Es Pisang Idjoe',
    // Foto asli produk Es Pisang Idjoe dari user
    image: esPisangIdjoImg,
    description:
      'Perpaduan Pisang raja yang manis di tambah dengan bubur sumsum yang creamy dan nyanten, tambah komplit dengan tambahan bubur sagu mutiara dan susu sirup, Rasa manis yang pas, menggunakan pure sugar dan tanpa pengawet',
  },
]
</script>

<template>
  <section id="menu" class="menu-section">
    <div class="menu-container">
      <!-- Section Header -->
      <div class="menu-heading">
        <h2 class="menu-main-title">Pilihan Menu Spesial</h2>
        <div class="heading-line"></div>
      </div>

      <!-- Menu Grid 3 Kolom -->
      <div class="menu-grid">
        <article
          v-for="item in menuItems"
          :key="item.id"
          class="menu-card"
        >
          <!-- Gambar Menu -->
          <div class="card-image-box">
            <img
              :src="item.image"
              :alt="item.title"
              class="card-img"
              loading="lazy"
            />
          </div>

          <!-- Keterangan & Teks Menu -->
          <div class="card-content">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-desc">{{ item.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Section Menu dengan background Cream */
.menu-section {
  width: 100%;
  background-color: #fcf6ea; /* Background Cream elegan */
  color: #331518;
  padding: 80px 24px 100px;
  position: relative;
  box-sizing: border-box;
}

.menu-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Heading Judul Bagian Atas Menu */
.menu-heading {
  text-align: center;
  margin-bottom: 50px;
}

.menu-main-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  color: #7b1113; /* Maroon */
  margin: 0 0 12px;
  letter-spacing: -0.5px;
}

.heading-line {
  width: 70px;
  height: 3px;
  background-color: #7b1113; /* Garis aksen Maroon */
  margin: 0 auto;
  border-radius: 2px;
}

/* Layout Grid 3 Kolom sejajar */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  align-items: stretch;
}

/* Card Menu */
.menu-card {
  background-color: #fbf5e8; /* Background cream selaras */
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.menu-card:hover {
  transform: translateY(-6px);
}

/* Area Gambar */
.card-image-box {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background-color: #ebdcc6;
  border-radius: 4px;
  box-shadow: 0 4px 16px rgba(123, 17, 19, 0.08);
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.45s ease;
}

.menu-card:hover .card-img {
  transform: scale(1.04);
}

/* Area Keterangan Teks */
.card-content {
  padding: 24px 12px 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

/* Judul Menu (Bold & Warna Maroon) */
.card-title {
  font-family: 'Montserrat', system-ui, sans-serif;
  font-size: 1.45rem;
  font-weight: 800; /* Tipe text BOLD */
  color: #7b1113; /* Warna Maroon */
  margin: 0 0 14px 0;
  line-height: 1.25;
  text-align: left;
}

/* Keterangan Teks */
.card-desc {
  font-family: 'Montserrat', system-ui, sans-serif;
  font-size: 0.94rem;
  font-weight: 500;
  line-height: 1.65;
  color: #4a2b2e; /* Maroon tua keabu-abuan agar sangat nyaman dibaca */
  margin: 0;
  text-align: left;
  letter-spacing: 0.1px;
}

/* Responsivitas Layar Tablet & Mobile */
@media (max-width: 992px) {
  .menu-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 680px) {
  .menu-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .menu-section {
    padding: 60px 18px 80px;
  }

  .card-title {
    font-size: 1.35rem;
  }
}
</style>
