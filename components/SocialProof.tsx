export default function SocialProof() {
  return (
    <div className="py-10 border-y border-slate-100 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
          Powering Local Giants
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <img
            src="/18798335e65a9a1b88923fe4abf0155afffac8db-1.png"
            alt="Client Logo"
            className="h-12 w-auto object-contain"
          />
          <img
            src="/logo-white.png"
            alt="Client Logo"
            className="h-12 w-auto object-contain invert"
          />
          <img
            src="/mulch-masters-logo.png"
            alt="Mulch Masters Logo"
            className="h-12 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
