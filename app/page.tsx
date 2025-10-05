import Image from "next/image";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Produk", href: "#produk" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
];

const featureHighlights = [
  {
    title: "Pertanian Berkelanjutan",
    description: "Metode ramah lingkungan yang menjaga kesuburan tanah dan kualitas biji.",
    image: "/images/pertanian-berkelanjutan.JPG",
  },
  {
    title: "Koperasi Petani",
    description: "Memberdayakan petani lokal melalui pendampingan dan harga yang adil.",
    image: "/images/koperasi-petani.JPG",
  },
  {
    title: "Kualitas Premium",
    description: "Standar seleksi internasional untuk menjaga cita rasa kakao terbaik.",
    image: "/images/kualitas-premium.JPG",
  },
  {
    title: "Tradisi Turun Temurun",
    description: "Warisan keluarga yang menghadirkan kelezatan kakao berkarakter.",
    image: "/images/tradisi-turun-temurun.JPG",
  },
];

const products = [
  {
    title: "Biji Kakao Fermentasi",
    description:
      "Biji kakao berkualitas tinggi hasil fermentasi sempurna dengan cita rasa mendalam dan aroma khas.",
    specs: ["Fermentasi 7 hari", "Kadar air < 7%", "Bebas jamur"],
    image: "/images/product-1.jpeg",
  },
  {
    title: "Bubuk Kakao Murni",
    description:
      "Bubuk kakao tanpa tambahan gula, kaya akan antioksidan dan siap untuk berbagai kreasi olahan.",
    specs: ["100% murni", "Kaya antioksidan", "Tanpa pengawet"],
    image: "/images/product-2.jpg",
  },
  {
    title: "Kakao Nibs Fermentasi",
    description:
      "Pecahan biji kakao fermentasi dengan tekstur renyah dan rasa kompleks yang intens.",
    specs: ["Fermentasi 7 hari", "Kadar air < 7%", "Bebas jamur"],
    image: "/images/product-3.jpeg",
  },
];

const galleryItems = [
  {
    title: "Panen Biji Kakao",
    caption: "Kualitas biji pilihan dari kebun petani lokal.",
    image: "/images/product-1.jpeg",
  },
  {
    title: "Proses Pengeringan",
    caption: "Pengeringan alami untuk menjaga karakter rasa.",
    image: "/images/product-2.jpg",
  },
  {
    title: "Olahan Kakao",
    caption: "Bubuk kakao murni siap produksi.",
    image: "/images/product-3.jpeg",
  },
  {
    title: "Fermentasi Tradisional",
    caption: "Fermentasi menonjolkan aroma dan rasa kakao.",
    image: "/images/koperasi-petani.JPG",
  },
];

const faqs = [
  "Bagaimana kualitas biji kakao dijamin?",
  "Apakah tersedia pengiriman ke seluruh Indonesia?",
  "Berapa minimal order untuk pembelian?",
];

