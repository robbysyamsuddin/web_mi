<template>
  <div class="p-4">
    <div class="mb-4">
      <h4 class="fw-bold mb-1">Kelola Data Kelulusan Santri</h4>
      <p class="text-muted small mb-0">Input data kelulusan, tautan berkas SKL, dan Rapor PDF resmi sesuai database.</p>
    </div>

    <!-- FORM INPUT & EDIT DATA KELULUSAN -->
    <div class="card p-4 border-0 shadow-sm mb-4 bg-white rounded-3">
      <h5 class="fw-bold mb-3 text-dark">
        {{ isEditing ? 'Edit Data Kelulusan' : 'Form Input Kelulusan Baru' }}
      </h5>
      <form @submit.prevent="simpanKelulusan">
        <div class="row g-3">
          <!-- Input NISN -->
          <div class="col-md-4">
            <label class="form-label small fw-bold">NISN</label>
            <input 
              type="text" 
              class="form-control" 
              v-model="formKelulusan.nisn" 
              placeholder="10 digit NISN" 
              maxlength="10"
              :disabled="isEditing" 
              required 
            />
          </div>
          <!-- Input Nama Lengkap -->
          <div class="col-md-8">
            <label class="form-label small fw-bold">Nama Lengkap</label>
            <input 
              type="text" 
              class="form-control" 
              v-model="formKelulusan.nama_lengkap" 
              placeholder="Nama lengkap santri" 
              required 
            />
          </div>
          <!-- Input Nilai TKA -->
          <div class="col-md-6">
            <label class="form-label small fw-bold">Nilai TKA</label>
            <input 
              type="text" 
              class="form-control" 
              v-model="formKelulusan.nilai_tka" 
              placeholder="Contoh: Mumtaz / Jayyid Jiddan" 
              required 
            />
          </div>
          <!-- Input Status -->
          <div class="col-md-6">
            <label class="form-label small fw-bold">Status</label>
            <select class="form-select" v-model="formKelulusan.status" required>
              <option value="LULUS">LULUS</option>
              <option value="TIDAK LULUS">TIDAK LULUS</option>
            </select>
          </div>
          <!-- Input Link Rapor PDF (Sesuai Kolom DB Anda) -->
          <div class="col-md-6">
            <label class="form-label small fw-bold text-primary">
              <i class="fas fa-file-pdf me-1"></i> Link Google Drive Rapor PDF
            </label>
            <input 
              type="url" 
              class="form-control border-primary-subtle" 
              v-model="formKelulusan.unduh_rapor_pdf" 
              placeholder="https://drive.google.com/..." 
              required 
            />
          </div>
          <!-- Input Link SKL PDF (Sesuai Kolom DB Anda) -->
          <div class="col-md-6">
            <label class="form-label small fw-bold text-success">
              <i class="fas fa-file-invoice me-1"></i> Link Google Drive SKL PDF
            </label>
            <input 
              type="url" 
              class="form-control border-success-subtle" 
              v-model="formKelulusan.unduh_skl" 
              placeholder="https://drive.google.com/..." 
              required 
            />
          </div>
          
          <!-- Tombol Aksi Kontrol Form -->
          <div class="col-12 text-end mt-4">
            <button 
              type="button" 
              v-if="isEditing" 
              class="btn btn-light px-4 rounded-pill me-2" 
              @click="batalEdit"
            >
              Batal
            </button>
            <button 
              type="submit" 
              class="btn rounded-pill px-4" 
              :class="isEditing ? 'btn-warning text-dark fw-bold' : 'btn-success'" 
              :disabled="loadingSubmit"
            >
              {{ loadingSubmit ? 'Menyimpan...' : (isEditing ? 'Perbarui Data' : 'Simpan Data') }}
            </button>
          </div>
        </div>
      </form>
    </div>

    <!-- TABEL UTAMA DAFTAR KELULUSAN -->
    <div class="card border-0 shadow-sm rounded-3 overflow-hidden bg-white">
      <div class="p-3 bg-dark text-white fw-bold">Daftar Status Kelulusan Siswa</div>
      <div class="table-responsive">
        <table class="table align-middle mb-0 table-hover">
          <thead class="table-light text-nowrap">
            <tr>
              <th width="120">NISN</th>
              <th>Nama Lengkap</th>
              <th>Nilai TKA</th>
              <th>Status</th>
              <th class="text-center">Aksi Berkas</th>
              <th width="160" class="text-center">Aksi Kontrol</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="loadingFetch">
              <td colspan="6" class="text-center py-4 text-muted">Memuat data dari Supabase...</td>
            </tr>
            <tr v-else-if="listKelulusan.length === 0">
              <td colspan="6" class="text-center py-4 text-muted">Belum ada data kelulusan santri.</td>
            </tr>
            <tr v-else v-for="item in listKelulusan" :key="item.nisn">
              <td class="fw-bold text-secondary">{{ item.nisn }}</td>
              <td class="fw-bold text-dark">{{ item.nama_lengkap }}</td>
              <td>{{ item.nilai_tka }}</td>
              <td>
                <span class="badge" :class="item.status === 'LULUS' ? 'bg-success' : 'bg-danger'">
                  {{ item.status }}
                </span>
              </td>
              <td class="text-center text-nowrap">
                <!-- Tombol Berkas Rapor PDF -->
                <a :href="item.unduh_rapor_pdf" target="_blank" class="btn btn-xs btn-outline-info rounded-pill px-2 py-1 small me-1">
                  <i class="fas fa-file-pdf"></i> Rapor
                </a>
                <!-- Tombol Berkas SKL PDF -->
                <a :href="item.unduh_skl" target="_blank" class="btn btn-xs btn-outline-success rounded-pill px-2 py-1 small">
                  <i class="fas fa-external-link-alt"></i> SKL
                </a>
              </td>
              <td class="text-center text-nowrap">
                <button class="btn btn-sm btn-warning text-dark fw-bold me-1 rounded-pill px-3" @click="pilihEdit(item)">
                  Edit
                </button>
                <button class="btn btn-sm btn-danger rounded-pill px-3" @click="hapusKelulusan(item.nisn)">
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
import { ref, onMounted } from 'vue'
import { supabase } from '../../supabase' // Sesuaikan path ini dengan letak file inisialisasi supabase Anda

