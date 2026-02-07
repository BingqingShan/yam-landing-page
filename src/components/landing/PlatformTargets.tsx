/**
 * PlatformTargets — Deploy Target Platforms
 *
 * Discord, Telegram, Web columns. Server component.
 */

const PLATFORMS = [
  {
    name: 'Discord',
    icon: '🎮',
    description: 'Discord Activities',
    benefit:
      'Engage your server with interactive experiences right in voice channels.',
  },
  {
    name: 'Telegram',
    icon: '📱',
    description: 'Mini Apps',
    benefit: 'Reach millions through Telegram Mini Apps with built-in sharing.',
  },
  {
    name: 'Web',
    icon: '🌐',
    description: 'Shareable Links',
    benefit:
      'Share anywhere with a link. Embed on your site, newsletter, or socials.',
  },
]

export function PlatformTargets() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-display text-2xl font-bold text-text-primary sm:text-3xl">
          Deploy Everywhere
        </h2>
        <p className="mt-3 text-center text-text-secondary">
          One experience, every platform your audience lives on.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {PLATFORMS.map((platform) => (
            <div
              key={platform.name}
              className="rounded-xl border border-white/10 bg-bg-surface p-6 text-center transition-all duration-200 hover:border-white/20"
            >
              <div className="text-4xl">{platform.icon}</div>
              <h3 className="mt-3 font-display text-lg font-semibold text-text-primary">
                {platform.name}
              </h3>
              <p className="text-xs text-text-muted">{platform.description}</p>
              <p className="mt-3 text-sm text-text-secondary">
                {platform.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
