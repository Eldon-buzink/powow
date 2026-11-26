import type { ReactNode } from 'react'
import Image from 'next/image'
import {
  ArrowRight,
  BarChart3,
  Camera,
  Check,
  Clapperboard,
  Euro,
  Gift,
  GraduationCap,
  Heart,
  MapPin,
  Mail,
  MessageCircle,
  Package,
  Palette,
  PartyPopper,
  Phone,
  Play,
  Repeat,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Video,
  Languages,
  Link2,
  UserRound,
} from 'lucide-react'
import Calculator from './Calculator'
import StepNav from './StepNav'
import { logout } from './actions'
import s from './lakwerk.module.css'

const EMAIL = 'e.buzink@gmail.com'
const PHONE = '06 81 15 69 15'
const PHONE_TEL = '+31681156915'
const GIF = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG94cjFlNGw2c3A1djJhanIzemFpdXB1Z3A3MTNiaW52MDF4YWN1NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgG50Fb7Mi0prBC/giphy.gif'
const GIF_STILL = GIF.replace('giphy.gif', 'giphy_s.gif')
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent('Groeiplan LAKWERK')}`

const SOURCES = [
  { title: 'Fresha, LAKWERK Amsterdam Oud-Zuid: beoordeling, reviews en prijzen (bekeken 26 november 2026)', url: 'https://www.fresha.com/nl/a/lakwerk-amsterdam-oud-zuid-amsterdam-cornelis-schuytstraat-16-vjcdcxcq' },
  { title: 'lakwerk.com, homepage (bekeken 26 november 2026)', url: 'https://www.lakwerk.com/' },
  { title: 'lakwerk.com, Nail menu', url: 'https://www.lakwerk.com/nail-menu' },
  { title: 'lakwerk.com, Nailschool', url: 'https://www.lakwerk.com/nailschool' },
  { title: 'lakwerknailschool.com, prijzen van online sessions en deals', url: 'https://lakwerknailschool.com/' },
  { title: 'lakwerk.com, Giftcards', url: 'https://www.lakwerk.com/giftcards' },
  { title: 'lakwerk.com, FAQ', url: 'https://www.lakwerk.com/faq' },
  { title: 'lakwerk.com, Meet the team', url: 'https://www.lakwerk.com/meet-the-team' },
  { title: 'W3C, WCAG 2.2 succescriterium 1.4.11: contrast van knoppen minimaal 3:1', url: 'https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html' },
]

const STEPS = [
  { id: 'klik', label: 'Verder dan de klik' },
  { id: 'website', label: 'Salons · website' },
  { id: 'relatie', label: 'Salons · de band' },
  { id: 'doorvertellen', label: 'Salons · doorvertellen' },
  { id: 'nieuw', label: 'Salons · nieuwe klanten' },
  { id: 'nailschool', label: 'Nailschool' },
  { id: 'kwartaal', label: 'Het kwartaal' },
  { id: 'samen', label: 'Tot slot' },
]

/* ---------- small building blocks ---------- */

function Feit({ n }: { n: number }) {
  return (
    <a href={`#bron-${n}`} className={s.feit} aria-label={`Feit, bron ${n}`}>
      Feit {n}
    </a>
  )
}

function Aanname({ children = 'Aanname' }: { children?: ReactNode }) {
  return <span className={s.aanname}>{children}</span>
}

function Kicker({ n, children }: { n: number; children: ReactNode }) {
  return (
    <p className={s.kicker}>
      <span className={s.kickerNum} aria-hidden="true">{n}</span>
      {children}
    </p>
  )
}

function Part({ label, title, text }: { label: string; title: string; text: string }) {
  return (
    <div className={s.part}>
      <div className={s.wrap}>
        <p className={s.partLabel}>{label}</p>
        <p className={s.partTitle}>{title}</p>
        <p className={s.partText}>{text}</p>
      </div>
    </div>
  )
}

/* ---------- hero ---------- */

const JOURNEY = [
  { name: 'Ontdekken', text: 'Een post, een vriendin, een advertentie', click: true },
  { name: 'Eerste bezoek', text: 'Nieuwe nagels, en iemand die naar je luistert', click: false },
  { name: 'Een band', text: 'Je eigen nailtech, die weet wat je mooi vindt', click: false },
  { name: 'Erbij horen', text: 'Je voelt je thuis bij LAKWERK', click: false },
  { name: 'Doorvertellen', text: 'Je neemt je vriendinnen mee', click: false },
]

