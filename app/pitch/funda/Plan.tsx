import type { ReactNode } from 'react'
import Image from 'next/image'
import {
  ArrowRight,
  BarChart3,
  Building2,
  Calculator as CalcIcon,
  Check,
  ClipboardList,
  FlaskConical,
  Handshake,
  Headphones,
  Lock,
  Mail,
  MessagesSquare,
  MousePointerClick,
  Phone,
  Search,
  ShieldCheck,
  Star,
  TrendingDown,
  Users,
} from 'lucide-react'
import Calculator from './Calculator'
import StepNav from './StepNav'
import { logout } from './actions'
import s from './funda.module.css'

const EMAIL = 'e.buzink@gmail.com'
const PHONE = '06 81 15 69 15'
const PHONE_TEL = '+31681156915'
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent('Plan nieuwe diensten funda')}`
const GIF = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG94cjFlNGw2c3A1djJhanIzemFpdXB1Z3A3MTNiaW52MDF4YWN1NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgG50Fb7Mi0prBC/giphy.gif'
const GIF_STILL = GIF.replace('giphy.gif', 'giphy_s.gif')

const SOURCES = [
  { title: 'funda, “Dit is hoe Nederland in 2025 naar huizen zocht”, 11 december 2025', url: 'https://www.funda.nl/voormakelaars/artikel-makelaar/dit-is-hoe-nederland-in-2025-naar-huizen-zocht/' },
  { title: 'DutchNews, “Funda shakes up its fees, will let sellers advertise directly”, 18 juni 2026 (cijfers via Het Financieele Dagblad)', url: 'https://dutchnews.nl/2026/06/funda-shakes-up-its-fees-will-let-sellers-advertise-directly/' },
  { title: 'Funda Index, “De stand van wonend Nederland: Q3 2025”, 10 oktober 2025', url: 'https://www.funda.nl/voormakelaars/artikel-makelaar/de-stand-van-wonend-nederland-q3-2025/' },
  { title: 'funda, “Groen energielabel wordt nog meer waard”, bijgewerkt 21 december 2023', url: 'https://www.funda.nl/meer-weten/kopen/groen-energielabel-wordt-nog-meer-waard/' },
  { title: 'Banken.nl, “ING Woonbericht: Statusdruk en financiële drempels hinderen Generatie Z”, 5 januari 2026', url: 'https://www.banken.nl/nieuws/26703/ing-woonbericht-statusdruk-en-financiele-drempels-hinderen-generatie-z' },
  { title: 'De Hypotheker, “NHG-grens vastgesteld voor 2026”, 13 oktober 2025', url: 'https://www.hypotheker.nl/actueel/nieuwsberichten/2025/nhg-grens-vastgesteld-voor-2026/' },
]

const STEPS = [
  { id: 'data', label: 'Data verzamelen' },
  { id: 'kansen', label: 'Kansen en oplossingen' },
  { id: 'valideren', label: 'Snel valideren' },
  { id: 'resultaat', label: 'Na 4 maanden' },
  { id: 'waarom-ik', label: 'Waarom ik' },
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
      Stap {n} · {children}
    </p>
  )
}

function Fact({ tag, children }: { tag: ReactNode; children: ReactNode }) {
  return (
    <li>
      <span>{tag}</span>
      <span>{children}</span>
    </li>
  )
}

/* ---------- hero ---------- */

const JOURNEY = [
  { name: 'Zoeken', sees: true, chips: [] },
  { name: 'Bieden', sees: true, chips: ['Hypotheek'] },
  { name: 'Kopen', sees: false, chips: [] },
  { name: 'Sleutel', sees: false, chips: ['Energie', 'Inboedel', 'Verhuizen'] },
  { name: 'Wonen', sees: false, chips: ['Verduurzamen'] },
]

function Hero() {
  return (
    <header className={s.hero}>
      <div className={s.wrap}>
        <p className={s.byline}>
          Voorstel van Eldon Buzink, Powow B.V. Op basis van publieke bronnen, niet van funda zelf.
        </p>
        <h1 className={s.h1}>Na het bod staan kopers er alleen voor. Funda kan ze verder helpen.</h1>
        <p className={s.intro}>
          Hypotheek, energie, verzekering en verhuizen regelen mensen nu buiten funda. Als funda ze daar helpt, via goede
          partners, winnen beide kanten.
        </p>

        <div className={s.value}>
          <div className={`${s.card} ${s.valueCard}`}>
            <p className={s.valueWho}><Users size={18} aria-hidden="true" /> Voor kopers</p>
            <ul className={s.valueList}>
              <li><Check size={16} aria-hidden="true" /> Vooraf weten wat je echt kunt betalen</li>
              <li><Check size={16} aria-hidden="true" /> Hypotheek, energie en verhuizen op één plek</li>
              <li><Check size={16} aria-hidden="true" /> Partners die funda heeft geselecteerd</li>
            </ul>
          </div>
          <div className={`${s.card} ${s.valueCard}`}>
            <p className={s.valueWho}><Building2 size={18} aria-hidden="true" /> Voor funda</p>
            <ul className={s.valueList}>
              <li><Check size={16} aria-hidden="true" /> Een rol na het bod, niet alleen bij het zoeken</li>
              <li><Check size={16} aria-hidden="true" /> Nieuwe omzet via partners</li>
              <li><Check size={16} aria-hidden="true" /> Zonder zelf financiële producten aan te bieden</li>
            </ul>
          </div>
        </div>

        <p className={s.planLine}>
          Mijn plan voor 4 maanden als productmanager nieuwe diensten: van gesprekken en data naar één dienst die live staat.
        </p>

        <div className={`${s.card} ${s.journey}`}>
          <p className={s.journeyCaption}>
            <Aanname />
            <span>
              <strong>Waarom deze reis?</strong> Funda is er bij zoeken en bieden. Daarna regelen mensen hypotheek,
              energie en verzekering, buiten funda&apos;s zicht. Dat verschil is de kans.
            </span>
          </p>
          <ol className={s.stops} aria-label="De woonreis">
            {JOURNEY.map((stop) => (
              <li key={stop.name} className={`${s.stop} ${stop.sees ? '' : s.stopQuiet}`}>
                <span className={s.dot} aria-hidden="true" />
                <div>
                  <div className={s.stopName}>{stop.name}</div>
                  <div className={s.stopSees}>{stop.sees ? 'funda ziet het' : 'funda ziet het niet'}</div>
                  {stop.chips.length > 0 && (
                    <div className={s.chips}>
                      {stop.chips.map((c) => (
                        <span key={c} className={`${s.chip} ${s.chipWarm}`}>{c}</span>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
            <li className={s.horizon} aria-hidden="true">
              <span>Hier eindigt funda&apos;s zicht</span>
            </li>
          </ol>
        </div>

        <div className={s.legend} style={{ marginTop: 16 }}>
          <span><Feit n={1} /> controleerbaar, met bron onderaan</span>
          <span><Aanname /> mijn inschatting, die ik test</span>
        </div>
      </div>
    </header>
  )
}

/* ---------- step 1 ---------- */

function StepData() {
  return (
    <section id="data" className={s.section} aria-labelledby="data-h">
      <div className={s.wrap}>
        <Kicker n={1}>Data verzamelen</Kicker>
        <h2 id="data-h" className={s.h2}>Eerst de mensen, dan de cijfers, dan de som</h2>
        <p className={s.lead}>Drie bronnen wegen even zwaar. Samen voeden ze de kansen in stap 2.</p>

        <div className={s.blocks}>
          {/* Gebruikers */}
          <div className={`${s.card} ${s.block}`}>
            <div className={s.blockHead}>
              <span className={s.blockIcon}><Users size={20} aria-hidden="true" /></span>
              <div>
                <h3 className={s.blockTitle}>Gebruikers</h3>
                <p className={s.blockQ}>Wie koopt, wat hebben ze nodig, en waarom?</p>
              </div>
            </div>

            <div className={s.segments}>
            <div className={s.segment}>
              <div className={s.segmentHead}><span className={s.segmentName}>Starters</span><span className={s.segmentAge}>tot 35 jaar</span></div>
              <p className={s.need}>Weten wat ik kan betalen</p>
              <ul className={s.facts}>
                <Fact tag={<Feit n={3} />}>Hoge vraagprijzen zijn de grootste reden om nog niet te kopen (56%).</Fact>
                <Fact tag={<Feit n={5} />}>24% van Gen Z kon de eerste woning volledig met hypotheek betalen. Bij Gen X 62%.</Fact>
                <Fact tag={<Feit n={6} />}>NHG-grens stijgt in 2026 naar € 470.000.</Fact>
              </ul>
              <div className={s.chips}><span className={s.chip}>Maandlasten</span><span className={s.chip}>Hypotheekadvies</span></div>
            </div>

            <div className={s.segment}>
              <div className={s.segmentHead}><span className={s.segmentName}>Doorstromers</span><span className={s.segmentAge}>35 tot 55 jaar</span></div>
              <p className={s.need}>Meer ruimte, en alles tegelijk regelen</p>
              <ul className={s.facts}>
                <Fact tag={<Feit n={3} />}>Belangrijkste koopreden: meer woonruimte.</Fact>
                <Fact tag={<Aanname />}>Verkoop, aankoop en verhuizing lopen door elkaar.</Fact>
              </ul>
              <div className={s.chips}><span className={s.chip}>Hypotheek</span><span className={s.chip}>Verhuizen</span><span className={s.chip}>Energie</span><span className={s.chip}>Inboedel</span></div>
            </div>

            <div className={s.segment}>
              <div className={s.segmentHead}><span className={s.segmentName}>55-plussers</span><span className={s.segmentAge}>55 jaar en ouder</span></div>
              <p className={s.need}>Levensloopbestendig wonen</p>
              <ul className={s.facts}>
                <Fact tag={<Feit n={3} />}>Bij 70+ is dat veruit de grootste koopreden (63%).</Fact>
                <Fact tag={<Feit n={1} />}>‘Levensloopbestendig’ is een veelgebruikte zoekterm.</Fact>
                <Fact tag={<Aanname />}>Ze zoeken vooral ontzorging bij verhuizen.</Fact>
              </ul>
              <div className={s.chips}><span className={s.chip}>Verhuizen</span><span className={s.chip}>Woning aanpassen</span></div>
            </div>

            <div className={s.segment}>
              <div className={s.segmentHead}><span className={s.segmentName}>Iedereen</span></div>
              <p className={s.need}>Een zuinig huis</p>
              <ul className={s.facts}>
                <Fact tag={<Feit n={4} />}>61% is bereid een volgend huis te verduurzamen.</Fact>
                <Fact tag={<Feit n={1} />}>Labels C of hoger werden in 2025 het meest aangeklikt.</Fact>
              </ul>
              <div className={s.chips}><span className={s.chip}>Verduurzamen</span><span className={s.chip}>Energie</span></div>
            </div>
            </div>
          </div>

          {/* Data */}
          <div className={`${s.card} ${s.block}`}>
            <div className={s.blockHead}>
              <span className={s.blockIcon}><BarChart3 size={20} aria-hidden="true" /></span>
              <div>
                <h3 className={s.blockTitle}>Data</h3>
                <p className={s.blockQ}>Hoeveel mensen bereikt funda, en waar haken ze af?</p>
              </div>
            </div>
            <div className={s.stats}>
              <div className={s.stat}><div className={s.statNum}>297.431</div><div className={s.statLabel}>woningen te koop in 2025</div><Feit n={1} /></div>
              <div className={s.stat}><div className={s.statNum}>195.392</div><div className={s.statLabel}>verkocht via funda</div><Feit n={1} /></div>
              <div className={s.stat}><div className={s.statNum}>837 mln</div><div className={s.statLabel}>bezoeken in 2025</div><Feit n={1} /></div>
              <div className={s.stat}><div className={s.statNum}>158×</div><div className={s.statLabel}>kwam een bezoeker gemiddeld terug</div><Feit n={1} /></div>
            </div>
            <div className={s.blockSplit}>
              <p className={s.small} style={{ margin: 0 }}>
                <Feit n={4} /> Met <strong>Mijn Huis</strong> heeft funda al een plek voor huiseigenaren.
              </p>
              <div>
                <p className={s.wantTitle}>Wat ik intern wil zien</p>
                <ul className={s.wantList}>
                  <li><MousePointerClick size={16} aria-hidden="true" /> Funnel: zoeken, bewaren, contact, gekocht</li>
                  <li><Handshake size={16} aria-hidden="true" /> Huidige partners en omzet per dienst</li>
                  <li><Headphones size={16} aria-hidden="true" /> Klantvragen over hypotheek, energie en verhuizen</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Business case */}
          <div className={`${s.card} ${s.block}`}>
            <div className={s.blockHead}>
              <span className={s.blockIcon}><CalcIcon size={20} aria-hidden="true" /></span>
              <div>
                <h3 className={s.blockTitle}>Business case</h3>
                <p className={s.blockQ}>Wat moet waar zijn om het verschil te maken?</p>
              </div>
            </div>
            <div className={s.blockSplit}>
              <div>
                <div className={s.stat}>
                  <div className={s.statNum}>€ 73 mln omzet</div>
                  <div className={s.statLabel}>en € 34 mln nettowinst, vorig jaar</div>
                  <Feit n={2} />
                </div>
                <p className={s.takeaway}>
                  Een dienst van een paar tientjes redt het niet. Ik zoek eerst waar de waarde per koper hoog is.
                </p>
              </div>
              <div>
                <Calculator />
                <p className={s.small} style={{ margin: '8px 0 0' }}>
                  <Aanname>Aanname</Aanname> <span className={s.muted}>één koper per verkochte woning</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${s.card} ${s.methods}`}>
          <h3 className={s.h3}>Zo kom ik aan de inzichten</h3>
          <div className={s.methodGrid}>
            <div className={s.method}><MessagesSquare size={20} aria-hidden="true" />Interviews<small>recente kopers en zoekers</small></div>
            <div className={s.method}><MousePointerClick size={20} aria-hidden="true" />Gedragsdata<small>funnel en klikken</small></div>
            <div className={s.method}><Search size={20} aria-hidden="true" />Zoektermen<small>wat mensen intypen</small></div>
            <div className={s.method}><Headphones size={20} aria-hidden="true" />Klantvragen<small>klantenservice</small></div>
            <div className={s.method}><Star size={20} aria-hidden="true" />App-reviews<small>App Store en Play</small></div>
            <div className={s.method}><ClipboardList size={20} aria-hidden="true" />Funda Index<small>één extra vraag</small></div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- step 2 ---------- */

