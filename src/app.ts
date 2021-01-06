enum MovieGenre { ACTION, COMEDY, DRAMA, FANTASY, HORROR }

interface Movie<T> {
  name: string,
  genre: MovieGenre,
  data: T
}

const movieOne: Movie<string> = {
  name: 'Movie one',
  genre: MovieGenre.ACTION,
  data: 'some information',
};

const movieTwo: Movie<string> = {
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
