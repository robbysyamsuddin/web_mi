<template>
  <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
    <div class="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom">
      <div class="d-flex align-items-center">
        <div class="bg-success text-white rounded-3 p-2 me-3 d-flex align-items-center justify-content-center" style="width: 45px; height: 45px;">
          <i class="fas fa-file-invoice fa-lg"></i>
        </div>
        <div>
          <h4 class="fw-bold text-dark m-0">Formulir Pendaftaran Santri Baru</h4>
          <small class="text-muted">TA 2026/2027 • Sistem Terintegrasi</small>
        </div>
      </div>
      <button @click="$emit('kembali')" class="btn btn-outline-secondary btn-sm rounded-pill px-3">
        <i class="fas fa-arrow-left me-1"></i> Kembali
      </button>
    </div>

    <div v-if="isSuccess" class="alert alert-success rounded-3 p-3 mb-4 shadow-sm" role="alert">
      <h5 class="fw-bold mb-1"><i class="fas fa-check-circle me-2"></i>Pendaftaran Berhasil!</h5>
      <p class="small mb-0">Alhamdulillah, data Ananda <strong>{{ namaTerdaftar }}</strong> telah disimpan ke sistem database madrasah.</p>
    </div>

    <form @submit.prevent="submitForm">
      
      <div class="form-section mb-4">
        <h5 class="fw-bold text-success mb-3"><i class="fas fa-user-graduate me-2"></i>1. DATA CALON SISWA</h5>
        
        <div class="mb-3">
          <label class="form-label small fw-bold">Nama Lengkap Siswa <span class="text-danger">*</span></label>
          <input v-model="formInput.namaSiswa" type="text" class="form-control rounded-3 p-3 shadow-none border" placeholder="Sesuai Akta Kelahiran" required />
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label small fw-bold">NISN (Jika Ada)</label>
            <input v-model="formInput.nisn" type="text" maxlength="10" class="form-control rounded-3 p-3 shadow-none border" placeholder="10 Digit Angka" />
          </div>
          <div class="col-md-6 mb-3">
            <label class="form-label small fw-bold">NIK Siswa <span class="text-danger">*</span></label>
            <input v-model="formInput.nikSiswa" type="text" maxlength="16" class="form-control rounded-3 p-3 shadow-none border" placeholder="Sesuai KK (16 Digit)" required />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label small fw-bold">Tempat Lahir <span class="text-danger">*</span></label>
            <input v-model="formInput.tempatLahir" type="text" class="form-control rounded-3 p-3 shadow-none border" placeholder="Kota/Kabupaten" required />
          </div>
          <div class="col-md-6 mb-3">
            <label class="form-label small fw-bold">Tanggal Lahir <span class="text-danger">*</span></label>
            <input v-model="formInput.tanggalLahir" type="date" class="form-control rounded-3 p-3 shadow-none border" required />
          </div>
        </div>

        <div class="mb-3">
          <label class="form-label small fw-bold">Jenis Kelamin <span class="text-danger">*</span></label>
          <div class="d-flex gap-4 pt-1">
            <div class="form-check">
              <input v-model="formInput.jenisKelamin" class="form-check-input" type="radio" value="Laki-laki" id="jkL" required>
              <label class="form-check-label" for="jkL">Laki-Laki</label>
            </div>
            <div class="form-check">
              <input v-model="formInput.jenisKelamin" class="form-check-input" type="radio" value="Perempuan" id="jkP">
              <label class="form-check-label" for="jkP">Perempuan</label>
            </div>
          </div>
        </div>
      </div>

      <div class="form-section mb-4">
        <h5 class="fw-bold text-success mb-3"><i class="fas fa-users me-2"></i>2. DATA ORANG TUA / WALI</h5>
        
        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label small fw-bold">Nama Ayah Kandung <span class="text-danger">*</span></label>
            <input v-model="formInput.namaAyah" type="text" class="form-control rounded-3 p-3 shadow-none border" required />
          </div>
          <div class="col-md-6 mb-3">
            <label class="form-label small fw-bold">Nama Ibu Kandung <span class="text-danger">*</span></label>
            <input v-model="formInput.namaIbu" type="text" class="form-control rounded-3 p-3 shadow-none border" required />
          </div>
        </div>

        <div class="mb-3">
          <label class="form-label small fw-bold">No. WhatsApp Aktif (Untuk Info Seleksi) <span class="text-danger">*</span></label>
          <input v-model="formInput.noWhatsapp" type="tel" class="form-control rounded-3 p-3 shadow-none border" placeholder="Contoh: 081234567xxx" required />
        </div>
      </div>

      <div class="form-section mb-5">
        <h5 class="fw-bold text-success mb-3"><i class="fas fa-cloud-upload-alt me-2"></i>3. UPLOAD DOKUMEN PENDUKUNG</h5>
        <p class="text-muted small mb-3">Format file yang diperbolehkan: <strong>PDF / JPG / PNG</strong> (Maksimal ukuran tiap file 2 MB).</p>
        
        <div class="row g-3">
          <div class="col-md-6">
            <div class="border rounded-3 p-3 bg-light h-100">
              <label class="form-label small fw-bold d-block mb-2">Scan Kartu Keluarga (KK) <span class="text-danger">*</span></label>
              <input type="file" @change="handleFileUpload($event, 'berkasKK')" class="form-control form-control-sm shadow-none" accept=".pdf,.jpg,.jpeg,.png" required />
              <small v-if="fileNameKK" class="text-success d-block mt-1"><i class="fas fa-file-alt me-1"></i>{{ fileNameKK }}</small>
            </div>
          </div>

          <div class="col-md-6">
            <div class="border rounded-3 p-3 bg-light h-100">
              <label class="form-label small fw-bold d-block mb-2">Scan Akta Kelahiran <span class="text-danger">*</span></label>
              <input type="file" @change="handleFileUpload($event, 'berkasAkta')" class="form-control form-control-sm shadow-none" accept=".pdf,.jpg,.jpeg,.png" required />
              <small v-if="fileNameAkta" class="text-success d-block mt-1"><i class="fas fa-file-alt me-1"></i>{{ fileNameAkta }}</small>
            </div>
          </div>

          <div class="col-md-6">
            <div class="border rounded-3 p-3 bg-light h-100">
              <label class="form-label small fw-bold d-block mb-2">Scan Ijazah RA / TK <span class="text-danger">*</span></label>
              <input type="file" @change="handleFileUpload($event, 'berkasIjazahRA')" class="form-control form-control-sm shadow-none" accept=".pdf,.jpg,.jpeg,.png" required />
              <small v-if="fileNameIjazahRA" class="text-success d-block mt-1"><i class="fas fa-file-alt me-1"></i>{{ fileNameIjazahRA }}</small>
            </div>
          </div>

          <div class="col-md-6">
            <div class="border rounded-3 p-3 bg-light h-100">
              <label class="form-label small fw-bold d-block mb-2">Scan KTP Ayah / Bapak <span class="text-muted">(Opsional)</span></label>
              <input type="file" @change="handleFileUpload($event, 'berkasKtpAyah')" class="form-control form-control-sm shadow-none" accept=".pdf,.jpg,.jpeg,.png" />
              <small v-if="fileNameKtpAyah" class="text-success d-block mt-1"><i class="fas fa-file-alt me-1"></i>{{ fileNameKtpAyah }}</small>
            </div>
          </div>

          <div class="col-md-6">
            <div class="border rounded-3 p-3 bg-light h-100">
              <label class="form-label small fw-bold d-block mb-2">Scan KTP Ibu <span class="text-muted">(Opsional)</span></label>
              <input type="file" @change="handleFileUpload($event, 'berkasKtpIbu')" class="form-control form-control-sm shadow-none" accept=".pdf,.jpg,.jpeg,.png" />
              <small v-if="fileNameKtpIbu" class="text-success d-block mt-1"><i class="fas fa-file-alt me-1"></i>{{ fileNameKtpIbu }}</small>
            </div>
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-success text-white w-100 rounded-pill p-3 fw-bold shadow-sm btn-ppdb">
        <i class="fas fa-check-double me-2"></i> Kunci & Kirim Data Pendaftaran
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../../supabase' // Pastikan jalurnya benar ke src/supabase.ts

