<template>
  <div class="p-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4 class="fw-bold mb-1">Kelola Dokumentasi Kegiatan</h4>
        <p class="text-muted small mb-0">Kelola album galeri madrasah berdasarkan 6 kategori utama.</p>
      </div>
    </div>

    <div class="card p-4 border-0 shadow-sm mb-4 bg-white rounded-3">
      <h5 class="fw-bold mb-3 text-dark">
        {{ isEditing ? 'Edit Dokumentasi Kegiatan' : 'Form Dokumen Kegiatan Baru' }}
      </h5>
      <form @submit.prevent="simpanDokumentasi">
        <div class="row g-3">
          <div class="col-md-6">
            <label class="form-label small fw-bold">Judul Kegiatan</label>
            <input 
              type="text" 
              class="form-control" 
              v-model="formDokumen.judul_kegiatan" 
              placeholder="Contoh: Juara 1 Lomba Porseni" 
              required 
            />
          </div>
          <div class="col-md-6">
            <label class="form-label small fw-bold">Kategori Kegiatan</label>
            <select class="form-select" v-model="formDokumen.kategori" required>
              <option value="" disabled selected>Pilih Kategori...</option>
              <option value="Juara Lomba">Juara Lomba</option>
              <option value="Kegiatan PHBI">Kegiatan PHBI</option>
              <option value="Dokumentasi Ujian">Dokumentasi Ujian</option>
              <option value="Haflah">Haflah</option>
              <option value="Wisuda">Wisuda</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
          <div class="col-md-12">
            <label class="form-label small fw-bold">URL Foto (Direct Link Gambar)</label>
            <input 
              type="url" 
              class="form-control" 
              v-model="formDokumen.foto_url" 
              placeholder="https://images.unsplash.com/... atau link gambar eksternal" 
              required 
            />
          </div>
          <div class="col-md-12">
            <label class="form-label small fw-bold">Narasi Singkat Kegiatan</label>
            <textarea 
              class="form-control" 
              rows="3" 
              v-model="formDokumen.narasi_singkat" 
              placeholder="Tulis deskripsi singkat jalannya acara..." 
              required
            ></textarea>
          </div>
          <div class="col-12 text-end">
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
              {{ loadingSubmit ? 'Menyimpan...' : (isEditing ? 'Perbarui Dokumentasi' : 'Simpan Dokumentasi') }}
            </button>
          </div>
        </div>
      </form>
    </div>

    <div class="card border-0 shadow-sm rounded-3 overflow-hidden bg-white">
      <div class="p-3 bg-dark text-white fw-bold">Daftar Dokumentasi Terunggah</div>
      <div class="table-responsive">
        <table class="table align-middle mb-0 table-hover">
          <thead class="table-light">
            <tr>
              <th width="80">Foto</th>
              <th>Judul Kegiatan</th>
              <th>Kategori</th>
              <th>Narasi Singkat</th>
              <th width="150" class="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="loadingFetch">
              <td colspan="5" class="text-center py-4 text-muted">Memuat data dokumentasi...</td>
            </tr>
            <tr v-else-if="listDokumentasi.length === 0">
              <td colspan="5" class="text-center py-4 text-muted">Belum ada dokumentasi kegiatan terdaftar.</td>
            </tr>
            <tr v-else v-for="item in listDokumentasi" :key="item.id">
              <td>
                <img 
                  :src="item.foto_url" 
                  alt="Preview" 
                  class="rounded-2 shadow-sm" 
                  style="width: 60px; height: 45px; object-fit: cover;"
                  @error="(e: any) => e.target.src = 'https://placehold.co/60x45?text=No+Image'"
                />
              </td>
              <td class="fw-bold text-dark">{{ item.judul_kegiatan }}</td>
              <td>
                <span class="badge bg-secondary-subtle text-secondary border border-secondary-subtle px-2 py-1">
                  {{ item.kategori }}
                </span>
              </td>
              <td class="text-muted small text-truncate" style="max-width: 300px;">
                {{ item.narasi_singkat }}
              </td>
              <td class="text-center">
                <button class="btn btn-sm btn-outline-warning me-1 rounded-pill px-3" @click="pilihEdit(item)">
                  Edit
                </button>
                <button class="btn btn-sm btn-outline-danger rounded-pill px-3" @click="hapusDokumentasi(item.id)">
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
// Pastikan Anda menyesuaikan path import supabaseClient sesuai dengan setelan proyek Anda
import { supabase } from '@/supabase' 

// State Management
const listDokumentasi = ref<any[]>([])
const loadingFetch = ref(false)
const loadingSubmit = ref(false)
const isEditing = ref(false)
const currentId = ref<number | null>(null)

// Struktur Form Default (Menyesuaikan Kolom Postgres Supabase)
const formDokumen = ref({
  judul_kegiatan: '',
  kategori: '',
  foto_url: '',
  narasi_singkat: ''
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
    alert('Gagal mengambil data: ' + err.message)
  } finally {
    loadingFetch.value = false
  }