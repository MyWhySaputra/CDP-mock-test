# cdp-mock-test

## Skill Metric & Delivery

- DMembiasakan dan mempersiapkan diri menghadapi salah satu jenis technical test (take home test - case study)
- Melatih diri mempresentasikan hasil kerja melalui mocktest presentation
- Menguji kemampuan yang telah dipelajari selama di bootcamp
- Menguji kemampuan manajemen waktu dalam mengerjakan task yang relatif singkat
- Menambahkan koleksi portofolio
- Membuka peluang untuk dijadikan project experience

## Criteria

### Mock Technical Test
 - Kemampuan mengerjakan suatu task dalam waktu singkat (terkumpul tepat waktu)
 - Kemampuan membaca dan mengerjakan task sesuai dengan instruksi yang diberikan secara menyeluruh (kesesuaian tugas yang dikumpulkan denagn brief)
 - Originalitas hasil pekerjaan mocktest
 - Kemampuan implementasi skill teknis sesuai role masing-masing
 - Penataan dokumen

### Mock Presentation
 - Kelengkapan informasi yang disampaikan
 - kejelasan penyampaian informasi
 - Kemampuan menjelaskan langkah-langkah pengerjaan mock test dan alasan dibalik pemilihan solusi atas masalah yang diberikan

## Instruksi
1. Mock test ini dapat dikerjakan setelah Anda menyelesaikan seluruh course
technical preparation
2. Harap baca dengan teliti penugasan pada halaman-halaman berikut dengan
teliti. Anggaplah diri Anda adalah seorang Software Engineer handal. Dalam
mengerjakan penugasan berikut, Anda diperbolehkan menggunakan
referensi atau materi-materi yang kredibel, dengan tetap menyertakan
sumbernya.
3. Waktu untuk mengerjakan soal dibawah adalah 3 x 24 Jam.
4. Penting dipahami bahwa ketepatan waktu pengerjaan soal mock test
menjadi poin yang sangat penting dalam penilaian pekerjaan seorang
kandidat
5. Selesai atau tidak, kandidat harus mengirimkan jawaban sesuai interval waktu
yang telah ditentukan.
6. Jika ada kendala atau pertanyaan dalam mengerjakan mock test, silahkan
mengkomunikasikannya kepada CDP melalui Telegram atau live chat
Tawk.to.

## Pertanyaan
1. Apakah Kegunaan JSON pada REST API?
2. Jelaskan bagaimana REST API bekerja
3. Buatlah sebuah website dengan fungsi dibawah ini:
    - Login/register Page
User bisa melakukan login dengan menggunakan 6 angka
berupa pin (bukan otp) setelah melakukan input email atau
username
    - Buatlah fitur to do list sederhana di halaman utama. Anda
diharuskan untuk menggunakan React Redux dan data
terkoneksi menggunakan API.
    - Jika anda seorang Full Stack Developer anda diwajibkan untuk
membuat API beserta Website
    - Jika anda seorang Backend Developer anda di wajibkan untuk
membuat API beserta dokumentasi dalam bentuk
Swagger/Postman
    - Jika anda seorang Frontend Developer anda bisa menggunakan
menggunakan https://jsonplaceholder.typicode.com/ sebagai
fake API

4. Hal - hal yang perlu dipastikan adalah:
    - Saat user A log out, lalu ada user B login, pastikan data yang
tertampil adalah data dari user B, dan apabila user A login
kembali, data yang terlihat adalah data milik user A
    - Deploy semua fitur dari server side dan client side (bisa
menggunakan heroku atau netlify)
    - Sertakan jawaban, deskripsi fitur, cara login/menggunakan
aplikasi dan link website yang telah ter deploy dalam readme
github

5. Buatlah video demo berdurasi minimal 5 menit mengenai aplikasi
yang telah anda buat berisi penjelasan singkat dan source code.

