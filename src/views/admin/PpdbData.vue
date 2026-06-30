<template>
  <div class="p-4">
    <div class="mb-4">
      <h4 class="fw-bold mb-1">Data Pendaftar PPDB (Santri Baru)</h4>
      <p class="text-muted small mb-0">Halaman kontrol untuk memverifikasi berkas dan biodata calon santri MI Raudlatul Ulum.</p>
    </div>

    <div class="card border-0 shadow-sm rounded-3 overflow-hidden bg-white">
      <div class="p-3 bg-dark text-white fw-bold d-flex justify-content-between align-items-center">
        <span>Daftar Calon Santri Baru</span>
        <span class="badge bg-primary rounded-pill">Mode Dummy Testing</span>
      </div>
      
      <div class="table-responsive">
        <table class="table align-middle mb-0 table-hover">
          <thead class="table-light text-nowrap">
            <tr>
              <th>No</th>
              <th>Nama Lengkap</th>
              <th>NISN</th>
              <th>TTL</th>
              <th>Orang Tua (Ayah/Ibu)</th>
              <th>No. WhatsApp</th>
              <th class="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in listPendaftarDummy" :key="item.id">
              <td class="fw-bold text-muted">{{ index + 1 }}</td>
              <td class="fw-bold text-dark">{{ item.nama_lengkap }}</td>
              <td><code class="text-dark">{{ item.nisn }}</code></td>
              <td>{{ item.tempat_lahir }}, {{ item.tanggal_lahir }}</td>
              <td>
                <small class="d-block text-dark">👨 {{ item.nama_ayah }}</small>
                <small class="d-block text-muted">👩 {{ item.nama_ibu }}</small>
              </td>
              <td>
                <a :href="'https://wa.me/' + item.nomor_whatsapp" target="_blank" class="btn btn-sm btn-light border text-success fw-bold">
                  <i class="fab fa-whatsapp me-1"></i>{{ item.nomor_whatsapp }}
                </a>
              </td>
              <td class="text-center text-nowrap">
                <button class="btn btn-sm btn-outline-primary rounded-pill px-3 me-1" @click="cekDetail(item)">
                  Detail
                </button>
                <button class="btn btn-sm btn-danger rounded-pill px-3" @click="hapusDummy(item.id)">
                  Hapus
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Data Dummy Terstruktur (Menghindari Error Missing Export saat Build)
const listPendaftarDummy = ref([
  {
    id: 1,
    nama_lengkap: 'Muhammad Raihan',
    nisn: '0123456789',
    tempat_lahir: 'Surabaya',
    tanggal_lahir: '12-10-2019',
    jenis_kelamin: 'Laki-laki',
    nama_ayah: 'Ahmad Muzakki',
    nama_ibu: 'Siti Aminah',
    nomor_whatsapp: '081234567890',
    alamat_lengkap: 'Jl. Raya Kenjeran No. 45, Surabaya'
  },
  {
    id: 2,
    nama_lengkap: 'Aisyah Humaira',
    nisn: '0198765432',
    tempat_lahir: 'Sidoarjo',
    tanggal_lahir: '25-02-2020',
    jenis_kelamin: 'Perempuan',
    nama_ayah: 'Budi Santoso',
    nama_ibu: 'Lailatul Qodriyah',
    nomor_whatsapp: '085712345678',
    alamat_lengkap: 'Perum Asri Blok C-12, Candi, Sidoarjo'
  }
])

const cekDetail = (item: any) => {
  alert(`Detail Santri:\nNama: ${item.nama_lengkap}\nAlamat: ${item.alamat_lengkap}`)
}

const hapusDummy = (id: number) => {
  if (confirm('Hapus data dummy ini?')) {
    listPendaftarDummy.value = listPendaftarDummy.value.filter(p => p.id !== id)
  }
}
</script>

<style scoped>
.table th {
  font-weight: 600;
  font-size: 14px;
}
</style>