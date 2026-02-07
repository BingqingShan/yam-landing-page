/**
 * Landing Page — Yam for Creator
 *
 * Neon Craft v4 landing with hero, type showcase,
 * how-it-works, platforms, and CTA footer.
 */

import { HeroSection } from '@/components/landing/HeroSection'
import { TypeShowcase } from '@/components/landing/TypeShowcase'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { PlatformTargets } from '@/components/landing/PlatformTargets'
import { CTAFooter } from '@/components/landing/CTAFooter'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-deep">
      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-40 border-b border-black/5 bg-bg-deep/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="font-display text-lg font-bold text-black">
            Yam
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#types"
              className="rounded-full bg-black px-6 py-2 text-sm font-medium text-white transition-all hover:scale-105"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-14" />

      <HeroSection />

      {/* Divider */}
      <div className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <TypeShowcase />

      <div className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <HowItWorks />

      <div className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <PlatformTargets />

      <div className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <CTAFooter />
    </main>
  )
}
