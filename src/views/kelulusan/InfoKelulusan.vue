<template>
  <div class="container py-5 mt-4">
    <!-- Header Halaman -->
    <div class="text-center mb-5">
      <span class="badge bg-primary rounded-pill px-3 py-2 text-uppercase fw-bold mb-2">Tahun Ajaran 2025/2026</span>
      <h2 class="fw-bold text-white">Informasi Kelulusan & Pengumuman SKL</h2>
      <p class="text-white mx-auto" style="max-width: 650px;">
        Selamat kepada seluruh santri kelas VI MI Raudlatul Ulum yang telah menyelesaikan rangkaian Ujian Nasional, Ujian TKA, dan Tahfidz. Silakan unduh SKL resmi melalui tombol yang tersedia.
      </p>
    </div>

    <!-- Kotak Cari / Filter Sederhana -->
    <div class="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-light">
      <div class="row align-items-center">
        <div class="col-md-8">
          <h5 class="fw-bold mb-1 text-dark">Cari Data Kelulusan Santri</h5>
          <p class="text-muted small mb-md-0">Masukkan nama atau NISN untuk mempercepat pencarian data.</p>
        </div>
        <div class="col-md-4">
          <input 
            v-model="searchQuery" 
            type="text" 
            class="form-control rounded-pill border-secondary-subtle px-3" 
            placeholder="Ketik nama atau NISN..."
          />
        </div>
      </div>
    </div>

    <!-- Tabel Daftar Kelulusan -->
    <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
      <div class="table-responsive">
        <table class="table table-hover align-middle mb-0">
          <thead class="bg-primary text-white text-nowrap">
            <tr>
              <th scope="col" class="py-3 ps-4">No</th>
              <th scope="col" class="py-3">NISN</th>
              <th scope="col" class="py-3">Nama Santri</th>
              <th scope="col" class="py-3 text-center">Ujian Nasional</th>
              <th scope="col" class="py-3 text-center">Ujian TKA</th>
              <th scope="col" class="py-3 text-center">Tahfidz (Juz)</th>
              <th scope="col" class="py-3 text-center">Status</th>
              <th scope="col" class="py-3 text-center pe-4">Aksi SKL</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(santri, index) in filteredData" :key="santri.nisn">
              <td class="fw-bold ps-4">{{ index + 1 }}</td>
              <td class="text-secondary">{{ santri.nisn }}</td>
              <td class="fw-bold text-dark">{{ santri.nama }}</td>
              <td class="text-center"><span class="badge bg-light text-dark border">{{ santri.nilaiUn }}</span></td>
              <td class="text-center"><span class="badge bg-light text-dark border">{{ santri.nilaiTka }}</span></td>
              <td class="text-center fw-medium text-primary">{{ santri.tahfidz }} Juz</td>
              <td class="text-center">
                <span class="badge bg-success rounded-pill px-3 py-1">LULUS</span>
              </td>
              <td class="text-center pe-4">
                <a 
                  :href="santri.linkGoogleDrive" 
                  target="_blank" 
                  class="btn btn-outline-primary btn-sm rounded-pill px-3 fw-semibold d-inline-flex align-items-center"
                >
                  Cetak SKL
                </a>
              </td>
            </tr>
            <tr v-if="filteredData.length === 0">
              <td colspan="8" class="text-center py-5 text-muted">
                Data santri dengan nama atau NISN "{{ searchQuery }}" tidak ditemukan.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const searchQuery = ref('')

const dataLulus = ref([
  {
    nisn: '-',
    nama: 'Adelia Titis Prameswari',
    nilaiUn: 'B (Baik)',
    nilaiTka: '-',
    tahfidz: '-',
    linkGoogleDrive: 'https://drive.google.com/file/d/10MnE2X-s80zUrHEOJzr57n3v7H6VWv4X/view?usp=sharing'
  },
  {
    nisn: '-',
    nama: 'Amiratul Hasanah',
    nilaiUn: 'B (Baik)',
    nilaiTka: '-',
    tahfidz: '-',
    linkGoogleDrive: 'https://drive.google.com/file/d/1m6IEP6qzQ1rR8pWfzHXn4I5h1-JEbTfV/view?usp=sharing'
  },
  {
    nisn: '-',
    nama: 'Angga Dwi Cahyo',
    nilaiUn: 'B (Baik)',
    nilaiTka: '-',
    tahfidz: '-',
    linkGoogleDrive: 'https://drive.google.com/file/d/1PiFSaAtdGZ2o0G2h0Y5nA9VWv8jKEdPZ/view?usp=sharing'
  },
  {
    nisn: '-',
    nama: 'Ayu Malinda Bulgis',
    nilaiUn: 'B (Baik)',
    nilaiTka: '-',
    tahfidz: '-',
    linkGoogleDrive: 'https://drive.google.com/file/d/1LLu4COE6alts5-Sdh-3e_0lkGbsL9dJA/view?usp=sharing'
  },
  {
    nisn: '-',
    nama: 'Dzurrotun Nasyihah',
    nilaiUn: 'B (Baik)',
    nilaiTka: '-',
    tahfidz: '-',
    linkGoogleDrive: 'https://drive.google.com/file/d/1cVW4vFEvOTBllUkWaG1lCzo-DciMBCUv/view?usp=sharing'
  },
  {
    nisn: '-',
    nama: 'Feli Anggun Fransiska',
    nilaiUn: 'B (Baik)',
    nilaiTka: '-',
    tahfidz: '-',
    linkGoogleDrive: 'https://drive.google.com/file/d/1lTK95iu0c7qlcJYgsKwHypxSXAC-UZsS/view?usp=sharing'
  },
  {
    nisn: '-',
    nama: 'Moh. Affandi Ramadhani',
    nilaiUn: 'B (Baik)',
    nilaiTka: '-',
    tahfidz: '-',
    linkGoogleDrive: 'https://drive.google.com/file/d/1NttdowEVJaX4OV8-zDC7LZRWaDSnuvf4/view?usp=sharing'
  },
  {
    nisn: '-',
    nama: 'Nur Aminatul Ijabah',
    nilaiUn: 'B (Baik)',
    nilaiTka: '-',
    tahfidz: '-',
    linkGoogleDrive: 'https://drive.google.com/file/d/1YTf2R1Xbzm89f4VE8nZAlCpImOE6-lzc/view?usp=sharing'
  },
  {
    nisn: '-',
    nama: 'Putri Widari',
    nilaiUn: 'B (Baik)',
    nilaiTka: '-',
    tahfidz: '-',
    linkGoogleDrive: 'https://drive.google.com/file/d/13Q8DKMRT-GK33FbRFACuysVFPQljQ3LA/view?usp=sharing'
  }
])

const filteredData = computed(() => {
  return dataLulus.value.filter((santri) => {
    const query = searchQuery.value.toLowerCase()
    return (
      santri.nama.toLowerCase().includes(query) ||
      santri.nisn.includes(query)
    )
  })
})
</script>

<style scoped>
.table th {
  font-weight: 600;
  letter-spacing: 0.5px;
}
.table tbody tr {
  transition: background-color 0.2s ease;
}
.card {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04) !important;
}
</style>