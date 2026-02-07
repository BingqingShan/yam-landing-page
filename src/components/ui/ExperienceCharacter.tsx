/**
 * ExperienceCharacter — Geometric Character for Each Experience Type
 *
 * Bold geometric shapes with expressive faces, inspired by
 * the character grid reference. Each experience type has a
 * unique shape and personality.
 */

import { cn } from '@/lib/utils'
import { CHARACTER_SHAPES } from './characterShapes'

type ExperienceType =
  | 'quiz'
  | 'trivia'
  | 'poll'
  | 'personality'
  | 'story'
  | 'clicker'
  | 'this_or_that'

type ExperienceCharacterProps = {
  type: ExperienceType
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  className?: string
}

const SIZE_MAP = {
  sm: 32,
  md: 48,
  lg: 64,
  xl: 96,
} as const

export function ExperienceCharacter({
  type,
  size = 'md',
  animated = false,
  className,
}: ExperienceCharacterProps) {
  const shape = CHARACTER_SHAPES[type]
  if (!shape) return null

  const px = SIZE_MAP[size]

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', animated && 'animate-bounce-subtle', className)}
      aria-label={`${shape.label} character`}
      role="img"
    >
      {/* Body */}
      <path d={shape.bodyPath} fill={shape.color} fillOpacity={0.9} />
      <path
        d={shape.bodyPath}
        fill="none"
        stroke={shape.color}
        strokeWidth={1.5}
        strokeOpacity={0.5}
      />

      {/* Eyes */}
      <circle
        cx={shape.face.leftEye.cx}
        cy={shape.face.leftEye.cy}
        r={shape.face.leftEye.r}
        fill="#0D0D0F"
      />
      <circle
        cx={shape.face.rightEye.cx}
        cy={shape.face.rightEye.cy}
        r={shape.face.rightEye.r}
        fill="#0D0D0F"
      />

      {/* Eye shine */}
      <circle
        cx={shape.face.leftEye.cx + 0.8}
        cy={shape.face.leftEye.cy - 0.8}
        r={shape.face.leftEye.r * 0.35}
        fill="white"
      />
      <circle
        cx={shape.face.rightEye.cx + 0.8}
        cy={shape.face.rightEye.cy - 0.8}
        r={shape.face.rightEye.r * 0.35}
        fill="white"
      />

      {/* Mouth */}
      <path
        d={shape.face.mouth}
        fill="none"
        stroke="#0D0D0F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
