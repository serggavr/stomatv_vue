<template>
  <div class="navigation-menu">
    <nav class="navigation-menu-list">
      <router-link class="navigation-menu__item navigation-menu__item_type_link" to="/"
        >Главная</router-link
      >
      <div class="navigation-menu__subnav">
        <button class="navigation-menu__item navigation-menu__item_type_list">
          Об учреждении<i class="navigation-menu__arrow"></i>
        </button>
        <div class="subnav-content">
          <a class="navigation-menu__item" href="#company">Режим работы</a>
          <a class="navigation-menu__item" href="#team">Лицензия</a>
          <a class="navigation-menu__item" href="#careers">История</a>
          <a class="navigation-menu__item" href="#careers">Доступная среда</a>
          <a class="navigation-menu__item" href="#careers">Противодействие коррупции</a>
          <a class="navigation-menu__item" href="#careers">Контакты</a>
          <a class="navigation-menu__item" href="#careers">История</a>
        </div>
      </div>
      <div class="navigation-menu__subnav">
        <button class="navigation-menu__item navigation-menu__item_type_list">
          Отделения<i class="navigation-menu__arrow"></i>
        </button>
        <div class="subnav-content">
          <ul class="cards cards_placed_nav">
            <contact-card
              v-for="card in contactCards"
              :key="card.id"
              :card="card"
            ></contact-card>
          </ul>
        </div>
      </div>
      <div class="navigation-menu__subnav">
        <button class="navigation-menu__item navigation-menu__item_type_list">
          Пациенту<i class="navigation-menu__arrow"></i>
        </button>
        <div class="subnav-content">
          <a class="navigation-menu__item" href="#bring">Запись на прием</a>
          <a class="navigation-menu__item" href="#express">Виды услуг</a>
          <a class="navigation-menu__item" href="#express"
            >Бесплатное оказание медицинской помощи</a
          >
          <a class="navigation-menu__item" href="#express">Платные услуги</a>
          <a class="navigation-menu__item" href="#deliver">Страховые компании</a>
          <a class="navigation-menu__item" href="#package"
            >Программа государственных гарантий</a
          >
          <a class="navigation-menu__item" href="#express"
            >Высокотехнологичная медицинская помощь (ВМП)</a
          >
          <a class="navigation-menu__item" href="#deliver">Страховые компании</a>
          <a class="navigation-menu__item" href="#contact"
            >Внеочередное оказание медицинской помощи</a
          >
        </div>
      </div>
      <div class="navigation-menu__subnav">
        <button class="navigation-menu__item navigation-menu__item_type_list">
          Специалисту<i class="navigation-menu__arrow"></i>
        </button>
        <div class="subnav-content">
          <a class="navigation-menu__item" href="#bring">Кадровое обеспечение</a>
          <a class="navigation-menu__item" href="#express">Медицинские работники</a>
          <a class="navigation-menu__item" href="#express">Порядки</a>
          <a class="navigation-menu__item" href="#express">Стандарты</a>
          <a class="navigation-menu__item" href="#deliver">РЕзультаты СОУТ</a>
          <a class="navigation-menu__item" href="#package"
            >Коми республиканская ассоциация врачей</a
          >
        </div>
      </div>
      <a class="navigation-menu__item" href="#contact">Обратная связь</a>
    </nav>
  </div>
</template>

<script>
import ContactCard from '@/components/ContactCard.vue';

import contactCards from '../constants/contactCards';

export default {
  data() {
    return {
      contactCards,
    };
  },
  components: {
    ContactCard,
  },
};
</script>

<style scoped></style>