function Hero() {
  return (
    <header className={s.hero}>
      <div className={s.wrap}>
        <p className={s.byline}>Voorstel van Eldon Buzink, Powow B.V. · voor Jessica en Saar · november 2026</p>
        <h1 className={s.h1}>Klanten komen niet terug voor hun nagels. Ze komen terug voor jullie.</h1>
        <p className={s.intro}>
          Jullie vroegen om performance marketing. Dat zit in dit plan. Maar de grootste kans zit niet in de klik. Die zit
          in wat er daarna gebeurt: de band met een nailtech, het gevoel erbij te horen, en vriendinnen die meekomen.
        </p>

        <figure className={s.quote}>
          <blockquote>&ldquo;Always an amazing experience having my nails done by Louise.&rdquo;</blockquote>
          <figcaption>Een van de 1.139 Fresha-reviews in Oud-Zuid. Klanten noemen hun nailtech bij naam. <Feit n={1} /></figcaption>
        </figure>

        <div className={s.journey}>
          <p className={s.journeyTitle}>De reis van een LAKWERK-klant</p>
          <ol className={s.journeyList}>
            {JOURNEY.map((j) => (
              <li key={j.name} className={j.click ? s.journeyClick : s.journeyStop}>
                <span className={s.journeyDot} aria-hidden="true" />
                <strong>{j.name}</strong>
                <span>{j.text}</span>
              </li>
            ))}
          </ol>
          <div className={s.journeyKey}>
            <span><i className={s.keyClick} /> Hier werkt performance marketing</span>
            <span><i className={s.keyStop} /> Hier ontstaat de groei. Dit plan gaat over de hele reis.</span>
          </div>
        </div>

        <p className={s.legend}>
          <span><Feit n={1} /> gecontroleerd, met bron</span>
          <span><Aanname /> mijn inschatting, te toetsen met jullie data</span>
        </p>
      </div>
    </header>
  )
}

/* ---------- 1. verder dan de klik ---------- */

const REASONS = [
  {
    icon: Heart,
    title: 'Een klik koopt één bezoek. Een band koopt er tientallen.',
    text: 'Een webshop verkoopt één keer een jurk. Bij jullie komt een klant terug omdat ze zich thuis voelt bij haar nailtech. Daar zit bijna alle waarde.',
  },
  {
    icon: Repeat,
    title: 'Meer advertenties in een lekke emmer helpt niet',
    text: 'Als er nu niets gebeurt na het eerste bezoek, betaal je voor elke klant opnieuw. Eerst de emmer dicht, dan pas meer erin.',
  },
  {
    icon: Users,
    title: 'Jullie sterkste kanaal bestaat al',
    text: 'Een 4,9, ± 24 nailtechs met een eigen Instagram en klanten die enthousiast vertellen. Vriendinnen en echte verhalen overtuigen beter dan een advertentie.',
  },
]

