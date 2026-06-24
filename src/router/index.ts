import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// 1. Layouts
import UserLayout from '../views/UserLayout.vue'
import AdminLayout from '../views/admin/AdminLayout.vue'

// 2. Views Halaman Umum (User)
import HomeView from '../views/LandingPage/HomeView.vue'
import FormPendaftaran from '../views/ppdb/FormPendaftaran.vue'
import InfoKelulusan from '../views/kelulusan/InfoKelulusan.vue'

// 3. Views Halaman Dashboard Admin
import DashboardView from '../views/admin/DashboardView.vue'


const routes: Array<RouteRecordRaw> = [
  // 🌟 KELOMPOK HALAMAN USER UMUM (Menggunakan UserLayout)
  {
    path: '/',
    component: UserLayout as any,
    children: [
      {
        path: '',
        name: 'Beranda',
        component: HomeView
      },
      {
        path: 'ppdb',
        name: 'PendaftaranPPDB',
        component: FormPendaftaran
      },
      {
        path: 'kelulusan',
        name: 'InfoKelulusan',
        component: InfoKelulusan as any
      }
    ]
  },

  // 🌟 KELOMPOK HALAMAN ADMIN PANEL (Menggunakan AdminLayout - Terpisah Total!)
  {
    path: '/admin',
    component: AdminLayout as any,
    children: [
      {
        path: '',
        name: 'AdminDashboard',
        component: DashboardView as any
      },
      {
        path: 'dokumentasi',
        name: 'AdminDokumentasi',
        component: () => import('../views/admin/DokumentasiCRUD.vue') as any
      },
      {
        path: 'ppdb',
        name: 'AdminPPDB',
        component: () => import('../views/admin/PpdbData.vue') as any
      },
      {
        path: 'kelulusan',
        name: 'AdminKelulusan',
        component: () => import('../views/admin/KelulusanCRUD.vue') as any
      }
      // Tambahkan rute crud kelulusan & ppdb admin Anda di bawah sini nanti
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router