// 1. STATE UTAMA
const router = useRouter()
const isLoading = ref<boolean>(false)
const isSuccess = ref<boolean>(false)
const namaTerdaftar = ref<string>('')

// State untuk memantau teks nama file yang dipilih di UI
const fileNameKK = ref<string>('')
const fileNameAkta = ref<string>('')
const fileNameIjazahRA = ref<string>('')
const fileNameKtpAyah = ref<string>('')
const fileNameKtpIbu = ref<string>('')

// State untuk Cek Koneksi Supabase
const statusKoneksi = ref<string>('Sedang mengecek koneksi ke database...')
const isConnected = ref<boolean | null>(null)

// 2. KONTRAK DATA FORM (TypeScript Interface)
interface FormPPDB {
  namaSiswa: string;
  nisn: string;
  nikSiswa: string;
  tempatLahir: string;
  tanggalLahir: string;
  jenisKelamin: string;
  namaAyah: string;
  namaIbu: string;
  noWhatsapp: string;
  berkasKK: File | null;
  berkasAkta: File | null;
  berkasIjazahRA: File | null;
  berkasKtpAyah: File | null;
  berkasKtpIbu: File | null;
}

const formInput = reactive<FormPPDB>({
  namaSiswa: '', nisn: '', nikSiswa: '', tempatLahir: '', tanggalLahir: '',
  jenisKelamin: '', namaAyah: '', namaIbu: '', noWhatsapp: '',
  berkasKK: null, berkasAkta: null, berkasIjazahRA: null, berkasKtpAyah: null, berkasKtpIbu: null
})

