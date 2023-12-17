let numberOfFilms = prompt ("Сколько фильмов вы уже посмотрели?"," ")
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}
let OneOfFilms1 = prompt ("Один из последних просмотренных фильмов?"," ")
let OneOfFilms2 = prompt ("Один из последних просмотренных фильмов?"," ")
let critic1 = prompt ("На сколько оцените его?"," ")
let critic2 = prompt ("На сколько оцените его?"," ")
personalMovieDB.movies[OneOfFilms1] = critic1
personalMovieDB.movies[OneOfFilms2] = critic2