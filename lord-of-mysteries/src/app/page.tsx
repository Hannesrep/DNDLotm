import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-victorian-cream">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/50 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <h1 className="font-serif font-semibold text-xl text-victorian-navy">
                Lord of the Mysteries
              </h1>
            </a>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="transition-colors duration-300 font-medium text-victorian-burgundy">
                Home
              </a>
              <Link href="/classes" className="transition-colors duration-300 font-medium text-victorian-charcoal hover:text-victorian-burgundy">
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
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/90 z-10" />

          {/* Main content */}
          <div className="relative z-20 text-center max-w-5xl mx-auto px-6 animate-fade-in">
            {/* Eye icon */}
            <div className="mb-12 animate-float">
              <div className="relative">
                <img
                  src="https://ext.same-assets.com/2909336110/548389142.svg"
                  alt="Mystical Eye"
                  className="w-16 h-16 md:w-24 md:h-24 mx-auto text-amber-400"
                />
                <div className="absolute inset-0 text-amber-400/30 text-7xl md:text-9xl mx-auto animate-pulse">
                  <img
                    src="https://ext.same-assets.com/2909336110/260646423.svg"
                    alt="Glow Effect"
                    className="w-16 h-16 md:w-24 md:h-24 mx-auto opacity-30"
                  />
                </div>
              </div>
            </div>

            {/* Main title */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 text-shadow-lg tracking-tight">
              <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                Lord of the
              </span>
              <br />
              <span className="text-gray-100">Mysteries</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Tauche ein in eine Welt düsterer Geheimnisse und verbotener Mächte.
              <br className="hidden md:block" />
              <span className="text-amber-300">Wähle deinen Pfad und forme dein Schicksal.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link href="/classes">
                <button className="group bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-black px-10 py-5 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25 border border-amber-400/50">
                  <span className="flex items-center gap-3">
                    Erkunde die Pfade
                    <img
                      src="https://ext.same-assets.com/2909336110/4061061103.svg"
                      alt="Arrow"
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </button>
              </a>

              <div className="flex items-center space-x-3 text-gray-400 bg-black/40 px-6 py-3 rounded-lg backdrop-blur-sm border border-gray-700/50">
                <img
                  src="https://ext.same-assets.com/2909336110/2320907649.svg"
                  alt="User Icon"
                  className="w-5 h-5"
                />
                <span className="font-medium text-sm">Exklusiv für Spieler</span>
              </div>
            </div>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute bottom-20 right-10 text-victorian-gold/20 text-3xl animate-float" style={{animationDelay: '2s'}}>
            <img
              src="https://ext.same-assets.com/2909336110/1367661487.svg"
              alt="Decorative"
              className="w-8 h-8 opacity-20"
            />
          </div>

          {/* Additional floating mystical symbols */}
          <div className="absolute top-1/4 left-10 animate-float" style={{animationDelay: '1.5s', animationDuration: '7s'}}>
            <img
              src="https://ext.same-assets.com/2909336110/4252861238.svg"
              alt="Star"
              className="w-6 h-6 opacity-10 text-amber-400"
            />
          </div>

          <div className="absolute top-3/4 left-1/4 animate-float" style={{animationDelay: '3.5s', animationDuration: '5s'}}>
            <img
              src="https://ext.same-assets.com/2909336110/1367661487.svg"
              alt="Anchor"
              className="w-5 h-5 opacity-15 text-amber-400"
            />
          </div>

          {/* Particle effects - More particles for better effect */}
          <div className="absolute w-2 h-2 bg-victorian-gold/30 rounded-full animate-float" style={{left: '28.9%', top: '62.9%', animationDelay: '0.57s', animationDuration: '3.35s'}} />
          <div className="absolute w-2 h-2 bg-victorian-gold/30 rounded-full animate-float" style={{left: '19.6%', top: '71.3%', animationDelay: '2.43s', animationDuration: '4.27s'}} />
          <div className="absolute w-2 h-2 bg-victorian-gold/30 rounded-full animate-float" style={{left: '46%', top: '64.2%', animationDelay: '2.23s', animationDuration: '4.22s'}} />
          <div className="absolute w-1 h-1 bg-amber-400/40 rounded-full animate-float" style={{left: '15%', top: '45%', animationDelay: '1s', animationDuration: '5s'}} />
          <div className="absolute w-1 h-1 bg-amber-400/40 rounded-full animate-float" style={{left: '85%', top: '35%', animationDelay: '3s', animationDuration: '4s'}} />
          <div className="absolute w-1 h-1 bg-amber-400/40 rounded-full animate-float" style={{left: '75%', top: '75%', animationDelay: '0.5s', animationDuration: '6s'}} />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-victorian-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <img
                src="https://ext.same-assets.com/2909336110/548389142.svg"
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
                src="https://ext.same-assets.com/2909336110/4252861238.svg"
                alt="Star Icon"
                className="w-6 h-6 text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
              />
              <img
                src="https://ext.same-assets.com/2909336110/1367661487.svg"
                alt="Anchor Icon"
                className="w-6 h-6 text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
              />
              <img
                src="https://ext.same-assets.com/2909336110/548389142.svg"
                alt="Eye Icon"
                className="w-6 h-6 text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
              />
              <img
                src="https://ext.same-assets.com/2909336110/3394157246.svg"
                alt="Search Icon"
                className="w-6 h-6 text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
              />
              <img
                src="https://ext.same-assets.com/2909336110/2838098675.svg"
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
