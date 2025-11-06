import { CheckCircle, Layers, Ruler, Shield } from 'lucide-react';

const items = [
  {
    title: 'Potong Akrilik Presisi',
    desc: 'Hasil tepi halus, dimensi akurat untuk display, lettering, dan kebutuhan custom.',
    icon: Layers,
  },
  {
    title: 'Ukir Kayu & Papan',
    desc: 'Detail ukir tajam pada plywood, MDF, dan kayu solid untuk signage & dekorasi.',
    icon: Ruler,
  },
  {
    title: 'Kualitas Konsisten',
    desc: 'Mesin terkalibrasi dengan workflow profesional untuk hasil yang dapat diandalkan.',
    icon: Shield,
  },
  {
    title: 'Konsultasi Teknis',
    desc: 'Bantu file siap produksi (DXF/SVG), ketebalan material, dan estimasi biaya.',
    icon: CheckCircle,
  },
];

export default function Services() {
  return (
    <section id="layanan" className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">Layanan Kami</h2>
        <p className="mt-2 max-w-2xl text-gray-600 dark:text-gray-300">
          Spesialis CNC Laser untuk material akrilik dan papan kayu. Cocok untuk signage, merchandise, kemasan, dan kebutuhan dekorasi interior.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300">
                  <Icon size={20} />
                </span>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
