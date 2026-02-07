/**
 * TypeShowcase — Experience Type Grid
 *
 * Shows all 7 experience types with geometric characters
 * and type-specific glow on hover. Server component.
 */

import { ExperienceCharacter } from '@/components/ui/ExperienceCharacter'

type ShowcaseItem = {
  type:
    | 'quiz'
    | 'trivia'
    | 'poll'
    | 'personality'
    | 'story'
    | 'clicker'
    | 'this_or_that'
  title: string
  description: string
  glowClass: string
  isPro: boolean
}

const TYPES: ShowcaseItem[] = [
  {
    type: 'quiz',
    title: 'Quiz',
    description: 'Test your audience with timed questions and scoreboards',
    glowClass: 'hover:shadow-glow-quiz hover:border-type-quiz/30',
    isPro: false,
  },
  {
    type: 'trivia',
    title: 'Trivia Night',
    description: 'Category-based team trivia for groups',
    glowClass: 'hover:shadow-glow-trivia hover:border-type-trivia/30',
    isPro: false,
  },
  {
    type: 'poll',
    title: 'Poll',
    description: 'Gather opinions and show live results',
    glowClass: 'hover:shadow-glow-poll hover:border-type-poll/30',
    isPro: false,
  },
  {
    type: 'personality',
    title: 'Personality Quiz',
    description: '"Which X are you?" tests with archetypes',
    glowClass: 'hover:shadow-glow-personality hover:border-type-personality/30',
    isPro: false,
  },
  {
    type: 'this_or_that',
    title: 'This or That',
    description: 'Would you rather dilemmas and preference votes',
    glowClass:
      'hover:shadow-glow-this-or-that hover:border-type-this-or-that/30',
    isPro: false,
  },
  {
    type: 'story',
    title: 'Story',
    description: 'Branching choose-your-own-adventure narratives',
    glowClass: 'hover:shadow-glow-story hover:border-type-story/30',
    isPro: true,
  },
  {
    type: 'clicker',
    title: 'Clicker',
    description: 'Addictive tap-to-earn games with upgrades',
    glowClass: 'hover:shadow-glow-clicker hover:border-type-clicker/30',
    isPro: true,
  },
]

export function TypeShowcase() {
  return (
    <section id="types" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-2xl font-bold text-text-primary sm:text-3xl">
          7 Experience Types
        </h2>
        <p className="mt-3 text-center text-text-secondary">
          Every format your community loves, built by AI in seconds.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TYPES.map((item) => (
            <div
              key={item.type}
              className={`group relative flex flex-col items-center rounded-3xl border-4 border-black bg-white p-6 text-center shadow-comic transition-all duration-200 hover:-translate-y-2 hover:rotate-1 hover:shadow-comic-lg ${item.glowClass}`}
            >
              {item.isPro && (
                <span className="pro-badge absolute -right-4 -top-4 rotate-12 border-4 border-black bg-accent-primary px-3 py-1 text-xs font-black uppercase text-black shadow-comic">Pro</span>
              )}
              <ExperienceCharacter
                type={item.type}
                size="xl"
                className="transition-transform group-hover:scale-105"
              />
              <h3 className="mt-4 font-display text-base font-semibold text-text-primary">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
