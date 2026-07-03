import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroAsset from "@/assets/hero-manju.jpg";
import chitoseManjuAsset from "@/assets/product-chitose-manju.png";
import tsubuanManAsset from "@/assets/product-tsubuan-man.png";
import milkAnManAsset from "@/assets/product-milk-an-man.png";
import tamagoMushiAsset from "@/assets/product-tamago-mushi.png";
import craftAsset from "@/assets/craft-hands.jpg";
import shopAsset from "@/assets/shop-location.png";
import characterAsset from "@/assets/shofuan-character.png";
import demaekanLogo from "@/assets/demaekan-logo.jpg";
import uberEatsLogo from "@/assets/uber-eats-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "昇風庵 ちとせまんじゅう｜千歳の新しいまんじゅう" },
      { name: "description", content: "北海道千歳生まれの新しいおまんじゅう、昇風庵。やさしい甘さと、ふんわり蒸したての手づくり饅頭を、地元の毎日に。" },
      { property: "og:title", content: "昇風庵 ちとせまんじゅう" },
      { property: "og:description", content: "千歳の記憶から生まれた、新しい小さなまんじゅう。" },
      { property: "og:image", content: heroAsset },
      { property: "twitter:image", content: heroAsset },
    ],
  }),
  component: LandingPage,
});

const nav = [
  { href: "#story", label: "ものがたり" },
  { href: "#manju", label: "おまんじゅう" },
  { href: "#taste", label: "味わい" },
  { href: "#why", label: "わたしたちのこと" },
  { href: "#shop", label: "お店" },
  { href: "#order", label: "ご予約・デリバリー" },
];

