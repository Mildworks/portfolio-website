const techStack = [
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/white" },
  { name: "CSS3", icon: "https://cdn.simpleicons.org/css/white" }, 
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/white" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/white" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/white" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/white", learning: true },
  { name: "Express", icon: "https://cdn.simpleicons.org/express/white", learning: true },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/white", learning: true },
];

const tools = [
  { name: "GIT & GITHUB", icon: "https://cdn.simpleicons.org/github/white" },
  { name: "VSCODE", icon: "https://api.iconify.design/devicon:vscode.svg?color=%23ffffff" },
  { name: "NPM", icon: "https://cdn.simpleicons.org/npm/white" },
  { name: "VITE", icon: "https://cdn.simpleicons.org/vite/white" },
  { name: "CLAUDE", icon: "https://cdn.simpleicons.org/claude/white" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-black py-24 border-t border-gray-800 font-mono"
    >
      {/* CRT scanlines */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.02)_50%)] bg-[length:100%_4px]" />

      <div className="relative max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <span>C:\Users\Gema&gt;</span>
            <span className="text-white">cat about_me.txt</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-4 tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* About Description */}
          <div className="lg:col-span-7 space-y-8">
            <div className="text-gray-300 leading-relaxed space-y-6 text-sm sm:text-base">
              <p>
                <span className="text-green-500 mr-2">&gt;</span>
                Hi, I’m Gema Maghribi. I’m a junior frontend developer and I’m still learning.
              </p>
              <p>
                <span className="text-green-500 mr-2">&gt;</span>
                I started in <span className="text-white font-bold">Graphic Design</span>, so I pay attention to layout and typography. Now I’m learning to build websites with code.
              </p>
              <p>
                <span className="text-green-500 mr-2">&gt;</span>
                I worked for one month as a frontend developer. It gave me a first look at how real projects run.
              </p>
              <p>
                <span className="text-green-500 mr-2">&gt;</span>
                Right now I’m learning backend basics with Node.js, Express, and PostgreSQL.
              </p>
            </div>
            
            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-800">
              <div>
                <span className="block text-xs text-gray-500 mb-1">Location</span>
                <span className="text-white font-bold text-sm">Jakarta, ID</span>
              </div>
              <div>
                <span className="block text-xs text-gray-500 mb-1">Status</span>
                <span className="text-green-500 font-bold text-sm">Available</span>
              </div>
            </div>
          </div>

          {/* Tech Stack & Tools */}
          <div className="lg:col-span-5">
            <div className="bg-black border border-gray-800 rounded-lg p-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
                <span className="text-sm font-bold text-white">system_specs.sys</span>
                <span className="text-xs text-gray-500">[ {techStack.length} loaded ]</span>
              </div>

              {/* Skill List */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-8">
                {techStack.map((tech) => (
                  <div 
                    key={tech.name} 
                    className="flex items-center justify-between p-2 border border-gray-800 rounded bg-gray-900/30 hover:border-gray-600 transition-colors"
                  >
                    <div className="flex items-center gap-2 truncate pr-1">
                      {/* Icon */}
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className={`w-3.5 h-3.5 shrink-0 ${tech.learning ? 'opacity-50' : 'opacity-80'}`} 
                      />
                      <span className={`text-[11px] truncate ${tech.learning ? 'text-gray-400' : 'text-gray-200'}`}>
                        {tech.name}
                      </span>
                    </div>
                    
                    {/* Status Badge */}
                    {tech.learning && (
                      <span className="text-[8px] font-bold text-yellow-500/90 border border-yellow-500/30 bg-yellow-500/10 px-1 py-0.5 rounded tracking-wider shrink-0 ml-1">
                        LEARNING
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Tools List */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <div className="text-xs font-bold text-white mb-3">TOOLS & WORKFLOW</div>
                <div className="flex flex-wrap gap-2">
                  {tools.map((t) => (
                    <span
                      key={t.name}
                      className="flex items-center gap-1.5 px-2 py-1 text-[10px] text-gray-400 border border-gray-700 rounded hover:text-white hover:border-gray-500 transition-colors"
                    >
                      <img 
                        src={t.icon} 
                        alt={t.name} 
                        className="w-3 h-3 opacity-70" 
                      />
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}