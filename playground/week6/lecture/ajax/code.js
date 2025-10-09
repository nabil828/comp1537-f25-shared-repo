process_response = function (response) {
  console.log(response);
  resultString = ""
  for (let i = 0; i < response.data.movie_count; i++) {
    resultString += `
    <div>
    ${response.data.movies[i].title}
    <img src="${response.data.movies[i].medium_cover_image}" alt="" />
    </div>
    `
  }
  $("#resultPara").html(resultString)
}

$("#searchBtn").click(
  () => {
    $("#spinnerElement").show()
    x = $("#inp1").val()
    $.ajax({
      "url": `https://yts.mx/api/v2/list_movies.json?page=1&genre=animation&sort_by=rating&query_term=${x}`,
      "method": "GET",
      "success": process_response,
      "error": () => {
        console.log("error");
      },
      "complete": () => {
        console.log("done");
        $("#spinnerElement").hide()
      }
    })
  }
)

$("#spinnerElement").hide()
