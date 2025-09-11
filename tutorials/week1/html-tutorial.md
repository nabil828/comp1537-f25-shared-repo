# Introduction to Markup and HTML

## What is a Markup Language?

A **markup language** is a system for describing the structure and meaning of text documents using plain, unformatted text. Instead of embedding formatting directly into the document (like bold or italic in a word processor), markup languages rely on tags and symbols to describe what the content is and how it should be interpreted.

For example:

- A word might be marked as “important” rather than just styled in bold.
- A sentence might be marked as a “paragraph” rather than just separated with extra spaces.

This separation of **content** and **description** makes documents easier to process, interpret, and transform by computers.

## Example of a Markup Language: Wikitext

One example of a markup language is **Wikitext**, which powers Wikipedia.

- It is designed to be **fast to learn** and **easy to write**, producing pages with simple formatting.
- For example, this Wikitext:

  ```
  Line with an 'important' word.
  * point one
  * another point
  ```

  Would display as:

  - Line with an important word.
  - point one
  - another point

Although useful as an introduction, Wikitext is not our focus. The markup language we care about in this course is **HTML (HyperText Markup Language)**.

## Writing and Viewing Markup

To use a markup language like HTML, you need two things:

1. **A text editor** – where you type the markup code.
2. **A rendering tool** – something that interprets the markup and turns it into a visible result. For HTML, this is a **web browser**.

### Text Files

- HTML, CSS, and JavaScript are all stored as **plain text files**.
- Other examples of text-based formats: CSV, Markdown, Python, Java, etc.
- Text editors (e.g., VS Code, Sublime, Notepad++) are designed for working with these files.
- **Word processors** (like Word or Google Docs) are _not_ appropriate, since they add hidden formatting.

### File Naming

- HTML files are saved with the **.html** extension.
- For example: `index.html`.
- Once saved, these can be opened directly in any web browser.

## Introduction to HTML

**HTML (HyperText Markup Language)** is the standard language used to create web pages.

Key features:

- HTML describes the **structure** of a page.
- It uses **elements** (tags + content) to tell the browser what each part means.
- Examples of what HTML can describe:

  - A heading (`<h1>`)
  - A paragraph (`<p>`)
  - A link (`<a>`)
  - An image (`<img>`)

## A Simple HTML Document

Here’s the minimal HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My First Page</title>
  </head>
  <body>
    <p>Hello, world!</p>
  </body>
</html>
```

### Explanation:

- `<!DOCTYPE html>`: Tells the browser the page uses **HTML5**.
- `<html>`: The root element containing everything on the page.
- `<head>`: Holds **meta-information** (title, character encoding, styles).
- `<title>`: The page title (shown in the tab or bookmarks).
- `<body>`: Contains the **visible content** of the page (text, images, links, etc.).

## HTML Elements and Tags

### Elements

An **HTML element** consists of:

- An **opening tag**
- Some **content**
- A **closing tag**

Example:

```html
<h1>My First Heading</h1>
<p>My first paragraph.</p>
```

### Tags

- Tags are written inside `< >`.
- Most come in pairs: `<p> … </p>`.
- Some are **empty tags** (self-closing), such as `<img />` or `<meta />`.

### Nesting Rules

- Tags must be **properly nested**.
- Correct:

  ```html
  <p><em>Important</em> text.</p>
  ```

- Incorrect (overlapping):

  ```html
  <p><em>Important</p></em>
  ```

## Basic HTML Tags

- `<!DOCTYPE html>`: Declares the document type (HTML5).
- `<html>`: The overall container.
- `<head>`: Page information (not displayed directly).
- `<meta charset="UTF-8" />`: Character encoding (always use UTF-8).
- `<title>`: Page title.
- `<body>`: Main content area.

## Content Tags You’ll Use Often

- `<h1>` to `<h6>`: Headings (largest to smallest).
- `<p>`: Paragraphs.
- `<em>`: Emphasized text (semantic emphasis, not just italics).
- `<ul>` and `<ol>`: Lists (unordered/bulleted vs. ordered/numbered).
- `<li>`: List item (must go inside `<ul>` or `<ol>`).

Example:

```html
<p>Line with an <em>important</em> word.</p>
<ul>
  <li>point one</li>
  <li>another point</li>
</ul>
```

## Attributes

Attributes provide **extra information** about an element.

- Written inside the opening tag.
- Use the format: `name="value"`.

Examples:

```html
<meta charset="UTF-8" />
<!-- charset is an attribute -->
<abbr title="British Columbia Institute of Technology">BCIT</abbr>
<a href="http://www.bcit.ca/">Visit BCIT</a>
<img src="group.jpg" alt="A group of people" />
```

Important attributes:

- `href` (links)
- `src` (images, scripts)
- `alt` (alternative text for images)
- `lang` (language of the document or element)
- `id` and `class` (identifiers for styling and scripting)

## Semantic Markup

HTML is **semantic**, meaning tags describe _what content is_, not _how it looks_.

- `<em>` means “emphasized,” not “italic.”
- `<h1>` means “main heading,” not “large bold text.”

Why semantic HTML matters:

1. **Maintainability** – Appearance can be changed in CSS without touching content.
2. **Accessibility** – Screen readers and tools can interpret meaning.
3. **SEO** – Search engines use structure to better understand your page.
4. **Adaptability** – Works well across devices (desktop, mobile, etc.).

## Generic Tags

When no specific semantic tag fits, use:

- `<div>`: Block-level container (groups sections).
- `<span>`: Inline container (groups small text pieces).

Always pair with meaningful `class` or `id`:

```html
<li><span class="quantity">2 cups</span> flour</li>
<div class="social">Follow us: <a href="http://twitter.com">Twitter</a></div>
```

## URLs in HTML

Two types of URLs:

1. **Absolute URLs** – Complete addresses:

   ```html
   <a href="http://www.bcit.ca/">BCIT</a>
   ```

2. **Relative URLs** – Locations relative to the current file:

   ```html
   <img src="images/pic.jpg" alt="Vacation photo" />
   ```

Tips:

- Use forward slashes `/`, not backslashes.
- File names are case-sensitive.
- Avoid spaces; use `-` or `_`.

## Validating HTML

Browsers try to “fix” broken HTML silently, but this can cause problems across browsers.

- Use the **W3C Validator**: [https://validator.w3.org/](https://validator.w3.org/).
- Expectation: All your course HTML must pass validation with **no errors**.

## Character References

Some characters have special meaning in HTML and must be escaped:

| Character | Reference |
| | |
| `<` | `&lt;` |
| `>` | `&gt;` |
| `&` | `&amp;` |
| `"` | `&quot;` |
| `'` | `&apos;` |

Example:

```html
7 &lt; 10
```

Displays as: `7 < 10`.

Also used for symbols, accents, and emoji:

```html
<p>Select File &rarr; Open. Ol&eacute;!</p>
<p>&#128512; Hello!</p>
```

## Summary

- HTML is a **semantic markup language** for structuring web pages.
- Content is written in **plain text files** using tags and attributes.
- Tags describe **meaning** (not appearance).
- Always write **valid HTML** to ensure cross-browser compatibility.
- Use **semantic tags** when possible, and `<div>`/`<span>` only when necessary.
- We’ll later use **CSS** for presentation and **JavaScript** for interactivity.
