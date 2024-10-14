'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const OneOfFilms1 = prompt('Один из последних просмотренных фильмов?', ''),
      Grade1 = prompt('На сколько оцените его?', ''),
      OneOfFilms2 = prompt('Один из последних просмотренных фильмов?', ''),
      Grade2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[OneOfFilms1] = Grade1;
personalMovieDB.movies[OneOfFilms2] = Grade2;

console.log(personalMovieDB);