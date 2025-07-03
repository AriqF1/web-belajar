import React from "react";

export const kontenModul = {
  1: (
    <div>
      <p>
        Selamat datang di modul "Pengenalan React"! Modul ini adalah gerbang
        utama Anda untuk memasuki dunia pengembangan antarmuka pengguna (UI)
        yang modern dan reaktif. Di sini, Anda akan mempelajari filosofi di
        balik React, sebuah pustaka JavaScript yang dikembangkan oleh Facebook,
        yang telah merevolusi cara developer membangun aplikasi web berskala
        besar. Kami akan membahas mengapa pendekatan berbasis komponen sangat
        efisien dan bagaimana Virtual DOM menjadi kunci performa luar biasa yang
        ditawarkan oleh React.
      </p>
      <p>
        Pada bagian inti pembelajaran, Anda akan diajak untuk terjun langsung
        dalam penulisan kode. Kita akan mulai dari konsep paling fundamental
        seperti JSX, yaitu sintaks yang memungkinkan Anda menulis HTML langsung
        di dalam JavaScript. Selanjutnya, kita akan mengupas tuntas cara membuat
        komponen fungsional dan komponen kelas, memahami perbedaan, serta kapan
        waktu yang tepat untuk menggunakannya. Anda juga akan belajar bagaimana
        komponen-komponen ini bisa saling berkomunikasi dan membentuk sebuah
        pohon komponen yang kompleks namun tetap mudah dikelola.
      </p>
      <p>
        Setelah menyelesaikan modul ini, Anda diharapkan memiliki pemahaman yang
        kuat tentang konsep-konsep inti React dan mampu membangun aplikasi satu
        halaman (Single Page Application) yang sederhana. Anda akan siap untuk
        melanjutkan ke topik yang lebih mendalam, seperti manajemen state,
        props, dan siklus hidup komponen. Fondasi yang Anda bangun di sini akan
        menjadi bekal krusial untuk menguasai ekosistem React yang lebih luas
        dan menjadi seorang frontend developer yang andal.
      </p>
    </div>
  ),
  2: (
    <div>
      <p>
        Di modul "State & Props Lanjutan", kita akan menyelami dua konsep paling
        fundamental yang menjadi jantung dari setiap aplikasi React. Anda akan
        belajar bagaimana 'props' (properties) digunakan untuk mengalirkan data
        dari komponen induk ke komponen anak, menciptakan komponen yang reusable
        dan dapat dikonfigurasi. Kami akan membahas secara detail tentang sifat
        'props' yang 'read-only' (hanya bisa dibaca) dan bagaimana hal ini
        mendukung aliran data satu arah (one-way data flow) yang membuat
        aplikasi lebih prediktif dan mudah di-debug.
      </p>
      <p>
        Selanjutnya, kita akan fokus pada 'state', yaitu data privat yang
        dimiliki dan dikelola oleh sebuah komponen. Berbeda dengan props,
        'state' dapat berubah seiring waktu sebagai respons terhadap interaksi
        pengguna atau kejadian lainnya. Anda akan belajar cara menginisialisasi
        state di dalam constructor (untuk komponen kelas) atau menggunakan hook
        useState (untuk komponen fungsional). Yang terpenting, Anda akan
        menguasai penggunaan metode `setState()` untuk memperbarui UI secara
        asinkron dan efisien, serta memahami pentingnya tidak memodifikasi state
        secara langsung.
      </p>
      <p>
        Modul ini akan diakhiri dengan studi kasus praktis yang menggabungkan
        penggunaan state dan props. Anda akan membangun komponen interaktif
        seperti tombol-counter, form input, dan daftar item dinamis. Melalui
        contoh-contoh ini, Anda akan melihat bagaimana state dan props bekerja
        sama untuk menciptakan UI yang dinamis dan responsif, memberikan Anda
        keterampilan esensial untuk membangun aplikasi React yang lebih kompleks
        dan fungsional.
      </p>
    </div>
  ),
  3: (
    <div>
      <p>
        Modul "React Router DOM" akan membekali Anda dengan kemampuan untuk
        mengubah aplikasi React satu halaman (Single Page Application - SPA)
        Anda menjadi aplikasi multi-halaman yang sesungguhnya. Anda akan
        memahami mengapa 'client-side routing' penting untuk memberikan
        pengalaman pengguna yang cepat dan mulus tanpa perlu me-reload halaman
        setiap kali navigasi. Kita akan membahas konsep dasar di balik routing
        dan bagaimana React Router secara cerdas memanipulasi URL di browser dan
        merender komponen yang sesuai.
      </p>
      <p>
        Anda akan belajar cara menginstal dan mengkonfigurasi React Router DOM
        di dalam proyek Anda. Panduan langkah demi langkah akan menunjukkan cara
        menggunakan komponen-komponen inti seperti `BrowserRouter`, `Routes`,
        dan `Route` untuk mendefinisikan peta navigasi aplikasi Anda. Selain
        itu, Anda akan menguasai penggunaan komponen `Link` untuk membuat tautan
        navigasi deklaratif yang menggantikan tag {"<a>"} tradisional, serta
        memahami bagaimana cara membuat 'dynamic routes' dengan parameter URL
        (misalnya, `/users/:id`) untuk menampilkan detail data yang spesifik.
      </p>
      <p>
        Pada bagian akhir, kita akan menjelajahi fitur-fitur lanjutan dari React
        Router, termasuk 'nested routes' untuk layout yang kompleks,
        'programmatic navigation' menggunakan hook `useNavigate` untuk
        mengarahkan pengguna setelah suatu aksi (seperti login), dan cara
        menangani halaman "404 Not Found". Setelah menyelesaikan modul ini, Anda
        akan mampu membangun struktur navigasi yang kokoh dan profesional untuk
        aplikasi React skala apa pun, mulai dari portofolio pribadi hingga
        aplikasi dashboard yang rumit.
      </p>
    </div>
  ),
  4: (
    <div>
      <p>
        Selamat datang di modul "Dasar-dasar Jaringan Komputer". Modul ini
        bertujuan untuk memberikan Anda pemahaman fundamental tentang bagaimana
        perangkat di seluruh dunia dapat saling terhubung dan berkomunikasi.
        Kita akan memulai dari konsep paling dasar, yaitu apa itu jaringan,
        perbedaan antara LAN (Local Area Network), WAN (Wide Area Network), dan
        Internet. Anda akan mempelajari komponen-komponen fisik yang membangun
        jaringan, seperti router, switch, dan kabel jaringan.
      </p>
      <p>
        Selanjutnya, kita akan membahas model konseptual yang menjadi tulang
        punggung komunikasi jaringan, yaitu model OSI (Open Systems
        Interconnection) dan TCP/IP. Anda akan memahami fungsi dari setiap
        lapisan (layer), mulai dari lapisan fisik yang mentransmisikan bit
        hingga lapisan aplikasi yang berinteraksi langsung dengan pengguna.
        Konsep-konsep kunci seperti alamat IP, subnet mask, DNS (Domain Name
        System), dan protokol-protokol umum seperti HTTP, FTP, dan SMTP akan
        dijelaskan secara sederhana dan mudah dipahami.
      </p>
      <p>
        Melalui modul ini, Anda tidak hanya akan menghafal istilah, tetapi juga
        memahami alur kerja bagaimana sebuah permintaan dari browser Anda bisa
        sampai ke server di belahan dunia lain dan kembali lagi dengan data yang
        diminta. Pemahaman ini sangat penting tidak hanya bagi administrator
        jaringan, tetapi juga bagi para pengembang perangkat lunak untuk
        membangun aplikasi yang lebih efisien dan aman. Ini adalah fondasi
        penting untuk karir apa pun di dunia teknologi informasi.
      </p>
    </div>
  ),
  5: (
    <div>
      <p>
        Modul "Normalisasi Database" adalah panduan esensial bagi siapa saja
        yang ingin merancang database yang efisien, terstruktur, dan bebas dari
        anomali data. Di sini, Anda akan belajar mengapa normalisasi adalah
        proses krusial dalam desain database relasional. Tujuan utamanya adalah
        untuk mengurangi redundansi (pengulangan data) dan meningkatkan
        integritas data, memastikan bahwa database Anda tetap konsisten dan
        andal seiring dengan pertumbuhannya.
      </p>
      <p>
        Kami akan memandu Anda melalui berbagai bentuk normal (Normal Forms),
        mulai dari yang paling dasar hingga yang umum digunakan dalam praktik.
        Anda akan memahami secara mendalam tentang First Normal Form (1NF) yang
        menghilangkan grup berulang, Second Normal Form (2NF) yang mengatasi
        ketergantungan parsial, dan Third Normal Form (3NF) yang menghilangkan
        ketergantungan transitif. Setiap konsep akan disertai dengan contoh
        kasus "sebelum dan sesudah" yang jelas, menunjukkan bagaimana
        mentransformasi tabel yang tidak efisien menjadi sekumpulan tabel yang
        terstruktur dengan baik.
      </p>
      <p>
        Setelah menyelesaikan modul ini, Anda akan memiliki kemampuan untuk
        menganalisis skema database yang ada, mengidentifikasi potensi masalah
        redundansi dan anomali, serta menerapkan teknik normalisasi untuk
        memperbaikinya. Keterampilan ini sangat berharga dan akan memungkinkan
        Anda merancang database dari awal dengan cara yang benar, menghasilkan
        aplikasi yang lebih cepat, lebih mudah dikelola, dan lebih dapat
        diandalkan dalam jangka panjang.
      </p>
    </div>
  ),
  6: (
    <div>
      <p>
        Dalam modul "Pengenalan UI/UX", Anda akan mempelajari dua disiplin yang
        saling terkait namun berbeda, yang menjadi fondasi dari semua produk
        digital yang sukses. Kita akan membedah User Interface (UI) Design, yang
        berfokus pada aspek visual dan estetika dari sebuah aplikasi—mulai dari
        pemilihan warna, tipografi, hingga layout tombol dan ikon. Tujuannya
        adalah untuk menciptakan antarmuka yang tidak hanya indah secara visual
        tetapi juga jelas dan mudah digunakan.
      </p>
      <p>
        Di sisi lain, kita akan menjelajahi User Experience (UX) Design, yang
        berfokus pada keseluruhan pengalaman dan kepuasan pengguna saat
        berinteraksi dengan produk. UX melampaui tampilan visual dan
        mempertimbangkan faktor-faktor seperti kegunaan (usability),
        aksesibilitas (accessibility), dan alur interaksi (user flow). Anda akan
        belajar tentang pentingnya riset pengguna, pembuatan persona, dan
        bagaimana proses seperti wireframing dan prototyping membantu merancang
        produk yang intuitif dan berpusat pada pengguna.
      </p>
      <p>
        Pada akhirnya, Anda akan memahami bahwa UI dan UX adalah dua sisi dari
        mata uang yang sama. Sebuah UI yang cantik tidak akan berguna jika
        UX-nya membingungkan, dan sebaliknya. Modul ini akan memberikan Anda
        kerangka kerja untuk berpikir secara holistik tentang desain produk,
        memastikan bahwa aplikasi yang Anda bangun tidak hanya berfungsi dengan
        baik, tetapi juga memberikan pengalaman yang menyenangkan dan memuaskan
        bagi penggunanya.
      </p>
    </div>
  ),
  7: (
    <div>
      <p>
        Modul "Advanced Hooks" dirancang untuk membawa pemahaman Anda tentang
        React Hooks ke level berikutnya, melampaui `useState` dan `useEffect`.
        Di sini, Anda akan diperkenalkan dengan serangkaian *hooks* bawaan yang
        lebih kuat untuk mengatasi masalah-masalah spesifik terkait performa dan
        manajemen *state* yang kompleks. Kita akan mulai dengan `useReducer`,
        sebuah alternatif dari `useState` yang sangat cocok untuk mengelola
        objek *state* yang memiliki banyak sub-nilai atau logika transisi yang
        rumit.
      </p>
      <p>
        Selanjutnya, kita akan fokus pada optimisasi performa menggunakan
        `useMemo` dan `useCallback`. Anda akan belajar bagaimana `useMemo` dapat
        digunakan untuk "mengingat" (memoize) hasil dari perhitungan yang mahal
        sehingga tidak perlu dijalankan ulang pada setiap *render*. Sementara
        itu, `useCallback` akan membantu Anda mencegah pembuatan ulang fungsi
        yang tidak perlu di setiap *render*, yang sangat penting saat meneruskan
        fungsi sebagai *props* ke komponen anak yang dioptimalkan. Pemahaman ini
        krusial untuk mencegah *re-render* yang tidak perlu dan menjaga aplikasi
        tetap cepat.
      </p>
      <p>
        Bagian paling menarik dari modul ini adalah belajar membuat *custom
        hooks* Anda sendiri. Anda akan memahami bagaimana cara mengekstrak
        logika komponen yang dapat digunakan kembali (seperti logika untuk
        *fetching* data, mengakses `localStorage`, atau mengelola *event
        listener*) ke dalam fungsi *hook* Anda sendiri. Menguasai pembuatan
        *custom hooks* tidak hanya akan membuat kode Anda lebih bersih,
        terorganisir, dan efisien (DRY - *Don't Repeat Yourself*), tetapi juga
        merupakan ciri khas dari seorang pengembang React yang mahir.
      </p>
    </div>
  ),
  8: (
    <div>
      <p>
        Modul "Manajemen State dengan Context" akan mengatasi salah satu
        tantangan paling umum dalam membangun aplikasi React yang besar: "prop
        drilling". Anda akan memahami bagaimana meneruskan *state* melalui
        banyak lapisan komponen perantara menjadi tidak efisien dan membuat kode
        sulit untuk dikelola. Modul ini akan memperkenalkan Context API, sebuah
        fitur inti dari React yang dirancang khusus untuk menyelesaikan masalah
        ini dengan cara yang elegan.
      </p>
      <p>
        Anda akan dipandu langkah demi langkah melalui proses penggunaan Context
        API. Mulai dari cara membuat sebuah *context* baru menggunakan
        `React.createContext()`, hingga cara menyediakan data ke seluruh pohon
        komponen menggunakan komponen `Provider`. Bagian terpenting adalah Anda
        akan menguasai *hook* `useContext`, yang memungkinkan komponen mana pun
        di dalam pohon untuk "berlangganan" dan mengakses data global tanpa
        harus menerima *props* secara eksplisit dari komponen induknya.
      </p>
      <p>
        Setelah menyelesaikan modul ini, Anda akan dapat mengidentifikasi kapan
        waktu yang tepat untuk menggunakan Context API versus manajemen *state*
        lokal. Anda akan mampu mengelola *state* global seperti informasi
        pengguna yang terautentikasi, preferensi tema (gelap/terang), atau
        bahasa aplikasi dengan cara yang bersih dan terpusat. Keterampilan ini
        akan membuat arsitektur aplikasi Anda jauh lebih rapi dan skalabel,
        mempermudah pemeliharaan dan pengembangan fitur di masa depan.
      </p>
    </div>
  ),
  9: (
    <div>
      <p>
        Selamat datang di modul "Query & Mutation dengan React Query", sebuah
        langkah transformatif dalam mengelola data dari server. Modul ini akan
        memperkenalkan Anda pada konsep *server state*, yaitu data yang hidup di
        server dan hanya Anda "pinjam" di aplikasi klien. Anda akan memahami
        mengapa mengelola *server state* (seperti status *loading, error,
        fetching*) dengan *hook* seperti `useState` dan `useEffect` bisa menjadi
        sangat rumit, repetitif, dan rentan terhadap kesalahan.
      </p>
      <p>
        Di sini, Anda akan berkenalan dengan React Query (sekarang TanStack
        Query), sebuah pustaka yang secara drastis menyederhanakan proses
        pengambilan, penyimpanan sementara (*caching*), sinkronisasi, dan
        pembaruan *server state*. Anda akan menguasai *hook* `useQuery` untuk
        mengambil data (*queries*) dengan sangat mudah, lengkap dengan
        fitur-fitur canggih seperti *caching* otomatis, *refetching on window
        focus*, dan manajemen status *out-of-the-box*. Ini akan menggantikan
        hampir semua logika `useEffect` yang biasa Anda tulis untuk *fetching*
        data.
      </p>
      <p>
        Selain mengambil data, Anda juga akan belajar cara memodifikasi data di
        server menggunakan *hook* `useMutation`. Anda akan memahami cara
        menangani operasi `POST`, `PUT`, dan `DELETE` dengan pola yang optimis
        dan terstruktur. Setelah menyelesaikan modul ini, Anda akan mampu
        mengelola interaksi data dengan server secara efisien dan deklaratif,
        menghasilkan kode yang lebih sedikit, lebih mudah dibaca, dan aplikasi
        yang terasa jauh lebih cepat dan responsif bagi pengguna.
      </p>
    </div>
  ),
  10: (
    <div>
      <p>
        Modul "Desain Relasional" adalah fondasi utama bagi siapa pun yang ingin
        membangun sistem perangkat lunak yang andal dan berbasis data. Di sini,
        Anda akan mempelajari prinsip-prinsip dasar dalam merancang struktur
        database relasional yang logis dan efisien. Kita akan mulai dengan
        memahami komponen-komponen inti seperti tabel (entitas), baris
        (rekaman), dan kolom (atribut), serta pentingnya memilih tipe data yang
        tepat untuk setiap kolom.
      </p>
      <p>
        Fokus utama dari modul ini adalah pada konsep kunci dan hubungan antar
        tabel. Anda akan menguasai peran dari *Primary Key* sebagai
        pengidentifikasi unik untuk setiap rekaman dan *Foreign Key* sebagai
        "lem" yang menghubungkan satu tabel dengan tabel lainnya. Kita akan
        membedah tiga jenis hubungan fundamental: *One-to-One* (satu-ke-satu),
        *One-to-Many* (satu-ke-banyak), dan *Many-to-Many* (banyak-ke-banyak),
        lengkap dengan contoh kasus nyata dan cara mengimplementasikannya,
        termasuk penggunaan tabel perantara (*junction table*) untuk hubungan
        *many-to-many*.
      </p>
      <p>
        Pada akhirnya, Anda akan mampu menerjemahkan kebutuhan bisnis menjadi
        sebuah diagram hubungan entitas (*Entity-Relationship Diagram* - ERD)
        yang jelas dan logis. Anda akan memahami bagaimana merancang skema
        database yang tidak hanya akurat merepresentasikan data, tetapi juga
        menjaga integritas data dan meminimalkan redundansi. Keterampilan dalam
        desain relasional adalah salah satu keahlian paling berharga dalam
        rekayasa perangkat lunak, memastikan aplikasi yang Anda bangun berdiri
        di atas fondasi data yang kokoh.
      </p>
    </div>
  ),
};
