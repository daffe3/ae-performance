# A&E Performance AB — Hemsida

Byggt med **Next.js 14 + TypeScript + CSS Modules**.

## Kom igång

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Bygger för produktion
```

---

## Projektstruktur

```
ae-performance/
├── public/
│   ├── logo.png
│   ├── hero.jpg
│   ├── projekt-lugnet.jpg
│   ├── projekt-fettavskiljare.jpg
│   ├── projekt-bro.jpg
│   ├── projekt-hjullastare.jpg
│   └── projekt-natt.jpg
│
├── src/
│   ├── lib/
│   │   └── data.ts               ← All data (tjänster, projekt) på ett ställe
│   │
│   ├── components/
│   │   ├── Nav.tsx               ← Client Component (har state för mobilmeny)
│   │   ├── Nav.module.css
│   │   ├── Footer.tsx            ← Server Component
│   │   └── Footer.module.css
│   │
│   └── app/                      ← Next.js App Router
│       ├── layout.tsx            ← Delad layout + SEO metadata för hela sajten
│       ├── globals.css           ← Globala CSS-variabler och bastyper
│       │
│       ├── page.tsx              ← Startsidan (route: "/")
│       ├── page.module.css
│       │
│       ├── tjanster/
│       │   ├── page.tsx          ← Tjänster (route: "/tjanster")
│       │   └── page.module.css
│       │
│       ├── om-oss/
│       │   ├── page.tsx          ← Om oss (route: "/om-oss")
│       │   └── page.module.css
│       │
│       └── kontakt/
│           ├── page.tsx          ← Kontaktsidan (route: "/kontakt")
│           ├── page.module.css
│           ├── KontaktForm.tsx   ← Client Component (formulärstate + fetch)
│           └── KontaktForm.module.css
│
├── next.config.ts
├── tsconfig.json
├── package.json
└── .gitignore
```

---

## Hur Next.js App Router fungerar

I Next.js skapar **mappstrukturen under `src/app/`** automatiskt routes:

| Fil                        | URL           |
|----------------------------|---------------|
| `app/page.tsx`             | `/`           |
| `app/tjanster/page.tsx`    | `/tjanster`   |
| `app/om-oss/page.tsx`      | `/om-oss`     |
| `app/kontakt/page.tsx`     | `/kontakt`    |

`layout.tsx` är den delade layouten — Nav och Footer läggs in här en gång
och omsluter alla sidor automatiskt.

### Server vs Client Components

| Fil             | Typ    | Varför                                      |
|-----------------|--------|---------------------------------------------|
| `layout.tsx`    | Server | Metadata, HTML-skelett                      |
| `page.tsx`      | Server | Renderas på servern → bra för SEO           |
| `Nav.tsx`       | Client | Har `useState` för mobilmeny                |
| `KontaktForm`   | Client | Har `useState` + `fetch` för formuläret     |
| `Footer.tsx`    | Server | Statiskt innehåll, ingen interaktivitet     |

**Tumregel**: Allt är Server Component som standard.
Lägg till `'use client'` överst i filen bara när du behöver
`useState`, `useEffect`, eventhanterare eller webbläsar-API:er.

### SEO

Varje `page.tsx` exporterar ett `metadata`-objekt:

```ts
export const metadata: Metadata = {
  title: 'Tjänster',   // → "Tjänster | A&E Performance AB"
  description: '...',
}
```

Next.js genererar automatiskt korrekta `<title>` och `<meta>` taggar
på servern — Google ser dem direkt utan JavaScript.

---

## Koppla kontaktformuläret

1. Skapa gratis konto på [formspree.io](https://formspree.io)
2. New Form → kopiera din endpoint-URL
3. Öppna `src/app/kontakt/KontaktForm.tsx`
4. Byt ut `'https://formspree.io/f/DIN_KOD_HÄR'` mot din URL

---

## Deploya till Netlify

```bash
npm run build     # Skapar .next/-mappen
```

På Netlify: **Add new site → Import from Git → välj repot**

Netlify känner igen Next.js automatiskt och sätter:
- Build command: `npm run build`
- Publish directory: `.next`

Varje `git push` → Netlify bygger och publicerar automatiskt.
