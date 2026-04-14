export type Service = {
  slug: string
  title: string
  shortDesc: string
  fullDesc: string
  points: string[]
}

export type Project = {
  slug: string
  title: string
  location: string
  description: string
  image: string
}

export const services: Service[] = [
  {
    slug: 'mark-grundarbeten',
    title: 'Mark & grundarbeten',
    shortDesc:
      'Schaktning, markentrepenad och anläggningsarbeten för privata och kommunala beställare.',
    fullDesc:
      'Vi utför mark- och grundarbeten av alla slag i Dalarnaregionen. ' +
      'Från mindre trädgårdsprojekt till större anläggningsarbeten för kommuner och företag.',
    points: [
      'Schaktning och återfyllning',
      'Markplanering och terrassering',
      'Dräneringsarbeten',
      'Väg- och plattläggning',
      'Stenläggning och kantstenar',
      'Rivning och röjning',
    ],
  },
  {
    slug: 'maskintjanster',
    title: 'Maskintjänster',
    shortDesc:
      'Du bokar tjänsten — vi löser jobbet med moderna maskiner och erfarna operatörer.',
    fullDesc:
      'Vi utför arbetet med våra egna maskiner och erfarna förare. ' +
      'Du behöver inte tänka på maskinen — du bokar tjänsten och vi levererar resultatet.',
    points: [
      'Grävmaskin med operatör',
      'Hjullastare',
      'Transport av massor',
      'Komprimering och packningsarbeten',
      'Fettavskiljare och VA-arbeten',
      'Snöröjning och halkbekämpning',
    ],
  },
  {
    slug: 'fastighetsskotsel',
    title: 'Fastighetsskötsel',
    shortDesc:
      'Allservice för fastigheter — underhåll, skötsel och driftsupport året runt.',
    fullDesc:
      'Vi tar ett helhetsansvar för ditt fastighetsbestånd. ' +
      'Löpande underhåll, felavhjälpning och säsongsanpassad service.',
    points: [
      'Löpande fastighetsunderhåll',
      'Städning av gemensamma ytor',
      'Grönytor och trädgårdsskötsel',
      'Felavhjälpning och jour',
      'Säsongsanpassad service',
    ],
  },
  {
    slug: 'fordonsaffarer',
    title: 'Fordonsaffärer',
    shortDesc:
      'Köp och försäljning av personbilar, lastbilar och specialfordon.',
    fullDesc:
      'Vi köper och säljer fordon av alla slag. ' +
      'Kontakta oss för att ta del av aktuellt bestånd eller diskutera inbyte.',
    points: [
      'Personbilar',
      'Lätta och tunga lastbilar',
      'Specialfordon och maskiner',
      'Inbyten',
    ],
  },
]

export const projects: Project[] = [
  {
    slug: 'lugnet-badhuset',
    title: 'Nya badhuset, Lugnet',
    location: 'Lugnet, Falun',
    description:
      'Återställning och finlir inför stenläggning vid nya badhuset på Lugnet. ' +
      'Skarpa kanter, grusgångar och matjord.',
    image: '/projekt-lugnet.jpg',
  },
  {
    slug: 'gylle-skola',
    title: 'Ny skola, Gylle',
    location: 'Borlänge',
    description:
      'Installation av fettavskiljare inför byggnation av ny skola på Gylle i Borlänge.',
    image: '/projekt-fettavskiljare.jpg',
  },
  {
    slug: 'broreplacement',
    title: 'Broersättning med trumma',
    location: 'Dalarna',
    description:
      'Gammal bro ersatt med en 1,8 m trumma i diameter åt en vägförening. ' +
      'Nu kan man passera med kanot.',
    image: '/projekt-bro.jpg',
  },
  {
    slug: 'markarbete',
    title: 'Markarbete',
    location: 'Dalarna',
    description:
      'Markarbete med hjullastare.',
    image: '/projekt-hjullastare.jpg',
  },
]
