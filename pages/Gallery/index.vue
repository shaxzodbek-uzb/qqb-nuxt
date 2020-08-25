<template>
  <div class="gallery-page-wrap" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="gallery-page-container d-flex f-between pt-60">
        <h1 class="title-50">Галерея</h1>

        <div class="gallery-search news-search p-relative">
          <input type="text" class="d-block w-100 h-100" />
          <span class="input-placeholder p-absolute transition">Поиск</span>
          <img src="~/static/img/svg/search.png" class="p-absolute" alt />
        </div>
      </div>

      <div class="gallery-container">
        <div class="row gallery-items">
          <div class="col-xl-4 gallery-left">
            <h1>“BANKEXPO-2019”</h1>

            <div class="news-badge">
              <img src="~/static/img/svg/calendar.png" alt />
              <span>23.01.2020</span>
            </div>
          </div>
          <div class="col-xl-8 gallery-right">
            <div id="grid-gallery" class="grid-gallery">
              <div class="gallery-cell-wrap grid-wrap d-flex">
                <span class="gallery-photo-count">13 ФОТО</span>

                <ul class="gallery-items-wrap grid d-flex f-wrap f-fill">
                  <li class="gallery-items-cell p-relative rounded">
                    <div class="gallery-aspect">
                      <img src="~/static/img/img-18.png" class="d-block" alt />
                    </div>
                  </li>
                  <li class="gallery-items-cell p-relative rounded">
                    <div class="gallery-aspect">
                      <img src="~/static/img/img-19.png" class="d-block" alt />
                    </div>
                  </li>
                  <li class="gallery-items-cell p-relative rounded">
                    <div class="gallery-aspect">
                      <img src="~/static/img/img-20.png" class="d-block" alt />
                    </div>
                  </li>
                  <li class="gallery-items-cell p-relative rounded">
                    <div class="gallery-aspect">
                      <img src="~/static/img/img-21.png" class="d-block" alt />
                    </div>
                  </li>
                </ul>
              </div>

              <section class="slideshow">
                <div class="slideshow-header">
                  <div>
                    <p>“BANKEXPO-2019”</p>
                  </div>
                  <span class="icon nav-close pointer">
                    <img src="~/static/img/svg/times-icon.png" alt />
                  </span>
                </div>
                <ul>
                  <li>
                    <figure>
                      <img src="~/static/img/img-18.png" alt="img01" />
                    </figure>
                  </li>
                  <li>
                    <figure>
                      <img src="~/static/img/img-19.png" alt="img02" />
                    </figure>
                  </li>
                  <li>
                    <figure>
                      <img src="~/static/img/img-20.png" alt="img03" />
                    </figure>
                  </li>
                  <li>
                    <figure>
                      <img src="~/static/img/img-21.png" alt="img03" />
                    </figure>
                  </li>
                </ul>
                <nav>
                  <span class="icon nav-prev">
                    <div class="icon-circle">
                      <img src="~/static/img/svg/arrow-left.png" alt />
                    </div>
                  </span>
                  <span class="icon nav-next">
                    <div class="icon-circle">
                      <img src="~/static/img/svg/arrow-right.png" alt />
                    </div>
                  </span>
                </nav>
                <div class="gallery-counter">
                  <div class="gallery-counter__items count-start"></div>
                  <div class="counter-separator color-primary mx-1">/</div>
                  <div class="gallery-counter__items count-length"></div>
                </div>
                <!-- <div class="info-keys icon">Navigate with arrow keys</div> -->
              </section>
            </div>
          </div>
        </div>

        <div class="row gallery-items">
          <div class="col-xl-4 gallery-left">
            <h1>“BANKEXPO-2019”</h1>

            <div class="news-badge">
              <img src="~/static/img/svg/calendar.png" alt />
              <span>23.01.2020</span>
            </div>
          </div>
          <div class="col-xl-8 gallery-right">
            <div id="grid-gallery-2" class="grid-gallery">
              <div class="gallery-cell-wrap grid-wrap d-flex">
                <span class="gallery-photo-count">13 ФОТО</span>

                <ul class="gallery-items-wrap grid d-flex f-wrap f-fill">
                  <li class="gallery-items-cell p-relative rounded">
                    <div class="gallery-aspect">
                      <img src="~/static/img/img-21.png" class="d-block" alt />
                    </div>
                  </li>
                  <li class="gallery-items-cell p-relative rounded">
                    <div class="gallery-aspect">
                      <img src="~/static/img/img-22.png" class="d-block" alt />
                    </div>
                  </li>
                  <li class="gallery-items-cell p-relative rounded">
                    <div class="gallery-aspect">
                      <img src="~/static/img/img-23.png" class="d-block" alt />
                    </div>
                  </li>
                  <li class="gallery-items-cell p-relative rounded">
                    <div class="gallery-aspect">
                      <img src="~/static/img/img-24.png" class="d-block" alt />
                    </div>
                  </li>
                </ul>
              </div>

              <section class="slideshow">
                <ul>
                  <li>
                    <figure>
                      <img src="~/static/img/img-21.png" alt="img01" />
                    </figure>
                  </li>
                  <li>
                    <figure>
                      <img src="~/static/img/img-22.png" alt="img02" />
                    </figure>
                  </li>
                  <li>
                    <figure>
                      <img src="~/static/img/img-23.png" alt="img03" />
                    </figure>
                  </li>
                  <li>
                    <figure>
                      <img src="~/static/img/img-24.png" alt="img03" />
                    </figure>
                  </li>
                </ul>
                <nav>
                  <span class="icon nav-prev"></span>
                  <span class="icon nav-next"></span>
                  <span class="icon nav-close"></span>
                </nav>
                <div class="gallery-counter">
                  <div class="gallery-counter__items count-start"></div>
                  <div class="counter-separator color-primary mx-1">/</div>
                  <div class="gallery-counter__items count-length"></div>
                </div>
                <!-- <div class="info-keys icon">Navigate with arrow keys</div> -->
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// CBPGridGallery
import { setOffset } from '~/utils/frontend'

export default {
  data() {
    return {}
  },
  mounted() {
    setOffset()

    // const $imgItems = document.querySelectorAll('.gallery-items-cell')

    // $imgItems.forEach((el) => {
    //   el.addEventListener('click', () => {
    //     var $slideShow = el.closest('.grid-gallery')

    //     // new CBPGridGallery($slideShow);
    //   })
    // })

    // new CBPGridGallery(document.getElementById('grid-gallery'))
  },
}
</script>

<style></style>
