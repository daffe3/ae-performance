# A&E Performance AB — Hemsida

Byggt med **React 18 + Vite + TanStack Router**.

## Kom igång

```bash
# 1. Installera beroenden
npm install

# 2. Starta dev-server (öppnas på http://localhost:5173)
npm run dev

# 3. Bygg för produktion
npm run build
```

---

## Projektstruktur

```
ae-performance/
├── public/
│   ├── logo.png          ← A&E logotypen
│   └── hero.png          ← Grävmaskinbilden från Instagram
│
├── src/
│   ├── main.jsx          ← STARTPUNKT — här skapas routern och appen monteras
│   ├── index.css         ← Globala CSS-variabler och bastyper
│   │
│   └── routes/
│       ├── Root.jsx          ← Delade layout: Nav + Footer + <Outlet />
│       ├── Root.module.css
│       ├── Home.jsx          ← Startsidan (route: "/")
│       ├── Home.module.css
│       ├── Tjanster.jsx      ← Tjänster (route: "/tjanster")
│       ├── Tjanster.module.css
│       ├── OmOss.jsx         ← Om oss (route: "/om-oss")
│       ├── OmOss.module.css
│       ├── Kontakt.jsx       ← Kontakt (route: "/kontakt")
│       └── Kontakt.module.css
│
├── index.html
├── vite.config.js
└── package.json
```

---

## Hur TanStack Router fungerar här

`main.jsx` är bäst att läsa för att förstå flödet:

```
createRootRoute()      ← Rot-routen kör Root.jsx (nav + footer)
  └── createRoute("/")           → Home.jsx
  └── createRoute("/tjanster")   → Tjanster.jsx
  └── createRoute("/om-oss")     → OmOss.jsx
  └── createRoute("/kontakt")    → Kontakt.jsx
```

`Root.jsx` renderar `<Outlet />` — det är där den matchade barn-routen 
(t.ex. Home) renderas. Allt utanför Outlet (nav, footer) är gemensamt.

### Viktiga TanStack-komponenter

| Import               | Vad den gör                                          |
|----------------------|------------------------------------------------------|
| `<Link to="/">`      | Intern länk utan helsidesladdning                    |
| `useRouter()`        | Ger tillgång till router-objektet (historia m.m.)    |
| `<Outlet />`         | Renderar matchad barn-route                          |
| `activeProps`        | Lägg till klass/stil när länken är aktiv             |
| `activeOptions`      | `{ exact: true }` för att bara matcha exakt path     |

---

## Att göra / nästa steg

- [ ] Koppla kontaktformuläret till Formspree, Netlify Forms eller egen backend
- [ ] Lägg till riktiga foton från projekten i en "Projekt"-sida
- [ ] SEO: fyll i `<title>` och `<meta description>` per sida med TanStack Router's `head`-API
- [ ] Deploya till Netlify eller Vercel (gratis, pekar på `dist/`-mappen)
