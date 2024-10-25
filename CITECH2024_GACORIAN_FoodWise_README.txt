FOODWISE --- GACORIAN

Cara menjalankan dan menguji kode
1. Ekstrak file rar folder foodwise
2. Setelah ekstrak ada folder citech, masuk ke folder citech
3. Kemudian pindah / masuk ke folder foodwise atau bisa dengan command berikut di terminal
   cd foodwise
4. Kemudian pindah / masuk ke folder Food-Wise
   cd Food-Wise
5. Setelah masuk ke folder Food-Wise, buka terminal di folder tersebut
6. Jalankan perintah/command ini :
   (pastikan telah menginstall NODEJS agar bisa menjalankan perintah npm)
   -npm install (tunggu beberapa detik hingga install selesai)
   -npm run dev
7. Setelah npm run dev akan muncul link localhost pada terminal seperti ' Local:   http://localhost:5173/ ' *(link localhost yang muncul tidak pasti seperti contoh yaitu 5173)
8. Salin http://localhost:5173/ pada browser

***PENJELASAN KODE***
COMPONENTS/KOMPONEN : 
About.jsx =  
 Komponen About yang menampilkan section Tentang Kami pada Halaman Home.
 Komponen ini menggunakan komponen Section dan menerima properti image, judul, title, dan description.
 Komponen ini digunakan untuk menampilkan deskripsi singkat tentang FoodWise dan misinya.
 
Button.jsx =
 Komponen button/tombol pada halaman Waste
 Komponen ini digunakan untuk membuat tombol "Mulai Angkut" yang akan di klik oleh user

Card.jsx = 
  Komponen Card yang memiliki parameter image, title dan description yang digunakan pada Halaman Home.
  Yang kemudian digunakan di komponen Services.
  image - URL gambar yang akan ditampilkan.
  title - Judul yang akan ditampilkan.
  description - Deskripsi yang akan ditampilkan.
  Komponen Card yang berisi gambar, judul dan deskripsi.

Food.jsx =
  Komponen Food yang memiliki parameter image, food dan detail yang digunakan pada Halaman Suggestion.
  Komponen ini berisikan tentang informasi makanan yang disarankan berserta jumlah kalorinya.
  Komponen ini digunakan untuk menampilkan informasi makanan yang disarankan pada halaman Suggestion.
 
FoodDetail.jsx =
 Ini berisikan tentang informasi mengenai notes/catatan dari setiap jam makan (sarapan, makan siangg dan makan malam)

Hero.jsx =
 Komponen Hero yang menampilkan bagian hero dari homepage
 Komponen ini berisikan judul, deskripsi, dan gambar dokter

Input.jsx = 
  Komponen input yang digunakan untuk Form.
  
  forName - Nama for pada input.
  InputName - Nama input.
  type - Tipe input.
  name - Nama input.
 
Meal.jsx =
  Komponen Meal akan menampilkan bar yang memuat title yaitu jam makan, misal sarapan, 
  dan calorie akan menampilkan kalori yang dibutuhkan dalam satu jam makan tersebut
  
  title - judul dari jam makan
  calorie - kalori yang dibutuhkan dalam satu jam makan tersebut
  
Navbar.jsx = Komponen Navbar untuk menampilkan navigasi di atas halaman

Pickup.jsx = 
  Komponen Pickup
  Komponen ini menampilkan judul dan gambar yang berisi informasi tentang layanan pickup food waste
 
Plot.jsx =
  Komponen Plot yang menampilkan beberapa kartu informasi
  Kartu pertama untuk mengisi form 
  Kartu kedua untuk konfirmasi lokasi
  Kartu ketiga untuk proses penangkutan sampah
  Kartu keempat untuk laporan selesai

Restaurant.jsx =
 Komponen Restaurant yang menampilkan judul dan gambar restaurant yang d
direkomendasikan

Section.jsx = 
  Komponen Section yang menampilkan bagian section dari homepage
  Komponen ini berisikan judul, deskripsi, dan gambar dokter
  image - URL gambar yang akan ditampilkan
  judul - judul yang akan ditampilkan
  title - judul yang akan ditampilkan dengan font besar
  description - deskripsi yang akan ditampilkan
 
Services.jsx =
 Komponen Services yang menampilkan 4 kartu layanan yang ditawarkan oleh Foodwise.
 Tiap kartu memiliki gambar, judul dan deskripsi layanan yang ditawarkan.

Stats.jsx = 
  Komponen Stats yang menampilkan gambar stats
  Komponen ini menggunakan CSS untuk mengatur tata letak gambar
  Gambar stats diambil dari folder assets
 
Suggestion.jsx = 
 Komponen Suggestion yang menampilkan rekomendasi makanan sehat berdasarkan jadwal makan
 Komponen ini menggunakan komponen Meal dan Food untuk menampilkan rekomendasi makanan
 Kode ini dibagi menjadi 3 bagian, yaitu sarapan, makan siang, dan makan malam

Card2.jsx =
 Komponen Card2 yang menampilkan informasi tentang suatu program di halaman Program
  
   image - URL gambar yang akan ditampilkan
   title - judul program
   description - deskripsi program
   followers - jumlah pengikut program
   status - status program (aktif/tidak aktif)
 
Cardwas.jsx =
  Komponen Cardwas yang menampilkan informasi tentang suatu program di halaman Waste
  
   image - URL gambar yang akan ditampilkan
   title - judul program
   description - deskripsi program
 
Footer.jsx =
  Komponen footer yang menampilkan informasi Foodwise, halaman serta kontaknya

Masuk.jsx =
  Komponen untuk halaman login dan sign up
  Menggunakan useState untuk mengubah bentuk form
  Menggunakan useNavigate untuk mengarahkan ke halaman lain
  Menggunakan absolute positioning untuk membuat efek slinding
 
ProgramDescript.jsx =
  Komponen ProgramDescript menampilkan deskripsi tentang program Foodwise
  Program Food Wise memiliki tiga pilar utama: FoodCycle, FoodSharing, dan Edu Wise

ProgramTitle.jsx =
  Komponen yang menampilkan title/judul dari program Foodwise

ProgramWise.jsx = 
  Komponen ProgramWise menampilkan tiga program utama dari Foodwise
  Masing-masing program diwakili oleh komponen Card2
  dengan properti image, title, description, followers, dan status

PAGES/HALAMAN : 

Healthy.jsx = 
  Halaman Healthy berisi dua komponen, yaitu Stats dan Suggestion
  Komponen Stats menampilkan gambar stats yang diambil dari folder assets
  Komponen Suggestion menampilkan rekomendasi makanan sehat yang dibuat dengan menggunakan CSS Flexbox
 
Login.jsx = 
 Halaman login berisi tentang form login yang dibutuhkan pengguna untuk masuk ke website

Home.jsx = 
 Komponen Home yang menampilkan beberapa komponen lainnya
 Komponen ini menampilkan Navbar, Hero, Services, About, dan Restaurant

Waste.jsx = 
  Halaman Waste berisi komponen Section yang menampilkan judul, deskripsi, dan gambar
  Komponen Pickup yang menampilkan informasi tentang layanan pickup food waste
  Komponen Plot yang menampilkan informasi tentang ploting data waste
  Komponen Button yang menampilkan tombol "Mulai Angkut" yang akan di klik oleh user

Program.jsx =
 Komponen Program menampilkan tiga program utama dari Food Wise
  Program diwakili oleh komponen ProgramTitle, ProgramWise, dan ProgramDescript
  ProgramTitle menampilkan judul program
  ProgramWise menampilkan tiga program utama
  ProgramDescript menampilkan deskripsi program