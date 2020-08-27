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
          <div class="col-xl-3 gallery-left">
            <h1>“BANKEXPO-2019”</h1>

            <div class="news-badge">
              <img src="~/static/img/svg/calendar.png" alt />
              <span>23.01.2020</span>
            </div>
          </div>
          <div class="col-xl-9 gallery-right">
            <lightbox :items="images"> </lightbox>
          </div>
        </div>

        <div class="row gallery-items">
          <div class="col-xl-3 gallery-left">
            <h1>“BANKEXPO-2019”</h1>

            <div class="news-badge">
              <img src="~/static/img/svg/calendar.png" alt />
              <span>23.01.2020</span>
            </div>
          </div>
          <div class="col-xl-9 gallery-right">
            <lightbox :items="images"> </lightbox>
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
    return {
      images: [
        'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80',
        'https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80',
        'https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80',
        'https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80',
      ],
    }
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
