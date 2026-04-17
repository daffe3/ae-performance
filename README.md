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
│   │   └── data.ts               
│   │
│   ├── components/
│   │   ├── Nav.tsx               
│   │   ├── Nav.module.css
│   │   ├── Footer.tsx            
│   │   └── Footer.module.css
│   │
│   └── app/                      
│       ├── layout.tsx            
│       ├── globals.css           
│       │
│       ├── page.tsx              
│       ├── page.module.css
│       │
│       ├── tjanster/
│       │   ├── page.tsx          
│       │   └── page.module.css
│       │
│       ├── om-oss/
│       │   ├── page.tsx         
│       │   └── page.module.css
│       │
│       └── kontakt/
│           ├── page.tsx         
│           ├── page.module.css
│           ├── KontaktForm.tsx  
│           └── KontaktForm.module.css
│
├── next.config.ts
├── tsconfig.json
├── package.json
└── .gitignore
```

---