/**
 * HowItWorks — 3-Step Process Section
 *
 * Describe -> AI Creates -> Deploy. Server component.
 */

const STEPS = [
  {
    number: '1',
    title: 'Describe',
    description:
      'Tell Yam what you want in plain language. A trivia night, a personality quiz, anything.',
    visual: '💬',
  },
  {
    number: '2',
    title: 'AI Creates',
    description:
      'Yam builds the full interactive experience in seconds. Preview it live, iterate with chat.',
    visual: '✨',
  },
  {
    number: '3',
    title: 'Deploy',
    description:
      'One click to Discord, Telegram, or standalone web. Your community plays instantly.',
    visual: '🚀',
  },
]

export function HowItWorks() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-display text-2xl font-bold text-text-primary sm:text-3xl">
          How It Works
        </h2>
        <p className="mt-3 text-center text-text-secondary">
          From idea to live experience in under a minute.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number} className="relative text-center">
              {/* Step number */}
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-accent-primary/20 font-display text-lg font-bold text-accent-primary">
                {step.number}
              </div>

              {/* Visual */}
              <div className="mt-4 flex h-16 items-center justify-center text-4xl">
                {step.visual}
              </div>

              {/* Text */}
              <h3 className="mt-3 font-display text-lg font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
