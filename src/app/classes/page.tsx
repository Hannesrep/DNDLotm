const classes = [
  {
    name: "Seer",
    subtitle: "Mystische Kraft der Wahrsagerei",
    description: "Der Seer ist eine mystische Klasse, die niemals zu unterschätzen ist. Mit ihrem spirituellen Blick enthüllen Seher verborgene Wahrheiten. Ihre Fähigkeiten erlauben es ihnen, Illusionen zu weben und das Schlachtfeld aus sicherer Entfernung unsicher zu machen.",
    color: "bg-gradient-to-br from-gray-800 to-gray-900",
    textColor: "text-white",
    sequence: "Sequenz 9-0",
    secretUrl: "/seer-secrets-7f3k9x2m"
  },
  {
    name: "Marauder",
    subtitle: "Diebische Elster des Kampfes",
    description: "Der Marauder ist eine diebische Elster, die blitzschnell und sehr geschickt agiert. Er besitzt nicht nur die Möglichkeit die Taschen seiner Opfer zu erleichtern, sondern auch spirituelle und kognitive Fähigkeiten können Teil seiner Beute werden.",
    color: "bg-gradient-to-br from-purple-800 to-purple-900",
    textColor: "text-white",
    sequence: "Sequenz 9-0",
    secretUrl: "/marauder-secrets-8x4n2w7p"
  },
  {
    name: "Spectator",
    subtitle: "Stiller Beobachter der Schicksle",
    description: "Der Spectator ist ein stiller Beobachter, der mit einer außergewöhnlichen Aufmerksamkeit die Schicksle der Wesen um ihn herum beobachtet. Es ist fast unmöglich einen Spectator zu täuschen, nicht einmal deine wertvollsten Geheimnisse sind vor ihm sicher.",
    color: "bg-gradient-to-br from-blue-800 to-blue-900",
    textColor: "text-white",
    sequence: "Sequenz 9-0",
    secretUrl: "/spectator-secrets-5m9k3q8r"
  },
  {
    name: "Bard",
    subtitle: "Einstieg in den Sonnenpfad",
    description: "Der Bard ist die Einstiegssequenz des Sonnenpfades. Dieser Pfad verleiht Fähigkeiten, die mit Licht, Feuer und heiliger Magie verbunden sind. Barden sind starke Teamplayer und können ihre Freunde buffen, ihren Feinden gegenüber sind sie gnadenlos.",
    color: "bg-gradient-to-br from-amber-700 to-orange-800",
    textColor: "text-white",
    sequence: "Sequenz 9-0",
    secretUrl: "/bard-secrets-2t6y9j5n"
  },
  {
    name: "Sailor",
    subtitle: "Tyrann der Meere",
    description: "Der Sailor ist ein Tyrann, der über die Meere herrscht. Er fühlt sich in aquatischen Regionen wohl und ist dort auch nur schwer zu besiegen. Auf dem Schlachtfeld brilliert er mit rasenden Schlägen, die vor niemandem halt machen.",
    color: "bg-gradient-to-br from-cyan-700 to-blue-800",
    textColor: "text-white",
    sequence: "Sequenz 9-0",
    secretUrl: "/sailor-secrets-4h8l1v3d"
  },
  {
    name: "Corpse Collector",
    subtitle: "Düsterer nekromantischer Pfad",
    description: "Der Corpse Collector ist ein düsterer, nekromantischer Pfad, der nur von den mutigsten bestritten werden kann. Ein Corpse Collector gewinnt seine Stärke aus den Überresten der Verstorbenen und der Geister.",
    color: "bg-gradient-to-br from-gray-900 to-black",
    textColor: "text-white",
    sequence: "Sequenz 9-0",
    secretUrl: "/corpse-collector-secrets-9z1x6c4f"
  },
  {
    name: "Warrior",
    subtitle: "Gewaltige körperliche Kraft",
    description: "Der Warrior nutzt seine gewaltige körperliche Kraft, um seine Feinde niederzumachen. Ein Warrior wird immer an der Speerspitze eines Angriffs stehen und die Aufmerksamkeit des Feindes auf sich ziehen.",
    color: "bg-gradient-to-br from-red-800 to-red-900",
    textColor: "text-white",
    sequence: "Sequenz 9-0",
    secretUrl: "/warrior-secrets-3b7g2s9m"
  },
  {
    name: "Assassin",
    subtitle: "Kunst des lautlosen Tötens",
    description: "Der Assassine widmet sich der Kunst des lautlosen Tötens und der Heimlichkeit. Ein Assassine hat die Fähigkeit, sich unauffällig zu bewegen und die Ziele präzise aus dem Schatten heraus zu eliminieren.",
    color: "bg-gradient-to-br from-gray-800 to-gray-900",
    textColor: "text-white",
    sequence: "Sequenz 9-0",
    secretUrl: "/assassin-secrets-6w4p8k1h"
  },
  {
    name: "Hunter",
    subtitle: "Essenz des perfekten Jägers",
    description: "Der Hunter verkörpert die Essenz des Jägers, schnell, clever, kraftvoll, ausdauernd. Ein ausgebildeter Hunter ist eine Gefahr die ernst genommen werden muss. Er beherrscht das Fallen legen sowohl auf der physischen als auch auf einer geistlichen Ebene.",
    color: "bg-gradient-to-br from-green-800 to-green-900",
    textColor: "text-white",
    sequence: "Sequenz 9-0",
    secretUrl: "/hunter-secrets-1q5r9t2e"
  },
  {
    name: "Mystery Pryer",
    subtitle: "Aufdecken verborgener Geheimnisse",
    description: "Der Mystery Pryer ist ein ungewöhnlicher Pfad, der sich ganz dem Aufdecken und Manipulieren verborgener Geheimnisse widmet. Um dem Geheimnisvollen auf die Spur zu kommen müssen sie stark genug sein, um jeglichen Gefahren zu trotzen.",
    color: "bg-gradient-to-br from-purple-700 to-purple-900",
    textColor: "text-white",
    sequence: "Sequenz 9-0",
    secretUrl: "/mystery-pryer-secrets-7a3o6n8i"
  },
  {
    name: "Planter",
    subtitle: "Weg der Naturverbundenen",
    description: "Der Planter ist der Weg derer die mit der Natur vertraut sind. Anhänger dieses Pfades können klimatische Veränderungen vorhersehen und ihr Wissen nutzen um Verbündete zu heilen.",
    color: "bg-gradient-to-br from-green-600 to-green-800",
    textColor: "text-white",
    sequence: "Sequenz 9-0",
    secretUrl: "/planter-secrets-8e2u4y7c"
  },
  {
    name: "Apothecary",
    subtitle: "Meister der Alchemie",
    description: "Der Apothecary widmet sich der Alchemie und Pharmazie. Er kann Krankheiten und Verletzungen heilen, diverse Tränke herstellen, die alle unterschiedliche Fähigkeiten haben.",
    color: "bg-gradient-to-br from-teal-700 to-cyan-800",
    textColor: "text-white",
    sequence: "Sequenz 9-0",
    secretUrl: "/apothecary-secrets-5f9b1x3v"
  },
  {
    name: "Prisoner",
    subtitle: "Meister des kriminellen Wissens",
    description: "Der Prisoner kennt sich mit jeglichen kriminellem Wissen aus. Von leichter Brandstiftung, Schlösser knacken, bis hin zu Entführungen und Morden. Prisoner besitzen außerdem die Fähigkeit für kurze Zeit mit explosiver Kraft ihre Feinde niederzumähen.",
    color: "bg-gradient-to-br from-orange-700 to-red-800",
    textColor: "text-white",
    sequence: "Sequenz 9-0",
    secretUrl: "/prisoner-secrets-4d8k6m2l"
  },
  {
    name: "Arbiter",
    subtitle: "Unwiderstehliche Autorität",
    description: "Der Arbiter besitzt eine Autorität, der sich kein Normalsterblicher widersetzen kann. Er verfolgt seine Gerechtigkeit und andere müssen sich ihm fügen, sollte es zu Widerständen kommen, dann werden diese mit purer Gewalt klein gehalten.",
    color: "bg-gradient-to-br from-indigo-800 to-purple-900",
    textColor: "text-white",
    sequence: "Sequenz 9-0",
    secretUrl: "/arbiter-secrets-9j7h2s5q"
  }
];

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/50 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <h1 className="font-serif font-semibold text-xl text-victorian-navy">
                Lord of the Mysteries
              </h1>
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="transition-colors duration-300 font-medium text-victorian-charcoal hover:text-victorian-burgundy">
                Home
              </a>
              <a href="/classes" className="transition-colors duration-300 font-medium text-victorian-burgundy">
                Klassen
              </a>
            </div>
            <button className="md:hidden text-victorian-charcoal hover:text-victorian-burgundy transition-colors">
              {/* Mobile menu button */}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-20">
        {/* Header Section */}
        <section className="py-20 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8">
            <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Die Pfade
            </span>
            <br />
            <span className="text-gray-100">der Macht</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light px-6">
            Jeder Pfad birgt düstere Geheimnisse und tödliche Gefahren.
            <br />
            <span className="text-amber-300">Wähle weise - dein Schicksal liegt in deinen Händen.</span>
          </p>

          {/* Decorative line */}
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mt-8"></div>
        </section>

        {/* Classes Grid */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classes.map((classItem, index) => (
              <div
                key={index}
                className={`${classItem.color} rounded-lg p-6 hover:scale-105 transition-all duration-300 cursor-pointer group`}
              >
                <div className="mb-4">
                  <h3 className={`font-serif text-xl font-bold ${classItem.textColor} mb-2`}>
                    {classItem.name}
                  </h3>
                  <p className={`text-sm ${classItem.textColor} opacity-90 font-medium`}>
                    {classItem.subtitle}
                  </p>
                </div>

                <p className={`text-sm ${classItem.textColor} opacity-80 leading-relaxed mb-6`}>
                  {classItem.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className={`text-xs ${classItem.textColor} opacity-70 font-medium`}>
                    {classItem.sequence}
                  </span>
                  <a href={classItem.secretUrl} className="flex items-center space-x-2 hover:opacity-100 transition-opacity">
                    <img
                      src="https://ext.same-assets.com/4249666332/642117174.svg"
                      alt="Secret Icon"
                      className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                    <span className={`text-xs ${classItem.textColor} opacity-70 font-medium group-hover:opacity-100 transition-opacity`}>
                      Geheim
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hidden Secrets Section */}
        <section className="py-20 max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 rounded-xl p-8 backdrop-blur-sm border border-amber-400/20">
            <div className="text-center">
              <img
                src="https://ext.same-assets.com/4249666332/642117174.svg"
                alt="Lock Icon"
                className="w-12 h-12 mx-auto mb-6 opacity-70"
              />
              <h2 className="font-serif text-3xl font-bold text-amber-300 mb-4">
                Verborgene Geheimnisse
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Jede Klasse birgt düstere Mysterien, die nur den <span className="text-amber-300 font-semibold">Auserwählten</span> offenbart werden.
                <br />
                Nur wer den geheimen Pfad kennt, wird die <span className="text-amber-300 font-semibold">verbotenen Wahrheiten</span> entdecken...
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mt-6"></div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-victorian-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <img
                src="https://ext.same-assets.com/4249666332/395020867.svg"
                alt="Eye Icon"
                className="w-6 h-6 text-amber-400"
              />
              <h3 className="font-serif text-2xl font-bold">Lord of the Mysteries</h3>
            </div>

            <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Eine private Dungeons & Dragons Kampagne inspiriert von der faszinierenden Welt der okkulten Mysterien und viktorianischen Geheimnisse.
            </p>

            <div className="flex justify-center space-x-8 mb-8">
              <img
                src="https://ext.same-assets.com/4249666332/395020867.svg"
                alt="Star Icon"
                className="w-6 h-6 text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
              />
              <img
                src="https://ext.same-assets.com/4249666332/1840762163.svg"
                alt="Anchor Icon"
                className="w-6 h-6 text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
              />
              <img
                src="https://ext.same-assets.com/4249666332/395020867.svg"
                alt="Eye Icon"
                className="w-6 h-6 text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
              />
              <img
                src="https://ext.same-assets.com/4249666332/4106511504.svg"
                alt="Search Icon"
                className="w-6 h-6 text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
              />
              <img
                src="https://ext.same-assets.com/4249666332/2806946475.svg"
                alt="Lightning Icon"
                className="w-6 h-6 text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
              />
            </div>

            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-500 text-sm">
                © 2024 Lord of the Mysteries D&D Campaign. Für private Nutzung.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
