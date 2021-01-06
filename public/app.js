"use strict";
var MovieGenre;
(function (MovieGenre) {
    MovieGenre[MovieGenre["ACTION"] = 0] = "ACTION";
    MovieGenre[MovieGenre["COMEDY"] = 1] = "COMEDY";
    MovieGenre[MovieGenre["DRAMA"] = 2] = "DRAMA";
    MovieGenre[MovieGenre["FANTASY"] = 3] = "FANTASY";
    MovieGenre[MovieGenre["HORROR"] = 4] = "HORROR";
})(MovieGenre || (MovieGenre = {}));
const movieOne = {
    name: 'Movie one',
    genre: MovieGenre.ACTION,
    data: 'some information',
};
const movieTwo = {
    name: 'Movie two',
    genre: MovieGenre.COMEDY,
    data: 'some information'
};
/*
  Important: the movie genre name won't be showed in the browser console, instead
  it will appear as an array index (number type)
*/
console.log(movieOne);
console.log(movieTwo);
