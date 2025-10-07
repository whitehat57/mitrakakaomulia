'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Produk", href: "#produk" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
];

function getSpecIcon(spec: string) {
  const normalized = spec.toLowerCase();
  if (normalized.includes("fermentasi")) return "\u23F1\uFE0F";
  if (normalized.includes("kadar") || normalized.includes("%")) return "\uD83D\uDCA7";
  if (normalized.includes("jamur")) return "\uD83E\uDDA0";
  if (normalized.includes("murni")) return "\uD83C\uDF6B";
  if (normalized.includes("antioksidan")) return "\uD83C\uDF3F";
  if (normalized.includes("pengawet") || normalized.includes("bebas")) return "\uD83D\uDEAB";
  return "\u2B50";
}

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
    title: "Panen Kakao",
    caption: "Petani memetik kakao matang untuk menjaga kualitas dan konsistensi rasa.",
    image:
      "https://media.licdn.com/dms/image/v2/C5612AQFH2quKRCXn7A/article-inline_image-shrink_400_744/article-inline_image-shrink_400_744/0/1629538135771?e=2147483647&v=beta&t=1fnoXBuckrx0FiGMv6GmsbsMI4DUcr1SOBtVbNUoXqQ",
  },
  {
    title: "Fermentasi Tradisional",
    caption: "Proses fermentasi tradisional untuk menonjolkan aroma dan cita rasa kakao.",
    image:
      "https://anarchychocolate.com/wp-content/uploads/2020/08/Fermenting-Cocoa-Beans-in-Thailand-1030x579.png",
  },
  {
    title: "Proses Pengeringan",
    caption: "Pengeringan terkontrol memastikan biji kakao bebas jamur dan siap olah.",
    image:
      "https://thumbs.dreamstime.com/b/cocoa-beans-cacao-beans-being-dried-drying-platform-being-fermented-cocoa-beans-cacao-beans-being-dried-159567865.jpg",
  },
  {
    title: "Hasil Olahan Kakao",
    caption: "Ragam olahan kakao siap distribusi untuk kebutuhan industri dan retail.",
    image:
      "/images/hasil-olahan.jpg",
  },
];

const faqs = [
  "Bagaimana kualitas biji kakao dijamin?",
  "Apakah tersedia pengiriman ke seluruh Indonesia?",
  "Berapa minimal order untuk pembelian?",
];

