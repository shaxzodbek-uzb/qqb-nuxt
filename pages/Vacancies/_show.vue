<template>
  <div class="vacancies-page-show" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="vacancies-show-container pt-60">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="vacancies-show-left">
              <button
                type="button"
                class="router-back d-flex align-center pointer"
                @click="$router.go(-1)"
              >
                <img src="~/static/img/svg/arrow-back.png" alt />
                <span>Вакансии</span>
              </button>

              <h1>
                Клиентский менеджер
                <br />(ипотечное направление)
              </h1>

              <p>
                Вакансия опубликована:
                <br />07.05.2020 13:13:27 в Ташкенте
              </p>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="vacancies-show-right">
              <h1>Обязанности:</h1>

              <div class="about-credit-need">
                <ul>
                  <li>
                    <p>
                      Онлайн-консультирование клиента по ипотечному кредиту с
                      целью подачи заявки в Банк (через онлайн-чат и по
                      телефону).
                    </p>
                  </li>
                  <li>
                    <p>
                      Онлайн-поддержка клиентов и партнеров Банка в личном
                      кабинете: доведение заявки на ипотечный кредит до
                      одобрения.
                    </p>
                  </li>
                  <li>
                    <p>
                      Исходящие звонки по «тёплой» клиентской базе в целях
                      оказания помощи по формированию пакета документов на
                      ипотечный кредит.
                    </p>
                  </li>
                  <li>
                    <p>
                      Онлайн-продажи по телефону услуг Банка, связанных с
                      ипотечным кредитованием, клиентам и партнерам Банка
                      ("тёплая" база).
                    </p>
                  </li>
                  <li>
                    <p>
                      Проверка корректности и достаточности пакета документов от
                      клиента при подаче онлайн-заявки.
                    </p>
                  </li>
                </ul>
              </div>

              <h1>Требования:</h1>

              <div class="about-credit-need">
                <ul>
                  <li>
                    <p>Высшее образование.</p>
                  </li>
                  <li>
                    <p>
                      Опыт работы в финансово-банковской сфере/розничном
                      бизнесе/страховом секторе будет преимуществом.
                    </p>
                  </li>
                  <li>
                    <p>Опыт в продажах/навыки продаж.</p>
                  </li>
                </ul>
              </div>

              <h1>Требования:</h1>

              <div class="about-credit-need">
                <ul>
                  <li>
                    <p>Трудоустройство согласно Трудовому Кодексу РУз.</p>
                  </li>
                  <li>
                    <p>График работы: сменный ("плавающие" выходные).</p>
                  </li>
                  <li>
                    <p>
                      Гарантированный доход: оклад плюс премиальное
                      вознаграждение (квартальное и годовое).
                    </p>
                  </li>
                  <li>
                    <p>
                      Обучение функционалу на рабочем месте: теория и практика.
                    </p>
                  </li>
                  <li>
                    <p>Добровольное медицинское страхование.</p>
                  </li>
                </ul>
              </div>

              <h1>Контакты:</h1>

              <div class="contact-dates">
                <div class="contact-date-items d-flex">
                  <div class="contact-date-icon">
                    <img src="~/static/img/svg/phone-3.png" alt />
                  </div>
                  <div class="contact-date-text">
                    <a href="tel:+998781501001">+998 (78) 150 10 01</a>
                    <a href="tel:+998781509339">+998 (78) 150 93 39</a>
                  </div>
                </div>

                <div class="contact-date-items d-flex">
                  <div class="contact-date-icon">
                    <img src="~/static/img/svg/email-3.png" alt />
                  </div>
                  <div class="contact-date-text">
                    <span>Email: info.toshkent~qqb.uz</span>
                  </div>
                </div>

                <div class="contact-date-items d-flex">
                  <div class="contact-date-icon">
                    <img src="~/static/img/svg/loc-3.png" alt />
                  </div>
                  <div class="contact-date-text">
                    <span>Адрес: 100011, г. Ташкент, ул А. Навои, 18А</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setOffset } from '~/utils/frontend'

export default {
  mounted() {
    setOffset()
  },
}
</script>

<style></style>
