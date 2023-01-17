<template>
  <section class="section section_with_separator">
    <div class="section__wrapper">
      <h3 class="section__title">Объявления</h3>
      <div class="notice">
        <ul class="notice__list">
          <li class="notice-card">
            <div class="text-block">
              <h4 class="text-block__title">Уважаемые пациенты!!!</h4>
              <p class="text-block__paragraph text-block__paragraph_with_indent">
                Жители республики могут задать вопросы, касающиеся медобслуживания, а
                представитель медицинской организации ответит в течение двух часов. В чате
                можно задать вопросы о записи к врачу, на обследование, о режиме работы
                медицинских специалистов.
              </p>
              <p class="text-block__paragraph text-block__paragraph_with_indent">
                <span class="text-block__text-important">Важно помнить:</span>
                назначение лечения и медицинские советы в чате получить нельзя, это
                возможно только на приёме у врача. Также в чатах не получится вызвать
                неотложную или скорую помощь.
              </p>
              <p class="text-block__paragraph text-block__paragraph_with_indent">
                Чаты созданы в рамках федерального проекта «ЗдравКонтроль». Федеральный
                проект реализуется с использованием гранта Президента Российской
                Федерации, предоставленного Фондом президентских грантов, при поддержке
                Общественной палаты и Министерства здравоохранения Российской Федерации.
              </p>
              <p class="text-block__paragraph text-block__paragraph_with_indent">
                <span class="text-block__text-important">Главная задача проекта </span>
                - повышение качества и доступности медицинской помощи для населения.
              </p>
              <p class="text-block__paragraph text-block__paragraph_with_indent">
                В регионе создали два чата: для жителей Сыктывкара и муниципалитетов
                региона. График работы чатов с 8:00 до 20:00 с понедельника по субботу
                включительно.
              </p>
              <p class="text-block__paragraph text-block__paragraph_with_indent">
                <span class="text-block__text-important"
                  >Вступить в свой чат очень просто – перейдя по ссылке:</span
                >
              </p>
              <p class="text-block__paragraph text-block__paragraph_with_indent">
                <a href="https://t.me/+xRAVMaYHy91hOWU6" class="text-block__link"
                  >Коми. Здоровье →</a
                >
              </p>
              <p class="text-block__paragraph text-block__paragraph_with_indent">
                <a href="https://t.me/+OaJ58Fl3bbxjNjBi" class="text-block__link"
                  >Сыктывкар. Здоровье →</a
                >
              </p>
            </div>
          </li>
          <li class="notice-card">
            <div class="text-block">
              <h4 class="text-block__title">Уважаемые пациенты!!!</h4>
              <p class="text-block__paragraph text-block__paragraph_with_indent">
                Приглашаем Вас принять участие в интерактивном анкетировании, по
                независимой оценке, качества условий оказания медицинский услуг ГАУЗ РК
                «Воркутинская стоматологическая поликлиника».
              </p>
              <p class="text-block__paragraph text-block__paragraph_with_indent">
                <span class="text-block__text-important"
                  >Для участия в онлайн голосовании необходимо перейти по баннеру:</span
                >
              </p>
              <p class="text-block__paragraph text-block__paragraph_with_image">
                <a
                  href="https://anketa.minzdrav.gov.ru/staticogvjustank/52/1"
                  class="text-block__link"
                >
                  <img
                    src="../assets/text-block/anketa-baner.png"
                    alt="Анкетирование"
                    class="text-block__image"
                  />
                </a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="section section_with_separator">
    <div class="section__wrapper">
      <h3 class="section__title">Информация</h3>
      <div class="notice">
        <ul class="notice__list">
          <li class="notice-card">
            <div class="text-block">
              <h4 class="text-block__title">Что такое ГЕПАТИТ С?</h4>
              <div class="text-block__images-container">
                <p class="text-block__paragraph text-block__paragraph_with_image">
                  <img
                    src="../assets/info/Плакат_1_А4_Гепатит_page-0001.jpg"
                    alt="Что такое ГЕПАТИТ С?"
                    class="text-block__image text-block__image_placed_images-container"
                  />
                </p>
                <p class="text-block__paragraph text-block__paragraph_with_image">
                  <img
                    src="../assets/info/Плакат_2_А4_Гепатит_page-0001.jpg"
                    alt="Что такое ГЕПАТИТ С?"
                    class="text-block__image text-block__image_placed_images-container"
                  />
                </p>
                <p class="text-block__paragraph text-block__paragraph_with_image">
                  <img
                    src="../assets/info/Плакат_2_А4_Гепатит_page-0002.jpg"
                    alt="Что такое ГЕПАТИТ С?"
                    class="text-block__image text-block__image_placed_images-container"
                  />
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import contactCards from '../constants/contactCards';

export default {
  data() {
    return {
      contactCards,
    };
  },
  components: {},
};
</script>

<style scoped></style>