export default function Home() {
  const [activeItem, setActiveItem] = useState<(typeof galleryItems)[number] | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!activeItem) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeItem]);

  useEffect(() => {
    if (activeItem && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [activeItem]);

  const closeLightbox = () => setActiveItem(null);
  const activeIndex = activeItem ? galleryItems.findIndex((item) => item.title === activeItem.title) : -1;
  const modalTitleId = activeIndex >= 0 ? `galeri-modal-title-${activeIndex}` : undefined;
  const modalDescriptionId = activeIndex >= 0 ? `galeri-modal-description-${activeIndex}` : undefined;

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
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
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

          <main id="konten-utama" className="pb-24">
            <section id="beranda" className="relative isolate flex min-h-[calc(100vh-80px)] items-stretch overflow-hidden rounded-none lg:min-h-[100vh] lg:rounded-ss-[48px]">
              <Image src="/images/hero-bg.jpg" alt="Latar biji kakao" fill priority sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative mx-auto flex w-full max-w-5xl flex-col justify-center gap-6 px-4 py-16 sm:px-10 sm:py-24">
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
              <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row">
                <div className="w-full lg:w-1/2">
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">Tentang Kami</p>
                  <h2 className="mt-4 text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">
                    Menghadirkan kakao berkualitas dari petani lokal
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-black/70">
                    MITRA KAKAO MULIA adalah koperasi petani kakao di Pangandaran yang memasok biji kakao single-origin berkualitas. Kami bermitra dengan 120+ petani, menerapkan pascapanen terstandar - fermentasi 5-7 hari, pengeringan hingga &le;7% kadar air serta cut-test rutin untuk konsistensi rasa. Seluruh batch terlacak asalnya dan dibeli dengan harga adil. Dari kebun lokal ke pabrik Anda, kami menghadirkan biji siap olah dengan profil rasa yang bersih dan stabil.
                  </p>
                </div>
                <div className="w-full lg:flex-1">
                  <div className="relative mx-auto w-full max-w-[16rem] sm:max-w-[20rem] lg:max-w-[22rem] xl:max-w-[24rem] overflow-hidden rounded-[32px] border border-black/10 shadow-md lg:shadow-lg">
                    <div className="relative aspect-[3/4] sm:aspect-[4/5]">
                      <Image
                        src="https://images.unsplash.com/photo-1657726936729-4926e65989df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhbmQlMjBzZWxlY3Rpb24lMjBjYWNhb3xlbnwwfHwwfHx8MA%3D%3D"
                        alt="Seleksi biji kakao siap dipilih"
                        fill
                        sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 75vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="produk" className="bg-gradient-to-b from-[#fef9f4] via-[#fdf2e7] to-white py-16">
              <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="mx-auto max-w-3xl text-center">
                  <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-accent)]">
                    Produk Unggulan
                  </span>
                  <h2 className="mt-4 text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">
                    Ragam produk kakao pilihan
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-black/65 md:text-lg">
                    Setiap produk kami diproses dengan teliti untuk menjaga cita rasa dan kualitas terbaik.
                  </p>
                </div>

                <div className="mt-16 space-y-12">
                  {products.map((product, index) => {
                    const imageOnLeft = index % 2 === 0;
                    return (
                      <article
                        key={product.title}
                        className={cn(
                          "group grid gap-8 rounded-2xl border border-black/10 bg-white/90 p-6 shadow-sm transition-all duration-300 sm:p-8",
                          "md:grid-cols-2 md:items-center md:gap-12",
                          "hover:-translate-y-1 hover:border-black/20 hover:shadow-lg",
                          "focus-within:border-black/30 focus-within:shadow-lg"
                        )}
                      >
                        <div
                          className={cn(
                            "relative order-1 overflow-hidden rounded-2xl ring-1 ring-black/5 transition duration-300",
                            "group-hover:ring-black/15",
                            imageOnLeft ? "md:order-1" : "md:order-2"
                          )}
                        >
                          <div className="relative aspect-[4/3]">
                            <Image
                              src={product.image}
                              alt={product.title}
                              fill
                              sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
                              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                            />
                          </div>
                        </div>

                        <div
                          className={cn(
                            "order-2 flex flex-col justify-center gap-5",
                            imageOnLeft ? "md:order-2" : "md:order-1"
                          )}
                        >
                          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-muted)]">
                            Produk Unggulan
                          </span>
                          <h3 className="text-2xl font-semibold text-[var(--color-primary)] md:text-3xl">
                            {product.title}
                          </h3>
                          <p className="max-w-[70ch] text-base leading-relaxed text-black/70 md:text-lg">
                            {product.description}
                          </p>
                          <ul className="flex flex-wrap gap-3 text-xs md:text-sm">
                            {product.specs.slice(0, 3).map((spec) => (
                              <li
                                key={spec}
                                className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-[var(--color-primary)] ring-1 ring-[var(--color-primary)]/15 transition hover:ring-[var(--color-primary)]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                              >
                                <span>{getSpecIcon(spec)}</span>
                                <span>{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>

            <section id="galeri" className="bg-[var(--color-secondary)] py-20">
              <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="text-center">
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">Galeri</p>
                  <h2 className="mt-4 text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">
                    Jejak proses kakao kami
                  </h2>
                  <p className="mt-4 text-base text-black/70">
                    Dokumentasi perjalanan kakao dari kebun hingga siap dinikmati.
                  </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {galleryItems.map((item) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActiveItem(item)}
                      className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-white/95 via-white/90 to-white/80 p-5 text-left shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[var(--color-primary)]/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-accent)]/50"
                    >
                      <div className="rounded-2xl bg-white/70 p-3 shadow-inner">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-black/5">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                            unoptimized
                          />
                        </div>
                      </div>
                      <div className="mt-6 flex flex-1 flex-col">
                        <h3 className="text-lg font-semibold text-[var(--color-primary)]">{item.title}</h3>
                        <p className="mt-3 text-sm text-black/70">{item.caption}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {activeItem && (
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={modalTitleId}
                aria-describedby={modalDescriptionId}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-10 backdrop-blur-sm"
                onClick={closeLightbox}
              >
                <div
                  className="relative w-full max-w-3xl"
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="overflow-hidden rounded-3xl bg-white/90 p-4 shadow-[0_25px_80px_-30px_rgba(37,17,0,0.65)] ring-1 ring-black/10">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black/5">
                      <Image
                        src={activeItem.image}
                        alt={activeItem.title}
                        fill
                        sizes="100vw"
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="mt-4 text-center text-[var(--color-primary)]">
                      <h3 id={modalTitleId} className="text-xl font-semibold">{activeItem.title}</h3>
                      <p id={modalDescriptionId} className="mt-2 text-sm text-black/70">
                        {activeItem.caption}
                      </p>
                    </div>
                    <div className="mt-6 flex justify-center">
                      <button
                        type="button"
                        ref={closeButtonRef}
                        onClick={closeLightbox}
                        className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-[#6a3a22] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
                      >
                        Tutup
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <section id="kontak" className="px-4 sm:px-6">
              <div className="mx-auto max-w-6xl rounded-[40px] border border-black/5 bg-white/85 p-8 shadow-xl backdrop-blur-sm sm:p-10">
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
                  <div className="space-y-8 rounded-3xl border border-black/5 bg-[var(--background)]/40 p-6 shadow-md sm:p-8">
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
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
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

