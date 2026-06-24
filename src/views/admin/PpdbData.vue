<!-- Komponen CetakSiswaPdf.vue -->
<template>
  <div class="print-container p-5 bg-white text-dark">
    
    <!-- 1. KOP SURAT RESMI MADRASAH -->
    <div class="d-flex align-items-center justify-content-center border-bottom border-3 border-dark pb-3 mb-4">
      <img src="@/assets/ma.png" style="height: 80px; width: auto;" class="me-3" alt="Logo MI">
      <div class="text-center">
        <h4 class="fw-bold text-uppercase mb-0" style="letter-spacing: 1px;">Yayasan Pendidikan Islam Raudlatul Ulum</h4>
        <h3 class="fw-extrabold text-uppercase mb-1" style="font-family: 'Times New Roman', Times, serif;">MADRASAH IBTIDAIYAH RAUDLATUL ULUM</h3>
        <p class="mb-0 small text-muted">Jl. Raya KH. Khasyim, Dusun Sumberkatimoho, Krejengan, Probolinggo | Telp: (0335) 123456</p>
      </div>
    </div>

    <!-- 2. JUDUL DOKUMEN -->
    <div class="text-center mb-4">
      <h5 class="fw-bold text-uppercase text-decoration-underline">KARTU BUKTI PENDAFTARAN SPMB ONLINE</h5>
      <p class="small">Nomor Pendaftaran: PPDB/2026/00{{ siswa.id }}</p>
    </div>

    <!-- 3. ISI DATA DARI DATABASE -->
    <table class="table table-bordered border-dark custom-table mb-5">
      <tr>
        <td width="30%" class="fw-bold bg-light">Nama Calon Siswa</td>
        <td>{{ siswa.nama_lengkap }}</td>
      </tr>
      <tr>
        <td class="fw-bold bg-light">NISN / NIK</td>
        <td>{{ siswa.nisn }}</td>
      </tr>
      <tr>
        <td class="fw-bold bg-light">Tempat, Tanggal Lahir</td>
        <td>{{ siswa.tempat_lahir }}, {{ siswa.tanggal_lahir }}</td>
      </tr>
      <tr>
        <td class="fw-bold bg-light">Nama Ayah / Ibu Kandung</td>
        <td>{{ siswa.nama_wali }}</td>
      </tr>
      <tr>
        <td class="fw-bold bg-light">Asal Sekolah TK/RA</td>
        <td>{{ siswa.asal_sekolah }}</td>
      </tr>
    </table>

    <!-- 4. KOLOM TANDA TANGAN (TTD KANAN BAWAH) -->
    <div class="row mt-5 pt-4">
      <div class="col-7"></div>
      <div class="col-5 text-center">
        <p class="mb-1">Probolinggo, {{ tanggalHariIni }}</p>
        <p class="fw-bold mb-5">Panitia PPDB MI Raudlatul Ulum,</p>
        <br><br>
        <p class="fw-bold text-decoration-underline mb-0">H. KUSNAIDI, S.Pd.I</p>
        <p class="small text-muted mb-0">NIP. 19820311XXXXXXXXXX</p>
      </div>
    </div>

    <!-- Tombol Aksi (Otomatis Hilang Saat Dicetak Jadi PDF) -->
    <div class="text-center mt-5 no-print">
      <button class="btn btn-danger btn-lg rounded-pill px-5 shadow" @click="eksekusiCetak">
        <i class="fas fa-print me-2"></i> Cetak Dokumen PDF Resmi
      </button>
    </div>

  </div>
</template>

<script setup lang="typescript">
import { ref, onMounted } from 'vue'

const siswa = ref({
  id: 1,
  nama_lengkap: 'Muhammad Fatih Al-Ayyubi',
  nisn: '3124556122',
  tempat_lahir: 'Probolinggo',
  tanggal_lahir: '12 Agustus 2019',
  nama_wali: 'Supriyadi',
  asal_sekolah: 'RA Perwanida 1 Krejengan'
})

const tanggalHariIni = ref(new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }))

const eksekusiCetak = () => {
  window.print() // Memanggil engine printer/PDF bawaan OS komputer
}
</script>

<style scoped>
/* 🌟 TRIK CSS MEDIA PRINT: MENYEMBUNYIKAN NAVBAR & FOOTER SAAT JADI PDF */
@media print {
  /* Hilangkan seluruh komponen luar seperti Navbar, Footer, dan Tombol Cetak */
  .no-print, navbar, footer, .navbar, .btn {
    display: none !important;
  }
  
  /* Atur agar kertas PDF bersih tanpa margin bawaan browser */
  body, .print-container {
    margin: 0 !important;
    padding: 0 !important;
    background-color: #fff !important;
  }
  
  .custom-table th, .custom-table td {
    padding: 10px !important;
    font-size: 14px;
  }
}
</style>