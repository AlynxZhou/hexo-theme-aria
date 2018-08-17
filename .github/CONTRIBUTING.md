Before Contributing
===================

# About Functions

Just like I say at the end of READMEs, please add functions that most people use and not conflict with existing styles and layouts. More choices are better, but only when they won't become a mess. Keep it simple and stupid.

# About Language

Even though I am a Chinese and I know most users are Chinese too, I prefer to use English in code, comment, filename, commit message and doc. English are always first-class language for programmers. So before we can display CJK chars in tty, keep using English.

However, you can use Chinese in issues and PR details, which are not code-related.

# About Commit Message

I prefer to use past tense and dot (`.`) and use upper case for the first char of a sentence. Though I know most people think it's useless, but I like to make it like English.

So write like this `Updated sidebar.njk.` with which file you changed or `Updated sidebar styles and layouts.` if it is related with more than one files.

I prefer to use those word:

- Created

- Updated

- Removed

- Fixed

# About File

Don't give me editor-related files like `.vscode`, `.idea`. Others may not use the same editor as you.

# About Code

I'm sorry that I am a little OCD with my code. When you add code that will be sent in a PR, please read some of my code and make them looks like my style. It is OK if you forget to do this, but it will make me take time to re-write your code, I don't want to be tired with those work. Thanks.

But what is my style? I will try to explain it.

## Indention

**2 spaces.** For all of HTML/CSS/JS code. **NO tab.** I use tabs in C but 2 space is better for Web.

**DO NOT add indention between Nunjucks code and HTML code.** What that means? It sounds like when you remove all Nunjucks code, HTML code still have correct indention that you don't need to delete spaces. Example:

```html
<div class="cls">
  {% if aaa %}
  {% if bbb %}
  <p>Some text.<p>
  {% endif %}
  {% endif %}
</div>
```

You may say: "Nunjucks code is not properly indented!", but it already a joke that you want keep a better between two kind of code, HTML code is much more than Nunjuck, so just keep HTML, and use Nunjucks as C pre-compile commands.

## Empty Line

**DO NOT add empty line in CSS/Stylus/HTML/Nunjucks files.** I think there is no need for it. But **DO add empty line in JS files between different functions**.

## Space

**DO NOT add needless spaces.**

### HTML/Nunjucks

Add space after `{{`, `{%` and before `}}`, `%}`.

### CSS/Stylus

Add space before `{` and after `:` like this:

```css
.cls {
  background: #ccc;
}
```

### JS

Use as [the Standard Style](https://standardjs.com/) except this:

```javascript
// Mine. Yes.
function someFunc() {}
// Standard. No.
function someFunc () {}
```

However, I prefer to **add `;`** and **use double quote** in JavaScript. Note this.

## Quote

**Use DOUBLE quote and escape it in some condition except you want to display a single quote.** I know it is hard but I am a C programmer first, single quote is just a char and double quote is for strings in my mind. Sorry for this.

## Language Specific Styles

### HTML/Nunjucks

Some time you don't need to escape the quote and it works correct like this:

```html
<meta name="keywords" content="{{ page.keywords.join(", ") }}">
```

Nunjucks' `{{ }}` helps.

Use Hexo's `url_for()` function when needed.

### CSS/Stylus

I know Stylus gives you a lot of freedom but I like to keep it similar with CSS. So please use `;`, `{`, `}`.

Prefer to use Stylus' nested style instead of plain CSS selector when you have styles for both of parent and child like this:

```css
// CSS. No.
.parent {
  background: #ccc;
}
.parent .child {
  background: #333;
}
// Stylus. Yes.
.parent {
  background: #ccc;
  .child {
    background: #333;
  }
}
```

But if you only have style for child, not parent, don't be nest:

```css
// No style for parent.
.parent .child {
  background: #333;
}
```

**Keep the nested child at the end of parent.**
