import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/rFtpP1JxU0d6IrWm/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl items-center px-4 py-24 sm:py-28 lg:px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-indigo-200 bg-white/70 px-3 py-1 text-xs font-medium text-indigo-700 backdrop-blur dark:border-indigo-800 dark:bg-gray-900/60 dark:text-indigo-300">
            Seni Bertemu Teknologi
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Mas Adek Karya
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Jasa CNC Laser untuk akrilik dan papan kayu. Potong, ukir, dan wujudkan ide Anda dengan presisi tinggi dan hasil premium.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#layanan" className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-700 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500/50">
              Lihat Layanan
            </a>
            <a href="#kontak" className="inline-flex items-center rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/10 to-white/90 dark:from-gray-900/80 dark:via-gray-900/10 dark:to-gray-900/95" />
    </section>
  );
}
