export default function Home() {
  return (
    <div className="min-h-screen text-[#1f130a]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-[#ffb347] opacity-35 blur-3xl" />
        <div className="pointer-events-none absolute top-10 right-0 h-72 w-72 rounded-full bg-[#7bb8d6] opacity-30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#f09aa4] opacity-30 blur-3xl" />

        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-8 text-sm font-medium">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1f130a] text-[#fff7ed]">
              P
            </span>
            <div>
              <p className="text-lg font-semibold tracking-tight">Potatotes</p>
              <p className="text-xs text-[#5a4637]">Handwritten potato pranks</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a className="text-[#5a4637] hover:text-[#1f130a]" href="#how">
              How it works
            </a>
            <a className="text-[#5a4637] hover:text-[#1f130a]" href="#menu">
              Choose a spud
            </a>
            <a className="text-[#5a4637] hover:text-[#1f130a]" href="#faq">
              FAQ
            </a>
          </nav>
          <button className="rounded-full border border-[#1f130a] px-4 py-2 text-sm transition hover:bg-[#1f130a] hover:text-[#fff7ed]">
            Start a Potatote
          </button>
        </header>

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-20 pt-16">
          <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col gap-6">
              <p className="inline-flex w-fit items-center gap-2 rounded-full bg-[#fff7ed] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#5a4637] shadow-sm">
                prank mail, but make it wholesome
              </p>
              <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Send a real potato with a handwritten message. It arrives as a
                laugh, not a threat.
              </h1>
              <p className="max-w-xl text-lg text-[#5a4637]">
                Potatotes lets you write a note, we inscribe it on a potato with
                pen, then ship it as a cheeky parcel. It is a lighthearted way
                to say hello, celebrate, or share a harmless prank.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-[#1f130a] px-6 py-3 text-sm font-semibold text-[#fff7ed] transition hover:-translate-y-0.5 hover:bg-[#2d1e12]">
                  Send a Potatote
                </button>
                <button className="rounded-full border border-[#1f130a] px-6 py-3 text-sm font-semibold text-[#1f130a] transition hover:-translate-y-0.5 hover:bg-[#fff7ed]">
                  See how it works
                </button>
              </div>
              <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#5a4637]">
                <span className="rounded-full bg-[#fff7ed] px-3 py-1">No glitter</span>
                <span className="rounded-full bg-[#fff7ed] px-3 py-1">
                  Real handwriting
                </span>
                <span className="rounded-full bg-[#fff7ed] px-3 py-1">
                  Consent-friendly humor
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="grain textured-card relative mx-auto flex max-w-md flex-col gap-6 rounded-[32px] p-8">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-[#5a4637]">
                  <span>Preview</span>
                  <span className="rounded-full bg-[#1f130a] px-3 py-1 text-[#fff7ed]">
                    Handwritten
                  </span>
                </div>
                <div className="relative mx-auto h-56 w-72">
                  <div className="absolute inset-0 rounded-[48%] bg-gradient-to-br from-[#e4c08f] via-[#d8b079] to-[#b3844c] shadow-[0_30px_50px_rgba(31,19,10,0.25)]" />
                  <div className="absolute left-6 top-8 h-8 w-8 rounded-full bg-[#b3844c] opacity-70" />
                  <div className="absolute right-10 top-12 h-6 w-6 rounded-full bg-[#c19258] opacity-70" />
                  <div className="absolute bottom-6 right-12 h-5 w-5 rounded-full bg-[#a4733f] opacity-70" />
                  <div className="absolute left-10 top-24 rotate-[-6deg] text-sm font-semibold text-[#4d3625]">
                    “You have been
                    <br />
                    officially spudded.”
                  </div>
                  <div className="shine" />
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-[#fff7ed] px-4 py-3 text-sm font-medium text-[#5a4637]">
                  <span>Ships in 1-2 days</span>
                  <span className="text-[#1f130a]">Tracking included</span>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-8 hidden rounded-3xl border border-dashed border-[#1f130a] bg-[#fff7ed] px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#5a4637] lg:block">
                Actual potato. No plastic.
              </div>
            </div>
          </section>

          <section id="how" className="grid gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5a4637]">
                How it works
              </p>
              <h2 className="text-3xl sm:text-4xl">Three steps to spud mail</h2>
              <p className="max-w-2xl text-base text-[#5a4637]">
                We handle the penmanship, packaging, and postal run. You just
                bring the joke, the love note, or the surprise.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="textured-card rounded-3xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5a4637]">
                  01
                </p>
                <h3 className="mt-4 text-2xl">Write the message</h3>
                <p className="mt-3 text-sm text-[#5a4637]">
                  Type up to 140 characters. We handwrite it with a bold, smudge-proof
                  pen that reads like a postcard.
                </p>
              </div>
              <div className="textured-card rounded-3xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5a4637]">
                  02
                </p>
                <h3 className="mt-4 text-2xl">We inscribe the potato</h3>
                <p className="mt-3 text-sm text-[#5a4637]">
                  Each potato is cleaned, inspected, and labeled by hand so the
                  message is legible and playful.
                </p>
              </div>
              <div className="textured-card rounded-3xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5a4637]">
                  03
                </p>
                <h3 className="mt-4 text-2xl">Ship it as a parcel</h3>
                <p className="mt-3 text-sm text-[#5a4637]">
                  We mail it with tracking. The recipient opens the box, finds a
                  potato, and laughs.
                </p>
              </div>
            </div>
          </section>

          <section id="menu" className="grid gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5a4637]">
                Choose a spud
              </p>
              <h2 className="text-3xl sm:text-4xl">Pick the potato personality</h2>
              <p className="max-w-2xl text-base text-[#5a4637]">
                Different sizes, different vibes. All of them real, all of them
                ridiculously fun to receive.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="textured-card rounded-3xl p-6">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-[#5a4637]">
                  <span>Classic</span>
                  <span className="rounded-full bg-[#fff7ed] px-3 py-1">Best seller</span>
                </div>
                <h3 className="mt-4 text-2xl">The Polite Spud</h3>
                <p className="mt-3 text-sm text-[#5a4637]">
                  Medium potato, perfect for quick hellos, congratulations, and
                  friendly nudges.
                </p>
                <button className="mt-6 w-full rounded-full bg-[#1f130a] px-4 py-2 text-sm font-semibold text-[#fff7ed]">
                  Pick this one
                </button>
              </div>
              <div className="textured-card rounded-3xl p-6">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-[#5a4637]">
                  <span>Bold</span>
                  <span className="rounded-full bg-[#1f130a] px-3 py-1 text-[#fff7ed]">
                    Extra message space
                  </span>
                </div>
                <h3 className="mt-4 text-2xl">The Loud Tater</h3>
                <p className="mt-3 text-sm text-[#5a4637]">
                  Oversized and attention-grabbing, for birthdays, rival sports
                  fans, or big reveals.
                </p>
                <button className="mt-6 w-full rounded-full bg-[#1f130a] px-4 py-2 text-sm font-semibold text-[#fff7ed]">
                  Pick this one
                </button>
              </div>
              <div className="textured-card rounded-3xl p-6">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-[#5a4637]">
                  <span>Group</span>
                  <span className="rounded-full bg-[#fff7ed] px-3 py-1">For teams</span>
                </div>
                <h3 className="mt-4 text-2xl">The Sack Attack</h3>
                <p className="mt-3 text-sm text-[#5a4637]">
                  Multiple potatoes, multiple notes. Great for office pranks or
                  group celebrations.
                </p>
                <button className="mt-6 w-full rounded-full bg-[#1f130a] px-4 py-2 text-sm font-semibold text-[#fff7ed]">
                  Pick this one
                </button>
              </div>
            </div>
          </section>

          <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5a4637]">
                Handwriting options
              </p>
              <h2 className="text-3xl sm:text-4xl">Make the message feel human</h2>
              <p className="text-base text-[#5a4637]">
                Choose a handwriting style and ink color. We write it by hand,
                then let the potato dry before shipping so the note stays crisp.
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#5a4637]">
                <span className="rounded-full bg-[#fff7ed] px-3 py-1">Bold marker</span>
                <span className="rounded-full bg-[#fff7ed] px-3 py-1">Retro script</span>
                <span className="rounded-full bg-[#fff7ed] px-3 py-1">All caps</span>
              </div>
              <p className="text-xs text-[#5a4637]">
                We do not send hateful or harassing messages. Keep it kind and
                funny.
              </p>
            </div>
            <div className="textured-card relative overflow-hidden rounded-[28px] p-6">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#ffb347] opacity-40 blur-2xl" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5a4637]">
                Message preview
              </p>
              <div className="mt-6 rounded-3xl border border-dashed border-[#1f130a] bg-[#fff7ed] p-6">
                <p className="text-2xl leading-snug">
                  “Happy promotion!
                  <br />
                  You have officially been promoted to Potato Boss.”
                </p>
                <p className="mt-4 text-sm text-[#5a4637]">Signed, your favorite coworker.</p>
              </div>
              <button className="mt-6 w-full rounded-full border border-[#1f130a] px-4 py-2 text-sm font-semibold text-[#1f130a] transition hover:bg-[#1f130a] hover:text-[#fff7ed]">
                Customize handwriting
              </button>
            </div>
          </section>

          <section id="faq" className="grid gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5a4637]">
                FAQ
              </p>
              <h2 className="text-3xl sm:text-4xl">Questions, answered</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="textured-card rounded-3xl p-6">
                <h3 className="text-xl">Does it smell?</h3>
                <p className="mt-3 text-sm text-[#5a4637]">
                  The potato is fresh and mailed quickly. It should arrive just
                  like a grocery potato, without any strong odor.
                </p>
              </div>
              <div className="textured-card rounded-3xl p-6">
                <h3 className="text-xl">Can I send it anonymously?</h3>
                <p className="mt-3 text-sm text-[#5a4637]">
                  You can choose to omit your name, but we always keep sender
                  details for safety and compliance.
                </p>
              </div>
              <div className="textured-card rounded-3xl p-6">
                <h3 className="text-xl">Where do you ship?</h3>
                <p className="mt-3 text-sm text-[#5a4637]">
                  We currently ship within the U.S. and are expanding. Tracking
                  is included on every parcel.
                </p>
              </div>
              <div className="textured-card rounded-3xl p-6">
                <h3 className="text-xl">What is the potato made of?</h3>
                <p className="mt-3 text-sm text-[#5a4637]">
                  Mostly potato. A little bit of mischief.
                </p>
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden rounded-[36px] bg-[#1f130a] px-8 py-14 text-[#fff7ed]">
            <div className="absolute -left-12 -top-16 h-48 w-48 rounded-full bg-[#ffb347] opacity-40 blur-3xl" />
            <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-[#7bb8d6] opacity-30 blur-3xl" />
            <div className="relative z-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f7d7b5]">
                  Ready to prank nicely?
                </p>
                <h2 className="text-3xl sm:text-4xl">Start a Potatote today</h2>
                <p className="text-base text-[#f7d7b5]">
                  A small potato. A big grin. The easiest way to surprise
                  someone without being annoying.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <button className="rounded-full bg-[#fff7ed] px-6 py-3 text-sm font-semibold text-[#1f130a]">
                  Create your message
                </button>
                <button className="rounded-full border border-[#fff7ed] px-6 py-3 text-sm font-semibold text-[#fff7ed]">
                  Talk to support
                </button>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-[#1f130a]/10 px-6 py-10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 text-sm text-[#5a4637] lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-base font-semibold text-[#1f130a]">Potatotes</p>
              <p>Pranks with a pulse. Potatoes with a pen.</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <span>Safety-first humor</span>
              <span>Support: hello@potatotes.com</span>
              <span>© 2026 Potatotes</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
