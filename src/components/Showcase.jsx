import imgMahalu from "../assets/MahaluSpaSS.png";
import imgTodo from "../assets/To-Do List AppSS.png";
import imgTundra from "../assets/tundra-marketplaceSS.png"; // Sesuaikan nama variabel import

const projects = [
  {
    index: "01",
    title: "mahalu-spa.exe",
    desc: "A single-page website for a spa. It has a responsive layout and smooth scrolling.",
    stack: ["HTML", "CSS", "Tailwind", "JavaScript"],
    year: "2025",
    status: "LIVE",
    link: "https://mahalu-spa.vercel.app/", 
    image: imgMahalu, 
  },
  {
    index: "02",
    title: "todo-list-app.exe",
    desc: "A to-do list app. You can add and delete tasks. Tasks are saved in local storage.",
    stack: ["HTML", "CSS", "JavaScript"],
    year: "2026",
    status: "LIVE",
    link: "https://to-do-list-app-lac-nine.vercel.app/",
    image: imgTodo,
  },
  {
    index: "03",
    title: "tundra-marketplace.exe",
    desc: "A bookstore marketplace featuring a premium glassmorphism UI and persistent cart system.",
    stack: ["HTML", "Tailwind", "JavaScript", "React"],
    year: "2026",
    status: "LIVE",
    link: "https://tundra-marketplace.vercel.app/",
    image: imgTundra,
  },
];

export default function Showcase() {
  return (
    <section
      id="work"
      className="relative bg-black py-24 border-t border-gray-800 font-mono"
    >
      {/* CRT scanlines */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.02)_50%)] bg-[length:100%_4px]" />

      <div className="relative max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <span>C:\Users\Gema&gt;</span>
            <span className="text-white">dir projects/</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-4 tracking-tight">
            Selected Work
          </h2>
          <p className="text-gray-400 mt-2 text-sm max-w-lg">
            A few things I've built. Bold interfaces, clean code, and zero fluff.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.index}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-black border border-gray-800 rounded-lg overflow-hidden hover:border-gray-500 hover:bg-gray-900/50 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/9] w-full bg-gray-900 border-b border-gray-800 flex items-center justify-center overflow-hidden">
                {p.image ? (
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                  />
                ) : (
                  <span className="text-xs text-gray-600">[ image_preview.jpg ]</span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Index & status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500 font-bold">
                    [{p.index}]
                  </span>
                  <div className="flex items-center gap-1.5">
                    {p.status === "LIVE" && (
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    )}
                    <span
                      className={`text-[10px] font-bold tracking-wider ${
                        p.status === "LIVE" ? "text-green-500" : "text-gray-500"
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
                  {p.desc}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-1 text-[10px] font-medium text-gray-400 bg-gray-900 rounded border border-gray-800"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800 mt-auto">
                  <span className="text-xs text-gray-600">{p.year}</span>
                  <span className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all">
                    -&gt;
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/Mildworks" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-3 text-sm font-bold text-black bg-white rounded hover:bg-gray-200 transition-colors"
          >
            view all_projects.exe
          </a>
        </div>

      </div>
    </section>
  );
}