type Sol = { letter: string; title: string; start?: boolean }
type Opp = { title: string; evidence: ReactNode[]; sols: Sol[] }

const OPPS: Opp[] = [
  {
    title: 'Zoekers weten niet wat ze echt kunnen betalen',
    evidence: [<Feit key="3" n={3} />, <Feit key="5" n={5} />, <Feit key="6" n={6} />, <Aanname key="i">Interviews</Aanname>],
    sols: [
      { letter: 'A', title: 'Maandlasten bij de woning', start: true },
      { letter: 'B', title: 'Doorverwijzing naar een gelicentieerde adviseur, met toestemming', start: true },
    ],
  },
  {
    title: 'Na de koop moet je alles tegelijk regelen',
    evidence: [<Aanname key="i">Interviews</Aanname>, <Aanname key="k">Klantvragen</Aanname>, <Aanname key="f">Funnel-data</Aanname>],
    sols: [{ letter: 'C', title: 'Verhuischecklist met energie, inboedel en verhuizen' }],
  },
  {
    title: 'Kopers zien niet wat verduurzamen kost',
    evidence: [<Feit key="4" n={4} />, <Feit key="1" n={1} />, <Aanname key="i">Interviews</Aanname>],
    sols: [
      { letter: 'D', title: 'Verduurzamingsadvies per energielabel' },
      { letter: 'E', title: 'Koppeling met installateurs' },
    ],
  },
]

