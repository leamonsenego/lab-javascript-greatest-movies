// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const getAllDirectors = (moviesArg) => {
  const directors = moviesArg.map((movieItem) => {
    return movieItem.director;
  });

  const uniqueDirectors = directors.filter((element, index) => {
    return directors.indexOf(element) === index;
  });

  return uniqueDirectors;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergMovies = moviesArray.filter((item) => {
    if (item.director === "Steven Spielberg" && item.genre.includes("Drama")) {
      return true;
    } else {
      return false;
    }
  });

  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = (moviesArray) => {
  const sum = moviesArray.reduce((accumulator, currentValue) => {
    if (!currentValue.score) {
      return accumulator;
    } else {
      return accumulator + currentValue.score;
    }
  }, 0);

  let average = Math.round((sum / moviesArray.length) * 100) / 100;

  if (moviesArray.length === 0) {
    return 0;
  }

  return average;
};

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (moviesArray) => {
  const dramaArray = moviesArray.filter((item) => item.genre.includes("Drama"));
  return scoresAverage(dramaArray);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  // Create a shallow copy of the original array
  const sortedMovies = movies.slice();

  // Sort the array by year and title
  sortedMovies.sort(function (a, b) {
    if (a.year !== b.year) {
      return a.year - b.year; // Sort by year
    } else {
      return a.title.localeCompare(b.title); // Sort alphabetically by title
    }
  });

  // Return the sorted array
  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const orderedbyLetter = moviesArray.slice().sort();

  return orderedbyLetter;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

