# laviniakd.github.io

Personal website of Lavinia Dunagan, served at https://laviniakd.github.io.

The site is plain HTML and CSS. There is no static site generator and no build step: each page is a file you edit directly, and pushing to `master` publishes the repository as-is via `.github/workflows/deploy.yml`.

## Layout

| Path | What it is |
| --- | --- |
| `index.html` | Home page and bio |
| `publications/index.html` | Publications, grouped by year |
| `talks/index.html` | Talks and presentations |
| `teaching/index.html` | Teaching |
| `cv/index.html` | CV (the PDF lives in `files/`) |
| `artwork/` | Artwork page and the p5.js sketch it runs |
| `style.css` | All styling, shared by every page |
| `files/` | PDFs (CV, papers) |
| `images/` | Images |
| `404.html` | Shown for missing pages |
| `about/`, `resume/`, `publication/…`, … | Redirects from old URLs |

## Common edits

- **Add a publication:** copy an existing `<li>` in `publications/index.html` (and the matching one in `cv/index.html`) and edit it. Wrap your own name in `<span class="me">` to bold it.
- **Change the menu:** the `<nav class="site-nav">` block is repeated at the top of every page, so update it in each one.
- **Update the CV PDF:** replace `files/Dunagan_Lavinia_CV.pdf`, keeping the same name so links keep working.

## Previewing locally

```
python3 -m http.server 8000
```

then open http://localhost:8000.
