<template>
  <div class="d-flex min-vh-100 bg-light text-dark">
    <aside class="bg-dark text-white p-3" style="width: 260px; min-height: 100vh;">
      <div class="d-flex align-items-center mb-4 pb-2 border-bottom border-secondary">
        <img src="/public/Logo/mi.png" alt="Logo" style="height: 35px; width: auto;" class="me-2">
        <span class="fw-bold fs-5 text-uppercase">MIRU</span>
      </div>
      
      <ul class="nav nav-pills flex-column mb-auto gap-1">
        <li class="nav-item">
          <router-link to="/admin" class="nav-link text-white d-flex align-items-center py-2" exact-active-class="active">
            <i class="fas fa-tachometer-alt me-2" style="width: 20px;"></i> Dashboard
          </router-link>
        </li>
        <li>
          <router-link to="/admin/kelulusan" class="nav-link text-white d-flex align-items-center py-2" active-class="active">
            <i class="fas fa-graduation-cap me-2" style="width: 20px;"></i> Data Kelulusan
          </router-link>
        </li>
        <li>
          <router-link to="/admin/dokumentasi" class="nav-link text-white d-flex align-items-center py-2" active-class="active">
            <i class="fas fa-images me-2" style="width: 20px;"></i> Dokumentasi
          </router-link>
        </li>
        <li>
          <router-link to="/admin/ppdb" class="nav-link text-white d-flex align-items-center py-2" active-class="active">
            <i class="fas fa-user-plus me-2" style="width: 20px;"></i> Data PPDB
          </router-link>
        </li>
      </ul>
      
      <div class="mt-5 pt-5 border-top border-secondary">
        <router-link to="/" class="btn btn-outline-light btn-sm w-100 rounded-pill">
          <i class="fas fa-arrow-left me-1"></i> Kembali ke Web
        </router-link>
      </div>
    </aside>

    <div class="flex-grow-1 d-flex flex-column">
      <header class="navbar navbar-white bg-white shadow-sm px-4 py-3 border-bottom">
        <span class="navbar-text fw-semibold text-muted">Selamat Datang, Administrator</span>
        <button class="btn btn-sm btn-outline-danger rounded-pill px-3">Keluar</button>
      </header>
      
      <main class="p-4 flex-grow-1">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import logo MI
</script>

<style scoped>
.nav-link {
  transition: all 0.2s ease;
  border-radius: 8px;
}
.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.nav-link.active {
  background-color: #0d6efd !important;
}
</style>