<template>
  <div class="d-flex flex-column min-vh-100 w-100 bg-success">
    <Navbar />

    <main class="w-100">
      <router-view />
    </main>

    <!-- AWAL FOOTER MI RAUDLATUL ULUM (TEKS PUTIH) -->
  <footer class="bg-primary-light text-white pt-5 pb-3">
    <div class="container pt-lg-3">
      <div class="row g-4 border-bottom border-secondary pb-5 mb-4">
        
        <div class="col-lg-4 col-md-6">
          <div class="d-flex align-items-center mb-3">
            <div class="logo-wrapper me-2 d-flex align-items-center justify-content-center">
              <img src="/Logo/mi.png" alt="Logo MI" style="height: 45px; width: auto;">
            </div>
            <span class="fw-bold h5 mb-0 text-white">MI RAUDLATUL ULUM</span>
          </div>
          <p class="text-white-50 small mb-4">
            Lembaga pendidikan dasar Islam yang mengintegrasikan kecerdasan intelektual, emosional, dan kepatuhan spiritual berdasarkan manhaj Ahlussunnah wal Jama'ah.
          </p>
        </div>

        <div class="col-lg-2 col-md-6">
          <h5 class="fw-bold mb-3 text-white">Tautan Cepat</h5>
          <ul class="list-unstyled footer-links small">
            <li class="mb-2"><a href="#" class="text-white-50 text-decoration-none footer-link-hover">Beranda</a></li>
            <li class="mb-2"><a href="#tentang" class="text-white-50 text-decoration-none footer-link-hover">Profil Sekolah</a></li>
            <li class="mb-2"><a href="#program" class="text-white-50 text-decoration-none footer-link-hover">Program Utama</a></li>
            <li class="mb-2"><a href="#ppdb" class="text-white-50 text-decoration-none footer-link-hover">PPDB Online</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6">
          <h5 class="fw-bold mb-3 text-white">Kontak Kami</h5>
          <ul class="list-unstyled text-white-50 small">
            <li class="mb-2 d-flex">
              <i class="fas fa-map-marker-alt text-accent me-2 mt-1"></i> 
              <span>Jl Kasengan, Dusun Sumberkatimoho Krejengan Kode pos 67284</span>
            </li>
            <li class="mb-2 d-flex text-white-50">
              <i class="fas fa-phone-alt text-accent me-2 mt-1"></i> 
              <span>belum tersedia</span>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6">
          <h5 class="fw-bold mb-3 text-white">Lokasi Madrasah</h5>
          <div class="map-container position-relative rounded-3 overflow-hidden shadow-sm border border-secondary" style="cursor: pointer;">
            <div class="map-wrapper" @click="openInNewTab">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63246.66980952581!2d113.34555682167972!3d-7.798626599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6ff1e0b2f7691%3A0xd2a5ec90c8e226fb!2sMI%20RAUDLATUL%20ULUM!5e0!3m2!1sid!2sid!4v1781705962350!5m2!1sid!2sid" 
                width="100%" 
                height="180" 
                style="border:0; pointer-events: none; display: block;" 
                :allowfullscreen="true" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

      </div>

      <div class="d-flex flex-column flex-sm-row justify-content-between align-items-center small text-white-50">
        <p class="mb-2 mb-sm-0">&copy; 2026 MI Raudlatul Ulum. Hak Cipta Dilindungi.</p>
        <p class="mb-0">Designed Robi Developer</p>
      </div>
    </div>
  </footer>
 
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'

const mapsUrl = 'https://maps.google.com/?q=MI+RAUDLATUL+ULUM+Krejengan'

const openInNewTab = (): void => {
  window.open(mapsUrl, '_blank')
}
</script>

<style>
/* Jangan gunakan scoped di layout jika ingin style globalnya mengalir lancar */
.map-container {
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.map-container:hover {
  transform: scale(1.02);
  border-color: #15803d !important; /* Hijau khas madrasah saat di-hover */
}
</style>