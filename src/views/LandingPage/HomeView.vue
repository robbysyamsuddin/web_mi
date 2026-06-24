<template>
  <div>
    <Hero />
    <Keunggulan />
    <TentangKami />
    <ProgramUnggulan />
  </div>
  <section id="profil" class="py-5 bg-light">
  <div class="container">
    <div class="row align-items-center py-4">
      <div class="col-lg-6 mb-4 mb-lg-0">
        <span class="text-primary fw-bold text-uppercase tracking-wider">Mengenal Lebih Dekat</span>
        <h2 class="fw-bold text-dark mt-2 mb-4">Profil MI Raudlatul Ulum</h2>
        <p class="text-muted leading-relaxed">
          MI Raudlatul Ulum berkomitmen untuk menyelenggarakan pendidikan dasar Islam yang unggul, kompetitif, dan berakhlakul karimah. Kami memadukan kurikulum nasional dengan nilai-nilai kepesantrenan guna mencetak generasi yang cerdas secara intelektual dan kokoh secara spiritual.
        </p>
        
      </div>
      <div class="col-lg-6 text-center">
        <img src="./assets/visimisi.jpg" alt="Gedung MI Raudlatul Ulum" class="img-fluid rounded-4 shadow-sm img-profil-fit">
      </div>
    </div>
  </div>
</section>
<section id="kegiatan" class="py-5 bg-white">
  <div class="container py-4">
    <div class="text-center mb-5">
      <span class="text-primary fw-bold text-uppercase tracking-wider">Dokumentasi</span>
      <h2 class="fw-bold text-dark mt-2">Kegiatan & Kreativitas Madrasah</h2>
      <p class="text-muted mx-auto" style="max-width: 600px;">
        Intip potret keseruan, prestasi, dan agenda rutin Siswa Siswi MI Raudlatul Ulum dalam berbagai kegiatan akademik, keagamaan, maupun non-akademik.
      </p>
    </div>

    <div class="row g-4">
      <div class="col-sm-6 col-lg-4">
        <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-kegiatan">
          <div class="position-relative">
            <img src="./assets/juara.jpg" class="card-img-top img-kegiatan-fit" alt="Foto Lomba">
            <span class="badge bg-primary position-absolute top-0 start-0 m-3 rounded-pill px-3 py-2">Perlombaan</span>
          </div>
          <div class="card-body p-4">
            <h5 class="card-title fw-bold text-dark">Ajang Olimpiade dan Porseni</h5>
            <p class="card-text text-muted small">
              Para Siswa Siswi aktif berpartisipasi dan mengasah mental juara dalam berbagai ajang perlombaan mulai dari tingkat kecamatan hingga kabupaten.
            </p>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-lg-4">
        <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-kegiatan">
          <div class="position-relative">
            <img src="./assets/phbi.jpg" class="card-img-top img-kegiatan-fit" alt="Foto PHBI">
            <span class="badge bg-success position-absolute top-0 start-0 m-3 rounded-pill px-3 py-2">PHBI</span>
          </div>
          <div class="card-body p-4">
            <h5 class="card-title fw-bold text-dark">Peringatan Hari Besar Islam</h5>
            <p class="card-text text-muted small">
              Keseruan peringatan Maulid Nabi, Isra Mi'raj, dan Hari Santri Nasional sebagai sarana menanamkan rasa cinta pada sejarah dan nilai-nilai Islam.
            </p>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-lg-4">
        <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-kegiatan">
          <div class="position-relative">
            <img src="./assets/wisuda.jpg" class="card-img-top img-kegiatan-fit" alt="Foto Haflah Wisuda">
            <span class="badge bg-warning text-dark position-absolute top-0 start-0 m-3 rounded-pill px-3 py-2"> Wisuda</span>
          </div>
          <div class="card-body p-4">
            <h5 class="card-title fw-bold text-dark">Haflah Akhirussanah & Wisuda</h5>
            <p class="card-text text-muted small">
              Momen sakral pelepasan kelulusan Siswa Siswi kelas VI dan RA Serta pentas seni kreasi yang meriah bersama jajaran asatidz dan para wali murid.
            </p>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-lg-4">
        <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-kegiatan">
          <div class="position-relative">
            <img src="./assets/clasmeeting.jpg" class="card-img-top img-kegiatan-fit" alt="Foto Pramuka">
            <span class="badge bg-info text-white position-absolute top-0 start-0 m-3 rounded-pill px-3 py-2">Classmeeting</span>
          </div>
          <div class="card-body p-4">
            <h5 class="card-title fw-bold text-dark">Classmeeting</h5>
            <p class="card-text text-muted small">
              Kegiatan seru siswa-siswi MI Raudlatul Ulum pasca-ujian semester untuk menyegarkan pikiran lewat perlombaan antar-kelas yang kompetitif dan penuh tawa sebelum memasuki masa libur panjang sekolah.
            </p>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-lg-4">
        <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-kegiatan">
          <div class="position-relative">
            <img src="./assets/pembiasaan.jpg" class="card-img-top img-kegiatan-fit" alt="Foto Pramuka">
            <span class="badge bg-secondary position-absolute top-0 start-0 m-3 rounded-pill px-3 py-2">Keagamaan</span>
          </div>
          <div class="card-body p-4">
            <h5 class="card-title fw-bold text-dark">Pembiasaan Sholat & Mengaji</h5>
            <p class="card-text text-muted small">
              Kegiatan rutin sholat dhuha berjamaah, istighosah, dan tahfidz juz amma sebelum memulai KBM demi membentuk karakter islami sejak dini.
            </p>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-lg-4">
        <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-kegiatan">
          <div class="position-relative">
            <img src="./assets/kbm.jpg" class="card-img-top img-kegiatan-fit" alt="Foto Pembelajaran">
            <span class="badge bg-danger position-absolute top-0 start-0 m-3 rounded-pill px-3 py-2">KBM Interaktif</span>
          </div>
          <div class="card-body p-4">
            <h5 class="card-title fw-bold text-dark">Pembelajaran Aktif & Kreatif</h5>
            <p class="card-text text-muted small">
              Suasana kelas yang menyenangkan dengan metode belajar modern.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
/* Pengaturan tinggi rasio gambar profil */
.img-profil-fit {
  width: 100%;
  max-height: 380px;
  object-fit: cover;
}

/* Pengaturan rasio foto galeri kegiatan */
.img-kegiatan-fit {
  height: 220px;
  object-fit: cover;
  width: 100%;
}

/* Efek hover interaktif untuk kartu kegiatan */
.card-kegiatan {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-kegiatan:hover {
  transform: translateY(-7px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

/* Jarak antar id section ketika di-scroll lewat navbar */
section {
  scroll-margin-top: 70px;
}
</style>

<script setup lang="ts">
import Hero from './Hero.vue'
import Keunggulan from './Keunggulan.vue'
import TentangKami from './TentangKami.vue'
import ProgramUnggulan from './ProgramUnggulan.vue'
</script>