"use client";

import Image from "next/image";
import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";

const WHATSAPP_NUMBER = "919003878238";

export default function Home() {
  const [formData, setFormData] = useState({
    senderName: "",
    senderPhone: "",
    recipientName: "",
    recipientCity: "",
    message: "",
    deliveryDate: "",
    product: "The Polite Potato",
  });

  const whatsappMessage = useMemo(() => {
    const lines = [
      "Hey Potatoed team! I want to place an order 🥔",
      `Product: ${formData.product || ""}`,
      `Sender name: ${formData.senderName || ""}`,
      `Sender phone: ${formData.senderPhone || ""}`,
      `Recipient name: ${formData.recipientName || ""}`,
      `Recipient city: ${formData.recipientCity || ""}`,
      `Delivery date: ${formData.deliveryDate || ""}`,
      `Message to write: ${formData.message || ""}`,
      "Payment: Please share UPI / payment link.",
    ];
    return lines.join("\n");
  }, [formData]);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen text-[#1a1026]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-[#ff9f1c] opacity-35 blur-3xl float-slow" />
        <div className="pointer-events-none absolute top-10 right-0 h-72 w-72 rounded-full bg-[#2ec4b6] opacity-30 blur-3xl float-fast" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#ff5d8f] opacity-30 blur-3xl float-slow" />

        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-8 text-sm font-medium">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[#fff0e5] shadow-[0_10px_25px_rgba(26,16,38,0.2)]">
              <Image
                src="/logo-potatoed.svg"
                alt="Potatoed logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">Potatoed</p>
              <p className="text-xs text-[#5c4b6b]">Handwritten potato pranks</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a className="text-[#5c4b6b] hover:text-[#1a1026]" href="#how">
              How it works
            </a>
            <a className="text-[#5c4b6b] hover:text-[#1a1026]" href="#menu">
              Choose a potato
            </a>
            <a className="text-[#5c4b6b] hover:text-[#1a1026]" href="#gallery">
              Gallery
            </a>
            <a className="text-[#5c4b6b] hover:text-[#1a1026]" href="#order">
              Order on WhatsApp
            </a>
            <a className="text-[#5c4b6b] hover:text-[#1a1026]" href="#faq">
              FAQ
            </a>
          </nav>
          <a
            className="rounded-full border border-[#1a1026] px-4 py-2 text-sm transition hover:bg-[#1a1026] hover:text-[#fff0e5]"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp order
          </a>
        </header>

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-20 pt-16">
          <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col gap-6">
              <p className="inline-flex w-fit items-center gap-2 rounded-full bg-[#fff0e5] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#5c4b6b] shadow-sm">
                Desi GenZ prank mail, zero cringe
              </p>
              <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Send a real potato with your handwritten vibe. It lands as a
                laugh, not drama.
              </h1>
              <p className="max-w-xl text-lg text-[#5c4b6b]">
                Potatoed lets you type a note, we inscribe it on a real potato,
                then ship it as a cheeky parcel. Perfect for birthdays, dares,
                or just chaotic bestie energy.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  className="rounded-full bg-[#1a1026] px-6 py-3 text-sm font-semibold text-[#fff0e5] transition hover:-translate-y-0.5 hover:bg-[#2a1740]"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Order on WhatsApp
                </a>
                <a
                  className="rounded-full border border-[#1a1026] px-6 py-3 text-sm font-semibold text-[#1a1026] transition hover:-translate-y-0.5 hover:bg-[#fff0e5]"
                  href="#how"
                >
                  See the flow
                </a>
              </div>
              <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#5c4b6b]">
                <span className="rounded-full bg-[#fff0e5] px-3 py-1">No glitter</span>
                <span className="rounded-full bg-[#fff0e5] px-3 py-1">Real handwriting</span>
                <span className="rounded-full bg-[#fff0e5] px-3 py-1">No hate, only fun</span>
              </div>
            </div>

            <div className="relative">
              <div className="grain neo-card glow relative mx-auto flex max-w-md flex-col gap-6 rounded-[32px] p-8">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-[#5c4b6b]">
                  <span>Preview</span>
                  <span className="rounded-full bg-[#1a1026] px-3 py-1 text-[#fff0e5]">
                    Handwritten
                  </span>
                </div>
                <div className="mx-auto grid h-56 w-72 grid-cols-2 gap-3">
                  <div className="relative overflow-hidden rounded-2xl bg-[#fff0e5] shadow-[0_16px_30px_rgba(26,16,38,0.25)]">
                    <Image
                      src="/real-potato-hero-1.jpg"
                      alt="Potato message preview"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-2xl bg-[#fff0e5] shadow-[0_16px_30px_rgba(26,16,38,0.25)]">
                    <Image
                      src="/real-potato-hero-2.jpg"
                      alt="Potato parcel preview"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-[#fff0e5] px-4 py-3 text-sm font-medium text-[#5c4b6b]">
                  <span>Ships in 1-2 days</span>
                  <span className="text-[#1a1026]">Tracking included</span>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-8 hidden rounded-3xl border border-dashed border-[#1a1026] bg-[#fff0e5] px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#5c4b6b] lg:block">
                Real potato. Zero plastik vibes.
              </div>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-3">
            <div className="neo-card float-slow rounded-3xl p-6">
              <div className="relative h-44 w-full overflow-hidden rounded-2xl bg-[#fff0e5]">
                <Image
                  src="/real-potato-unbox.jpg"
                  alt="Potato gift box"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 text-xl">Unboxing energy</h3>
              <p className="mt-2 text-sm text-[#5c4b6b]">
                A clean, cute parcel with a potato that actually feels like a
                gift. The reveal is the joke.
              </p>
            </div>
            <div className="neo-card float-fast rounded-3xl p-6">
              <div className="relative h-44 w-full overflow-hidden rounded-2xl bg-[#fff0e5]">
                <Image
                  src="/real-potato-desk.jpg"
                  alt="Potato on desk"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 text-xl">Desk flex</h3>
              <p className="mt-2 text-sm text-[#5c4b6b]">
                Looks good on a study table, office desk, or hostel shelf. Easy
                to click and share.
              </p>
            </div>
            <div className="neo-card float-slow rounded-3xl p-6">
              <div className="relative h-44 w-full overflow-hidden rounded-2xl bg-[#fff0e5]">
                <Image
                  src="/real-potato-note.jpg"
                  alt="Handwritten note style"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 text-xl">Handwritten vibe</h3>
              <p className="mt-2 text-sm text-[#5c4b6b]">
                We actually write it with a pen, so it feels personal and not
                copy-paste.
              </p>
            </div>
          </section>

          <section id="gallery" className="grid gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c4b6b]">
                Potatoed gallery
              </p>
              <h2 className="text-3xl sm:text-4xl">How it actually looks</h2>
              <p className="max-w-2xl text-base text-[#5c4b6b]">
                Real-feel previews to show the vibe: bold ink, cute packaging,
                and that potato glow-up.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="neo-card rounded-3xl p-4">
                <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-[#fff0e5]">
                  <Image
                    src="/real-gallery-1.jpg"
                    alt="Potato gift moment"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#5c4b6b]">
                  Gift moment
                </p>
              </div>
              <div className="neo-card rounded-3xl p-4">
                <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-[#fff0e5]">
                  <Image
                    src="/real-gallery-2.jpg"
                    alt="Potato close-up"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#5c4b6b]">
                  Ink close-up
                </p>
              </div>
              <div className="neo-card rounded-3xl p-4">
                <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-[#fff0e5]">
                  <Image
                    src="/real-gallery-3.jpg"
                    alt="Potato on desk"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#5c4b6b]">
                  Desk aesthetic
                </p>
              </div>
              <div className="neo-card rounded-3xl p-4">
                <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-[#fff0e5]">
                  <Image
                    src="/real-gallery-4.jpg"
                    alt="Potato parcel"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#5c4b6b]">
                  Parcel vibes
                </p>
              </div>
            </div>
          </section>

          <section id="how" className="grid gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c4b6b]">
                How it works
              </p>
              <h2 className="text-3xl sm:text-4xl">Three steps, full chaos</h2>
              <p className="max-w-2xl text-base text-[#5c4b6b]">
                You drop the idea, we handle the pen, packaging, and delivery.
                Easy, quick, and safe.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="textured-card rounded-3xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5c4b6b]">
                  01
                </p>
                <h3 className="mt-4 text-2xl">Write the message</h3>
                <p className="mt-3 text-sm text-[#5c4b6b]">
                  Type up to 140 characters. We handwrite it with a bold marker
                  so it reads like a tiny postcard.
                </p>
              </div>
              <div className="textured-card rounded-3xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5c4b6b]">
                  02
                </p>
                <h3 className="mt-4 text-2xl">We inscribe the potato</h3>
                <p className="mt-3 text-sm text-[#5c4b6b]">
                  Each potato is cleaned, inspected, and written on by hand so
                  the message looks crisp.
                </p>
              </div>
              <div className="textured-card rounded-3xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5c4b6b]">
                  03
                </p>
                <h3 className="mt-4 text-2xl">Ship it as a parcel</h3>
                <p className="mt-3 text-sm text-[#5c4b6b]">
                  We ship it with tracking. Your friend opens the box, sees a
                  potato, and loses it.
                </p>
              </div>
            </div>
          </section>

          <section id="menu" className="grid gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c4b6b]">
                Choose a potato
              </p>
              <h2 className="text-3xl sm:text-4xl">Pick the potato personality</h2>
              <p className="max-w-2xl text-base text-[#5c4b6b]">
                Different sizes, different vibes. All real, all ridiculous.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="textured-card rounded-3xl p-6">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-[#5c4b6b]">
                  <span>Classic</span>
                  <span className="rounded-full bg-[#fff0e5] px-3 py-1">Best seller</span>
                </div>
                <h3 className="mt-4 text-2xl">The Polite Potato</h3>
                <p className="mt-3 text-sm text-[#5c4b6b]">
                  Medium potato for quick hellos, congrats, and friendly roasts.
                </p>
                <a
                  className="mt-6 block w-full rounded-full bg-[#1a1026] px-4 py-2 text-center text-sm font-semibold text-[#fff0e5]"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Pick this one
                </a>
              </div>
              <div className="textured-card rounded-3xl p-6">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-[#5c4b6b]">
                  <span>Bold</span>
                  <span className="rounded-full bg-[#1a1026] px-3 py-1 text-[#fff0e5]">
                    Extra message space
                  </span>
                </div>
                <h3 className="mt-4 text-2xl">The Loud Tater</h3>
                <p className="mt-3 text-sm text-[#5c4b6b]">
                  Oversized and extra, for birthdays, rival sports fans, or big
                  reveals.
                </p>
                <a
                  className="mt-6 block w-full rounded-full bg-[#1a1026] px-4 py-2 text-center text-sm font-semibold text-[#fff0e5]"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Pick this one
                </a>
              </div>
              <div className="textured-card rounded-3xl p-6">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-[#5c4b6b]">
                  <span>Group</span>
                  <span className="rounded-full bg-[#fff0e5] px-3 py-1">For teams</span>
                </div>
                <h3 className="mt-4 text-2xl">The Sack Attack</h3>
                <p className="mt-3 text-sm text-[#5c4b6b]">
                  Multiple potatoes, multiple notes. Great for office pranks or
                  group celebrations.
                </p>
                <a
                  className="mt-6 block w-full rounded-full bg-[#1a1026] px-4 py-2 text-center text-sm font-semibold text-[#fff0e5]"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Pick this one
                </a>
              </div>
            </div>
          </section>

          <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c4b6b]">
                Handwriting options
              </p>
              <h2 className="text-3xl sm:text-4xl">Make the message feel human</h2>
              <p className="text-base text-[#5c4b6b]">
                Choose a handwriting style and ink. We write it by hand, dry it
                out, and then ship.
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#5c4b6b]">
                <span className="rounded-full bg-[#fff0e5] px-3 py-1">Bold marker</span>
                <span className="rounded-full bg-[#fff0e5] px-3 py-1">Retro script</span>
                <span className="rounded-full bg-[#fff0e5] px-3 py-1">All caps</span>
              </div>
              <p className="text-xs text-[#5c4b6b]">
                We do not send hateful or harassing messages. Keep it kind and
                funny.
              </p>
            </div>
            <div className="textured-card relative overflow-hidden rounded-[28px] p-6">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#ff9f1c] opacity-40 blur-2xl" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5c4b6b]">
                Message preview
              </p>
              <div className="mt-6 rounded-3xl border border-dashed border-[#1a1026] bg-[#fff0e5] p-6">
                <p className="text-2xl leading-snug">
                  “Happy promotion!
                  <br />
                  You are officially Potato Boss.”
                </p>
                <p className="mt-4 text-sm text-[#5c4b6b]">Signed, your favorite coworker.</p>
              </div>
              <a
                className="mt-6 block w-full rounded-full border border-[#1a1026] px-4 py-2 text-center text-sm font-semibold text-[#1a1026] transition hover:bg-[#1a1026] hover:text-[#fff0e5]"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Customize handwriting
              </a>
            </div>
          </section>

          <section id="order" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c4b6b]">
                WhatsApp checkout
              </p>
              <h2 className="text-3xl sm:text-4xl">Fill once, pay on WhatsApp</h2>
              <p className="text-base text-[#5c4b6b]">
                Share your details and we will take the order on WhatsApp. We
                support UPI and cards via payment links.
              </p>
              <p className="text-xs text-[#5c4b6b]">
                Pro tip: keep it safe and non-hate. We refuse abusive content.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="neo-card glow grid gap-4 rounded-[28px] p-6"
            >
              <div className="grid gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5c4b6b]">
                  Choose potato
                </label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleInputChange}
                  className="rounded-2xl border border-[#1a1026]/10 bg-[#fff0e5] px-4 py-3 text-sm"
                >
                  <option>The Polite Potato</option>
                  <option>The Loud Tater</option>
                  <option>The Sack Attack</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5c4b6b]">
                  Your name
                </label>
                <input
                  name="senderName"
                  value={formData.senderName}
                  onChange={handleInputChange}
                  placeholder="Aarav / Diya"
                  className="rounded-2xl border border-[#1a1026]/10 bg-[#fff0e5] px-4 py-3 text-sm"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5c4b6b]">
                  Your WhatsApp number
                </label>
                <input
                  name="senderPhone"
                  value={formData.senderPhone}
                  onChange={handleInputChange}
                  placeholder="+91 98xxxxxx"
                  className="rounded-2xl border border-[#1a1026]/10 bg-[#fff0e5] px-4 py-3 text-sm"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5c4b6b]">
                  Recipient name
                </label>
                <input
                  name="recipientName"
                  value={formData.recipientName}
                  onChange={handleInputChange}
                  placeholder="Bestie name"
                  className="rounded-2xl border border-[#1a1026]/10 bg-[#fff0e5] px-4 py-3 text-sm"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5c4b6b]">
                  Delivery city
                </label>
                <input
                  name="recipientCity"
                  value={formData.recipientCity}
                  onChange={handleInputChange}
                  placeholder="Mumbai / Delhi"
                  className="rounded-2xl border border-[#1a1026]/10 bg-[#fff0e5] px-4 py-3 text-sm"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5c4b6b]">
                  Delivery date
                </label>
                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleInputChange}
                  className="rounded-2xl border border-[#1a1026]/10 bg-[#fff0e5] px-4 py-3 text-sm"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5c4b6b]">
                  Message to write (140 chars)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tera balance low hai, but vibes high."
                  rows={3}
                  maxLength={140}
                  className="rounded-2xl border border-[#1a1026]/10 bg-[#fff0e5] px-4 py-3 text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-[#1a1026] px-6 py-3 text-sm font-semibold text-[#fff0e5]"
              >
                Continue on WhatsApp
              </button>
              <p className="text-xs text-[#5c4b6b]">
                You will be redirected to WhatsApp with your order summary.
              </p>
            </form>
          </section>

          <section id="faq" className="grid gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c4b6b]">
                FAQ
              </p>
              <h2 className="text-3xl sm:text-4xl">Questions, answered</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="textured-card rounded-3xl p-6">
                <h3 className="text-xl">Does it smell?</h3>
                <p className="mt-3 text-sm text-[#5c4b6b]">
                  Fresh potato + fast shipping. It arrives like a grocery potato,
                  no weird smell.
                </p>
              </div>
              <div className="textured-card rounded-3xl p-6">
                <h3 className="text-xl">Can I send it anonymously?</h3>
                <p className="mt-3 text-sm text-[#5c4b6b]">
                  You can omit your name, but we keep sender details for safety.
                </p>
              </div>
              <div className="textured-card rounded-3xl p-6">
                <h3 className="text-xl">Where do you ship?</h3>
                <p className="mt-3 text-sm text-[#5c4b6b]">
                  We ship across India right now. Tracking is included.
                </p>
              </div>
              <div className="textured-card rounded-3xl p-6">
                <h3 className="text-xl">What is the potato made of?</h3>
                <p className="mt-3 text-sm text-[#5c4b6b]">
                  Mostly potato. A little bit of mischief.
                </p>
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-[#1a1026] via-[#2a1740] to-[#1a1026] px-8 py-14 text-[#fff0e5]">
            <div className="absolute -left-12 -top-16 h-48 w-48 rounded-full bg-[#ff9f1c] opacity-40 blur-3xl" />
            <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-[#2ec4b6] opacity-30 blur-3xl" />
            <div className="relative z-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffd1a6]">
                  Ready for a wholesome prank?
                </p>
                <h2 className="text-3xl sm:text-4xl">Send your first Potatoed prank</h2>
                <p className="text-base text-[#ffd1a6]">
                  A small potato. A big grin. The easiest way to surprise
                  someone without being annoying.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  className="rounded-full bg-[#fff0e5] px-6 py-3 text-center text-sm font-semibold text-[#1a1026]"
                  href="#order"
                >
                  Create your message
                </a>
                <a
                  className="rounded-full border border-[#fff0e5] px-6 py-3 text-center text-sm font-semibold text-[#fff0e5]"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Talk to support on WhatsApp
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-[#1a1026]/10 px-6 py-10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 text-sm text-[#5c4b6b] lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-base font-semibold text-[#1a1026]">Potatoed</p>
              <p>Pranks with a pulse. Potatoes with a pen.</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <span>Safety-first humor</span>
              <span>Support: WhatsApp only</span>
              <span>© 2026 Potatoed</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
