import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ nama: '', email: '', pesan: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Simulasikan kirim pesan
    setTimeout(() => setSent(true), 600);
  }

  return (
    <section id="kontak" className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">Hubungi Kami</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Konsultasikan kebutuhan cutting/engraving Anda. Kirim file, jelaskan material & ukuran, kami bantu estimasi cepat.
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p><strong>WhatsApp:</strong> 08xx-xxxx-xxxx</p>
              <p><strong>Email:</strong> halo@masadekkarya.id</p>
              <p><strong>Alamat:</strong> Workshop di Yogyakarta, melayani kirim seluruh Indonesia.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Nama</label>
                <input name="nama" value={form.nama} onChange={handleChange} required className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-indigo-500/20 focus:ring dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-indigo-500/20 focus:ring dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Pesan</label>
                <textarea name="pesan" value={form.pesan} onChange={handleChange} rows={4} required className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-indigo-500/20 focus:ring dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-700">
                Kirim Pesan
              </button>
              {sent && (
                <p className="text-sm text-emerald-600 dark:text-emerald-400">Terima kasih! Pesan Anda terkirim.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
