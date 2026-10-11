<script setup>
import { ref } from 'vue'

// State form order (murni frontend, tanpa backend)
const formData = ref({
  name: '',
  alamat: '',
  orders: '',
  note: '',
})

const isSubmitted = ref(false)

const handleSubmit = () => {
  // Hanya feedback UI di sisi frontend (misal direct ke WhatsApp atau alert sukses)
  if (!formData.value.name) return
  isSubmitted.value = true
  setTimeout(() => {
    isSubmitted.value = false
    formData.value = { name: '', alamat: '', orders: '', note: '' }
  }, 4000)
}
</script>

<template>
  <footer id="kontak" class="order-footer-section">
    <!-- 1. Bagian Form "happy orders" (Background Dusty Rose / Warm Maroon Soft) -->
    <div class="order-form-container">
      <div class="form-wrapper">
        <p class="subtitle-tag">GET IN TOUCH</p>
        <h2 class="main-title">Happy Order</h2>

        <form class="order-form" @submit.prevent="handleSubmit">
          <!-- Row 1: Your name & Alamat -->
          <div class="form-row two-cols">
            <div class="input-group">
              <input
                v-model="formData.name"
                type="text"
                class="form-control"
                placeholder="Your name"
                required
              />
            </div>
            <div class="input-group">
              <input
                v-model="formData.alamat"
                type="text"
                class="form-control"
                placeholder="Alamat"
                required
              />
            </div>
          </div>

          <!-- Row 2: orders -->
          <div class="form-row single-col">
            <div class="input-group">
              <input
                v-model="formData.orders"
                type="text"
                class="form-control"
                placeholder="orders (Contoh: 2 Mango Sticky Rice, 1 Salad Buah)"
                required
              />
            </div>
          </div>

          <!-- Row 3: note (textarea besar) -->
          <div class="form-row single-col">
            <div class="input-group">
              <textarea
                v-model="formData.note"
                class="form-control form-textarea"
                placeholder="note"
                rows="6"
              ></textarea>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="form-action">
            <button type="submit" class="btn-submit">
              Submit
            </button>
          </div>

          <!-- Feedback alert sukses di sisi frontend -->
          <transition name="fade">
            <div v-if="isSubmitted" class="success-message">
              Pesanan berhasil dicatat! Tim Dapoer Farida's siap melayani Anda.
            </div>
          </transition>
        </form>
      </div>
    </div>

    <!-- 2. Bagian Footer Bawah Gelap (#121316 / Dark Charcoal Elegan) -->
    <div class="footer-bottom">
      <div class="footer-container">
        <!-- Kolom 1: Menerima Pesanan Area Demak Semarang Kudus (Pojok Kiri Bawah) -->
        <div class="footer-col col-about">
          <h3 class="col-title">Dapoer Farida's</h3>
          <p class="order-coverage-badge">
            Menerima pesanan dalam jumlah besar area <strong>Demak, Semarang, Kudus</strong>
          </p>
          <p class="col-desc">
            Sajian dessert homemade berkualitas premium dengan bahan-bahan segar pilihan, tanpa pemanis buatan dan higienis untuk berbagai acara spesial Anda.
          </p>
        </div>

        <!-- Kolom 2: Menus (Disesuaikan dengan Menu yang Dijual) -->
        <div class="footer-col col-menus">
          <h3 class="col-title">Menus</h3>
          <ul class="footer-menu-list">
            <li><a href="#menu">Mango Sticky Rice 500ml</a></li>
            <li><a href="#menu">Salad Buah Segar 500ml</a></li>
            <li><a href="#menu">Es Pisang Idjo Asli 500ml</a></li>
            <li><a href="#price">Paket Acara & Porsi Besar</a></li>
          </ul>
        </div>

        <!-- Kolom 3: Layanan & Kebijakan -->
        <div class="footer-col col-services">
          <h3 class="col-title">Layanan</h3>
          <ul class="footer-menu-list">
            <li><a href="#kontak">Pemesanan Harian</a></li>
            <li><a href="#kontak">Catering Acara / Arisan</a></li>
            <li><a href="#kontak">Pengiriman Terjadwal</a></li>
            <li><a href="#testimoni">Ulasan Pelanggan</a></li>
          </ul>
        </div>

        <!-- Kolom 4: Contact Us (WhatsApp, Instagram, Grab & ShopeeFood) -->
        <div class="footer-col col-contact">
          <h3 class="col-title">Contact us</h3>
          <ul class="contact-info-list">
            <!-- WhatsApp -->
            <li class="contact-item">
              <span class="icon-bubble whatsapp-bubble">
                <!-- SVG WhatsApp -->
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/>
                </svg>
              </span>
              <a href="https://wa.me/6287753574687" target="_blank" rel="noopener" class="contact-text">
                087753574687
              </a>
            </li>

            <!-- Instagram -->
            <li class="contact-item">
              <span class="icon-bubble instagram-bubble">
                <!-- SVG Instagram -->
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </span>
              <span class="contact-text">Dapoer Farida's</span>
            </li>

            <!-- Grab & ShopeeFood -->
            <li class="contact-item">
              <span class="icon-bubble delivery-bubble">
                <!-- SVG Store / Food Delivery -->
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </span>
              <div class="delivery-details">
                <span class="delivery-platform">Grab & ShopeeFood :</span>
                <span class="contact-text highlight">Dapoer farida's</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright Baris Terbawah -->
      <div class="footer-copyright">
        <p>© 2026 Dapoer Farida's. All Rights Reserved. Fresh and Home Made.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* 1. Area Form "happy orders" (Latar Belakang Dusty Rose / Rose Gold Muted) */
.order-footer-section {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.order-form-container {
  background-color: #fbf5e8; /* Warna Cream hangat, 100% serasi dengan Menu & Testimoni */
  border-top: 1px solid rgba(123, 17, 19, 0.1);
  padding: 85px 24px 95px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.form-wrapper {
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.subtitle-tag {
  font-family: 'Montserrat', sans-serif;
  color: #92181b; /* Maroon halus senada */
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  margin: 0 0 10px;
}

.main-title {
  font-family: 'Playfair Display', Georgia, serif;
  color: #7b1113; /* Warna Maroon pekat */
  font-size: clamp(2.4rem, 4.5vw, 3.4rem);
  font-weight: 800;
  letter-spacing: -0.5px;
  margin: 0 0 36px;
  text-shadow: 0 1px 3px rgba(123, 17, 19, 0.12);
}

.order-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-row {
  width: 100%;
  display: flex;
  gap: 20px;
}

.form-row.two-cols .input-group {
  flex: 1;
}

.form-row.single-col .input-group {
  width: 100%;
}

.input-group {
  width: 100%;
}

/* Style Input & Textarea dengan Latar Putih Bersih & Border Cream Halus */
.form-control {
  width: 100%;
  background-color: #ffffff;
  border: 1.5px solid rgba(123, 17, 19, 0.18);
  border-radius: 4px;
  padding: 16px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.98rem;
  color: #2b1f23;
  outline: none;
  box-sizing: border-box;
  transition: all 0.25s ease;
  box-shadow: 0 2px 8px rgba(123, 17, 19, 0.04);
}

.form-control::placeholder {
  color: #8c6d71;
  font-weight: 500;
}

.form-control:focus {
  background-color: #ffffff;
  border-color: #7b1113;
  box-shadow: 0 4px 16px rgba(123, 17, 19, 0.12);
}

.form-textarea {
  resize: vertical;
  min-height: 140px;
}

/* Tombol Submit Maroon Mewah dengan Efek Hover Halus */
.form-action {
  display: flex;
  justify-content: center;
  margin-top: 14px;
}

.btn-submit {
  background-color: #7b1113; /* Warna Maroon elegan */
  color: #f1c071; /* Teks Cream */
  border: 2px solid #7b1113;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  padding: 14px 70px;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 18px rgba(123, 17, 19, 0.25);
}

.btn-submit:hover {
  background-color: #5a090b;
  border-color: #5a090b;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(123, 17, 19, 0.38);
}

.btn-submit:active {
  transform: translateY(0);
}

.success-message {
  margin-top: 16px;
  background-color: #2b1f23;
  color: #f1c071;
  padding: 14px 20px;
  border-radius: 4px;
  font-size: 0.92rem;
  font-weight: 600;
}

/* 2. Area Footer Bawah Gelap (#161719 / Dark Footer) */
.footer-bottom {
  background-color: #151619; /* Latar gelap pekat sesuai gambar */
  color: #e5e5e8;
  padding: 70px 24px 30px;
  box-sizing: border-box;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1.3fr;
  gap: 40px;
}

.footer-col {
  display: flex;
  flex-direction: column;
}

.col-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.15rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 20px;
  letter-spacing: 0.5px;
}

/* Pojok Kiri Bawah: Menerima Pesanan Jumlah Besar */
.order-coverage-badge {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.98rem;
  line-height: 1.6;
  color: #f1c071; /* Highlight warna cream keemasan */
  background: rgba(241, 192, 113, 0.08);
  border-left: 3px solid #f1c071;
  padding: 10px 14px;
  margin: 0 0 16px;
  border-radius: 0 4px 4px 0;
}

.order-coverage-badge strong {
  color: #ffffff;
}

.col-desc {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.88rem;
  line-height: 1.65;
  color: #9fa1a8;
  margin: 0;
}

/* Menu & Service Links */
.footer-menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-menu-list a {
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  color: #a4a7b0;
  transition: color 0.25s ease, transform 0.25s ease;
  display: inline-block;
}

.footer-menu-list a:hover {
  color: #f1c071;
  transform: translateX(4px);
}

/* Contact Us Styling */
.contact-info-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 14px;
}

.icon-bubble {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f1c071;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.contact-item:hover .icon-bubble {
  background: #7b1113;
  color: #ffffff;
  transform: scale(1.06);
}

.contact-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #e5e5e8;
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-item a.contact-text:hover {
  color: #f1c071;
}

.delivery-details {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.delivery-platform {
  font-size: 0.8rem;
  color: #9fa1a8;
}

.highlight {
  color: #f1c071;
  font-weight: 700;
}

/* Copyright Baris Terbawah */
.footer-copyright {
  max-width: 1200px;
  margin: 50px auto 0;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
}

.footer-copyright p {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.82rem;
  color: #72757e;
  margin: 0;
}

/* Animasi Fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsivitas Layar Tablet & HP */
@media (max-width: 992px) {
  .footer-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
  }
}

@media (max-width: 680px) {
  .form-row.two-cols {
    flex-direction: column;
    gap: 18px;
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .btn-submit {
    width: 100%;
  }

  .order-form-container {
    padding: 60px 18px 70px;
  }
}
</style>