export default function Home() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <a className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--color-primary)]" href="#konten-utama">
        Lewati ke konten utama
      </a>
      <div className="flex min-h-screen">
        <aside className="hidden w-64 shrink-0 flex-col justify-between bg-[var(--color-primary)] px-8 py-10 text-white lg:sticky lg:top-0 lg:flex lg:h-screen">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/icon.png"
                alt="Logo Mitra Kakao Mulia"
                width={56}
                height={56}
                className="rounded-full border border-white/20"
              />
              <div>
                <p className="text-lg font-semibold">MKM</p>
              </div>
            </div>
            <nav className="mt-12">
              <ul className="space-y-2 text-sm font-medium">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a className="block rounded-full px-4 py-2 transition-colors hover:bg-white/10" href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <p className="text-xs text-white/70">
            Petani kakao dengan tradisi turun temurun menghadirkan kualitas terbaik dari kebun kami.
          </p>
        </aside>

        <div className="flex-1">
          <header className="sticky top-0 z-40 border-b border-black/5 bg-[var(--background)]/90 backdrop-blur lg:hidden">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/icon.png"
                  alt="Logo Mitra Kakao Mulia"
                  width={44}
                  height={44}
                  className="rounded-full border border-black/5"
                />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">Koperasi Kakao</p>
                  <p className="text-base font-semibold">Mitra Kakao Mulia</p>
                </div>
              </div>
              <nav className="flex gap-3 text-sm font-medium">
                {navItems.map((item) => (
                  <a className="rounded-full px-3 py-2 transition-colors hover:bg-black/5" href={item.href} key={item.href}>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </header>

          <main id="konten-utama" className="space-y-24 pb-24 lg:space-y-28">
            <section id="beranda" className="relative isolate flex min-h-[calc(100vh-80px)] items-stretch overflow-hidden rounded-none lg:min-h-[100vh] lg:rounded-ss-[48px]">
              <Image src="/images/hero-bg.jpg" alt="Latar biji kakao" fill priority sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative mx-auto flex w-full max-w-5xl flex-col justify-center gap-6 px-6 py-24 sm:px-10">
                <span className="text-xs uppercase tracking-[0.5em] text-white/70">Kelezatan murni dari alam</span>
                <h1 className="text-4xl font-bold text-white sm:text-6xl">Mitra Kakao Mulia</h1>
                <p className="max-w-2xl text-lg text-white/80 sm:text-xl">
                  Petani kakao berkualitas tinggi dengan tradisi turun temurun, menghadirkan rasa kakao premium dari kebun ke konsumen.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#tentang" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--color-primary)] shadow-lg transition hover:bg-[#f8dcbc]">
                    Pelajari Lebih Lanjut
                  </a>
                  <a href="#produk" className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                    Produk Kami
                  </a>
                </div>
              </div>
            </section>

            <section id="tentang" className="bg-white py-16 shadow-[0_30px_40px_-40px_rgba(75,42,26,0.4)]">
              <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row">
                <div className="lg:w-1/2">
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">Tentang Kami</p>
                  <h2 className="mt-4 text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">
                    Menghadirkan kakao berkualitas dari petani lokal
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-black/70">
                    MITRA KAKAO MULIA adalah koperasi petani kakao yang berkomitmen menghasilkan kakao berkualitas tinggi dengan metode pertanian berkelanjutan. Kami bekerja sama dengan petani lokal untuk memastikan kualitas terbaik dari kebun hingga konsumen.
                  </p>
                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    {featureHighlights.map((feature) => (
                      <article key={feature.title} className="rounded-3xl border border-black/5 bg-[var(--background)]/40 p-6 shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="relative h-14 w-14 overflow-hidden rounded-full bg-white shadow-inner">
                            <Image src={feature.image} alt={feature.title} fill sizes="80px" className="object-cover" />
                          </div>
                          <h3 className="text-sm font-semibold text-[var(--color-primary)]">{feature.title}</h3>
                        </div>
                        <p className="mt-3 text-sm text-black/70">{feature.description}</p>
                      </article>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pl-10">
                  <div className="rounded-[40px] border border-black/5 bg-[var(--background)]/40 p-8 shadow-lg">
                    <h3 className="text-lg font-semibold text-[var(--color-primary)]">Komitmen Kami</h3>
                    <ul className="mt-6 space-y-4 text-sm text-black/80">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                        Pengolahan pasca panen terstandar untuk menjamin konsistensi rasa.
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                        Kemitraan dengan petani lokal dalam peningkatan kapasitas dan kualitas.
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                        Transparansi proses produksi dari kebun hingga konsumen akhir menjamin kualitas.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="produk" className="px-6">
              <div className="mx-auto max-w-6xl">
                <div className="text-center">
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">Produk Unggulan</p>
                  <h2 className="mt-4 text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">
                    Ragam produk kakao pilihan
                  </h2>
                  <p className="mt-4 text-base text-black/70">
                    Setiap produk kami diproses dengan teliti untuk menjaga cita rasa dan kualitas terbaik.
                  </p>
                </div>
                <div className="mt-14 space-y-12">
                  {products.map((product, index) => (
                    <article
                      key={product.title}
                      className={`flex flex-col gap-10 rounded-[40px] border border-black/5 bg-white/70 p-8 shadow-lg backdrop-blur-sm md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                    >
                      <div className="relative mx-auto h-64 w-full max-w-sm overflow-hidden rounded-3xl shadow-md md:h-auto">
                        <Image src={product.image} alt={product.title} fill sizes="(min-width: 768px) 320px, 100vw" className="object-cover" />
                      </div>
                      <div className="flex-1 self-center">
                        <h3 className="text-2xl font-semibold text-[var(--color-primary)]">{product.title}</h3>
                        <p className="mt-4 text-sm leading-relaxed text-black/75">{product.description}</p>
                        <ul className="mt-5 flex flex-wrap gap-3 text-sm text-[var(--color-primary)]">
                          {product.specs.map((spec) => (
                            <li key={spec} className="rounded-full bg-[var(--background)]/60 px-4 py-2 shadow-sm">
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="galeri" className="bg-[var(--color-secondary)] py-20">
              <div className="mx-auto max-w-6xl px-6">
                <div className="text-center">
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">Galeri</p>
                  <h2 className="mt-4 text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">
                    Jejak proses kakao kami
                  </h2>
                  <p className="mt-4 text-base text-black/70">
                    Dokumentasi perjalanan kakao dari kebun hingga siap dinikmati.
                  </p>
                </div>
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {galleryItems.map((item) => (
                    <figure key={item.title} className="overflow-hidden rounded-3xl border border-black/5 bg-white/80 shadow-md">
                      <div className="relative h-52 w-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(min-width: 1024px) 250px, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                      <figcaption className="px-6 py-5">
                        <h3 className="text-base font-semibold text-[var(--color-primary)]">{item.title}</h3>
                        <p className="mt-2 text-sm text-black/60">{item.caption}</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </section>

            <section id="kontak" className="px-6">
              <div className="mx-auto max-w-6xl rounded-[40px] border border-black/5 bg-white/85 p-10 shadow-xl backdrop-blur-sm">
                <div className="text-center">
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">Hubungi Kami</p>
                  <h2 className="mt-4 text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">
                    Kami siap melayani kebutuhan kakao Anda
                  </h2>
                  <p className="mt-4 text-base text-black/70">
                    Tinggalkan pesan atau hubungi kami secara langsung. Tim kami akan merespons secepat mungkin.
                  </p>
                </div>
                <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-8 rounded-3xl border border-black/5 bg-[var(--background)]/40 p-8 shadow-md">
                    <h3 className="text-lg font-semibold text-[var(--color-primary)]">Kirim Pesan</h3>
                    <form className="grid gap-5 sm:grid-cols-2">
                      <label className="flex flex-col gap-2 text-sm text-[var(--color-primary)]">
                        Nama
                        <input
                          type="text"
                          placeholder="Nama lengkap"
                          className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black/80 shadow-sm focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30"
                        />
                      </label>
                      <label className="flex flex-col gap-2 text-sm text-[var(--color-primary)]">
                        Telepon
                        <input
                          type="tel"
                          placeholder="Nomor telepon"
                          className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black/80 shadow-sm focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30"
                        />
                      </label>
                      <label className="flex flex-col gap-2 text-sm text-[var(--color-primary)] sm:col-span-2">
                        Email
                        <input
                          type="email"
                          placeholder="Alamat email"
                          className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black/80 shadow-sm focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30"
                        />
                      </label>
                      <label className="flex flex-col gap-2 text-sm text-[var(--color-primary)] sm:col-span-2">
                        Pesan
                        <textarea
                          rows={5}
                          placeholder="Tuliskan kebutuhan kakao Anda"
                          className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black/80 shadow-sm focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30"
                        />
                      </label>
                      <div className="sm:col-span-2">
                        <button type="submit" className="w-full rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#6a3a22]">
                          Kirim Pesan
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="space-y-8">
                    <div className="rounded-3xl border border-black/5 bg-[var(--background)]/40 p-8 shadow-md">
                      <h3 className="text-lg font-semibold text-[var(--color-primary)]">Informasi Kontak</h3>
                      <ul className="mt-4 space-y-4 text-sm text-black/75">
                        <li>
                          <strong className="block text-[var(--color-primary)]">Alamat</strong>
                          Jl. Raya Pangandaran - Padaherang Km 1
                        </li>
                        <li>
                          <strong className="block text-[var(--color-primary)]">Email</strong>
                          sales@mitrakakaomulia.co.id
                        </li>
                        <li>
                          <strong className="block text-[var(--color-primary)]">Telepon</strong>
                          +62 812 2784 4067
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-3xl border border-black/5 bg-[var(--background)]/40 p-8 shadow-md">
                      <h3 className="text-lg font-semibold text-[var(--color-primary)]">Pertanyaan Umum</h3>
                      <ul className="mt-4 space-y-3 text-sm text-black/75">
                        {faqs.map((faq) => (
                          <li key={faq} className="flex items-start gap-3">
                            <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                            {faq}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <footer className="mt-24 bg-[var(--color-primary)] text-white">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/icon.png"
                    alt="Logo Mitra Kakao Mulia"
                    width={44}
                    height={44}
                    className="rounded-full border border-white/20"
                  />
                  <p className="text-lg font-semibold">Mitra Kakao Mulia</p>
                </div>
                <p className="text-sm text-white/70">
                  Operasional petani berpengalaman dengan komitmen mengolah biji kakao terbaik untuk industri dan pecinta kakao.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Tautan Cepat</h4>
                <ul className="mt-4 space-y-2 text-sm">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <a className="transition hover:text-white" href={item.href}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Kontak</h4>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  <li>Jl. Raya Pangandaran - Padaherang Km 1</li>
                  <li>sales@mitrakakaomulia.co.id</li>
                  <li>+62 812 2784 4067</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Buletin</h4>
                <p className="mt-4 text-sm text-white/70">
                  Dapatkan kabar terbaru seputar panen dan promo produk kakao kami.
                </p>
                <form className="mt-5 flex gap-2">
                  <input
                    type="email"
                    placeholder="Email anda"
                    className="w-full rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                  />
                  <button type="submit" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[#f8dcbc]">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="border-t border-white/20 py-4 text-center text-xs text-white/60">
              &copy; {new Date().getFullYear()} Mitra Kakao Mulia. All rights reserved.
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}



