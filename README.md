# Konten Atheena

Teks perbedaan STD dan PRO sudah terisi di halaman dan panel detail. Untuk mengganti foto, buka `index.html`, lalu cari dua tombol dengan kelas `product-card`.

- Foto STD sudah terhubung ke `images/atheena-std.png`.
- Foto PRO sudah terhubung ke `images/atheena-pro.png`.
- Pratinjau pada kartu paket memakai `images/atheena-std-navigation.png` dan `images/atheena-pro-navigation.png`.
- Jika ingin mengganti foto, ubah nilai `data-photo` pada kartu produk. Jika file gagal dimuat, panel tetap menampilkan placeholder foto.
- `data-description` dan `data-detail` berisi teks khusus masing-masing paket yang tampil di panel detail. Ringkasan kartu ada di `.card-description`.
- Fitur bersama dan catatan navigasi ada di bagian `.detail-common` dan `.detail-note` pada `index.html`.

Harga dan command ada di `data-price` dan `data-command`: STD Rp40.000 dengan `patchSTD`, PRO Rp85.000 dengan `patchPRO`. Tombol pesan ke WhatsApp membuat `!beli patchSTD [jumlah]` atau `!beli patchPRO [jumlah]` sesuai jumlah yang dipilih.
