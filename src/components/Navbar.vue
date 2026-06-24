<template>
  <nav class="navbar navbar-expand-lg navbar-light sticky-top shadow-sm bg-white">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center ps-2 ps-md-4" href="#">
        <div class="logo-wrapper me-2 d-flex align-items-center justify-content-center">
          <img src="../assets/mi.png" alt="Logo MI" style="height: 45px; width: auto;">
        </div>
        <div>
          <span class="fw-bold d-block brand-title">MI Raudlatul Ulum
          </span>
          <span class="small d-block text-muted brand-subtitle">Unggul & Berakhlak Mulia</span>
        </div>
      </a>

      <button 
        class="navbar-toggler border-0" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav ms-auto mt-3 mt-lg-0 align-items-center pe-2 pe-md-4">
    <li class="nav-item">
      <router-link class="nav-link px-3" to="/" active-class="active">Beranda</router-link>
    </li>
    
    <li class="nav-item">
      <a class="nav-link px-3" href="/#tentang">Tentang</a>
    </li>
    <li class="nav-item">
      <a class="nav-link px-3" href="/#kegiatan">Kegiatan</a>
    </li>
    
    <li class="nav-item">
      <router-link to="/kelulusan" class="nav-link px-3" active-class="active">Info Kelulusan</router-link>
    </li>
    
    <li class="nav-item mt-2 mt-lg-0 ms-lg-2">
      <router-link to="/ppdb" class="btn btn-primary text-white rounded-pill px-4 btn-ppdb">SPMB Online</router-link>
    </li>
  </ul>
</div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Di sini Anda bisa menulis logika TypeScript jika dibutuhkan nantinya, 
// seperti interaksi menu, reactive state, atau fetching API PPDB.
</script>