# Blog — frontend

This repository contains a **React** single-page application for a blog and e-commerce style experience: articles (categories, single post), product listing and detail, tools, auth screens, contact, shopping cart, and a tabbed account area. The runnable app lives in **`Front/`**.

## Tech stack

| Area | Choice |
|------|--------|
| Build & dev server | [Vite](https://vitejs.dev/) 5 |
| UI library | [React](https://react.dev/) 18 |
| Routing | [React Router](https://reactrouter.com/) 6 (`BrowserRouter` in `main.jsx`, route tree in `Guest/index.jsx`) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 3 with custom colors, breakpoints, and [Flowbite](https://flowbite.com/) plugin |
| Components | [MUI](https://mui.com/), [@material-tailwind/react](https://www.material-tailwind.com/), [Headless UI](https://headlessui.com/), [Flowbite React](https://flowbite-react.com/) |
| Icons | [Heroicons](https://heroicons.com/), [Font Awesome](https://fontawesome.com/) (React), [react-feather](https://github.com/feathericons/react-feather) |
| Carousels | [react-slick](https://react-slick.neostack.com/) + slick-carousel CSS |

Fonts are loaded in `Front/src/index.css` (Google Fonts: Fraunces, Cormorant Garamond, Cardo; body uses Inter via Tailwind).

## Repository layout

```
Front/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── package.json
└── src/
    ├── main.jsx              # App shell + BrowserRouter
    ├── App.jsx               # Renders main layout entry
    ├── index.css             # Tailwind, slick, global/navbar scroll styles
    ├── assets/               # Images (see assets/index.js exports)
    └── components/
        ├── Guest/            # Public site: navbar, banner, footer, articles, products, tools
        ├── Client/           # Logged-in UX: account tabs, shopping cart
        └── security/         # Login, signup, forgot password, contact
```

## Prerequisites

- **Node.js** 18+ (recommended; aligns with Vite 5)
- **npm** (lockfile: `Front/package-lock.json`)

## Getting started

From the repository root:

```bash
cd Front
npm install
npm run dev
```

The dev server defaults to Vite’s URL (typically `http://localhost:5173`).

### Other scripts

| Command | Purpose |
|---------|---------|
| `npm run build` | Production build to `Front/dist` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint (React, hooks, refresh plugin) |

## Application routes

Routes are defined in `Front/src/components/Guest/index.jsx` (nested under the top-level `/*` route in `main.jsx`).

| Path | Screen |
|------|--------|
| `/` | Home (banner) |
| `/aboutUs` | About |
| `/login`, `/signup`, `/forgetPassword` | Auth flows |
| `/contactUs` | Contact |
| `/allProducts` | Product listing |
| `/productDetail` | Product detail |
| `/single` | Single article |
| `/categoryPage` | Category / blog listing |
| `/tools` | Tools |
| `/shoppingCart` | Shopping cart |

The navbar includes **Home**, a **Blogs** dropdown (links to category content), **Tools**, **Shop**, and **Contact Us**, plus **Sign In**.

### Components not wired to a route

- **`SearchPage`** — article search UI exists under `Guest/Articles/` but is not registered in the router (imports are present but commented in `Guest/index.jsx`).
- **`Client/Account`** — account dashboard (info, saved lists, orders, change password) is implemented but **no `/account` (or similar) route** is defined; add a route if you want it reachable by URL.

## Configuration notes

- **Vite**: `Front/vite.config.js` uses `@vitejs/plugin-react` only (no custom `base` or proxy).
- **Tailwind**: `content` globs include `./src/**/*` and Flowbite; custom theme tokens live in `tailwind.config.js`.
- **ESLint**: `Front/.eslintrc.cjs` — React 18, hooks, recommended rules.

## Production build

```bash
cd Front
npm run build
```

Static output is written to **`Front/dist`**. Deploy that folder to any static host (or behind a server that falls back to `index.html` for SPA routes).

---

*Internal package name in `package.json` is `front`; you can rename it when publishing or splitting packages.*