// 3. FUNGSI CEK KONEKSI
const cekJalurSupabase = async () => {
  try {
    const { error } = await supabase.from('form_pendaftaran').select('*').limit(1)
    
    if (error) {
      isConnected.value = false
      statusKoneksi.value = `Terhubung ke server, tapi database error: ${error.message}`
      console.error('❌ Supabase DB Error:', error)
    } else {
      isConnected.value = true
      statusKoneksi.value = 'Alhamdulillah, Vue & Supabase Berhasil Terkoneksi! Proyek Siap. 🎉'
    }
  } catch (err: any) {
    isConnected.value = false
    statusKoneksi.value = `Gagal Terhubung: ${err.message || 'Periksa URL / Anon Key'}`
  }
}

onMounted(() => {
  cekJalurSupabase()
})

// 4. HANDLER FILE UPLOAD (Diperketat Tipe & Ukuran Maksimal 2MB)
const handleFileUpload = (event: Event, jenis: 'berkasKK' | 'berkasAkta' | 'berkasIjazahRA' | 'berkasKtpAyah' | 'berkasKtpIbu'): void => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    const file = target.files[0]
    
    // 🛡️ TAMBAHAN: Validasi Mime Type Asli File (Mencegah file .exe / .sh disamarkan jadi gambar)
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg']
    if (!allowedTypes.includes(file.type)) {
      alert('Format berkas tidak diizinkan! Hanya boleh mengunggah berkas PDF atau Gambar (JPG/PNG).')
      target.value = ''
      return
    }

    // Validasi Ukuran (Maksimal 2 MB)
    if (file.size > 2 * 1024 * 1024) {
      alert('Ukuran berkas terlalu besar! Maksimal adalah 2 MB.')
      target.value = ''
      return
    }
    
    formInput[jenis] = file
    
    // Set teks nama file untuk UI
    if (jenis === 'berkasKK') fileNameKK.value = file.name
    if (jenis === 'berkasAkta') fileNameAkta.value = file.name
    if (jenis === 'berkasIjazahRA') fileNameIjazahRA.value = file.name
    if (jenis === 'berkasKtpAyah') fileNameKtpAyah.value = file.name
    if (jenis === 'berkasKtpIbu') fileNameKtpIbu.value = file.name
  }
}