function StepKlik() {
  return (
    <section id="klik" className={s.section} aria-labelledby="klik-h">
      <div className={s.wrap}>
        <Kicker n={1}>Waar de groei zit</Kicker>
        <h2 id="klik-h" className={s.h2}>De groei van LAKWERK zit in de relatie, niet in de klik</h2>
        <p className={s.lead}>
          Jullie vroegen om performance marketing. Die brengt iemand naar de deur. Maar of ze terugkomt, zich verbonden
          voelt en haar vriendinnen meeneemt, bepaalt of LAKWERK groeit. Daarom begint dit plan bij de relatie. De
          advertenties komen daarna, en worden er beter van.
        </p>
        <ol className={s.reasons}>
          {REASONS.map(({ icon: Icon, title, text }) => (
            <li key={title} className={`${s.card} ${s.reason}`}>
              <Icon size={22} aria-hidden="true" />
              <h3 className={s.h3}>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>

        <h3 className={`${s.h3} ${s.mtl}`}>Wat één relatie waard is. Schuif zelf met de aannames.</h3>
        <Calculator />
        <div className={s.takeaway}>
          <Aanname />
          <p>
            Dit zijn schattingen. Fresha weet hoe vaak klanten echt terugkomen en hoe lang ze blijven. Dat zoeken we in
            de eerste weken uit. Dan weten jullie ook wat je mag investeren in een nieuwe klant, in advertenties én in de
            ervaring.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ---------- 2. salons · website ---------- */

type Item = { kind: 'Fix' | 'Test'; title: string; text: string; impact: 1 | 2 | 3 }

const CRO: Item[] = [
  { kind: 'Fix', impact: 3, title: 'Prijzen op de site', text: 'Nu staat nergens een prijs. "Vanaf"-prijzen per basis, per Laklevel en per add-on, met hoe lang het duurt.' },
  { kind: 'Fix', impact: 3, title: 'Eén boekknop die altijd opvalt', text: 'Nu zijn het er ± 8 met 3 teksten. Eén tekst, hoog contrast en op mobiel een vaste balk onderin.' },
  { kind: 'Test', impact: 3, title: 'Boek bij je nailtech', text: 'Teamkaarten linken nu naar Instagram. Een knop "Boek bij Louise" past bij hoe klanten al denken.' },
  { kind: 'Test', impact: 2, title: 'Laklevels in beeld', text: 'Level 1 t/m 5 heeft nu geen voorbeelden. Een visuele gids laat zien wat je boekt en wat het kost.' },
  { kind: 'Fix', impact: 2, title: 'Locatie kiezen in de eerste seconde', text: 'Knoppen boven de foto’s, zodat op mobiel de tekst niet onder de vouw verdwijnt.' },
  { kind: 'Fix', impact: 2, title: 'Voorwaarden vóór het boeken', text: 'Eén regel: 24 uur gratis annuleren, alleen pinnen, "remove" toevoegen. Nu staat dat verstopt in de FAQ.' },
]

const HYGIENE = [
  { icon: UserRound, area: 'Vertrouwen', title: 'Echte foto’s van de oprichters', now: 'Jessica en Saar staan er nu met een placeholder' },
  { icon: Mail, area: 'Contact', title: 'Mailknop naar het juiste adres', now: 'De link mailt nu naar "Hi Lakwerk!"' },
  { icon: Phone, area: 'Contact', title: 'Bellen naar Den Bosch werkt', now: 'Het nummer heeft nu een 0 te veel (+310…)' },
  { icon: Gift, area: 'Giftcards', title: 'Eén geldigheid voor giftcards', now: 'Er staat nu zowel 12 als 24 maanden' },
  { icon: MapPin, area: 'Vindbaarheid', title: 'Eén adres voor Centrum', now: 'Spuitstraat en Spuistraat staan allebei op de site' },
  { icon: Languages, area: 'Taal', title: 'Eén taal per pagina', now: 'Engels en Nederlands lopen door elkaar, voorwaarden alleen in het Nederlands' },
  { icon: Link2, area: 'Meting', title: 'Schone link naar Fresha', now: 'De link van Centrum bevat vaste Google-parameters die de meting vervuilen' },
]

function Impact({ n }: { n: 1 | 2 | 3 }) {
  return (
    <span className={s.impact} aria-label={`Impact ${n} van 3`}>
      {[1, 2, 3].map((i) => <i key={i} className={i <= n ? s.impactOn : ''} />)}
    </span>
  )
}

function ItemGrid({ items }: { items: Item[] }) {
  return (
    <ul className={s.items}>
      {items.map((it) => (
        <li key={it.title} className={s.item}>
          <div className={s.itemHead}>
            <span className={it.kind === 'Fix' ? s.tagFix : s.tagTest}>{it.kind}</span>
            <Impact n={it.impact} />
          </div>
          <h4 className={s.itemTitle}>{it.title}</h4>
          <p className={s.itemText}>{it.text}</p>
        </li>
      ))}
    </ul>
  )
}

function Compare({ title, children, left, right }: { title: string; children: ReactNode; left: ReactNode; right: ReactNode }) {
  return (
    <div className={s.contrast}>
      <div className={s.contrastText}>
        <h3 className={s.h3}>{title}</h3>
        {children}
      </div>
      <div className={s.contrastDemo}>
        {left}
        {right}
      </div>
    </div>
  )
}

function StepWebsite() {
  return (
    <section id="website" className={s.section} aria-labelledby="web-h">
      <div className={s.wrap}>
        <Kicker n={2}>Salons · de website</Kicker>
        <h2 id="web-h" className={s.h2}>Jullie eigen stijl, met een kortere weg naar de stoel</h2>
        <p className={s.lead}>
          De site voelt als LAKWERK: creatief en eigenwijs. Dat moet zo blijven. Maar wie wil boeken, moet nu zoeken
          naar prijzen, de knop en vertrouwen. <Feit n={2} /> <span className={s.tagFix}>Fix</span> doen we gewoon.{' '}
          <span className={s.tagTest}>Test</span> meten we eerst met een A/B-test.
        </p>

        <div className={s.compares}>
          <Compare
            title="Het belangrijkste knopje is het minst zichtbaar"
            left={
              <figure className={s.swatch} style={{ background: '#4f378b' }}>
                <span className={s.mockBtn} style={{ background: '#6840ff', color: '#4f378b' }}>Book now</span>
                <figcaption>Nu · 1,7:1</figcaption>
              </figure>
            }
            right={
              <figure className={s.swatch} style={{ background: '#4f378b' }}>
                <span className={s.mockBtn} style={{ background: '#ddc9ff', color: '#131313' }}>Boek je afspraak</span>
                <figcaption>Voorstel · 6,2:1</figcaption>
              </figure>
            }
          >
            <p>
              Electric purple (#6840FF) op diep paars (#4F378B) heeft een contrast van 1,7:1. De norm voor knoppen is
              minimaal 3:1. <Feit n={9} /> De stijl blijft. De boekknop moet altijd winnen.
            </p>
          </Compare>

          <Compare
            title="Laat zien wat sterren niet kunnen vertellen"
            left={
              <figure className={`${s.swatch} ${s.swatchLight}`}>
                <div className={s.textReview}>
                  <span className={s.stars} aria-label="5 sterren">★★★★★</span>
                  <p>&ldquo;Zoveel oog voor detail! Mijn nagels zien er prachtig verzorgd uit…&rdquo;</p>
                </div>
                <figcaption>Nu · tekst op Fresha</figcaption>
              </figure>
            }
            right={
              <figure className={s.swatch} style={{ background: '#4f378b' }}>
                <div className={s.videoReview} aria-hidden="true">
                  <span className={s.videoPlay}><Play size={18} /></span>
                  <span className={s.videoMeta}>0:15 · BIAB, Laklevel 3</span>
                </div>
                <figcaption>Test · videoreview</figcaption>
              </figure>
            }
          >
            <p>
              Alleen al in Oud-Zuid staan 1.139 reviews op Fresha, maar op de site zie je ze niet. <Feit n={1} /> Een video
              van 15 seconden laat de nagels, de sfeer en de klant zien. We testen video naast de boekknop tegen tekst, en
              meten het verschil in boekingen.
            </p>
          </Compare>
        </div>

        <ItemGrid items={CRO} />

        <details className={s.hygiene} open>
          <summary>
            <span className={s.hygieneTitle}><Sparkles size={18} aria-hidden="true" /> Hygiëne: zeven dingen om op te ruimen</span>
            <span className={s.hygieneMeta}>± 1 dag werk</span>
          </summary>
          <ul className={s.hygieneList}>
            {HYGIENE.map(({ icon: Icon, area, title, now }) => (
              <li key={title}>
                <span className={s.hygieneIcon}><Icon size={18} aria-hidden="true" /></span>
                <div>
                  <span className={s.hygieneArea}>{area}</span>
                  <strong>{title}</strong>
                  <span className={s.hygieneNow}>{now}</span>
                </div>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  )
}

/* ---------- 3. salons · de band ---------- */

const MOMENTS = [
  { when: 'In de stoel', icon: Sparkles, title: 'Je nailtech onthoudt je', text: 'Favoriete kleuren, vorm, waar jullie het over hadden. Het staat in je profiel, dus de volgende keer gaat het verder waar het bleef.' },
  { when: 'Dag 2', icon: Camera, title: 'Een foto van je set', text: 'Je nailtech stuurt de foto die ze toch al maakt, met een tip om ze mooi te houden. Persoonlijk, niet van een merk.' },
  { when: 'Daarna', icon: Heart, title: 'Jouw nagels in de spotlight', text: 'Met toestemming op het Instagram van je nailtech of van LAKWERK. Je bent niet alleen klant, je bent deel van het werk.' },
  { when: 'Elk seizoen', icon: Palette, title: 'Als eerste de nieuwe designs', text: 'Je ziet de nieuwe collectie van het team eerder dan de rest, en mag meestemmen over de kleuren van volgend seizoen.' },
  { when: 'Een paar keer per jaar', icon: PartyPopper, title: 'LAK CLUB-avonden', text: 'Een nail art-avond in de salon of bij de Nailschool, met je vriendinnen. Iets wat je nergens kunt kopen.' },
  { when: 'Je verjaardag', icon: Gift, title: 'Iets kleins van je nailtech', text: 'Geen kortingscode, maar een gebaar: een extra design, een kaartje, een kleur die bij je past.' },
]

const IDEAS = [
  { icon: Repeat, title: 'Lidmaatschap', text: 'Een vast bedrag per maand, met een vaste plek bij je eigen nailtech. Test: een wachtlijst en een vraag aan vaste klanten.' },
  { icon: Package, title: 'Eigen producten', text: 'Nazorg en press-ons in LAKWERK-designs, zodat het merk mee naar huis gaat. De FAQ belooft het al. Test: een kleine oplage aan de balie.' },
]

function StepRelatie() {
  return (
    <section id="relatie" className={`${s.section} ${s.sectionAlt}`} aria-labelledby="rel-h">
      <div className={s.wrap}>
        <Kicker n={3}>Salons · de band na het eerste bezoek</Kicker>
        <h2 id="rel-h" className={s.h2}>Terugkomen omdat je wíl, niet omdat je nagels uitgroeien</h2>
        <p className={s.lead}>
          Nu stopt het contact bij het afrekenen. Een herinnering of een stempelkaart past niet bij LAKWERK. Mensen
          komen terug voor iemand die hen kent, en voor het gevoel erbij te horen. Dat gevoel kun je bewust ontwerpen.
        </p>
        <ol className={s.moments}>
          {MOMENTS.map(({ when, icon: Icon, title, text }) => (
            <li key={title} className={s.moment}>
              <span className={s.momentWhen}>{when}</span>
              <div className={`${s.card} ${s.momentCard}`}>
                <Icon size={20} aria-hidden="true" />
                <h3 className={s.h3}>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className={s.takeaway}>
          <ShieldCheck size={20} aria-hidden="true" />
          <p>
            <strong>Klein beginnen:</strong> één locatie, een paar nailtechs, met wat Fresha en Instagram al kunnen. We meten
            of klanten vaker terugkomen en vaker bij dezelfde nailtech boeken. Pas dan maken we er een programma van.
          </p>
        </div>

        <h3 className={`${s.h3} ${s.mtl}`}>Om te onderzoeken, als de band er is</h3>
        <div className={s.ideas}>
          {IDEAS.map(({ icon: Icon, title, text }) => (
            <div key={title} className={`${s.card} ${s.idea}`}>
              <Icon size={20} aria-hidden="true" />
              <div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- 4. salons · doorvertellen ---------- */

const REFERRAL = [
  { who: 'Jij', icon: Heart, text: 'Krijgt van je nailtech een kaartje met je eigen code, en kunt hem ook delen via een link.' },
  { who: 'Je vriendin', icon: Sparkles, text: 'Boekt met jouw code en krijgt bij haar eerste bezoek een gratis nail art-upgrade.' },
  { who: 'Allebei', icon: PartyPopper, text: 'Jij krijgt dezelfde upgrade. Of jullie boeken samen een duo-afspraak, naast elkaar.' },
]

function StepDoorvertellen() {
  return (
    <section id="doorvertellen" className={s.section} aria-labelledby="ref-h">
      <div className={s.wrap}>
        <Kicker n={4}>Salons · doorvertellen</Kicker>
        <h2 id="ref-h" className={s.h2}>Jullie beste klanten zijn de beste marketing</h2>
        <p className={s.lead}>
          Nagels laat je zien. Elke klant met een mooie set krijgt de vraag &ldquo;waar heb je die laten doen?&rdquo; Een
          eenvoudig doorverwijsprogramma maakt het antwoord makkelijk, en beloont het met een ervaring, niet met korting.
        </p>
        <ol className={s.referral}>
          {REFERRAL.map(({ who, icon: Icon, text }, i) => (
            <li key={who} className={`${s.card} ${s.refStep}`}>
              <span className={s.refNum}>{i + 1}</span>
              <Icon size={22} aria-hidden="true" />
              <strong>{who}</strong>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        <div className={s.refExtra}>
          <div className={`${s.card} ${s.pad}`}>
            <h3 className={s.h3}><Users size={18} aria-hidden="true" /> Ook voor nailtechs</h3>
            <p className={s.muted}>
              Elke nailtech krijgt een eigen link voor haar Instagram. Nieuwe klanten via die link boeken bij haar. Zo
              groeit haar agenda mee, en heeft ze er zelf belang bij om te delen.
            </p>
          </div>
          <div className={`${s.card} ${s.pad} ${s.xmas}`}>
            <h3 className={s.h3}><Gift size={18} aria-hidden="true" /> Kerst: de giftcard als kennismaking</h3>
            <p className={s.muted}>
              Een giftcard is doorvertellen in een cadeauverpakking: iemand anders betaalt de eerste afspraak. De pagina
              zegt nu &ldquo;birthday, thank-you, or just because&rdquo;. <Feit n={6} /> Met een kerstbanner, drie vaste
              bedragen en een mail aan bestaande klanten is dat in een dag geregeld.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- 5. salons · nieuwe klanten ---------- */

const SHIFT = [
  { from: 'Eén vast bedrag per nieuwe klant', to: 'Budget op basis van wat een relatie waard is' },
  { from: 'Meten tot de klik naar Fresha', to: 'Meten tot de boeking, en of de klant terugkomt' },
  { from: 'Iedereen bereiken', to: 'Mensen die lijken op jullie trouwste klanten' },
  { from: 'Advertenties maken', to: 'Content van nailtechs en videoreviews inzetten' },
]

const FUNNELS = [
  { icon: MapPin, title: 'Lokaal gevonden worden', text: 'Google Ads op "BIAB Amsterdam" en "nagelstudio Den Bosch", en drie Google-bedrijfsprofielen met dezelfde gegevens als de site.', kpi: 'Boekingen via zoeken' },
  { icon: Video, title: 'Video van jullie makers', text: 'Meta en TikTok met content die nailtechs al maken, via partnership-ads op hun eigen account. Echte handen, echte nagels.', kpi: 'Nieuwe klanten die terugkomen' },
  { icon: Clapperboard, title: 'Videoreviews als advertentie', text: 'De beste videoreviews van klanten, ingezet als advertentie. Wie het van een klant hoort, gelooft het sneller.', kpi: 'Kosten per eerste boeking' },
  { icon: BarChart3, title: 'Lege stoelen vullen', text: 'Campagnes op rustige dagdelen per locatie. Een lege stoel op dinsdagochtend komt nooit meer terug.', kpi: 'Bezetting dal-uren' },
]

function StepNieuw() {
  return (
    <section id="nieuw" className={`${s.section} ${s.sectionAlt}`} aria-labelledby="nw-h">
      <div className={s.wrap}>
        <Kicker n={5}>Salons · nieuwe klanten</Kicker>
        <h2 id="nw-h" className={s.h2}>Performance marketing, op het juiste moment</h2>
        <p className={s.lead}>
          Als de website beter boekt, klanten terugkomen en vriendinnen meenemen, levert elke euro aan advertenties meer
          op. Dan durven jullie ook meer te investeren. Zo pakken we het aan:
        </p>

        <div className={`${s.card} ${s.shift}`}>
          <div className={s.shiftHead}><span>Nu</span><span>Voorstel</span></div>
          {SHIFT.map((r) => (
            <div key={r.from} className={s.shiftRow}>
              <span>{r.from}</span>
              <ArrowRight size={16} aria-hidden="true" />
              <strong>{r.to}</strong>
            </div>
          ))}
        </div>

        <ol className={s.funnels}>
          {FUNNELS.map(({ icon: Icon, title, text, kpi }) => (
            <li key={title} className={`${s.card} ${s.funnel}`}>
              <Icon size={22} aria-hidden="true" />
              <h3 className={s.h3}>{title}</h3>
              <p>{text}</p>
              <span className={s.kpi}><BarChart3 size={14} aria-hidden="true" /> {kpi}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ---------- 6. nailschool ---------- */

const SCHOOL: Item[] = [
  { kind: 'Fix', impact: 3, title: 'Video eerst', text: 'Een trailer van 60 seconden, "een dag in de bootcamp" en verhalen van oud-cursisten. Een opleiding koop je pas als je hem kunt zien.' },
  { kind: 'Fix', impact: 3, title: 'Prijs, startdatum en plekken', text: 'Nu staat er "Februari / September". Beter: "Start 1 februari, Amsterdam, nog 2 van de 5 plekken."' },
  { kind: 'Test', impact: 2, title: 'Gratis mini-les voor een e-mail', text: 'Eén online session gratis, daarna een mailreeks naar de bootcamp en de deals van € 120–349.' },
  { kind: 'Fix', impact: 2, title: 'Echte namen en gezichten', text: 'De reviews van cursisten hebben nu geen naam of foto. Liever op video, van oud-cursisten die nu bij jullie werken.' },
  { kind: 'Fix', impact: 2, title: 'Juiste knop op de juiste plek', text: 'Aspirant-nailtechs naar de bootcamp of "Werken bij", niet naar "Book now" voor een behandeling.' },
  { kind: 'Test', impact: 2, title: 'Online sessions in het Engels', text: 'Jullie stijl werkt ook buiten Nederland. Een Engelse pagina met voorverkoop laat zien of daar vraag is.' },
]

const SCHOOL_MARKETING = [
  { icon: Video, title: 'Video-ads naar de mini-les', text: 'Korte video’s van technieken die mensen willen leren, naar de gratis mini-les.' },
  { icon: MessageCircle, title: 'Opvolgen tot de bootcamp', text: 'Retargeting en mail voor wie de mini-les deed, met verhalen van oud-cursisten.' },
  { icon: Users, title: 'Nailtechs werven', text: 'Tweede doel, eigen aanpak: andere doelgroep, andere boodschap. De bootcamp als instroom.' },
]

function StepNailschool() {
  return (
    <section id="nailschool" className={s.section} aria-labelledby="ns-h">
      <div className={s.wrap}>
        <Kicker n={6}>Nailschool</Kicker>
        <h2 id="ns-h" className={s.h2}>Een opleiding verkoop je met beeld</h2>
        <p className={s.lead}>
          De Nailschool heeft een eerlijke toon en een sterk aanbod, van € 14,95 voor een online session tot € 349 voor een
          volledige training. <Feit n={5} /> Maar wie overweegt om nailtech te worden, wil zien hoe het is. Daarom draait
          dit deel om video. <Feit n={4} />
        </p>
        <ItemGrid items={SCHOOL} />

        <h3 className={`${s.h3} ${s.mtl}`}><GraduationCap size={18} aria-hidden="true" /> Marketing voor de Nailschool</h3>
        <ol className={s.funnels}>
          {SCHOOL_MARKETING.map(({ icon: Icon, title, text }) => (
            <li key={title} className={`${s.card} ${s.funnel}`}>
              <Icon size={22} aria-hidden="true" />
              <h3 className={s.h3}>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>

        <div className={s.takeaway}>
          <Aanname>Om te onderzoeken</Aanname>
          <p>
            <strong>Online academy:</strong> de 12 online sessions als abonnement, in het Nederlands en Engels, ook voor
            andere salons. Dat groeit zonder dat er stoelen nodig zijn.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ---------- 7. kwartaal ---------- */

const PHASES = [
  {
    n: '0', when: 'December 2026', title: 'Snelle start',
    salons: ['Kerst-giftcards', 'Hygiëne op de site', 'Boekknop en contrast', 'Meting repareren'],
    school: ['Startdata en prijs op de site'],
  },
  {
    n: '1', when: 'Januari 2027', title: 'Leren',
    salons: ['Fresha-data: terugkomen en waarde per klant', 'Prijzen en voorwaarden op de site', 'Eerste videoreviews opnemen'],
    school: ['Trailer en verhalen van oud-cursisten', 'Gratis mini-les live'],
  },
  {
    n: '2', when: 'Februari 2027', title: 'Testen',
    salons: ['Band-pilot in één locatie', 'Doorverwijzen live', 'A/B-tests: video, nailtech, Laklevels', 'Campagnes met makers'],
    school: ['Video-ads en opvolging', 'Engelse voorverkoop testen'],
  },
  {
    n: '3', when: 'Maart 2027', title: 'Opschalen',
    salons: ['Pilot uitbreiden naar alle salons', 'Budget naar wat werkt', 'Besluit lidmaatschap en producten'],
    school: ['Besluit online academy', 'Plan voor Q2'],
  },
]

function StepKwartaal() {
  return (
    <section id="kwartaal" className={`${s.section} ${s.sectionAlt}`} aria-labelledby="kq-h">
      <div className={s.wrap}>
        <Kicker n={7}>Het kwartaal</Kicker>
        <h2 id="kq-h" className={s.h2}>Eén kwartaal, twee sporen, een snelle start in december</h2>
        <ol className={s.phases}>
          {PHASES.map((p) => (
            <li key={p.n} className={`${s.card} ${s.phase}`}>
              <span className={s.phaseNum}>{p.n}</span>
              <span className={s.phaseWhen}>{p.when}</span>
              <h3 className={s.h3}>{p.title}</h3>
              <p className={s.track}><Sparkles size={14} aria-hidden="true" /> Salons</p>
              <ul>{p.salons.map((i) => <li key={i}>{i}</li>)}</ul>
              <p className={s.track}><GraduationCap size={14} aria-hidden="true" /> Nailschool</p>
              <ul>{p.school.map((i) => <li key={i}>{i}</li>)}</ul>
            </li>
          ))}
        </ol>

        <div className={s.metrics}>
          <div className={`${s.card} ${s.north}`}>
            <span className={s.metricLabel}>Belangrijkste doel</span>
            <strong className={s.northTitle}>Klanten die terugkomen</strong>
            <p>Het percentage nieuwe klanten dat binnen 8 weken opnieuw komt. Daar draait alles om: zo vullen we de stoelen.</p>
          </div>
          <div className={`${s.card} ${s.pad}`}>
            <span className={s.metricLabel}>Salons</span>
            <ul className={s.checkList}>
              <li><Check size={16} aria-hidden="true" /> Bezetting per locatie en dagdeel</li>
              <li><Check size={16} aria-hidden="true" /> Klanten die bij dezelfde nailtech terugkomen</li>
              <li><Check size={16} aria-hidden="true" /> Nieuwe klanten via vriendinnen</li>
              <li><Check size={16} aria-hidden="true" /> Van bezoek op de site naar boeking</li>
            </ul>
          </div>
          <div className={`${s.card} ${s.pad}`}>
            <span className={s.metricLabel}>Nailschool en grenzen</span>
            <ul className={s.checkList}>
              <li><GraduationCap size={16} aria-hidden="true" /> Bootcampleads en cursusomzet</li>
              <li><Users size={16} aria-hidden="true" /> Sollicitaties van nailtechs</li>
              <li><Star size={16} aria-hidden="true" /> Beoordeling blijft 4,8 of hoger</li>
              <li><Euro size={16} aria-hidden="true" /> Geen groei met kortingen die marge kosten</li>
            </ul>
          </div>
        </div>

        <div className={`${s.card} ${s.needs}`}>
          <h3 className={s.h3}>Wat nodig is om te beginnen</h3>
          <ul className={s.checkList}>
            <li><Check size={16} aria-hidden="true" /> Export uit Fresha: klanten, afspraken en omzet van de laatste 24 maanden</li>
            <li><Check size={16} aria-hidden="true" /> Toegang tot Google Ads, Meta, GA4 en Webflow</li>
            <li><Check size={16} aria-hidden="true" /> Hoe de afspraak met nailtechs werkt: wat blijft er bij LAKWERK?</li>
            <li><Check size={16} aria-hidden="true" /> Cijfers van de Nailschool: cursisten, omzet, en wie daarna bij jullie werkt</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------- 8. samen ---------- */

const PROOF = [
  { org: 'Adidas', role: 'Product owner Membership', result: '+23% leden per jaar', note: 'Loyaliteitsprogramma, ± 24 experimenten' },
  { org: 'Coolblue', role: 'Performance marketing manager', result: 'SEA, display, affiliate, SEO', note: '2012–2016, alle betaalde kanalen' },
  { org: 'Uber', role: 'Growth marketing manager', result: '+53% conversie chauffeurs', note: 'Aanbod werven, net als nailtechs' },
  { org: 'DPG Media', role: 'Teamlead CRO a.i.', result: '+25% doorgevoerde experimenten', note: 'Optimizely en VWO' },
  { org: 'Bol.com', role: 'Productmanager checkout', result: '6 mln incrementele GMV', note: 'Winkelmand, checkout, betalen' },
]

function StepSamen() {
  return (
    <section id="samen" className={s.section} aria-labelledby="sm-h">
      <div className={s.wrap}>
        <Kicker n={8}>Tot slot</Kicker>
        <div className={s.why}>
          <div>
            <div className={s.me}>
              <Image src="/images/1604824879858.jpeg" alt="Eldon Buzink" width={80} height={80} className={s.avatar} />
              <div>
                <div className={s.meName}>Eldon Buzink</div>
                <div className={s.muted}>Groei, CRO en product · Powow B.V.</div>
              </div>
            </div>
            <h2 id="sm-h" className={s.h2}>Deze ideeën zijn voor jullie, wat jullie er ook mee doen</h2>
            <p className={s.lead}>
              Ik wilde laten zien waar ik de kansen voor LAKWERK zie. Of jullie er zelf mee aan de slag gaan, met iemand
              anders of met mij: neem mee wat bruikbaar is. Voor de context, hier komen mijn ideeën vandaan:
            </p>
            <ul className={s.proofList}>
              {PROOF.map((p) => (
                <li key={p.org}>
                  <strong>{p.org}</strong>
                  <span className={s.muted}>{p.role}</span>
                  <span className={s.result}>{p.result}</span>
                  <span className={s.small}>{p.note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${s.card} ${s.cta}`}>
            <div className={s.ctaHead}>
              <picture className={s.gifCircle}>
                <source srcSet={GIF_STILL} media="(prefers-reduced-motion: reduce)" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={GIF} alt="" width={400} height={200} className={s.gif} loading="lazy" />
              </picture>
              <p className={s.ctaTitle}>Zin om erover te praten? Ik hoor graag wat jullie ervan vinden.</p>
            </div>
            <p>Geen verplichtingen. Gewoon een gesprek over wat klopt, wat niet, en wat jullie zelf al zagen.</p>
            <a href={MAILTO} className={s.button}>
              <Mail size={18} aria-hidden="true" /> Laten we praten <ArrowRight size={18} aria-hidden="true" />
            </a>
            <div className={s.ctaContact}>
              <a href={MAILTO}><Mail size={16} aria-hidden="true" /> {EMAIL}</a>
              <a href={`tel:${PHONE_TEL}`}><Phone size={16} aria-hidden="true" /> {PHONE}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- page ---------- */

export default function Plan() {
  return (
    <>
      <div className={s.topbar}>
        <div className={`${s.wrap} ${s.topbarInner}`}>
          <span className={s.topbarName}>Eldon Buzink</span>
          <span className={s.topbarNote}>Groeiplan voor LAKWERK</span>
        </div>
      </div>
      <Hero />
      <StepNav steps={STEPS} />
      <main>
        <StepKlik />
        <Part
          label="Deel 1 · B2C"
          title="De salons"
          text="Van de eerste indruk op de website tot de vriendin die meekomt: hoe klanten LAKWERK vinden, blijven en doorvertellen."
        />
        <StepWebsite />
        <StepRelatie />
        <StepDoorvertellen />
        <StepNieuw />
        <Part
          label="Deel 2 · B2B"
          title="De Nailschool"
          text="Een eigen doelgroep, een eigen verhaal: mensen die nailtech willen worden of beter willen worden in hun vak."
        />
        <StepNailschool />
        <StepKwartaal />
        <StepSamen />
        <section className={s.sources} aria-labelledby="bronnen-h">
          <div className={s.wrap}>
            <h2 id="bronnen-h" className={s.h3}>Bronnen</h2>
            <ol className={s.sourceList}>
              {SOURCES.map((src, i) => (
                <li key={src.url} id={`bron-${i + 1}`}>
                  <a href={src.url} target="_blank" rel="noopener noreferrer">{src.title}</a>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <footer className={s.footer}>
        <div className={`${s.wrap} ${s.footerInner}`}>
          <span>Voorstel van Eldon Buzink, Powow B.V. · november 2026 · vertrouwelijk</span>
          <form action={logout}>
            <button type="submit" className={s.logout}>Uitloggen</button>
          </form>
        </div>
      </footer>
    </>
  )
}
