

// Set up event listener for when the user selects a genre
document.getElementById("genre").addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = document.getElementById("genre").value;

  // Create a variable to hold the list of movies
  let movieList = [];

  // Assign the correct movie titles to movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    // If Comedy is selected, add each comedy movie to movieList
    movieList.push("The Mask");
    movieList.push("Superbad");
    movieList.push("Dumb and Dumber");
    movieList.push("Step Brothers");
  } else if (selectedGenre === "Action") {
    // If Action is selected, add each action movie to movieList
    movieList.push("Die Hard");
    movieList.push("Mad Max: Fury Road");
    movieList.push("John Wick");
    movieList.push("The Dark Knight");
  } else if (selectedGenre === "Drama") {
    // If Drama is selected, add each drama movie to movieList
    movieList.push("Forrest Gump");
    movieList.push("The Shawshank Redemption");
    movieList.push("The Godfather");
    movieList.push("A Beautiful Mind");
  } else if (selectedGenre === "Sci-Fi") {
    // If Sci-Fi is selected, add each sci-fi movie to movieList
    movieList.push("Inception");
    movieList.push("The Matrix");
    movieList.push("Interstellar");
    movieList.push("Blade Runner 2049");
  }

  // Display the list of movies on the page
  document.getElementById("movieRecommendations").innerText = `Enjoy: ${movieList.join(", ")}`;
});
