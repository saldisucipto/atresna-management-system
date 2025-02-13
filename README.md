# Atresna Content Management System

<table>
<tr>
<td>

Proyek ini dibuat untuk pembuatan management system dari atresna.

### Struktur Folder Untuk Frontend Dashboard Vuejs :

resources/
│── js/
│ │── components/ # Komponen reusable
│ │ │── buttons/ # Komponen tombol (misal: PrimaryButton.vue, SecondaryButton.vue)
│ │ │── forms/ # Komponen formulir (InputField.vue, SelectBox.vue)
│ │ │── modals/ # Komponen modal (Modal.vue, ConfirmDialog.vue)
│ │ │── layouts/ # Komponen layout utama (Navbar.vue, Sidebar.vue, Footer.vue)
│ │── composables/ # Composable functions (useAuth.js, useFetch.js, useTheme.js)
│ │── pages/ # Halaman Vue
│ │ │── auth/ # Halaman otentikasi (Login.vue, Register.vue, ForgotPassword.vue)
│ │ │── dashboard/ # Halaman utama dashboard (Dashboard.vue, Profile.vue)
│ │── router/ # Konfigurasi routing Vue (index.js)
│ │── stores/ # Pinia Store (auth.js, user.js)
│ │── utils/ # Fungsi utilitas (helpers.js, formatDate.js)
│ │── App.vue # Root component Vue
│ │── main.js # Entry point untuk aplikasi Vue
│── css/ # File CSS global (jika ada)
│── views/ # File Blade yang merender aplikasi Vue (app.blade.php)

</td>
</tr>
</table>

### Teknologi Yang Digunakan :

-   PHP & Framework Laravel
-   Tailwindcss untuk UI Library
-   Vuejs Untuk Frontend Bagian Dashboard Sebagai Monolithic API-driven App
