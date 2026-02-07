/**
 * Geometric Character Shape Data
 *
 * SVG path data for experience type characters.
 * Inspired by bold geometric shapes with expressive faces.
 * Each shape fits a 64x64 viewBox.
 */

type FaceElements = {
  leftEye: { cx: number; cy: number; r: number }
  rightEye: { cx: number; cy: number; r: number }
  mouth: string // SVG path
}

type CharacterShape = {
  bodyPath: string
  face: FaceElements
  color: string
  glowShadow: string
  label: string
}

// Star (5-pointed) — Quiz
const quizShape: CharacterShape = {
  bodyPath:
    'M32 4 L39.5 22.5 L59 22.5 L43.5 35 L49 54 L32 43 L15 54 L20.5 35 L5 22.5 L24.5 22.5 Z',
  face: {
    leftEye: { cx: 25, cy: 30, r: 2.5 },
    rightEye: { cx: 39, cy: 30, r: 2.5 },
    mouth: 'M26 38 Q32 44 38 38',
  },
  color: '#818CF8',
  glowShadow: 'glow-quiz',
  label: 'Quiz',
}

// Hexagon — Trivia
const triviaShape: CharacterShape = {
  bodyPath: 'M32 6 L54 18 L54 42 L32 54 L10 42 L10 18 Z',
  face: {
    leftEye: { cx: 24, cy: 28, r: 2.5 },
    rightEye: { cx: 40, cy: 28, r: 2.5 },
    mouth: 'M24 38 L32 42 L40 38',
  },
  color: '#F87171',
  glowShadow: 'glow-trivia',
  label: 'Trivia',
}

// Circle — Poll
const pollShape: CharacterShape = {
  bodyPath: 'M32 6 A26 26 0 1 1 31.99 6 Z',
  face: {
    leftEye: { cx: 24, cy: 28, r: 3 },
    rightEye: { cx: 40, cy: 28, r: 3 },
    mouth: 'M24 38 Q32 46 40 38',
  },
  color: '#60A5FA',
  glowShadow: 'glow-poll',
  label: 'Poll',
}

// Heart — Personality
const personalityShape: CharacterShape = {
  bodyPath: 'M32 56 L8 32 A14 14 0 0 1 32 14 A14 14 0 0 1 56 32 Z',
  face: {
    leftEye: { cx: 24, cy: 30, r: 2.5 },
    rightEye: { cx: 40, cy: 30, r: 2.5 },
    mouth: 'M26 39 Q32 44 38 39',
  },
  color: '#C084FC',
  glowShadow: 'glow-personality',
  label: 'Personality',
}

// Diamond — Story
const storyShape: CharacterShape = {
  bodyPath: 'M32 6 L56 32 L32 58 L8 32 Z',
  face: {
    leftEye: { cx: 25, cy: 30, r: 2.5 },
    rightEye: { cx: 39, cy: 30, r: 2.5 },
    mouth: 'M27 38 Q32 42 37 38',
  },
  color: '#F472B6',
  glowShadow: 'glow-story',
  label: 'Story',
}

// Rounded Square — Clicker
const clickerShape: CharacterShape = {
  bodyPath:
    'M16 8 H48 A8 8 0 0 1 56 16 V48 A8 8 0 0 1 48 56 H16 A8 8 0 0 1 8 48 V16 A8 8 0 0 1 16 8 Z',
  face: {
    leftEye: { cx: 24, cy: 28, r: 3 },
    rightEye: { cx: 40, cy: 28, r: 3 },
    mouth: 'M22 38 Q32 48 42 38',
  },
  color: '#34D399',
  glowShadow: 'glow-clicker',
  label: 'Clicker',
}

// Triangle — This or That
const thisOrThatShape: CharacterShape = {
  bodyPath: 'M32 8 L58 54 L6 54 Z',
  face: {
    leftEye: { cx: 26, cy: 36, r: 2.5 },
    rightEye: { cx: 38, cy: 36, r: 2.5 },
    mouth: 'M28 44 L32 46 L36 44',
  },
  color: '#FBBF24',
  glowShadow: 'glow-this-or-that',
  label: 'This or That',
}

export const CHARACTER_SHAPES: Record<string, CharacterShape> = {
  quiz: quizShape,
  trivia: triviaShape,
  poll: pollShape,
  personality: personalityShape,
  story: storyShape,
  clicker: clickerShape,
  this_or_that: thisOrThatShape,
}

export type { CharacterShape, FaceElements }
