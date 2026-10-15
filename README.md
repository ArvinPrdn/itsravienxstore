# Konten Atheena

Teks perbedaan STD dan PRO sudah terisi di halaman dan panel detail. Untuk mengganti foto, buka `index.html`, lalu cari dua tombol dengan kelas `product-card`.

- Pada kartu STD, isi `data-photo=""` dengan path foto, misalnya `data-photo="images/atheena-std.jpg"`.
- Pada kartu PRO, isi dengan foto lain, misalnya `data-photo="images/atheena-pro.jpg"`.
- Simpan kedua foto di folder `images` di samping `index.html`. Jika path belum diisi atau file gagal dimuat, panel tetap menampilkan placeholder foto.
- `data-description` dan `data-detail` berisi teks khusus masing-masing paket yang tampil di panel detail. Ringkasan kartu ada di `.card-description`.
- Fitur bersama dan catatan navigasi ada di bagian `.detail-common` dan `.detail-note` pada `index.html`.

Harga dan command ada di `data-price` dan `data-command`: STD Rp40.000 dengan `patchSTD`, PRO Rp85.000 dengan `patchPRO`. Tombol pesan ke WhatsApp membuat `!beli patchSTD [jumlah]` atau `!beli patchPRO [jumlah]` sesuai jumlah yang dipilih.
