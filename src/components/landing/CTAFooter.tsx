/**
 * CTAFooter — Bottom CTA Section
 *
 * "Join the Creator Club" with pricing hint. Server component.
 */

export function CTAFooter() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
          Start building your{' '}
          <span className="text-gradient">creator business</span>
        </h2>
        <p className="mt-4 text-lg text-text-secondary">
          Free to start. Deploy up to 3 experiences. Upgrade when you grow.
        </p>

        <a
          href="#types"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent-primary px-8 py-4 font-display text-lg font-semibold text-white shadow-glow transition-all duration-200 hover:bg-accent-primary/90 active:scale-[0.97]"
        >
          Start Creating — Free
        </a>

        <p className="mt-4 text-sm text-text-muted">
          No credit card required. Pro plans from $12/mo.
        </p>
      </div>
    </section>
  )
}
