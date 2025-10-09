## More jQuery: Traversal + AJAX

- Traversal: walk the DOM to find nodes
- AJAX: fetch/send data without full page reloads

## jQuery Traversal: Why it matters

- Traverse = _walk the DOM_ to find exactly the nodes you need
- Cleaner than long CSS selectors; great for dynamic UIs
- Three families you’ll use most:

  - **Hierarchy:** `.parent()`, `.parents()`, `.children()`, `.find()`, `.closest()`
  - **Lateral (siblings):** `.siblings()`, `.next()`, `.prev()`
  - **Filtering/Indexing:** `.filter()`, `.not()`, `.has()`, `.eq()`, `.first()`, `.last()`, `.slice()`

- Helpers: `.each()`, `.map()` for iteration/transforms

## Hierarchy traversal (core patterns)

```js
// direct parent vs any ancestor(s)
$(".error").parent().addClass("has-error");
$(".error").parents("form").addClass("invalid");

// children vs deep descendants
$("#menu").children("li").addClass("top-level");
$("#menu").find("a").addClass("all-links");

// closest: climb up until selector matches
$(".buy-btn").closest(".card").addClass("highlight");
```

## Siblings + Filtering

```js
// lateral
$(".active").siblings().removeClass("active");
$(".active").next().addBack().addClass("current-or-next"); // addBack() includes original se
$(".tab.is-current").prev().addClass("before-current");

// filtering / indexing
$("li").filter(".featured").addClass("wow");
$("li").not(".disabled").addClass("clickable");
$("input").has(".icon-warning"); // keep elements that have a matching descendant
$(".item").eq(2).addClass("third"); // zero-based
$(".row").slice(5, 10).addClass("paged"); // get 5th to 10th rows
```


## AJAX: what is it?

- “AJAX” = **A**synchronous **J**avaScript **A**nd **X**ML (today usually JSON)
- tl;dr: AJAX lets pages fetch/send data **without full reloads**
- Use Cases:
  - Load more items (infinite scroll)
  - Search suggestions (autocomplete)
  - Form validation (check username availability)
  - Dynamic content updates (e.g., live scores, notifications)

## `$.ajax()` anatomy (jQuery)

```js
$.ajax({
  url: "/api/items",
  method: "GET", // or 'POST', 'PUT', 'DELETE'
  success: function (data) {
    // handle success
  },
  error: function (xhr) {
    // handle error
  },
  complete: function () {
    // cleanup, hide loaders, etc.
  },
});
```

## YTS API (movies) + jQuery AJAX

**Endpoint:** `https://yts.mx/api/v2/list_movies.json`
Common params:

- `query_term` (title or IMDb code), `page`, `limit` (1–50)
- `sort_by` (e.g., `rating`, `year`, `title`), `order_by` (`asc|desc`)
- `minimum_rating`, `genre`

**Minimal HTML**

```html
<input id="q" placeholder="Search movies..." />
<button id="go">Search</button>
<div id="results"></div>
<div id="spinner" style="display:none;">Loading…</div>
<div id="error" style="display:none;color:red;"></div>
```

**JS (search + render)**

```js
function renderMovies(response) {
  movies = response.data.movies || [];
  htmlString = "";
  for (let i = 0; i < movies.length; i++) {
    const m = movies[i];
    htmlString += `
    <article class="movie">
      <img src="${m.medium_cover_image}" alt="${m.title} poster" />
      <h3>${m.title} (${m.year})</h3>
    </article>
  `;
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
  });
});
```

**Traversal + AJAX together**

```js
$("#results").on("click", ".movie", function () {
  $(this).addClass("selected").siblings().removeClass("selected");
});
```
