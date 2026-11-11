import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const channels = [
    { 
      label: "Email", 
      value: "maghribiii2001@gmail.com", 
      href: "mailto:maghribiii2001@gmail.com" 
    },
    { 
      label: "GitHub", 
      value: "github.com/Mildworks", 
      href: "https://github.com/Mildworks" 
    },
    { 
      label: "LinkedIn", 
      value: "linkedin.com/in/gema-maghribi", 
      href: "https://www.linkedin.com/in/gema-maghribi/" 
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-black py-24 border-t border-gray-800 font-mono"
    >
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.02)_50%)] bg-[length:100%_4px]" />

      <div className="relative max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <span>C:\Users\Gema&gt;</span>
            <span className="text-white">ping contact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-4 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-gray-400 mt-2 text-sm max-w-lg">
            Got a project or just want to say hi? Drop a message below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="flex items-center gap-2 text-xs text-gray-500 pb-4 border-b border-gray-800">
                <span>Running new_message.bat...</span>
              </div>

              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="flex items-center text-sm text-gray-400 mb-2">
                    <span className="text-white mr-2">&gt;</span> enter_name:
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-gray-700 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="flex items-center text-sm text-gray-400 mb-2">
                    <span className="text-white mr-2">&gt;</span> enter_email:
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-gray-700 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="flex items-center text-sm text-gray-400 mb-2">
                    <span className="text-white mr-2">&gt;</span> type_message:
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full bg-transparent border-b border-gray-700 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={sent}
                  className="group flex items-center justify-center w-full sm:w-auto px-6 py-3 text-sm font-bold text-black bg-white rounded hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sent ? (
                    <>Message sent successfully.</>
                  ) : (
                    <>
                      transmit_data <span className="ml-2 group-hover:translate-x-1 transition-transform">-&gt;</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-10">
            
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-800">
                <span className="text-sm font-bold text-white">contact_info.txt</span>
                <span className="text-xs text-gray-500">[ 3 items ]</span>
              </div>

              <div className="space-y-5">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? "_blank" : "_self"}
                    rel={c.href.startsWith('http') ? "noopener noreferrer" : ""}
                    className="group block relative z-10 cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-500">{c.label}</span>
                      <span className="text-gray-600 group-hover:text-white transition-colors">-&gt;</span>
                    </div>
                    <div className="text-gray-300 group-hover:text-white transition-colors break-all underline decoration-gray-700 hover:decoration-white">
                      {c.value}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-white tracking-wider uppercase">System Status</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Looking for my first junior frontend role. I also take small projects to build experience.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}