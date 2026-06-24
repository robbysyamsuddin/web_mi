<template>
  <div class="card border-0 shadow-sm rounded-4 p-4 bg-white text-dark">
    <h5 class="fw-bold mb-3">
      <i class="fas fa-users text-success me-2"></i>Informasi Kuota Kelas
    </h5>
    
    <div class="d-flex justify-content-between align-items-center mb-2 small">
      <span>Total Kapasitas Penerimaan:</span>
      <span class="fw-bold text-dark">90 Santri</span>
    </div>
    
    <div class="d-flex justify-content-between align-items-center mb-3 small">
      <span>Sudah Terisi (Dummy Data):</span>
      <span class="fw-bold text-success">{{ terisi }} / 90</span>
    </div>

    <div class="progress rounded-pill shadow-none border mb-2" style="height: 14px;">
      <div 
        class="progress-bar bg-success progress-bar-striped progress-bar-animated" 
        role="progressbar" 
        :style="{ width: hitungPersentase + '%' }"
        :aria-valuenow="terisi" 
        aria-valuemin="0" 
        aria-valuemax="90"
      ></div>
    </div>
    <span class="text-muted d-block text-end" style="font-size: 0.72rem;">*Pendaftaran otomatis ditutup jika kuota terpenuhi</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const terisi = ref<number>(54) // Nilai awal statis, siap dinkronkan dengan API back-end
const maxKuota = 90

const hitungPersentase = computed<number>(() => {
  return (terisi.value / maxKuota) * 100
})
</script>