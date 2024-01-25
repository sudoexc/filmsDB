/* Задания на урок:



1) Удалить все рекламные блоки со страницы (правая часть сайта)



2) Изменить жанр фильма, поменять "комедия" на "драма"



3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.

Реализовать только при помощи JS



4) Список фильмов на странице сформировать на основании данных из этого JS файла.

Отсортировать их по алфавиту 



5) Добавить нумерацию выведенных фильмов */



'use strict';



const movieDB = {

    movies: [

        'Логан',

        'Лига справедливости',

        'Ла-ла лэнд',

        'Одержимость',

        'Скотт Пилигрим против...'

    ]

};


const adds = document.querySelectorAll('.promo__adv img'),
      bg = document.querySelector('.promo__bg'),
      genre = bg.querySelector('.promo__genre'),
      filmsList = document.querySelector('.promo__interactive-list');

adds.forEach(item => {
    item.remove();
});

genre.textContent = 'ДРАММА';

bg.style.backgroundImage = 'url(img/bg.jpg)';

filmsList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((films, number) => {
    filmsList.innerHTML += `<li>${number + 1})${films}</li>`;
});