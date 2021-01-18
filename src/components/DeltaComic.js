import React from "react";

import web_1 from "../assets/img/1_web.jpg";
import web_2 from "../assets/img/2_web.jpg";
import web_3_1 from "../assets/img/3_1_web.jpg";

import "../assets/css/style.css";

function DeltaComic() {
  return (
    <div>
      <section id="sec1">
        <div>
          <img src={web_1} alt="1_web.jpg" />
        </div>
      </section>
      <section id="sec2" class="grid-2 container">
        <div class="sticky">
          <img src={web_2} alt="2_web.jpg" />
        </div>
        <div>
          <h1 class="text-content sticky">
            Semester Akhir Perkuliahan, <br />
            Banyak cerita dibaliknya
          </h1>
        </div>
      </section>
      <section id="sec3" class="container">
        <div class="vh-100">
          <img class="sticky" src={web_3_1} alt="3_1_web.jpg" />
        </div>
        <div>
          <h1 class="text-magang">Baik yang Selesai Magang ...</h1>
        </div>
      </section>
      <section class="container">
        <div class="vh-100">
          <img
            class="sticky"
            src="./assets/img/3_2_web.jpg"
            alt="3_2_web.jpg"
          />
        </div>
        <div>
          <h1 class="text-magang">Maupun yang Sedang Magang ...</h1>
        </div>
      </section>
      <section class="container">
        <div class="vh-100">
          <img
            class="sticky"
            src="./assets/img/4_1_web.jpg"
            alt="4_1_web.jpg"
          />
        </div>
        <div>
          <h1 class="text-magang">Baik yang sudah dapat judul skripsi...</h1>
        </div>
      </section>
      <section class="container">
        <div class="vh-100">
          <img
            class="sticky"
            src="./assets/img/4_2_web.jpg"
            alt="4_2_web.jpg"
          />
        </div>
        <div>
          <h1 class="text-magang">Maupun yang belum dapat judul skripsi ...</h1>
        </div>
      </section>
      <section class="container">
        <div class="vh-100">
          <img
            class="sticky"
            src="./assets/img/5_1_web.jpg"
            alt="5_1_web.jpg"
          />
        </div>
        <div>
          <h1 class="text-magang">
            Baik yang sudah dapat dosen pembimbing ...
          </h1>
        </div>
      </section>
      <section class="container">
        <div class="vh-100">
          <img
            class="sticky"
            src="./assets/img/5_2_web.jpg"
            alt="5_2_web.jpg"
          />
        </div>
        <div>
          <h1 class="text-magang">
            Maupun yang belum dapat dosen pembimbing ...
          </h1>
        </div>
      </section>
      <section class="container">
        <div class="vh-100">
          <img
            class="sticky"
            src="./assets/img/6_1_web.jpg"
            alt="6_1_web.jpg"
          />
        </div>
        <div>
          <h1 class="text-magang">Baik yang sudah Yudisium</h1>
        </div>
      </section>
      <section class="container">
        <div class="vh-100">
          <img
            class="sticky"
            src="./assets/img/6_2_web.jpg"
            alt="6_2_web.jpg"
          />
        </div>
        <div>
          <h1 class="text-magang">Maupun yang belum Yudisium</h1>
        </div>
      </section>
      <section class="grid-2 container">
        <div>
          <img src="./assets/img/7_web.jpg" alt="7_web.jpg" />
        </div>
        <div>
          <h1 class="text-magang">
            Apapun itu, Jangan terlena dengan kesuksesan <br /> dan <br />
            jangan putus asa dengan kegagalan
          </h1>
        </div>
      </section>
    </div>
  );
}

export default DeltaComic;
