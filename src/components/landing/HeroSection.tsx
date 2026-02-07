/**
 * HeroSection — Landing Page Hero
 *
 * Font-display headline with geometric character parade,
 * sparkle accents, and glow CTA. Server component.
 */

import Link from 'next/link'
import { ExperienceCharacter } from '@/components/ui/ExperienceCharacter'

const CHARACTER_TYPES = [
  'quiz',
  'trivia',
  'poll',
  'personality',
  'this_or_that',
  'story',
  'clicker',
] as const

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center px-6 pb-16 pt-20 text-center sm:pt-28">
      {/* Character parade */}
      <div className="mb-10 flex items-end gap-3 sm:gap-4">
        {CHARACTER_TYPES.map((type, i) => (
          <ExperienceCharacter
            key={type}
            type={type}
            size={i === 3 ? 'lg' : 'md'}
            animated
            className={i % 2 === 0 ? 'translate-y-0' : '-translate-y-2'}
          />
        ))}
      </div>

      {/* Headline */}
      <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
        Create interactive experiences{' '}
        <span className="text-gradient-display">with just a conversation</span>
      </h1>

      {/* Tagline */}
      <p className="mt-6 max-w-lg text-lg text-text-secondary">
        Where creators build businesses, one interactive experience at a time.
        No coding required.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex items-center gap-4">
        <Link
          href="#types"
          className="inline-flex items-center gap-2 rounded-xl bg-accent-primary px-6 py-3 font-display text-lg font-semibold text-white shadow-glow transition-all duration-200 hover:bg-accent-primary/90 active:scale-[0.97]"
        >
          Start Creating
        </Link>
        <a
          href="#types"
          className="rounded-xl border border-white/10 px-6 py-3 text-lg font-medium text-text-secondary transition-colors hover:border-white/20 hover:text-text-primary"
        >
          See Examples
        </a>
      </div>
    </section>
  )
}
