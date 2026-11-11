export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 font-mono text-xs text-gray-500">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Copyright info */}
        <div className="flex items-center gap-2">
          <span className="text-gray-600">C:\Users\Gema&gt;</span>
          <span>echo "© {year} Gema Maghribi. All rights reserved."</span>
        </div>

        {/* Version info */}
        <div className="flex items-center gap-4">
          <span>Portfolio Alpha Test V0.01</span>
          <span className="flex items-center gap-1">
            {/* Blinking cursor */}
          </span>
        </div>

      </div>
    </footer>
  );
}