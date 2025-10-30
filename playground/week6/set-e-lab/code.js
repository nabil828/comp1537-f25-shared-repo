proccess_func = (response) => {
  // console.log(response.data.movies[0]);
  let resultString = ""
  for (let i = 0; i < response.data.movies.length; i++) {
    resultString += `
    <div class="cardy basis-1/4">
      <div class="relative ">
        <img class="w-full" src="${response.data.movies[i].medium_cover_image}" alt="" />
        <div class="absolute top-1/2 left-1/2 text-white  -translate-x-1/2 -translate-y-1/2 ">
          ${response.data.movies[i].rating}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="#ffcc00"
              stroke="#ffcc00"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
            </svg>
          </div>
        </div>
      </div>
      ${response.data.movies[i].title}
    </div>

      `
  }
  $("#resultPara").html(resultString)
}

$.ajax({
  'url': `https://yts.mx/api/v2/list_movies.json?genre=animation&minimum_rating=8&sort_by=rating`,
  success: proccess_func
})