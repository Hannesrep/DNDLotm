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
      name: "Lautlose Bewegung",
      description: "Kann sich völlig geräuschlos bewegen und Spuren vermeiden"
    },
    {
      name: "Giftresistenz",
      description: "Immunität gegen die meisten Gifte und toxischen Substanzen"
    },
    {
      name: "Präzisions-Angriff",
      description: "Kann vitale Punkte erkennen und tödliche Treffer landen"
    }
  ],
  8: [
    {
      name: "Unsichtbarkeit",
      description: "Kann für kurze Zeit völlig unsichtbar werden"
    },
    {
      name: "Gift-Herstellung",
      description: "Kann verschiedene Gifte und Paralyse-Mittel herstellen"
    },
    {
      name: "Schatten-Sprung",
      description: "Kann sich durch Schatten von einem Ort zum anderen bewegen"
    }
  ],
  7: [
    {
      name: "Tödlicher Blick",
      description: "Kann durch reinen Blickkontakt töten oder paralysieren"
    },
    {
      name: "Phantom-Doppelgänger",
      description: "Kann mehrere Illusionen von sich selbst erschaffen"
    },
    {
      name: "Todeshauchaura",
      description: "Umgibt sich mit einer tödlichen Aura, die Schwache tötet"
    }
  ],
  6: [
    {
      name: "Dimensionale Morde",
      description: "Kann Ziele über große Entfernungen und Dimensionen hinweg töten"
    },
    {
      name: "Zeitverzögerter Tod",
      description: "Kann tödliche Flüche setzen, die erst später aktiviert werden"
    },
    {
      name: "Seelen-Ermordung",
      description: "Kann direkt die Seele angreifen und vernichten"
    }
  ],
  5: [
    {
      name: "Tod-Verkörperung",
      description: "Wird zur lebenden Verkörperung des Todes selbst"
    },
    {
      name: "Omnipräsenter Mörder",
      description: "Kann überall gleichzeitig zuschlagen und jeden erreichen"
    },
    {
      name: "Realitäts-Auslöschung",
      description: "Kann Personen komplett aus der Existenz tilgen"
    }
  ]
};

const skills = {
  9: [
    "Schleichen +3",
    "Giftresistenz +3",
    "Präzisions-Angriffe +3",
    "Spurenverwischung +2"
  ],
  8: [
    "Unsichtbarkeit +3",
    "Alchemie +2",
    "Schatten-Reise +3",
    "Gift-Herstellung +2"
  ],
  7: [
    "Tödliche Blicke +3",
    "Illusions-Erschaffung +3",
    "Todesaura +3",
    "Phantom-Kontrolle +2"
  ],
  6: [
    "Dimensionaler Mord +3",
    "Zeitmagie +2",
    "Seelen-Angriff +3",
    "Fernelimination +3"
  ],
  5: [
    "Tod-Inkarnation +3",
    "Omnipräsenz +3",
    "Existenz-Auslöschung +3",
    "Absolute Tötung +3"
  ]
};

const stats = {
  9: { strength: 12, agility: 20, intelligence: 14, spirituality: 10, luck: 14 },
  8: { strength: 13, agility: 22, intelligence: 16, spirituality: 12, luck: 16 },
  7: { strength: 14, agility: 25, intelligence: 18, spirituality: 14, luck: 18 },
  6: { strength: 15, agility: 28, intelligence: 20, spirituality: 16, luck: 20 },
  5: { strength: 16, agility: 30, intelligence: 22, spirituality: 18, luck: 22 }
};

export default function AssassinSecretsPage() {
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
              alt="Assassin Blade"
              className="w-16 h-16 mx-auto text-red-600 mb-4"
            />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              Assassin
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
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/50'
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
                  ? 'bg-red-600 text-white shadow-lg'
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
                  ? 'bg-red-600 text-white shadow-lg'
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
                  ? 'bg-red-600 text-white shadow-lg'
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
        <div className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-red-600/30 shadow-2xl">
          {activeTab === 'abilities' && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Beyonderfähigkeiten - Sequenz {selectedSequence}
              </h3>
              <div className="space-y-4">
                {currentAbilities.map((ability, index) => (
                  <div key={index} className="bg-black/40 rounded-lg p-4 border border-red-600/20">
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
                  <div key={index} className="bg-black/40 rounded-lg p-4 border border-red-600/20">
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
                <div className="bg-black/40 rounded-lg p-4 border border-red-600/20 text-center">
                  <h4 className="text-red-400 font-semibold mb-2">Stärke</h4>
                  <p className="text-3xl font-bold text-white">{currentStats.strength}</p>
                </div>
                <div className="bg-black/40 rounded-lg p-4 border border-red-600/20 text-center">
                  <h4 className="text-red-400 font-semibold mb-2">Geschicklichkeit</h4>
                  <p className="text-3xl font-bold text-white">{currentStats.agility}</p>
                </div>
                <div className="bg-black/40 rounded-lg p-4 border border-red-600/20 text-center">
                  <h4 className="text-red-400 font-semibold mb-2">Intelligenz</h4>
                  <p className="text-3xl font-bold text-white">{currentStats.intelligence}</p>
                </div>
                <div className="bg-black/40 rounded-lg p-4 border border-red-600/20 text-center">
                  <h4 className="text-red-400 font-semibold mb-2">Spiritualität</h4>
                  <p className="text-3xl font-bold text-white">{currentStats.spirituality}</p>
                </div>
                <div className="bg-black/40 rounded-lg p-4 border border-red-600/20 text-center">
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
            <button className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Zurück zu den Klassen
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}