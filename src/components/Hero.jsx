export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:items-center md:justify-center bg-black pt-10 md:pt-20 overflow-hidden font-mono"
    >
      {/* CRT scanline effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.02)_50%)] bg-[length:100%_4px]" />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,#000000_100%)]" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 py-12">
        
        <div className="space-y-8 text-sm sm:text-base text-gray-300 leading-relaxed">
          
          {/* Connection */}
          <div>
            <p className="text-gray-500 mb-2">$ ssh gema@portfolio.local</p>
            <p className="text-green-500">Connection established.</p>
            <p className="text-gray-400">
              Welcome to the mainframe. Loading developer profile...
            </p>
          </div>

          {/* Identity */}
          <div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">gema@dev:~$</span>
              <span className="text-white">whoami</span>
            </div>
            <div className="mt-4 border-l-2 border-gray-700 pl-4 py-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
                Gema Maghribi
              </h1>
              <p className="text-gray-400">
               Junior frontend developer. I come from graphic design and I am learning to build websites with HTML, CSS, JavaScript, and React.
              </p>
            </div>
          </div>

          {/* System Specs */}
          <div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">gema@dev:~$</span>
              <span className="text-white">cat /etc/system_specs</span>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500 block">Role:</span>
                <span className="text-white">Web Developer</span>
              </div>
              <div>
                <span className="text-gray-500 block">Location:</span>
                <span className="text-white">Jakarta, ID</span>
              </div>
              <div>
                <span className="text-gray-500 block">Focus:</span>
                <span className="text-white">Frontend</span>
              </div>
              <div>
                <span className="text-gray-500 block">Current Phase:</span>
                <span className="text-white">Learning</span>
              </div>
            </div>
          </div>

          {/* Action */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-green-500 mr-2">gema@dev:~$</span>
              <span className="text-white">wget cv.pdf</span>
            </div>
            <a 
              href="/CV-Gema.pdf" 
              download="CV GEMA MAGHRIBI.pdf"
              className="inline-block px-4 py-2 text-xs font-bold text-black bg-white rounded hover:bg-gray-200 transition-colors"
            >
              [ Download CV ]
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}