# CSS Layout Essentials

- Media queries (float + width layouts)
- CSS positions (static → sticky)
- Flexbox basics: `display: flex`, `flex-direction`, `flex`
- Tailwind: setup + a few basics

## 1. Responsive Mindset

- Mobile-first: start narrow, enhance at breakpoints
- Fluid widths (`%`, `max-width`) + images (`img {max-width:100%}`)
- Use media queries to change layout, not content
 
```css
/* Common breakpoints (guideline) */
@media (min-width: 640px) {
  /* phones→sm */
}
@media (min-width: 768px) {
  /* tablets */
}
@media (min-width: 1024px) {
  /* laptops */
}
```

## 2. Floats: The Classic Two-Column

- Float creates side-by-side blocks
- Control layout with `width` percentages
- Clear the float to contain the parent

```html
<div class="row">
  <aside class="col side">Sidebar</aside>
  <main class="col main">Content</main>
</div>
```

```css
.row::after {
  content: "";
  display: block;
  clear: both;
} /* clearfix */
.col {
  float: left;
}
.side {
  width: 30%;
}
.main {
  width: 70%;
}
```

Example - [float example](./examples/2.html)

# 3. Floats + Media Queries (Mobile-First)

- Stack on small screens, float on larger

```css
/* Base: stacked */
.col {
  width: 100%;
  float: none;
}

/* Enhance at 768px+ */
@media (min-width: 768px) {
  .col {
    float: left;
  }
  .side {
    width: 30%;
  }
  .main {
    width: 70%;
  }
}
```

Example - [float + media query](./examples/3.html)

**Tip:** Avoid fixed pixel heights; let content flow.  
**Challenge:** Make it desktop first (float by default). Hint: use `@media (max-width:767px)`

# 4. Float Gotchas & Fixes

- Missing clearfix → collapsing parent height
- Narrow screens → floats can squeeze text
- Use `box-sizing:border-box;` to make widths predictable

```css
* {
  box-sizing: border-box;
}
```

# 5. CSS Positioning: The Map

- `static` (default flow)
- `relative` (offset _itself_, keeps space)
- `absolute` (removed from flow; positioned to nearest _positioned_ ancestor)
- `fixed` (relative to viewport)
- `sticky` (hybrid: scrolls until it sticks)

# 6. Relative & Absolute Together

```html
<div class="card">
  <img src="..." alt="" />
  <span class="badge">NEW</span>
</div>
```

```css
.card {
  position: relative;
}
.badge {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 4px 8px;
  background: #111;
  color: #fff;
}
```

**Key:** `.card` becomes the _offset parent_.

Example - [relative + absolute](./examples/6.html)

# 7. Fixed & Sticky

```css
/* Fixed header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
}

/* Sticky subsection title */
.subhead {
  position: sticky;
  top: 64px; /* sticks below header */
  background: #fff;
}
```

Example - [fixed + sticky](./examples/7.html)

# 8. Flexbox: When & Why

- One-dimensional layout (row **or** column)
- Great for centering, navbars, equal-height columns
- Core properties we’ll use today:

  - Container: `display: flex`, `flex-direction`
  - Items: `flex` (grow, shrink, basis)

# 9. Flex Container Basics

```html
<nav class="nav"><a>Home</a><a>Docs</a><a>About</a></nav>
```

```css
.nav {
  display: flex; /* enable flex formatting */
  flex-direction: row; /* default; try column on mobile */
}
```

**Mobile-first idea:** column at base, switch to row at md+

Example - [flex container](./examples/9.html)

# 10. `flex-direction` Responsive Pattern

```css
/* Base: vertical stack */
.nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Larger screens: horizontal */
@media (min-width: 768px) {
  .nav {
    flex-direction: row;
  }
}
```

**Remember:** Flex is about **direction** + space distribution.

# 11. The `flex` Shorthand (Items)

- `flex: <grow> <shrink> <basis>;`
- Common patterns:

  - `flex: 1;` → fill available space
  - `flex: 0 0 200px;` → fixed 200px item
  - `flex: 1 0 300px;` → prefer 300px, can grow, don’t shrink

```html
<section class="row">
  <div class="box a">A</div>
  <div class="box b">B</div>
  <div class="box c">C</div>
</section>
```

```css
.row {
  display: flex;
}
.a {
  flex: 0 0 200px;
} /* fixed side */
.b {
  flex: 1;
} /* flexible middle */
.c {
  flex: 0 0 200px;
} /* fixed side */
```

Example - [flex items](./examples/11.html)

Check the following Flexbox playgrounds:

- [Flexbox Playground](https://codepen.io/enxaneta/full/adLPwv/)
- [https://flexboxfroggy.com/](https://flexboxfroggy.com/)

# 12. Flex vs Float (When to Choose)

- **Float + width**: simple columns, legacy support
- **Flex**: direction switches (row/column), equal heights, proportional growth
- You can mix: float for simple older patterns; flex for modern components

# 13. Summary

- Floats + widths + media queries: timeless baseline
- Positions: pick the right tool for the job (absolute vs sticky vs fixed)
- Flexbox: start with `display:flex`, control with `flex-direction` + `flex`