// [effort 0-100 left→right, impact 0-100 bottom→top] — my estimates
const DOTS: { letter: string; title: string; x: number; y: number; start?: boolean }[] = [
  { letter: 'A', title: 'Maandlasten bij de woning', x: 24, y: 70, start: true },
  { letter: 'B', title: 'Doorverwijzing naar adviseur', x: 62, y: 80, start: true },
  { letter: 'C', title: 'Verhuischecklist', x: 20, y: 54 },
  { letter: 'D', title: 'Verduurzamingsadvies', x: 44, y: 36 },
  { letter: 'E', title: 'Koppeling met installateurs', x: 82, y: 56 },
]

function StepKansen() {
  return (
    <section id="kansen" className={`${s.section} ${s.sectionAlt}`} aria-labelledby="kansen-h">
      <div className={s.wrap}>
        <Kicker n={2}>Kansen en oplossingen</Kicker>
        <h2 id="kansen-h" className={s.h2}>Van doel naar kansen naar oplossingen</h2>
        <p className={s.lead}>Elke kans laat zien waar het bewijs vandaan komt. Partners leveren de dienst, funda brengt de klant.</p>

        <div className={s.tree}>
          <div className={s.goal}>
            <span className={s.nodeLabel}>Doel</span>
            <div className={s.goalTitle}>Meer omzet uit diensten rond wonen, zonder vertrouwen te verliezen</div>
          </div>
          <ul className={s.opps}>
            {OPPS.map((opp, i) => (
              <li key={opp.title} className={s.opp}>
                <div className={s.oppCard}>
                  <span className={s.nodeLabel}>Kans {i + 1}</span>
                  <div className={s.oppTitle}>{opp.title}</div>
                  <div className={s.evidence} aria-label="Bewijs">{opp.evidence}</div>
                </div>
                <ul className={s.sols}>
                  {opp.sols.map((sol) => (
                    <li key={sol.letter} className={s.sol}>
                      <div className={`${s.solCard} ${sol.start ? s.solStart : ''}`}>
                        <span className={s.letter} aria-hidden="true">{sol.letter}</span>
                        <div>
                          <span className={s.nodeLabel}>Oplossing {sol.letter}</span>
                          {sol.title}
                          {sol.start && <div className={s.startTag}>Hier begin ik</div>}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className={s.matrixWrap}>
          <div className={`${s.card} ${s.matrixCard}`}>
            <h3 className={s.h3}>Impact tegen moeite <Aanname /></h3>
            <div className={s.matrix} role="img" aria-label="Matrix: A en C hoge impact en weinig moeite, B hoogste impact met middelmatige moeite, D middelmatig, E veel moeite.">
              <div className={`${s.quad} ${s.quadStart}`}>Begin hier</div>
              <div className={s.quad}>Plan in</div>
              <div className={s.quad}>Als het meezit</div>
              <div className={s.quad}>Later</div>
              {DOTS.map((d) => (
                <span key={d.letter} className={`${s.mdot} ${d.start ? s.mdotStart : ''}`} style={{ left: `${d.x}%`, bottom: `${d.y}%` }}>
                  {d.letter}
                </span>
              ))}
              <span className={s.axisY}>Impact ↑</span>
              <span className={s.axisX}>Moeite →</span>
            </div>
          </div>
          <div>
            <ul className={s.keyList}>
              {DOTS.map((d) => (
                <li key={d.letter}>
                  <span className={`${s.mdot} ${d.start ? s.mdotStart : ''}`} style={{ position: 'static', transform: 'none' }} aria-hidden="true">{d.letter}</span>
                  {d.title}
                </li>
              ))}
            </ul>
            <p className={s.takeaway} style={{ marginTop: 18 }}>
              A en B helpen bij het moment met de hoogste waarde per koper: de hypotheek. Funda biedt zelf geen financiële producten.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- step 3 ---------- */

const TESTS = [
  {
    for: 'Basis voor A, B en C',
    title: 'Herkennen we wie net een huis kocht?',
    assumption: 'We kunnen kopers herkennen aan hun gedrag en één vraag.',
    test: 'Funnelanalyse plus één vraag aan bezoekers: “Heb je net een huis gekocht?”',
    go: 'Genoeg kopers zijn herkenbaar om een dienst op te bouwen.',
    weeks: 1,
  },
  {
    for: 'Test oplossing A',
    title: 'Willen zoekers maandlasten zien?',
    assumption: 'Bezoekers willen bij een woning zien wat die per maand kost.',
    test: 'Knop “Bekijk maandlasten” op echte woningpagina’s, nog zonder dienst erachter.',
    go: 'De klikratio haalt de drempel die we vooraf vastleggen.',
    weeks: 2,
  },
  {
    for: 'Test oplossing B',
    title: 'Willen partners betalen voor een doorverwijzing?',
    assumption: 'Gelicentieerde adviseurs betalen per doorverwijzing met toestemming.',
    test: 'Gesprekken met 3 tot 5 partners, met een concreet voorstel.',
    go: 'Partners willen een pilot op onze voorwaarden.',
    weeks: 3,
  },
  {
    for: 'Test oplossing C',
    title: 'Willen kopers een verhuischecklist?',
    assumption: 'Kopers willen energie, inboedel en verhuizen op één plek regelen.',
    test: 'Een eenvoudige checklist via funda’s eigen kanalen, aan mensen die aangeven dat ze kochten. We meten welke onderdelen ze openen.',
    go: 'Kopers klikken door naar de onderdelen met een partneraanbod.',
    weeks: 4,
  },
]

function StepValideren() {
  return (
    <section id="valideren" className={s.section} aria-labelledby="valideren-h">
      <div className={s.wrap}>
        <Kicker n={3}>Snel valideren</Kicker>
        <h2 id="valideren-h" className={s.h2}>Testen voordat we bouwen</h2>
        <p className={s.question}>
          Per oplossing: wat moet waar zijn, hoe testen we dat snel en goedkoop, en bij welk resultaat gaan we door of stoppen we?
        </p>

        <div className={s.tests}>
          {TESTS.map((t, i) => (
            <article key={t.title} className={`${s.card} ${s.test}`}>
              <div className={s.testHead}>
                <span className={s.nodeLabel} style={{ margin: 0 }}>Test {i + 1}</span>
                <span className={s.testFor}>{t.for}</span>
              </div>
              <h3 className={s.testTitle}>{t.title}</h3>
              <dl className={s.testRows}>
                <div><dt>Aanname</dt><dd>{t.assumption}</dd></div>
                <div><dt>Test</dt><dd>{t.test}</dd></div>
                <div><dt>Door als</dt><dd>{t.go}</dd></div>
              </dl>
              <div className={s.dur}>
                <span>{t.weeks} {t.weeks === 1 ? 'week' : 'weken'}</span>
                <span className={s.durBar} aria-hidden="true">
                  {[1, 2, 3, 4].map((w) => <span key={w} className={w <= t.weeks ? s.on : ''} />)}
                </span>
                <Aanname />
              </div>
            </article>
          ))}
        </div>

        <div className={s.prereq}>
          <p className={s.prereqTitle}>Vooraf geregeld</p>
          <ul className={s.prereqList}>
            <li><ShieldCheck size={18} aria-hidden="true" /> Juridische toets per dienst</li>
            <li><Lock size={18} aria-hidden="true" /> Toestemming per gegevensoverdracht</li>
            <li><FlaskConical size={18} aria-hidden="true" /> Meetplan en stopdrempels op papier</li>
            <li><Handshake size={18} aria-hidden="true" /> Afspraken met partners over data en kwaliteit</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------- step 4 ---------- */

const MONTHS = [
  { title: 'Inzicht en keuze', text: 'Waar de grootste kansen liggen en welke ik als eerste aanpak.' },
  { title: 'Validatie', text: 'Welke ideeën het waard zijn om te bouwen.' },
  { title: 'Live test', text: 'De eerste dienst bij echte gebruikers.' },
  { title: 'Overdracht', text: 'Uitkomsten, roadmap en een werkwijze waar het team mee verder kan.' },
]

function StepResultaat() {
  return (
    <section id="resultaat" className={`${s.section} ${s.sectionAlt}`} aria-labelledby="resultaat-h">
      <div className={s.wrap}>
        <Kicker n={4}>Wat jullie na 4 maanden hebben</Kicker>
        <h2 id="resultaat-h" className={s.h2}>Elke maand een uitkomst</h2>
        <p className={s.lead}>Geen beloofde streefwaarden vooraf. Wel één meetlat, en grenzen die we bewaken.</p>

        <ol className={s.timeline}>
          {MONTHS.map((m, i) => (
            <li key={m.title} className={`${s.card} ${s.month}`}>
              <div className={s.monthNum}>Maand {i + 1}</div>
              <div className={s.monthTitle}>{m.title}</div>
              <p className={s.monthText}>{m.text}</p>
            </li>
          ))}
        </ol>

        <div className={s.metrics}>
          <div className={`${s.card} ${s.north}`}>
            <span className={s.nodeLabel}>North star</span>
            <div className={s.northTitle}>Extra omzet uit diensten per via funda verkochte woning</div>
            <div className={s.drivers}>
              <span className={s.driver}>Bereik</span><span className={s.x}>×</span>
              <span className={s.driver}>Interesse</span><span className={s.x}>×</span>
              <span className={s.driver}>Conversie</span><span className={s.x}>×</span>
              <span className={s.driver}>Waarde per klant</span>
            </div>
          </div>
          <div className={`${s.card} ${s.guard}`}>
            <span className={s.nodeLabel}>Mag niet dalen</span>
            <ul className={s.guardList}>
              <li><TrendingDown size={18} aria-hidden="true" /> Vertrouwen in funda</li>
              <li><TrendingDown size={18} aria-hidden="true" /> Zoeken en contactaanvragen</li>
              <li><TrendingDown size={18} aria-hidden="true" /> Tevredenheid over partners</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- step 5 + resume ---------- */

const ROLES = [
  { when: 'nov 2025 – apr 2026', org: 'Bol.com', title: 'Productmanager', bullets: [<><span className={s.result}>6 mln incrementele GMV</span> als eigenaar van winkelmand, checkout en betalingen, ook pricing.</>, 'Met Compliance een checkout-aanpassing voor krediet- en ID-verificatie.'] },
  { when: 'aug 2023 – nov 2025', org: 'DPG Media', title: 'Productmanager / Teamlead CRO a.i.', bullets: [<>Implementatieratio van experimenten <span className={s.result}>+25%</span> (Optimizely, VWO).</>, 'Productteams tot 5 mensen herschikt en gecoacht.'] },
  { when: 'feb – aug 2023', org: 'Health start-up (NDA)', title: 'Productmanager', bullets: ['Platformmigratie binnen 6 maanden, met interviews en journey mapping.', 'Segment opgezet als databasis.'] },
  { when: 'dec 2020 – aug 2023', org: 'Adidas', title: 'Product owner Membership', bullets: [<><span className={s.result}>+23% leden</span> per jaar via ± 24 experimenten.</>, 'Opzet, integratie en adoptie van een CDP (Segment).'] },
  { when: 'mrt 2016 – mrt 2017', org: 'Uber', title: 'Growth marketing manager Nordics & Benelux', bullets: [<>Conversie van chauffeurs <span className={s.result}>+53%</span>, samen met product en engineering.</>] },
  { when: '2014 – 2019', org: 'Ahold (AH / Gall & Gall)', title: 'Growth marketing manager', bullets: ['Opzet en adoptie van het PIM-systeem; team van ongeveer 10 mensen.'] },
  { when: 'aug 2012 – mrt 2016', org: 'Coolblue', title: 'Performance marketing manager', bullets: ['SEA, display, affiliate en SEO.'] },
]

const SKILLS = ['Opportunity Solution Tree', 'RICE', 'OKR', 'A/B-testen', 'Gebruikersinterviews', 'Journey mapping', 'SQL', 'Looker', 'Segment', 'Jira', 'Scrum en Kanban']

function StepWaarom() {
  return (
    <section id="waarom-ik" className={s.section} aria-labelledby="waarom-h">
      <div className={s.wrap}>
        <Kicker n={5}>Waarom ik, en hoe je me bereikt</Kicker>
        <div className={s.why}>
          <div>
            <div className={s.me}>
              <Image src="/images/1604824879858.jpeg" alt="Eldon Buzink" width={88} height={88} className={s.avatar} />
              <div>
                <div className={s.meName}>Eldon Buzink</div>
                <div className={s.small + ' ' + s.muted}>Freelance productmanager, Powow B.V.</div>
              </div>
            </div>
            <h2 id="waarom-h" className={s.h2}>Ik heb dit eerder gedaan, rond betalen en krediet</h2>
            <div className={`${s.card} ${s.bigStat}`}>
              <div className={s.bigNum}>6 mln</div>
              <div className={s.small}>incrementele GMV als productmanager van winkelmand, checkout en betalingen bij Bol.com</div>
            </div>
            <ul className={s.proof}>
              <li><Check size={18} aria-hidden="true" /> Experimenteert gestructureerd: +23% leden bij Adidas via ± 24 experimenten</li>
              <li><Check size={18} aria-hidden="true" /> Werkte met Compliance aan krediet- en ID-checks in een checkout</li>
              <li><Check size={18} aria-hidden="true" /> 14 jaar bij Coolblue, Ahold, Uber, Adidas, DPG Media en Bol.com</li>
              <li><Check size={18} aria-hidden="true" /> Werkt met Opportunity Solution Trees, RICE en OKR&apos;s</li>
            </ul>
            <p className={s.honest}>
              <strong>Wat ik niet heb:</strong> jarenlange ervaring in de woningmarkt. Dat los ik op in maand 1, met de mensen die het wel weten.
            </p>
          </div>

          <div className={`${s.card} ${s.cta}`}>
            <div className={s.ctaHead}>
              <picture className={s.gifCircle}>
                <source srcSet={GIF_STILL} media="(prefers-reduced-motion: reduce)" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={GIF} alt="" width={400} height={200} className={s.gif} loading="lazy" />
              </picture>
              <p className={s.ctaTitle}>Laten we de aannames testen. Een half uur om te horen wat klopt en wat niet.</p>
            </div>
            <a href={MAILTO} className={s.button}>
              <Mail size={18} aria-hidden="true" /> Plan een kennismaking <ArrowRight size={18} aria-hidden="true" />
            </a>
            <div className={s.ctaContact}>
              <a href={MAILTO}><Mail size={16} aria-hidden="true" /> {EMAIL}</a>
              <a href={`tel:${PHONE_TEL}`}><Phone size={16} aria-hidden="true" /> {PHONE}</a>
            </div>
          </div>
        </div>

        <article className={`${s.card} ${s.resume}`} aria-labelledby="cv-h">
          <div className={s.resumeHead}>
            <h3 id="cv-h" className={s.resumeName}>Cv · Eldon Buzink</h3>
            <span className={s.resumeMeta}>Breda · Nederlands en Engels</span>
          </div>
          <p className={s.profile}>
            Productmanager en CRO-specialist met 14 jaar in digitaal, e-commerce en groei, waarvan ruim 5 jaar in productrollen.
            Sterk in eigenaarschap van begin tot eind, experimenteren en teams op één lijn krijgen.
          </p>
          <ol className={s.roles}>
            {ROLES.map((r) => (
              <li key={r.org} className={s.role}>
                <div className={s.roleWhen}>{r.when}</div>
                <div>
                  <div className={s.roleTitle}>{r.org} <span>· {r.title}</span></div>
                  <ul className={s.roleBullets}>
                    {r.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
          <div className={s.resumeFoot}>
            <div>
              <div className={s.footLabel}>Vaardigheden</div>
              <div className={s.skills}>{SKILLS.map((k) => <span key={k} className={s.chip}>{k}</span>)}</div>
            </div>
            <div>
              <div className={s.footLabel}>Nu</div>
              <p className={s.small} style={{ margin: '8px 0 0' }}>Powow B.V., freelance. Bouwt daarnaast eigen AI-producten.</p>
            </div>
          </div>
        </article>
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
          <span className={s.topbarNote}>Voorstel, niet van funda</span>
        </div>
      </div>
      <Hero />
      <StepNav steps={STEPS} />
      <main>
        <StepData />
        <StepKansen />
        <StepValideren />
        <StepResultaat />
        <StepWaarom />
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
          <span>Voorstel van Eldon Buzink, Powow B.V. · november 2026 · vertrouwelijk. Niet gemaakt door of namens funda.</span>
          <form action={logout}>
            <button type="submit" className={s.logout} style={{ color: 'inherit' }}>Uitloggen</button>
          </form>
        </div>
      </footer>
    </>
  )
}
