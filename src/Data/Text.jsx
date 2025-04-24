import React from "react";

const ReactIntro = (
  <div>
    <p>
      React JS adalah library JavaScript yang digunakan untuk membangun
      antarmuka pengguna (UI) yang interaktif. Dikembangkan oleh Facebook
      (sekarang Meta) pada tahun 2013, React telah menjadi salah satu framework
      front-end paling populer di dunia pengembangan web.
    </p>

    <p>
      <strong>Konsep Utama React:</strong>
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        <strong>Component-Based:</strong> React menggunakan pendekatan berbasis
        komponen, di mana UI dibagi menjadi komponen-komponen yang dapat
        digunakan kembali. Setiap komponen mengelola state dan logika sendiri.
      </li>
      <li>
        <strong>Virtual DOM:</strong> React menciptakan representasi virtual
        dari DOM, yang membuat proses rendering lebih efisien. React hanya
        memperbarui bagian DOM yang benar-benar berubah.
      </li>
      <li>
        <strong>JSX:</strong> React menggunakan JSX, ekstensi sintaks yang
        memungkinkan penulisan HTML dalam JavaScript, membuat kode lebih mudah
        dibaca dan ditulis.
      </li>
      <li>
        <strong>Unidirectional Data Flow:</strong> Data dalam React mengalir
        satu arah dari komponen induk ke komponen anak, membuat aplikasi lebih
        mudah diprediksi dan di-debug.
      </li>
      <li>
        <strong>Hooks:</strong> Fitur yang diperkenalkan dalam React 16.8 yang
        memungkinkan penggunaan state dan fitur React lainnya tanpa menulis
        class.
      </li>
    </ul>

    <p>
      <strong>Keunggulan React JS:</strong>
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        <strong>Performa Tinggi:</strong> Berkat Virtual DOM, React mampu
        menangani pembaruan UI dengan sangat efisien.
      </li>
      <li>
        <strong>Komponen Reusable:</strong> Komponen React dapat digunakan
        kembali di seluruh aplikasi, menghemat waktu dan usaha dalam
        pengembangan.
      </li>
      <li>
        <strong>Ekosistem yang Kaya:</strong> React memiliki ekosistem yang luas
        dengan banyak library dan tools pendukung.
      </li>
      <li>
        <strong>Dukungan Komunitas:</strong> Komunitas React yang besar dan
        aktif menyediakan sumber daya, tutorial, dan dukungan yang luas.
      </li>
      <li>
        <strong>SEO Friendly:</strong> Dengan server-side rendering (menggunakan
        tools seperti Next.js), aplikasi React dapat dioptimalkan untuk SEO.
      </li>
    </ul>

    <p>
      Melalui kursus di <strong>Belajar Pintar</strong>, Kita akan mempelajari
      dasar-dasar React JS dan bagaimana membangun aplikasi web modern dengan
      menggunakan library ini. Setiap modul telah disusun secara sistematis
      untuk membantu dalam memahami konsep-konsep penting dalam React dari
      tingkat pemula hingga tingkat lanjut.
    </p>
  </div>
);

export default ReactIntro;
