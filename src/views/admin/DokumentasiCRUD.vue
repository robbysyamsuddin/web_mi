<template>
  <div class="p-4">
    <div class="mb-4">
      <h4 class="fw-bold mb-1">Kelola Dokumentasi Kegiatan</h4>
      <p class="text-muted small mb-0">Input dan perbarui dokumentasi kegiatan, foto, serta kategori publikasi madrasah.</p>
    </div>

    <!-- FORM INPUT & EDIT DOKUMENTASI -->
    <div class="card p-4 border-0 shadow-sm mb-4 bg-white rounded-3">
      <h5 class="fw-bold mb-3 text-dark">
        {{ isEditing ? 'Edit Dokumentasi Kegiatan' : 'Form Input Kegiatan Baru' }}
      </h5>
      <form @submit.prevent="simpanDokumentasi">
        <div class="row g-3">
          <!-- Input Judul Kegiatan (Sesuai Kolom DB) -->
          <div class="col-md-6">
            <label class="form-label small fw-bold">Judul Kegiatan</label>
            <input 
              type="text" 
              class="form-control" 
              v-model="formDokumentasi.judul_kegiatan" 
              placeholder="Contoh: Classmeeting Akhir Tahun" 
              required 
            />
          </div>

          <!-- Input Kategori -->
          <div class="col-md-6">
            <label class="form-label small fw-bold">Kategori</label>
            <select class="form-select" v-model="formDokumentasi.kategori" required>
              <option value="Classmeeting">Classmeeting</option>
              <option value="Pramuka">Pramuka</option>
              <option value="Keagamaan">Keagamaan</option>
              <option value="Ujian">Ujian Semester</option>
              <option value="Umum">Umum / Lainnya</option>
            </select>
          </div>

          <!-- Input URL Foto -->
          <div class="col-12">
            <label class="form-label small fw-bold text-primary">
              <i class="fas fa-image me-1"></i> URL Link Foto Dokumentasi (Google Drive / Unsplash / Cloud)
            </label>
            <input 
              type="url" 
              class="form-control border-primary-subtle" 
              v-model="formDokumentasi.foto_url" 
              placeholder="https://images.unsplash.com/... atau tautan langsung gambar" 
              required 
            />
          </div>

          <!-- Input Narasi Singkat (Sesuai Kolom DB) -->
          <div class="col-12">
            <label class="form-label small fw-bold">Narasi / Deskripsi Kegiatan</label>
            <textarea 
              class="form-control" 
              rows="3" 
              v-model="formDokumentasi.narasi_singkat" 
              placeholder="Tuliskan narasi menarik mengenai kegiatan tersebut di sini..." 
              required
            ></textarea>
          </div>
          
          <!-- Tombol Aksi Form -->
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
              {{ loadingSubmit ? 'Menyimpan...' : (isEditing ? 'Perbarui Data' : 'Simpan Kegiatan') }}
            </button>
          </div>
        </div>
      </form>
    </div>

    <!-- TABEL UTAMA DAFTAR DOKUMENTASI -->
    <div class="card border-0 shadow-sm rounded-3 overflow-hidden bg-white">
      <div class="p-3 bg-dark text-white fw-bold">Daftar Dokumentasi Live Konten</div>
      <div class="table-responsive">
        <table class="table align-middle mb-0 table-hover">
          <thead class="table-light text-nowrap">
            <tr>
              <th width="80" class="text-center">Foto</th>
              <th>Judul Kegiatan</th>
              <th width="150">Kategori</th>
              <th>Narasi Singkat</th>
              <th width="160" class="text-center">Aksi Kontrol</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="loadingFetch">
              <td colspan="5" class="text-center py-4 text-muted">Memuat galeri dari Supabase...</td>
            </tr>
            <tr v-else-if="listDokumentasi.length === 0">
              <td colspan="5" class="text-center py-4 text-muted">Belum ada dokumentasi kegiatan yang di-input.</td>
            </tr>
            <tr v-else v-for="item in listDokumentasi" :key="item.id">
              <td class="text-center">
                <img 
                  :src="item.foto_url" 
                  alt="Preview" 
                  class="rounded-2" 
                  style="width: 60px; height: 45px; object-fit: cover;"
                  @error="(e: any) => e.target.src = 'https://placehold.co/60x45?text=No+Img'"
                />
              </td>
              <td class="fw-bold text-dark">{{ item.judul_kegiatan }}</td>
              <td>
                <span class="badge bg-info text-white rounded-pill px-2 py-1">
                  {{ item.kategori }}
                </span>
              </td>
              <td class="text-muted small text-truncate" style="max-width: 300px;">
                {{ item.narasi_singkat }}
              </td>
              <td class="text-center text-nowrap">
                <button class="btn btn-sm btn-warning text-dark fw-bold me-1 rounded-pill px-3" @click="pilihEdit(item)">
                  Edit
                </button>
                <button class="btn btn-sm btn-danger rounded-pill px-3" @click="hapusDokumentasi(item.id)">
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
import { supabase } from '../../supabase' // Relative path aman dari error 2307

