import type { Conversation, GeminiModel } from '../types'

interface CloudProps {
  x: number
  y: number
  size: 'small' | 'medium' | 'large'
  variant?: 'default' | 'pro' | 'flash' | 'spark'
}

const CLOUD_DIMENSIONS = {
  small:  { w: 80,  h: 28 },
  medium: { w: 120, h: 38 },
  large:  { w: 160, h: 48 },
} as const

const VARIANT_FILL: Record<string, string> = {
  default: 'rgba(255,255,255,0.85)',
  pro:     'rgba(173,216,230,0.85)',
  flash:   'rgba(255,243,176,0.85)',
  spark:   'rgba(216,180,254,0.85)',
}

function SkyCloud({ x, y, size, variant = 'default' }: CloudProps) {
  const { w, h } = CLOUD_DIMENSIONS[size]
  const fill = VARIANT_FILL[variant]

  return (
    <div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}px`,
        width: `${w}px`,
        height: `${h}px`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60%',
          background: fill,
          borderRadius: '50px',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '40%',
          left: '15%',
          width: '40%',
          height: '70%',
          background: fill,
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '40%',
          left: '40%',
          width: '35%',
          height: '60%',
          background: fill,
          borderRadius: '50%',
        }}
      />
    </div>
  )
}

export default SkyCloud
export type { CloudProps }
