// Arrays of movie titles for each genre
// Comedy movies
const comedyMovies = [
  "The Mask",
  "Superbad",
  "Dumb and Dumber",
  "Step Brothers"
];

// Action movies
const actionMovies = [
  "Die Hard",
  "Mad Max: Fury Road",
  "John Wick",
  "The Dark Knight"
];

// Drama movies
const dramaMovies = [
  "Forrest Gump",
  "The Shawshank Redemption",
  "The Godfather",
  "A Beautiful Mind"
];

// Sci-Fi movies
const sciFiMovies = [
  "Inception",
  "The Matrix",
  "Interstellar",
  "Blade Runner 2049"
];

// Set up event listener for when the user selects a genre
document.getElementById("genre").addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = document.getElementById("genre").value;

  // Create a variable to hold the list of movies
  let movieList = [];

  // Assign the correct movie array to movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    // If Comedy is selected, use the comedyMovies array
    movieList = comedyMovies;
  } else if (selectedGenre === "Action") {
    // If Action is selected, use the actionMovies array
    movieList = actionMovies;
  } else if (selectedGenre === "Drama") {
    // If Drama is selected, use the dramaMovies array
    movieList = dramaMovies;
  } else if (selectedGenre === "Sci-Fi") {
    // If Sci-Fi is selected, use the sciFiMovies array
    movieList = sciFiMovies;
  }

  // Display the list of movies on the page
  document.getElementById("movieRecommendations").innerText = `Enjoy: ${movieList.join(", ")}`;
});
