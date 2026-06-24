<template>
  <div>
    <div class="mb-4">
      <h3 class="fw-bold mb-1">Dashboard Utama</h3>
      <p class="text-muted small">Ringkasan data sistem kelola MI Raudlatul Ulum.</p>
    </div>

    <div class="row g-3 mb-4">
      <div class="col-md-4">
        <div class="card border-0 shadow-sm rounded-3 p-3 border-start border-primary border-4">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <p class="text-muted small mb-1 text-uppercase fw-bold">Total Siswa Lulus</p>
              <h3 class="fw-bold mb-0">120</h3>
            </div>
            <div class="bg-primary-subtle text-primary p-3 rounded-3">
              <i class="fas fa-user-graduate fa-2x"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card border-0 shadow-sm rounded-3 p-3 border-start border-success border-4">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <p class="text-muted small mb-1 text-uppercase fw-bold">Dokumentasi Kegiatan</p>
              <h3 class="fw-bold mb-0">34</h3>
            </div>
            <div class="bg-success-subtle text-success p-3 rounded-3">
              <i class="fas fa-camera-retro fa-2x"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card border-0 shadow-sm rounded-3 p-3 border-start border-warning border-4">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <p class="text-muted small mb-1 text-uppercase fw-bold">Pendaftar PPDB Baru</p>
              <h3 class="fw-bold mb-0">58</h3>
            </div>
            <div class="bg-warning-subtle text-warning p-3 rounded-3">
              <i class="fas fa-users fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card border-0 shadow-sm rounded-3 p-4 bg-white">
      <h5 class="fw-bold mb-2">Panduan Sistem CRUD Supabase</h5>
      <p class="text-secondary leading-relaxed mb-0 small">
        Gunakan menu di sebelah kiri untuk mengelola basis data secara langsung dari Supabase. Anda dapat menambahkan data kelulusan beserta tautan berkas cetak SKL Google Drive, memperbarui album galeri berdasarkan 6 kategori utama, serta memantau dan mencetak lembar PDF formulir pendaftaran PPDB online resmi lengkap dengan format kop surat madrasah.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Logika dashboard admin
</script>