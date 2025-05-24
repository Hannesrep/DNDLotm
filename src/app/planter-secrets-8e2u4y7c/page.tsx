'use client';

import { useState } from 'react';

const sequenceLevels = [
  { level: 9, name: 'Sequenz 9', active: true },
  { level: 8, name: 'Sequenz 8', active: false },
  { level: 7, name: 'Sequenz 7', active: false },
  { level: 6, name: 'Sequenz 6', active: false },
  { level: 5, name: 'Sequenz 5', active: false },
];

const abilities = {
  9: [
    {
      name: "Pflanzenwachstum",
      description: "Kann das Wachstum von Pflanzen drastisch beschleunigen"
    },
    {
      name: "Nährboden-Erschaffung",
      description: "Kann fruchtbaren Boden aus unfruchtbarer Erde machen"
    },
    {
      name: "Botanisches Wissen",
      description: "Instinktives Verständnis aller Pflanzenarten und ihrer Eigenschaften"
    }
  ],
  8: [
    {
      name: "Lebende Rüstung",
      description: "Kann sich mit Pflanzen umhüllen, die als Schutz dienen"
    },
    {
      name: "Giftige Gewächse",
      description: "Kann gefährliche und giftige Pflanzen züchten"
    },
    {
      name: "Wurzel-Netzwerk",
      description: "Kann durch Pflanzenwurzeln über große Entfernungen kommunizieren"
    }
  ],
  7: [
    {
      name: "Wald-Erschaffung",
      description: "Kann ganze Wälder aus dem Nichts entstehen lassen"
    },
    {
      name: "Fleischfressende Gärten",
      description: "Kann intelligente fleischfressende Pflanzen erschaffen"
    },
    {
      name: "Jahreszeiten-Kontrolle",
      description: "Kann die Jahreszeiten in einem Gebiet verändern"
    }
  ],
  6: [
    {
      name: "Weltbaum-Sproß",
      description: "Kann einen mythischen Weltbaum pflanzen und nähren"
    },
    {
      name: "Ökosystem-Beherrschung",
      description: "Vollständige Kontrolle über natürliche Ökosysteme"
    },
    {
      name: "Leben-Übertragung",
      description: "Kann Lebenskraft zwischen Pflanzen und anderen Wesen übertragen"
    }
  ],
  5: [
    {
      name: "Gaia-Avatar",
      description: "Wird zum Avatar der Erdmutter und aller pflanzlichen Lebensformen"
    },
    {
      name: "Planetare Flora",
      description: "Kann die Flora ganzer Planeten erschaffen und kontrollieren"
    },
    {
      name: "Ewiger Garten",
      description: "Kann dimensionale Gärten mit unendlicher Vielfalt erschaffen"
    }
  ]
};

const skills = {
  9: [
    "Botanik +3",
    "Gartenbau +3",
    "Beschleunigtes Wachstum +2",
    "Bodenkunde +2"
  ],
  8: [
    "Pflanzenzucht +3",
    "Toxikologie +2",
    "Wurzel-Kommunikation +2",
    "Lebende Ausrüstung +3"
  ],
  7: [
    "Wald-Magie +3",
    "Fleischfresser-Zucht +3",
    "Klimakontrolle +2",
    "Großflächige Bepflanzung +2"
  ],
  6: [
    "Mythische Botanik +3",
    "Ökosystem-Design +3",
    "Lebenskraft-Transfer +3",
    "Weltbaum-Pflege +2"
  ],
  5: [
    "Göttliche Botanik +3",
    "Planetare Gestaltung +3",
    "Dimensionale Gärten +3",
    "Gaia-Inkarnation +3"
  ]
};

const stats = {
  9: { strength: 12, agility: 14, intelligence: 16, spirituality: 18, luck: 14 },
  8: { strength: 13, agility: 15, intelligence: 18, spirituality: 20, luck: 16 },
  7: { strength: 14, agility: 16, intelligence: 20, spirituality: 22, luck: 18 },
  6: { strength: 15, agility: 17, intelligence: 22, spirituality: 25, luck: 20 },
  5: { strength: 16, agility: 18, intelligence: 25, spirituality: 28, luck: 22 }
};