// State Kontrol UI
const listKelulusan = ref<any[]>([])
const loadingFetch = ref(false)
const loadingSubmit = ref(false)
const isEditing = ref(false)

// Objek Data Form - SINKRON DENGAN POSTGRESQL SUPABASE
const formKelulusan = ref({
  nisn: '',
  nama_lengkap: '',
  nilai_tka: '',
  status: 'LULUS',
  unduh_skl: '',
  unduh_rapor_pdf: ''
})

// 1. Ambil Data (READ)
const fetchKelulusan = async () => {
  loadingFetch.value = true
  try {
    const { data, error } = await supabase
      .from('santri_kelulusan')
      .select('*')
      .order('nama_lengkap', { ascending: true })

    if (error) throw error
    listKelulusan.value = data || []
  } catch (err: any) {
    alert('Gagal mengambil data dari Supabase: ' + err.message)
  } finally {
    loadingFetch.value = false
  }
}

// 2. Simpan atau Perbarui Data (CREATE & UPDATE)
const simpanKelulusan = async () => {
  loadingSubmit.value = true
  try {
    if (isEditing.value) {
      // Eksekusi UPDATE berdasarkan NISN
      const { error } = await supabase
        .from('santri_kelulusan')
        .update({
          nama_lengkap: formKelulusan.value.nama_lengkap,
          nilai_tka: formKelulusan.value.nilai_tka,
          status: formKelulusan.value.status,
          unduh_skl: formKelulusan.value.unduh_skl,
          unduh_rapor_pdf: formKelulusan.value.unduh_rapor_pdf
        })
        .eq('nisn', formKelulusan.value.nisn)

      if (error) throw error
      alert('Data kelulusan santri sukses diperbarui!')
    } else {
      // Eksekusi INSERT data baru ke database
      const { error } = await supabase
        .from('santri_kelulusan')
        .insert([formKelulusan.value])

      if (error) throw error
      alert('Data kelulusan santri baru sukses disimpan!')
    }

    resetForm()
    await fetchKelulusan()
  } catch (err: any) {
    alert('Gagal mengeksekusi operasi ke Supabase: ' + err.message)
  } finally {
    loadingSubmit.value = false
  }
}

// 3. Hapus Data (DELETE)
const hapusKelulusan = async (nisn: string) => {
  if (!confirm(`Apakah Anda yakin ingin menghapus permanen data santri dengan NISN ${nisn}?`)) return

  try {
    const { error } = await supabase
      .from('santri_kelulusan')
      .delete()
      .eq('nisn', nisn)

    if (error) throw error
    alert('Data santri berhasil dihapus dari database!')
    await fetchKelulusan()
  } catch (err: any) {
    alert('Gagal menghapus data: ' + err.message)
  }
}

// Handler Mengubah Mode Form ke Edit
const pilihEdit = (item: any) => {
  isEditing.value = true
  formKelulusan.value = {
    nisn: item.nisn,
    nama_lengkap: item.nama_lengkap,
    nilai_tka: item.nilai_tka,
    status: item.status,
    unduh_skl: item.unduh_skl,
    unduh_rapor_pdf: item.unduh_rapor_pdf || ''
  }
}

const batalEdit = () => {
  resetForm()
}

const resetForm = () => {
  isEditing.value = false
  formKelulusan.value = {
    nisn: '',
    nama_lengkap: '',
    nilai_tka: '',
    status: 'LULUS',
    unduh_skl: '',
    unduh_rapor_pdf: ''
  }
}

// Panggil otomatis saat file ter-render
onMounted(() => {
  fetchKelulusan()
})
</script>

<style scoped>
.table th {
  font-weight: 600;
  font-size: 14px;
}
.btn-xs {
  padding: 2px 8px;
  font-size: 11px;
}
.card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03) !important;
}
</style>