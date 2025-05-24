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
      name: "Kampf-Instinkt",
      description: "Natürliche Kampffähigkeiten und Reaktionsgeschwindigkeit"
    },
    {
      name: "Waffen-Meisterschaft",
      description: "Kann jede Waffe schnell erlernen und meisterhaft führen"
    },
    {
      name: "Erhöhte Ausdauer",
      description: "Widerstand gegen Erschöpfung und verlängerte Kampffähigkeit"
    }
  ],
  8: [
    {
      name: "Berserker-Wut",
      description: "Kann in einen kontrollierten Wutzustand verfallen für erhöhte Kraft"
    },
    {
      name: "Rüstungs-Erschaffung",
      description: "Kann magische Rüstungen aus spiritueller Energie formen"
    },
    {
      name: "Schlachtruf",
      description: "Kann Verbündete durch mächtige Schlachtrufe stärken"
    }
  ],
  7: [
    {
      name: "Waffen-Aura",
      description: "Kann Waffen mit zerstörerischer Energie aufladen"
    },
    {
      name: "Unaufhaltbarer Ansturm",
      description: "Kann durch jede Verteidigung brechen und Hindernisse zerstören"
    },
    {
      name: "Schlachtfeld-Beherrschung",
      description: "Vollständige taktische Kontrolle über ein Schlachtfeld"
    }
  ],
  6: [
    {
      name: "Legendäre Waffen",
      description: "Kann mythische Waffen mit einzigartigen Kräften erschaffen"
    },
    {
      name: "Unverwundbarkeit",
      description: "Temporäre Immunität gegen alle physischen Angriffe"
    },
    {
      name: "Kriegsgötter-Kraft",
      description: "Kann die Macht antiker Kriegsgötter kanalisieren"
    }
  ],
  5: [
    {
      name: "Ewiger Krieger",
      description: "Unsterblichkeit im Kampf und unendliche Regeneration"
    },
    {
      name: "Armeen-Anführer",
      description: "Kann ganze Armeen erschaffen und unbesiegbar machen"
    },
    {
      name: "Realitäts-Spaltung",
      description: "Kann die Realität durch pure Kampfkraft zerteilen"
    }
  ]
};

const skills = {
  9: [
    "Waffenkampf +3",
    "Taktik +2",
    "Ausdauer +3",
    "Kampfsport +2"
  ],
  8: [
    "Berserker-Kontrolle +3",
    "Rüstungsschmied +2",
    "Führung +2",
    "Schlachtruf +3"
  ],
  7: [
    "Waffen-Verzauberung +3",
    "Unaufhaltsamkeit +3",
    "Schlachtfeld-Taktik +3",
    "Durchbruch +2"
  ],
  6: [
    "Legendäre Schmiedekunst +3",
    "Göttliche Kanalisierung +3",
    "Absolute Verteidigung +3",
    "Mythische Kraft +2"
  ],
  5: [
    "Unsterblicher Kampf +3",
    "Armeen-Erschaffung +3",
    "Realitäts-Bruch +3",
    "Ewige Herrschaft +3"
  ]
};

const stats = {
  9: { strength: 18, agility: 14, intelligence: 10, spirituality: 12, luck: 12 },
  8: { strength: 20, agility: 16, intelligence: 12, spirituality: 14, luck: 14 },
  7: { strength: 22, agility: 18, intelligence: 14, spirituality: 16, luck: 16 },
  6: { strength: 25, agility: 20, intelligence: 16, spirituality: 18, luck: 18 },
  5: { strength: 28, agility: 22, intelligence: 18, spirituality: 20, luck: 20 }
};

export default function WarriorSecretsPage() {
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
              alt="Warrior Sword"
              className="w-16 h-16 mx-auto text-red-400 mb-4"
            />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-red-200 via-red-300 to-red-400 bg-clip-text text-transparent">
              Warrior
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
                    ? 'bg-red-500 text-black shadow-lg shadow-red-500/50'
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
                  ? 'bg-red-500 text-black shadow-lg'
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
                  ? 'bg-red-500 text-black shadow-lg'
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
                  ? 'bg-red-500 text-black shadow-lg'
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
        <div className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 shadow-2xl">
          {activeTab === 'abilities' && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Beyonderfähigkeiten - Sequenz {selectedSequence}
              </h3>
              <div className="space-y-4">
                {currentAbilities.map((ability, index) => (
                  <div key={index} className="bg-black/40 rounded-lg p-4 border border-red-500/20">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:w-1/3">
                        <h4 className="font-semibold text-red-400 text-lg">{ability.name}</h4>
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
                  <div key={index} className="bg-black/40 rounded-lg p-4 border border-red-500/20">
                    <p className="text-red-400 font-semibold">{skill}</p>
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
                <div className="bg-black/40 rounded-lg p-4 border border-red-500/20 text-center">
                  <h4 className="text-red-400 font-semibold mb-2">Stärke</h4>
                  <p className="text-3xl font-bold text-white">{currentStats.strength}</p>
                </div>
                <div className="bg-black/40 rounded-lg p-4 border border-red-500/20 text-center">
                  <h4 className="text-red-400 font-semibold mb-2">Geschicklichkeit</h4>
                  <p className="text-3xl font-bold text-white">{currentStats.agility}</p>
                </div>
                <div className="bg-black/40 rounded-lg p-4 border border-red-500/20 text-center">
                  <h4 className="text-red-400 font-semibold mb-2">Intelligenz</h4>
                  <p className="text-3xl font-bold text-white">{currentStats.intelligence}</p>
                </div>
                <div className="bg-black/40 rounded-lg p-4 border border-red-500/20 text-center">
                  <h4 className="text-red-400 font-semibold mb-2">Spiritualität</h4>
                  <p className="text-3xl font-bold text-white">{currentStats.spirituality}</p>
                </div>
                <div className="bg-black/40 rounded-lg p-4 border border-red-500/20 text-center">
                  <h4 className="text-red-400 font-semibold mb-2">Glück</h4>
                  <p className="text-3xl font-bold text-white">{currentStats.luck}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Back to Classes Button */}
        <div className="text-center mt-12">
          <a href="/classes">
            <button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Zurück zu den Klassen
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}