function Stamp({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-[6px] bg-stamp font-mincho text-[0.65rem] tracking-widest text-cream ${className}`}
      style={{ width: 26, height: 26, lineHeight: 1 }}
      aria-hidden
    >
      昇
    </span>
  );
}

function Steam() {
  return (
    <div className="pointer-events-none absolute inset-x-0 -top-2 mx-auto flex h-16 w-24 items-end justify-center gap-2 opacity-70" aria-hidden>
      <span className="block h-10 w-[3px] rounded-full bg-white/80 animate-steam" style={{ animationDelay: "0s" }} />
      <span className="block h-10 w-[3px] rounded-full bg-white/80 animate-steam" style={{ animationDelay: "1.2s" }} />
      <span className="block h-10 w-[3px] rounded-full bg-white/80 animate-steam" style={{ animationDelay: "2.4s" }} />
    </div>
  );
}

function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-cream/90 shadow-[0_1px_0_var(--color-border)] backdrop-blur" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8 sm:py-6">
          <a href="#top" className="flex items-center gap-3">
            <img src={characterAsset} alt="" className="h-14 w-14 object-contain mix-blend-darken sm:h-16 sm:w-16" />
            <span className="flex flex-col leading-none">
              <span className="font-mincho text-xl text-anko sm:text-2xl">昇風庵</span>
              <span className="mt-1 font-mincho text-[0.7rem] tracking-[0.25em] text-muted-foreground sm:text-xs">CHITOSE MANJU</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="font-mincho text-base text-anko transition-colors hover:text-stamp">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#shop"
            className="hidden rounded-full border border-anko/20 bg-anko px-6 py-2.5 font-mincho text-base text-cream shadow-[var(--shadow-soft)] transition-all hover:bg-anko-soft sm:inline-block"
          >
            お店へ行く
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="washi absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-10 sm:px-8 md:grid-cols-[1.05fr_1fr] md:gap-14 md:pb-28 md:pt-16">
          <div className="animate-fade-up">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-anko/40" />
              <span className="font-serif-en text-sm italic text-anko-soft">From Chitose, Hokkaido</span>
            </div>
            <h1 className="font-mincho text-[2.4rem] leading-[1.35] text-anko text-balance sm:text-5xl md:text-[3.3rem]">
              千歳のなつかしさから<br />
              生まれた、おまんじゅう。
            </h1>
            <p className="mt-7 max-w-md text-balance text-[0.98rem] leading-[1.95] text-muted-foreground">
              昔から、この街の人に愛されてきた一つの饅頭の記憶。<br />
              そのやさしい甘さを、もう一度この手で。<br />
              昇風庵のちとせまんじゅうが、はじまります。
            </p>
            <div className="mt-9">
              <a
                href="https://airrsv.net/shofuan1019/calendar"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-anko px-7 py-3.5 font-mincho text-cream shadow-[var(--shadow-warm)] transition-transform hover:-translate-y-0.5"
              >
                取り置き予約はこちら
                <span aria-hidden>→</span>
              </a>
            </div>
            <div className="mt-10 flex items-center gap-5 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Stamp />
                <span className="font-mincho">手づくり・蒸したて</span>
              </div>
              <span className="h-3 w-px bg-border" />
              <span className="font-mincho">北海道 千歳市</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-stamp/10 blur-2xl" aria-hidden />
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-hokkaido/10 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[28px] border border-border/60 bg-card shadow-[var(--shadow-warm)]">
              <Steam />
              <img
                src={heroAsset}
                alt="蒸したてのちとせまんじゅう"
                width={1600}
                height={1280}
                className="block h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-6 flex items-center gap-3 rounded-2xl border border-border bg-cream/95 px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur">
              <img src={characterAsset} alt="" className="h-12 w-12 object-contain mix-blend-darken animate-float" />
              <div className="leading-tight">
                <p className="font-mincho text-xs text-muted-foreground">本日も</p>
                <p className="font-mincho text-sm text-anko">蒸したて、できております。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="paper-grain relative overflow-hidden py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 sm:px-8 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div className="md:sticky md:top-28 md:self-start">
            <p className="font-serif-en text-sm italic text-stamp">Our Story</p>
            <h2 className="mt-3 font-mincho text-3xl leading-snug text-anko sm:text-4xl">
              千歳の<br />記憶のなかから。
            </h2>
            <div className="mt-6 flex items-center gap-2">
              <span className="h-px w-12 bg-anko/30" />
              <span className="font-mincho text-xs tracking-widest text-muted-foreground">ものがたり</span>
            </div>
          </div>
          <div className="space-y-6 text-[1rem] leading-[2] text-foreground/85">
            <p className="text-balance">
              昔この街には、長く愛された一軒のおまんじゅう屋さんがありました。
              ふっくらと蒸し上がった皮、やさしい甘さの餡。
              買い物帰りの一袋が、家族のささやかなおやつでした。
            </p>
            <p className="text-balance">
              <span className="bg-stamp/10 px-1">わたしたちは、まだ新しいお店です。</span>
              何百年と続く老舗ではありません。
              けれど、この街にずっと流れてきた「あのおまんじゅうの空気」を、
              もう一度かたちにしてみたい。そんな気持ちから、昇風庵ははじまりました。
            </p>
            <p className="text-balance text-muted-foreground">
              受け継ぐ、というよりは、思い出を抱きしめながら、
              この街の新しい毎日のおやつを、ここから少しずつ。
            </p>
            <figure className="mt-8 overflow-hidden rounded-[20px] border border-border bg-card shadow-[var(--shadow-soft)]">
              <img
                src={craftAsset}
                alt="餡をやさしく包む職人の手"
                width={1600}
                height={1100}
                loading="lazy"
                className="block h-full w-full object-cover"
              />
              <figcaption className="px-5 py-4 font-mincho text-sm text-muted-foreground">
                一つひとつ、手のひらで包む。
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="manju" className="py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-serif-en text-sm italic text-stamp">Our Manju</p>
              <h2 className="mt-2 font-mincho text-3xl text-anko sm:text-4xl">おまんじゅうのこと</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              定番のひと粒から、贈りもの、季節のいち品まで。
              <br className="hidden sm:block" />
              どれも、その日の朝にこの店でつくっています。
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { img: chitoseManjuAsset, tag: "看板", en: "Signature", name: "ちとせまんじゅう（肉まん）", copy: "皮からすべて手作り。\nふわふわで軽い食感の皮と、あっさりとした餡が特徴の、昇風庵を代表するまんじゅうです。" },
              { img: tsubuanManAsset, tag: "定番", en: "Anko", name: "つぶあんまん", copy: "やさしい甘さの粒あんを、ふんわりとした薄皮で。\n毎日のおやつに、いちばん寄り添う一粒。" },
              { img: milkAnManAsset, tag: "限定", en: "Milk An", name: "ミクルあんまん", copy: "北海道産の白餡に、練乳を練り込んだ\nあまぁくて品のあるおまんじゅう。" },
              { img: tamagoMushiAsset, tag: "蒸しパン", en: "Tamago", name: "たまご蒸しパン", copy: "ふんわり、しっとりと蒸し上げた、やさしい甘さのたまご蒸しパン。\nたまごのまろやかな風味が広がる、どこか懐かしくほっとする味わい。" },
            ].map((p) => (
              <article
                key={p.name}
                className="group flex flex-col overflow-hidden rounded-[22px] border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-warm)]"
              >
                <div className="aspect-square overflow-hidden bg-paper">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={1200}
                    height={1200}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-stamp/10 px-2.5 py-0.5 font-mincho text-[0.7rem] text-stamp">{p.tag}</span>
                    <span className="font-serif-en text-xs italic text-muted-foreground">{p.en}</span>
                  </div>
                  <h3 className="font-mincho text-xl text-anko">{p.name}</h3>
                  <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Taste */}
      <section id="taste" className="relative overflow-hidden bg-anko text-cream">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "20px 20px" }} aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-serif-en text-sm italic text-cream/70">A Gentle Taste</p>
            <h2 className="mt-3 font-mincho text-3xl leading-tight text-cream sm:text-4xl">
              ふんわり、やさしい。<br />
              それだけで、しあわせ。
            </h2>
            <p className="mt-6 max-w-md leading-[2] text-cream/80">
              手のひらで包んだ、ふっくらとした皮。
              ほんのり甘い、北海道のあずきの餡。
              蒸し上がったばかりの、ほのかな湯気。
              気取らない、毎日のおやつだから、
              何度でも食べたくなる味でいたいのです。
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { jp: "やさしい甘さ", en: "Gentle sweetness" },
                { jp: "ふんわり薄皮", en: "Soft, airy skin" },
                { jp: "北海道産あずき", en: "Hokkaido azuki" },
                { jp: "蒸したての温度", en: "Warm from the steamer" },
              ].map((t) => (
                <li key={t.jp} className="flex items-start gap-3 rounded-xl border border-cream/15 bg-cream/5 p-4">
                  <Stamp className="mt-0.5 shrink-0" />
                  <div>
                    <p className="font-mincho text-base text-cream">{t.jp}</p>
                    <p className="mt-0.5 font-serif-en text-xs italic text-cream/60">{t.en}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[28px] border border-cream/15 shadow-[var(--shadow-warm)]">
              <img
                src={tsubuanManAsset}
                alt="蒸し上がったおまんじゅう"
                width={1200}
                height={1200}
                loading="lazy"
                className="block h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="washi py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 flex flex-col items-center gap-8 md:flex-row md:items-end md:justify-between">
            <div className="text-center md:text-left">
              <p className="font-serif-en text-sm italic text-stamp">Why Chitose Manju</p>
              <h2 className="mt-2 font-mincho text-3xl text-anko sm:text-4xl">わたしたちが、つくる理由</h2>
            </div>
            <div className="flex shrink-0 items-end gap-2 sm:gap-3">
              <div className="relative max-w-[11rem] rounded-2xl border border-border bg-cream px-3.5 py-3 shadow-[var(--shadow-soft)] sm:max-w-[13rem] sm:px-4 sm:py-3.5">
                <p className="font-mincho text-[0.7rem] leading-[1.75] text-anko sm:text-xs">
                  「ちょいと一つ、いかがですか？<br />
                  今日のも、ふっくらできましたよ。」
                </p>
                <span className="absolute -right-1.5 bottom-5 h-3 w-3 rotate-45 border-r border-b border-border bg-cream" aria-hidden />
              </div>
              <img
                src={characterAsset}
                alt="昇風庵のゆるキャラ ふう太"
                className="h-16 w-16 shrink-0 object-contain mix-blend-darken animate-float sm:h-20 sm:w-20"
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { no: "01", jp: "毎日のしあわせの味", en: "Everyday happiness", copy: "豪華じゃなくていい。日々の食卓に、そっと寄り添う甘さを。" },
              { no: "02", jp: "千歳からの、ちいさな贈りもの", en: "A small gift from Chitose", copy: "おかえり、ありがとう、また会いましょう。気持ちを、手のひらで包んで。" },
              { no: "03", jp: "これからの、新しい当たり前", en: "A new local tradition", copy: "やがてこの街の“いつもの味”になれるように。一日ずつ、育てていきます。" },
            ].map((v) => (
              <div key={v.no} className="relative rounded-[22px] border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
                <span className="font-serif-en text-5xl italic text-stamp/30">{v.no}</span>
                <h3 className="mt-2 font-mincho text-xl text-anko">{v.jp}</h3>
                <p className="mt-1 font-serif-en text-xs italic text-muted-foreground">{v.en}</p>
                <p className="mt-5 text-sm leading-relaxed text-foreground/80">{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-14">
          <div className="overflow-hidden rounded-[28px] border border-border shadow-[var(--shadow-warm)]">
            <img
              src={shopAsset}
              alt="昇風庵の店構え"
              width={1600}
              height={1100}
              loading="lazy"
              className="block h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="font-serif-en text-sm italic text-stamp">Visit the Shop</p>
            <h2 className="mt-2 font-mincho text-3xl text-anko sm:text-4xl">お店のこと</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              山田木材さんの敷地の中、ちいさな看板を目印にお越しください。
              できたてを、できるかぎり店頭で。
            </p>

            <dl className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card p-2">
              {[
                ["営業時間", "10:00 – 17:00"],
                ["定休日", "毎週月曜日"],
                ["電話", "050-1726-8219"],
                ["駐車場", "4台ございます"],
                ["所在地", "北海道千歳市錦町4丁目1835-15"],
                ["備考", "山田木材敷地内"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[6rem_1fr] items-baseline gap-4 px-4 py-3.5 sm:grid-cols-[7rem_1fr]">
                  <dt className="font-mincho text-sm text-muted-foreground">{k}</dt>
                  <dd className="font-mincho text-[0.95rem] text-anko">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:05017268219"
                className="inline-flex items-center gap-2 rounded-full bg-anko px-6 py-3 font-mincho text-cream shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
              >
                電話する
              </a>
              <a
                href="https://maps.google.com/?q=北海道千歳市錦町4丁目1835-15"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-anko/30 px-6 py-3 font-mincho text-anko transition-colors hover:bg-paper"
              >
                地図で見る →
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-6xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[24px] border border-border bg-paper">
            <iframe
              title="昇風庵 地図"
              src="https://www.google.com/maps?q=北海道千歳市錦町4丁目1835-15&output=embed"
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Order / Reservation & Delivery */}
      <section id="order" className="paper-grain relative overflow-hidden py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <p className="font-serif-en text-sm italic text-stamp">Reserve & Delivery</p>
            <h2 className="mt-2 font-mincho text-3xl text-anko sm:text-4xl">ご予約・お取り寄せ</h2>
            <p className="mt-5 mx-auto max-w-md leading-[2] text-muted-foreground">
              確実に受け取りたい方は、公式のご予約をどうぞ。<br />
              ご来店が難しい日は、デリバリーもご利用いただけます。
            </p>
          </div>

          {/* Primary: Official Reservation */}
          <a
            href="https://airrsv.net/shofuan1019/calendar"
            target="_blank"
            rel="noreferrer"
            className="group relative mb-8 flex flex-col items-start gap-6 overflow-hidden rounded-[28px] border border-anko/20 bg-anko p-7 text-cream shadow-[var(--shadow-warm)] transition-all hover:-translate-y-1 sm:flex-row sm:items-center sm:p-9"
          >
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "20px 20px" }}
              aria-hidden
            />
            <span
              className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-cream/20 bg-cream/10 shadow-[var(--shadow-soft)] sm:h-24 sm:w-24"
              aria-hidden
            >
              <svg viewBox="0 0 24 24" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3.5" y="5" width="17" height="15" rx="2.2" />
                <path d="M3.5 9.5h17" />
                <path d="M8 3.2v3.6" />
                <path d="M16 3.2v3.6" />
                <circle cx="8.5" cy="13.5" r="0.9" fill="currentColor" />
                <circle cx="12" cy="13.5" r="0.9" fill="currentColor" />
                <circle cx="15.5" cy="13.5" r="0.9" fill="currentColor" />
              </svg>
            </span>
            <div className="relative flex-1">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-stamp px-2.5 py-0.5 font-mincho text-[0.7rem] tracking-wider text-cream">
                  公式
                </span>
                <p className="font-serif-en text-[0.75rem] tracking-[0.25em] text-cream/70">OFFICIAL RESERVATION</p>
              </div>
              <h3 className="mt-2 font-mincho text-2xl leading-tight text-cream sm:text-3xl">
                昇風庵 ご予約カレンダー
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-[1.9] text-cream/80">
                日時を選んで、確実にお受け取り。<br className="hidden sm:block" />
                贈答用・大口のご注文もこちらから承ります。
              </p>
            </div>
            <span
              className="relative inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 font-mincho text-anko shadow-[var(--shadow-soft)] transition-transform group-hover:translate-x-1"
            >
              予約する <span aria-hidden>→</span>
            </span>
          </a>

          <div className="mb-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-border" />
            <span className="font-mincho text-xs tracking-[0.25em] text-muted-foreground">DELIVERY</span>
            <span className="h-px flex-1 bg-border" />
          </div>


          <div className="grid gap-5 sm:grid-cols-2">
            <a
              href="https://demae-can.com/shop/menu/3482654"
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center gap-5 overflow-hidden rounded-[22px] border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-warm)]"
            >
              <img
                src={demaekanLogo}
                alt="出前館"
                className="h-16 w-16 shrink-0 rounded-2xl object-cover shadow-[var(--shadow-soft)]"
              />
              <div className="flex-1">
                <p className="font-serif-en text-[0.7rem] tracking-[0.2em] text-muted-foreground">DELIVERY</p>
                <p className="mt-1 font-mincho text-xl text-anko">出前館</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">demae-can.com でご注文</p>
              </div>
              <span className="font-mincho text-anko/60 transition-transform group-hover:translate-x-1" aria-hidden>→</span>
            </a>

            <a
              href="https://www.ubereats.com/jp/store/%E6%98%87%E9%A2%A8%E5%BA%B5/SP5-iXAaSgqGvmLzzaX6wA"
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center gap-5 overflow-hidden rounded-[22px] border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-warm)]"
            >
              <img
                src={uberEatsLogo}
                alt="Uber Eats"
                className="h-16 w-16 shrink-0 rounded-2xl object-cover shadow-[var(--shadow-soft)]"
              />
              <div className="flex-1">
                <p className="font-serif-en text-[0.7rem] tracking-[0.2em] text-muted-foreground">DELIVERY</p>
                <p className="mt-1 font-mincho text-xl text-anko">
                  Uber <span style={{ color: "#06C167" }}>Eats</span>
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">ubereats.com でご注文</p>
              </div>
              <span className="font-mincho text-anko/60 transition-transform group-hover:translate-x-1" aria-hidden>→</span>
            </a>
          </div>

          <p className="mt-8 text-center font-mincho text-xs text-muted-foreground">
            ※ 配達エリア・営業時間は各サービスのページをご確認ください。
          </p>
        </div>
      </section>

      {/* Closing */}
      <div className="closing-manju text-cream">
        <div className="closing-manju__curve" aria-hidden>
          <svg viewBox="0 0 1440 72" preserveAspectRatio="none">
            <path
              fill="var(--anko)"
              d="M0,72 L0,44 C240,44 400,18 720,14 C1040,18 1200,44 1440,44 L1440,72 Z"
            />
          </svg>
        </div>
        <section className="relative overflow-hidden pb-24 pt-6">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "22px 22px" }} aria-hidden />
          <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="font-serif-en text-sm italic text-cream/70">Come taste the new memory of Chitose.</p>
            <h2 className="mt-4 font-mincho text-3xl leading-snug text-cream sm:text-[2.6rem]">
              千歳の、あたらしい<br />おやつの記憶を、ひとつ。
            </h2>
            <p className="mt-6 leading-[2] text-cream/80">
              蒸したての湯気が、ふっと立ちのぼる時間に。<br />
              どうぞ、昇風庵へ。
            </p>
            <a
              href="#shop"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-cream px-8 py-4 font-mincho text-anko shadow-[var(--shadow-warm)] transition-transform hover:-translate-y-0.5"
            >
              昇風庵を訪ねる →
            </a>
          </div>
        </section>
      </div>

      <footer className="border-t border-border bg-cream py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-3">
            <img src={characterAsset} alt="昇風庵 ちとせまんじゅう" className="h-14 w-auto object-contain" />
          </div>
          <p className="font-mincho text-xs leading-relaxed text-muted-foreground">
            © 昇風庵 ちとせまんじゅう<br />
            北海道千歳市錦町4丁目1835-15（山田木材敷地内）
          </p>
        </div>
      </footer>
    </div>
  );
}