export default function PlanterSecretsPage() {
  const [selectedSequence, setSelectedSequence] = useState(9);
  const [activeTab, setActiveTab] = useState('abilities');

  const currentAbilities = abilities[selectedSequence as keyof typeof abilities];
  const currentSkills = skills[selectedSequence as keyof typeof skills];
  const currentStats = stats[selectedSequence as keyof typeof stats];

  return (
    <div className="min-h-screen bg-black relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <img
              src="https://ext.same-assets.com/1440359594/2363862268.svg"
              alt="Planter Leaf"
              className="w-16 h-16 mx-auto text-emerald-400 mb-4"
            />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-emerald-200 via-emerald-300 to-emerald-400 bg-clip-text text-transparent">
              Planter
            </span>
            <br />
            <span className="text-gray-100 text-3xl">Geheimnisse des Pfades</span>
          </h1>
        </div>

        {/* Sequence Level Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">Sequenz Level wählen:</h3>
          <div className="flex justify-center gap-2 flex-wrap">
            {sequenceLevels.map((seq) => (
              <button
                key={seq.level}
                onClick={() => setSelectedSequence(seq.level)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedSequence === seq.level
                    ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/50'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {seq.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex justify-center gap-1 bg-gray-900/50 rounded-xl p-2 backdrop-blur-sm border border-gray-700/50">
            <button
              onClick={() => setActiveTab('abilities')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'abilities'
                  ? 'bg-emerald-500 text-black shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <img
                src="https://ext.same-assets.com/1440359594/2426928305.svg"
                alt="Lightning"
                className="w-4 h-4"
              />
              Beyonderfähigkeiten
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'skills'
                  ? 'bg-emerald-500 text-black shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <img
                src="https://ext.same-assets.com/1440359594/483911083.svg"
                alt="Skills"
                className="w-4 h-4"
              />
              Skills
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'stats'
                  ? 'bg-emerald-500 text-black shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <img
                src="https://ext.same-assets.com/1440359594/1149805550.svg"
                alt="Stats"
                className="w-4 h-4"
              />
              Werteverteilung
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 shadow-2xl">
          {activeTab === 'abilities' && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Beyonderfähigkeiten - Sequenz {selectedSequence}
              </h3>
              <div className="space-y-4">
                {currentAbilities.map((ability, index) => (
                  <div key={index} className="bg-black/40 rounded-lg p-4 border border-emerald-500/20">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:w-1/3">
                        <h4 className="font-semibold text-emerald-400 text-lg">{ability.name}</h4>
                      </div>
                      <div className="md:w-2/3">
                        <p className="text-gray-300">{ability.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Skills - Sequenz {selectedSequence}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentSkills.map((skill, index) => (
                  <div key={index} className="bg-black/40 rounded-lg p-4 border border-emerald-500/20">
                    <p className="text-emerald-400 font-semibold">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'stats' && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Werteverteilung - Sequenz {selectedSequence}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-black/40 rounded-lg p-4 border border-emerald-500/20 text-center">
                  <h4 className="text-emerald-400 font-semibold mb-2">Stärke</h4>
                  <p className="text-3xl font-bold text-white">{currentStats.strength}</p>
                </div>
                <div className="bg-black/40 rounded-lg p-4 border border-emerald-500/20 text-center">
                  <h4 className="text-emerald-400 font-semibold mb-2">Geschicklichkeit</h4>
                  <p className="text-3xl font-bold text-white">{currentStats.agility}</p>
                </div>
                <div className="bg-black/40 rounded-lg p-4 border border-emerald-500/20 text-center">
                  <h4 className="text-emerald-400 font-semibold mb-2">Intelligenz</h4>
                  <p className="text-3xl font-bold text-white">{currentStats.intelligence}</p>
                </div>
                <div className="bg-black/40 rounded-lg p-4 border border-emerald-500/20 text-center">
                  <h4 className="text-emerald-400 font-semibold mb-2">Spiritualität</h4>
                  <p className="text-3xl font-bold text-white">{currentStats.spirituality}</p>
                </div>
                <div className="bg-black/40 rounded-lg p-4 border border-emerald-500/20 text-center">
                  <h4 className="text-emerald-400 font-semibold mb-2">Glück</h4>
                  <p className="text-3xl font-bold text-white">{currentStats.luck}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Back to Classes Button */}
        <div className="text-center mt-12">
          <a href="/classes">
            <button className="bg-gradient-to-r from-emerald-600 to-emerald-800 hover:from-emerald-500 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Zurück zu den Klassen
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}