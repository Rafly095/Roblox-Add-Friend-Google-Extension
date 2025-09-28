# Roblox Friend Request Helper

**Roblox Friend Request Helper** adalah sebuah Chrome Extension sederhana yang membantu mencari username Roblox dan mengirimkan permintaan pertemanan hanya dengan satu klik.

Extension ini sepenuhnya ditulis oleh **AI**.  
Saya sebagai pembuat tidak mengerti satu baris kode pun—semua logika, HTML, CSS, dan JavaScript dibuat otomatis oleh AI. Saya hanya menggabungkan hasilnya menjadi sebuah extension.

file reame ini juga 

---

## 🔎 Fitur Utama
- Cari user Roblox berdasarkan **display name** atau **username**.
- Tampilkan hasil pencarian dalam bentuk kartu (card) yang rapi.
- Tombol **"Add Friend"** untuk langsung mengirim permintaan pertemanan.
- Status akan muncul apakah proses berhasil atau gagal.
- Jika status error memunculkan pesan error, tapi tidak ada kendala pada internet, bisa jadi sudah berteman
- jika pembeli mengirimkan pertemanan duluan, kamu bisa pencet add friend ke username pembeli untuk menerima pertemanannya 

---

## ⚙️ Cara Kerja
1. **Login dulu ke akun Roblox di [roblox.com](https://www.roblox.com/)**  
   > Extension ini memanfaatkan session & cookies Roblox yang aktif di browser kamu. Jadi kalau belum login, permintaan tidak akan berhasil.

2. Ketikkan keyword atau username di kolom pencarian.

3. Extension akan melakukan request ke API Roblox:
   - `https://users.roblox.com/v1/users/search` → mencari user.  
   - `https://friends.roblox.com/v1/users/{userId}/request-friendship` → mengirim permintaan pertemanan.

4. Jika berhasil, akan muncul notifikasi:  
   ✅ `Friend request sent to @username!`  
   Jika gagal (contoh: belum login, atau user tidak ditemukan), akan ada pesan error.

---

## 📸 Tampilan

Contoh tampilan extension:

![Screenshot](https://cdn.discordapp.com/attachments/1336290120873279509/1421707827092787261/image.png?ex=68da0418&is=68d8b298&hm=c623bdd5d5220a8b6b09404b1c23dc319c31858dce53064152e5b3ea416bbdfc&)

- Bagian atas: input untuk mengetik username + tombol **Search**.  
- Bagian hasil: daftar user dengan display name & username.  
- Tombol hijau **Add Friend** untuk langsung mengirim request.  
- Status info di bawah (berhasil/gagal).  

---

## 🛠️ Instalasi Manual
Karena tidak dipublikasikan di Chrome Web Store, kamu bisa meng-install secara manual:

1. Download repository ini (klik **Code → Download ZIP**) lalu extract.  
2. Buka **chrome://extensions/** di browser.  
3. Aktifkan **Developer Mode** (kanan atas).  
4. Klik **Load unpacked** lalu pilih folder hasil extract.  
5. Extension akan muncul di toolbar Chrome.  

- Tutorial by [Video](https://www.youtube.com/watch?v=oswjtLwCUqg)
---

## ⚠️ Catatan
- Pastikan kamu sudah **login di Roblox** pada browser yang sama.  
- Extension ini tidak menyimpan data login kamu—semua request dilakukan langsung ke server Roblox menggunakan session yang sudah ada.  
- Project ini dibuat **untuk belajar** dan eksperimen, bukan untuk penggunaan masif/spam.  

