export default function Portfolio() {
  const works = [
    {
      title: 'Sign Akrilik Toko',
      img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Dekor Kayu Ukir',
      img: 'https://images.unsplash.com/photo-1523419409543-8c5ae80d40c2?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Display Produk Custom',
      img: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">Portofolio Karya</h2>
        <p className="mt-2 max-w-2xl text-gray-600 dark:text-gray-300">Beberapa contoh hasil produksi kami.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <figure key={w.title} className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <img src={w.img} alt={w.title} className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <figcaption className="p-4 text-sm font-medium text-gray-800 dark:text-gray-200">{w.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
