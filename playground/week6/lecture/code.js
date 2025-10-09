function renderMovies(response) {
  movies = response.data.movies || []
  htmlString = ""
  for (let i = 0; i < movies.length; i++) {
    const m = movies[i];
    htmlString += `
    <article class="movie">
      <img src="${m.medium_cover_image}" alt="${m.title} poster" />
      <h3>${m.title} (${m.year})</h3>
    </article>
  `
  }
  $("#results").html(htmlString || "<p>No results.</p>");
}

function renderError(response) {
  $("#error").text("Network Error").show();
}

$("#go").on("click", function () {
  const term = $("#q").val().trim();
  $("#error").hide().empty();
  $("#spinner").show();
  $.ajax({
    url: `https://yts.mx/api/v2/list_movies.json?query_term=${term}`,
    method: "GET",
    success: renderMovies,
    error: renderError,
    complete: function () {
      $("#spinner").hide();
    },
  })
});

$("#results").on("click", ".movie", function () {
  $(this).addClass("selected").siblings().removeClass("selected");
});