## Jawaban
1. JSON (JavaScript Object Notation) digunakan pada REST API sebagai format pertukaran data.
2. REST API (Representational State Transfer Application Programming Interface) bekerja berdasarkan prinsip-prinsip arsitektur REST.
    - REST API terdiri dari dua komponen utama: klien (client) dan server. Keduanya terpisah dan berkomunikasi melalui protokol HTTP.
    - REST API menggunakan metode HTTP untuk menentukan jenis operasi yang diinginkan. Metode umum meliputi:
      - GET: Mendapatkan data dari server.
      - POST: Mengirim data baru ke server.
      - PUT: Memperbarui data pada server.
      - DELETE: Menghapus data pada server.
3. Website dengan fitur berikut:
  - User dapat login menggunakan 6 angka berupa pin(bukan otp)
  - Fitur Todolist
  - API beserta dokumentasi dalam bentuk SwaggerUI
4. Hal - hal yang perlu dipastikan adalah:
  - Saat user A log out, lalu ada user B login, pastikan data yang tertampil adalah data dari user B, dan apabila user A login kembali, data yang terlihat adalah data milik user A
  - Semua fitur sudah di deploy
  - Sertakan jawaban, deskripsi fitur, cara login/menggunakan aplikasi dan link website yang telah ter deploy dalam readme github
5. Video demo berdurasi minimal 5 menit.

## Pengujian Endpoint di postman
- Auth
  ### register account

  - [x] POST http://localhost:8080/api/v1/auth/register
        Contoh:
        {
        "name": "nama",
        "email": "email@mail.com",
        "username": "nama22",
        "password": "password231",
        "pin": "123456"
        }

  ### login

  - [x] POST http://localhost:8080/api/v1/auth/login
        Contoh:
        {
        "emailOrUsername": "email@mail.com",
        "pin": "123456"
        }

   ### login

  - [x] POST http://localhost:8080/auth/login
        Contoh:
        {
        "emailOrUsername": "email@mail.com",
        "pin": "123456"
        }

- Todolist
  ### Create

  - [x] POST http://localhost:8080/api/v1/user/create
        Contoh:
        {
        "title": "title"
        }

  ### Get

  - [x] GET http://localhost:8080/todo

  ### UpdateTitle

  - [x] PUT http://localhost:8080/api/v1/user/updateTitle
        Contoh:
        {
        "title": "title",
        "id": 1
        }

  ### UpdateTitle

  - [x] PUT http://localhost:8080/api/v1/user/updateStatus
        Contoh:
        {
        "completed": true
        }

  ### Delete

  - [x] DELETE http://localhost:8080/api/v1/user/delete
        Contoh:
        {
        "id": 1
        }


## Deploy in Railway

- Auth

      ### register account

      - [x] POST https://cdp-mock-test-production-7724.up.railway.app/auth/register
            Contoh:
            {
            "name": "nama",
            "email": "email@mail.com",
            "password": "pass",
            "pin": "123456"
            }

      ### login

      - [x] POST https://cdp-mock-test-production-7724.up.railway.app/auth/login
            Contoh:
            {
            "identifier": "email@mail.com",
            "pin": "pass"
            }


- Todo
      ### Create

      - [x] POST https://cdp-mock-test-production-7724.up.railway.app/todo/create
            Contoh:
            {
            "title": "title"
            }

      ### Get

      - [x] GET https://cdp-mock-test-production-7724.up.railway.app/todo

      ### UpdateTitle

      - [x] PUT https://cdp-mock-test-production-7724.up.railway.app/todo/updateTitle
            Contoh:
            {
            "title": "title",
            "id": 1
            }

      ### UpdateTitle

      - [x] PUT https://cdp-mock-test-production-7724.up.railway.app/todo/updateStatus
            Contoh:
            {
            "completed": true
            }

      ### Delete

      - [x] DELETE https://cdp-mock-test-production-7724.up.railway.app/todo/delete
            Contoh:
            {
            "id": 1
            }

# Dokumentasi Swagger
https://cdp-mock-test-production-ddce.up.railway.app/docs/