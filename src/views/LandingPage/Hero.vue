<template>
  <section class="hero-section">
  
  <div class=" container pt-2 pb-5">
    
    <div class="row align-items-center text-center text-lg-start">
      
      <div class="col-lg-7 text-white mb-5 mb-lg-0">
        <span class="badge bg-accent text-white fw-bold mb-3 px-3 py-2 text-uppercase letter-spacing">
          Tahun Ajaran 2026/2027
        </span>
        <h1 class="display-4 fw-extrabold mb-3 line-height-sm text-white">
          Membentuk Generasi Qur'ani, Cerdas, dan Berteknologi
        </h1>
        <p class="lead mb-4 opacity-90 text-white">
         MI Raudlatul Ulum memadukan pendidikan formal berbasis kurikulum nasional dengan nilai-nilai kepesantrenan dan iptek modern.
        </p>
        <div class="d-sm-flex justify-content-center justify-content-lg-start gap-3">
          <router-link to="/ppdb" class="btn btn-accent text-dark fw-bold rounded-pill px-4 py-3 mb-2 mb-sm-0 shadow w-100 w-sm-auto d-inline-flex align-items-center justify-content-center tombol-daftar">
            Daftar Sekarang <i class="fas fa-arrow-right ms-2"></i></router-link>
          <a href="#tentang" class="btn btn-outline-light rounded-pill px-4 py-3 w-100 w-sm-auto">
            Profil Madrasah
          </a>
        </div>
      </div>

      <div class="col-lg-5 text-center">
        <div class="hero-image-card position-relative d-inline-block">
          <img :src="heroImg" alt="Hero Image" class="img-fluid rounded-3 shadow-lg">
        </div>
      </div>

    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import heroImg from './assets/hero.jpg'
</script>

<style scoped>
/* Efek interaktif ketika kursor diarahkan ke tombol kuning */
.tombol-daftar {
  background-color: #ffc107; /* Warna kuning standar emas Bootstrap */
  border-color: #ffc107;
  transition: all 0.25s ease-in-out; /* Animasi halus saat disentuh kursor */
}

.tombol-daftar:hover {
  background-color: #e0a800 !important; /* Berubah menjadi kuning gelap pas kursor nempel */
  border-color: #d39e00 !important;
  transform: translateY(-2px); /* Efek tombol sedikit mengangkat biar terkesan hidup */
  box-shadow: 0 6px 15px rgba(255, 193, 7, 0.4) !important; /* Efek bayangan menyala tipis */
}

.tombol-daftar:active {
  transform: translateY(0); /* Kembali normal saat tombol diklik mendalam */
}
</style>