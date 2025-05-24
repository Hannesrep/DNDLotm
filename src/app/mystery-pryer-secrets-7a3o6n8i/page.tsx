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
      name: "Geheimnis-Sicht",
      description: "Kann verborgene Geheimnisse und versteckte Wahrheiten erkennen"
    },
    {
      name: "Rätsel-Lösung",
      description: "Natürliche Fähigkeit, komplexe Rätsel und Codes zu entschlüsseln"
    },
    {
      name: "Mysterium-Gespür",
      description: "Kann übernatürliche Mysterien und Anomalien aufspüren"
    }
  ],
  8: [
    {
      name: "Vergangenheits-Entschlüsselung",
      description: "Kann die Geheimnisse der Vergangenheit eines Objekts oder Ortes enthüllen"
    },
    {
      name: "Gedanken-Analyse",
      description: "Kann verborgene Gedanken und Motivationen anderer analysieren"
    },
    {
      name: "Wahrheits-Zwang",
      description: "Kann andere dazu zwingen, die Wahrheit zu sagen"
    }
  ],
  7: [
    {
      name: "Dimensionale Ermittlung",
      description: "Kann Geheimnisse über dimensionale Grenzen hinweg erforschen"
    },
    {
      name: "Prophezeiung-Entschlüsselung",
      description: "Kann kryptische Prophezeiungen und Vorhersagen deuten"
    },
    {
      name: "Mysterium-Manipulation",
      description: "Kann Geheimnisse erschaffen oder zerstören"
    }
  ],
  6: [
    {
      name: "Kosmische Geheimnisse",
      description: "Kann die tiefsten Geheimnisse des Universums ergründen"
    },
    {
      name: "Realitäts-Durchdringung",
      description: "Kann durch alle Schichten der Realität blicken"
    },
    {
      name: "Allwissender Blick",
      description: "Kann fast alles wissen, was er wissen möchte"
    }
  ],
  5: [
    {
      name: "Mysterium-Herr",
      description: "Vollständige Kontrolle über alle Geheimnisse und Mysterien"
    },
    {
      name: "Omnisziente Wahrnehmung",
      description: "Kann alle Geheimnisse in einem großen Gebiet gleichzeitig erfassen"
    },
    {
      name: "Geheimnis-Schöpfung",
      description: "Kann neue Mysterien und kosmische Geheimnisse erschaffen"
    }
  ]
};

const skills = {
  9: [
    "Ermittlung +3",
    "Kryptographie +3",
    "Okkultismus +2",
    "Intuition +2"
  ],
  8: [
    "Psychometrie +3",
    "Gedankenlesen +2",
    "Verhör +3",
    "Vergangenheits-Analyse +2"
  ],
  7: [
    "Dimensionale Forschung +2",
    "Prophezeiung +3",
    "Mysterium-Kontrolle +3",
    "Visionäre Einsicht +2"
  ],
  6: [
    "Kosmisches Wissen +3",
    "Realitäts-Analyse +3",
    "Allwissen +3",
    "Universelle Geheimnisse +2"
  ],
  5: [
    "Mysterium-Allmacht +3",
    "Omnisziente Kontrolle +3",
    "Geheimnis-Genesis +3",
    "Absolute Wahrheit +3"
  ]
};

const stats = {
  9: { strength: 8, agility: 12, intelligence: 20, spirituality: 16, luck: 14 },
  8: { strength: 9, agility: 13, intelligence: 22, spirituality: 18, luck: 16 },
  7: { strength: 10, agility: 14, intelligence: 25, spirituality: 20, luck: 18 },
  6: { strength: 11, agility: 15, intelligence: 28, spirituality: 22, luck: 20 },
  5: { strength: 12, agility: 16, intelligence: 30, spirituality: 25, luck: 22 }
};

export default function MysteryPryerSecretsPage() {
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
              alt="Mystery Pryer Eye"
              className="w-16 h-16 mx-auto text-violet-400 mb-4"
            />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-violet-200 via-violet-300 to-violet-400 bg-clip-text text-transparent">
              Mystery Pryer
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
                    ? 'bg-violet-500 text-black shadow-lg shadow-violet-500/50'
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
                  ? 'bg-violet-500 text-black shadow-lg'
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
                  ? 'bg-violet-500 text-black shadow-lg'
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
                  ? 'bg-violet-500 text-black shadow-lg'
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
        <div className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-violet-500/30 shadow-2xl">
          {activeTab === 'abilities' && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Beyonderfähigkeiten - Sequenz {selectedSequence}
              </h3>
              <div className="space-y-4">
                {currentAbilities.map((ability, index) => (
                  <div key={index} className="bg-black/40 rounded-lg p-4 border border-violet-500/20">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:w-1/3">
                        <h4 className="font-semibold text-violet-400 text-lg">{ability.name}</h4>
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
                  <div key={index} className="bg-black/40 rounded-lg p-4 border border-violet-500/20">
                    <p className="text-violet-400 font-semibold">{skill}</p>
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
                <div className="bg-black/40 rounded-lg p-4 border border-violet-500/20 text-center">
                  <h4 className="text-violet-400 font-semibold mb-2">Stärke</h4>
                  <p className="text-3xl font-bold text-white">{currentStats.strength}</p>
                </div>
                <div className="bg-black/40 rounded-lg p-4 border border-violet-500/20 text-center">
                  <h4 className="text-violet-400 font-semibold mb-2">Geschicklichkeit</h4>
                  <p className="text-3xl font-bold text-white">{currentStats.agility}</p>
                </div>
                <div className="bg-black/40 rounded-lg p-4 border border-violet-500/20 text-center">
                  <h4 className="text-violet-400 font-semibold mb-2">Intelligenz</h4>
                  <p className="text-3xl font-bold text-white">{currentStats.intelligence}</p>
                </div>
                <div className="bg-black/40 rounded-lg p-4 border border-violet-500/20 text-center">
                  <h4 className="text-violet-400 font-semibold mb-2">Spiritualität</h4>
                  <p className="text-3xl font-bold text-white">{currentStats.spirituality}</p>
                </div>
                <div className="bg-black/40 rounded-lg p-4 border border-violet-500/20 text-center">
                  <h4 className="text-violet-400 font-semibold mb-2">Glück</h4>
                  <p className="text-3xl font-bold text-white">{currentStats.luck}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Back to Classes Button */}
        <div className="text-center mt-12">
          <a href="/classes">
            <button className="bg-gradient-to-r from-violet-600 to-violet-800 hover:from-violet-500 hover:to-violet-700 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Zurück zu den Klassen
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}