// State Kontrol UI
const listDokumentasi = ref<any[]>([])
const loadingFetch = ref(false)
const loadingSubmit = ref(false)
const isEditing = ref(false)
const currentId = ref<number | null>(null)

// Objek Data Form - SINKRON 100% DENGAN SCHEMA SQL BARU ANDA
const formDokumentasi = ref({
  judul_kegiatan: '',
  kategori: 'Classmeeting',
  narasi_singkat: '',
  foto_url: ''
})

// 1. Ambil Data dari Supabase (READ)
const fetchDokumentasi = async () => {
  loadingFetch.value = true
  try {
    const { data, error } = await supabase
      .from('kegiatan_dokumentasi')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    listDokumentasi.value = data || []
  } catch (err: any) {
    alert('Gagal memuat galeri: ' + err.message)
  } finally {
    loadingFetch.value = false
  }
}

// 2. Simpan atau Perbarui Data (CREATE & UPDATE)
const simpanDokumentasi = async () => {
  loadingSubmit.value = true
  try {
    if (isEditing.value && currentId.value !== null) {
      // Eksekusi UPDATE berdasarkan ID
      const { error } = await supabase
        .from('kegiatan_dokumentasi')
        .update({
          judul_kegiatan: formDokumentasi.value.judul_kegiatan,
          kategori: formDokumentasi.value.kategori,
          narasi_singkat: formDokumentasi.value.narasi_singkat,
          foto_url: formDokumentasi.value.foto_url
        })
        .eq('id', currentId.value)

      if (error) throw error
      alert('Dokumentasi sukses diperbarui!')
    } else {
      // Eksekusi INSERT data baru
      const { error } = await supabase
        .from('kegiatan_dokumentasi')
        .insert([formDokumentasi.value])

      if (error) throw error
      alert('Dokumentasi baru berhasil diterbitkan!')
    }

    resetForm()
    await fetchDokumentasi()
  } catch (err: any) {
    alert('Gagal menyimpan data ke Supabase: ' + err.message)
  } finally {
    loadingSubmit.value = false
  }
}

// 3. Hapus Data (DELETE)
const hapusDokumentasi = async (id: number) => {
  if (!confirm('Apakah Anda yakin ingin menghapus dokumentasi kegiatan ini?')) return

  try {
    const { error } = await supabase
      .from('kegiatan_dokumentasi')
      .delete()
      .eq('id', id)

    if (error) throw error
    alert('Dokumentasi terhapus dari cloud!')
    await fetchDokumentasi()
  } catch (err: any) {
    alert('Gagal menghapus: ' + err.message)
  }
}

// Handler Mengubah Mode Form ke Edit
const pilihEdit = (item: any) => {
  isEditing.value = true
  currentId.value = item.id
  formDokumentasi.value = {
    judul_kegiatan: item.judul_kegiatan,
    kategori: item.kategori,
    narasi_singkat: item.narasi_singkat,
    foto_url: item.foto_url
  }
}

const batalEdit = () => {
  resetForm()
}

const resetForm = () => {
  isEditing.value = false
  currentId.value = null
  formDokumentasi.value = {
    judul_kegiatan: '',
    kategori: 'Classmeeting',
    narasi_singkat: '',
    foto_url: ''
  }
}

// Ambil data otomatis saat komponen terpasang
onMounted(() => {
  fetchDokumentasi()
})
</script>

<style scoped>
.table th {
  font-weight: 600;
  font-size: 14px;
}
.card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03) !important;
}
</style>