// 5. FUNGSI SUBMIT UTAMA (Kirim ke DB & Storage dengan Sanitisasi Input)
const submitForm = async (): Promise<void> => {
  // 🛡️ TAMBAHAN: Validasi Pola Karakter Angka untuk NISN dan NIK
  const regexAngka = /^[0-9]+$/
  if (!regexAngka.test(formInput.nisn)) {
    alert('Format error: NISN wajib diisi dan hanya boleh berisi angka!')
    return
  }
  if (!regexAngka.test(formInput.nikSiswa)) {
    alert('Format error: NIK Siswa wajib diisi dan hanya boleh berisi angka!')
    return
  }

  // 🛡️ TAMBAHAN: Sanitisasi Input Teks dari Potensi Skrip HTML Malicious (XSS Injection)
  const bersihkanTeks = (teks: string) => teks.replace(/<\/?[^>]+(>|$)/g, "").trim()

  formInput.namaSiswa = bersihkanTeks(formInput.namaSiswa)
  formInput.tempatLahir = bersihkanTeks(formInput.tempatLahir)
  formInput.namaAyah = bersihkanTeks(formInput.namaAyah)
  formInput.namaIbu = bersihkanTeks(formInput.namaIbu)

  if (!formInput.namaSiswa || !formInput.namaAyah || !formInput.namaIbu) {
    alert('Harap isi data teks dengan benar tanpa karakter ilegal!')
    return
  }

  isLoading.value = true
  try {
    const uniqueId = Date.now()

    // Fungsi bantu upload berkas ke Bucket Supabase
    const uploadBerkas = async (file: File | null, folderName: string) => {
      if (!file) return null
      const fileExt = file.name.split('.').pop()
      const filePath = `${uniqueId}_${folderName}.${fileExt}`
      
      const { error } = await supabase.storage
        .from('berkas_pendaftaran') // Pastikan nama bucket di Supabase Anda sama persis
        .upload(filePath, file)
        
      if (error) throw error
      return supabase.storage.from('berkas_pendaftaran').getPublicUrl(filePath).data.publicUrl
    }

    // Proses upload berkas dokumen
    const urlKK = await uploadBerkas(formInput.berkasKK, 'kk')
    const urlAkta = await uploadBerkas(formInput.berkasAkta, 'akta')
    const urlIjazah = await uploadBerkas(formInput.berkasIjazahRA, 'ijazah_ra')
    const urlKtpAyah = await uploadBerkas(formInput.berkasKtpAyah, 'ktp_ayah')
    const urlKtpIbu = await uploadBerkas(formInput.berkasKtpIbu, 'ktp_ibu')

    // Simpan ke tabel relasional 'form_pendaftaran' Supabase
    const { error: dbError } = await supabase
      .from('form_pendaftaran')
      .insert([
        {
          nama_siswa: formInput.namaSiswa,
          nisn: formInput.nisn,
          nik_siswa: formInput.nikSiswa,
          tempat_lahir: formInput.tempatLahir,
          tanggal_lahir: formInput.tanggalLahir,
          jenis_kelamin: formInput.jenisKelamin,
          nama_ayah: formInput.namaAyah,
          nama_ibu: formInput.namaIbu,
          no_whatsapp: formInput.noWhatsapp,
          url_kk: urlKK,
          url_akta: urlAkta,
          url_ijazah_ra: urlIjazah,
          url_ktp_ayah: urlKtpAyah,
          url_ktp_ibu: urlKtpIbu
        }
      ])

    if (dbError) throw dbError

    namaTerdaftar.value = formInput.namaSiswa
    isSuccess.value = true

    // Reset Form Input
    Object.assign(formInput, {
      namaSiswa: '', nisn: '', nikSiswa: '', tempatLahir: '', tanggalLahir: '',
      jenisKelamin: '', namaAyah: '', namaIbu: '', noWhatsapp: '',
      berkasKK: null, berkasAkta: null, berkasIjazahRA: null, berkasKtpAyah: null, berkasKtpIbu: null
    })
    fileNameKK.value = ''
    fileNameAkta.value = ''
    fileNameIjazahRA.value = ''
    fileNameKtpAyah.value = ''
    fileNameKtpIbu.value = ''

    // Redirect ke Beranda setelah sukses
    setTimeout(() => {
      router.push('/')
    }, 2500)

  } catch (err: any) {
    alert('Pendaftaran gagal disimpan: ' + err.message)
  } finally {
    isLoading.value = false
  }
}
</script>