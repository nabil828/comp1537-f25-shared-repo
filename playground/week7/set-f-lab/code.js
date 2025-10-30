console.log(1111);

$.ajax({
  "url": "https://yts.mx/api/v2/list_movies.json?genre=animation&sort_by=rating",
  "success": function (response) {
    console.log(response);
    for (let i = 0; i < response.data.movies.length; i++)
      $("#resultPara").append(
        `
          <div class="w-1/4">
            <div class="relative text-white">
              <img class="w-full" src="${response.data.movies[i].medium_cover_image}" alt="" />

              <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="#4cd964"
                  stroke="#4cd964"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  >
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                </svg>
                ${response.data.movies[i].rating}
              </div>
            </div>

            ${response.data.movies[i].title}
          </div>
      `)
  },
  "error": function () {
    console.log("network error");
  }
  ,
  "complete": function () {
    console.log("complete");
  }
})