/**
 * Generates card images for the CircularGallery
 */

export interface CardConfig {
  heading: string
  subheading: string
  description: string
  bottomText?: string
  accentColor?: string
  width?: number
  height?: number
}

export function generateCardImage(config: CardConfig): string {
  const width = config.width || 800
  const height = config.height || 600
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  
  if (!ctx) return ''

  // Light background gradient matching website theme
  const bgGradient = ctx.createLinearGradient(0, 0, width, height)
  bgGradient.addColorStop(0, '#ffffff')
  bgGradient.addColorStop(0.5, '#f9fafb')
  bgGradient.addColorStop(1, '#f3f4f6')
  ctx.fillStyle = bgGradient
  ctx.fillRect(0, 0, width, height)

  // Accent colors - use website theme (#780606) by default
  const accent1 = config.accentColor || '#780606'
  const accent2 = config.accentColor || '#5c0404'
  const accentGradient = ctx.createLinearGradient(0, 0, width, 0)
  accentGradient.addColorStop(0, accent1)
  accentGradient.addColorStop(1, accent2)
  
  // Top accent bar
  ctx.fillStyle = accentGradient
  ctx.fillRect(0, 0, width, 6)

  // Corner accents
  const cornerSize = 60
  ctx.strokeStyle = accentGradient
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(0, cornerSize)
  ctx.lineTo(0, 0)
  ctx.lineTo(cornerSize, 0)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(width - cornerSize, 0)
  ctx.lineTo(width, 0)
  ctx.lineTo(width, cornerSize)
  ctx.stroke()

  // Icon area (top center)
  const iconY = 80
  const iconSize = 50
  const iconGradient = ctx.createRadialGradient(width/2, iconY, 0, width/2, iconY, iconSize)
  iconGradient.addColorStop(0, accent1)
  iconGradient.addColorStop(0.7, accent2)
  iconGradient.addColorStop(1, 'rgba(120, 6, 6, 0.3)')
  ctx.fillStyle = iconGradient
  ctx.beginPath()
  ctx.arc(width/2, iconY, iconSize, 0, Math.PI * 2)
  ctx.fill()
  ctx.fillStyle = '#ffffff'
  ctx.beginPath()
  ctx.arc(width/2, iconY, iconSize * 0.6, 0, Math.PI * 2)
  ctx.fill()

  // Heading
  ctx.fillStyle = '#111827'
  ctx.font = 'bold 42px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'top'
  ctx.fillText(config.heading, width / 2, 160)

  // Subheading
  ctx.fillStyle = accent1
  ctx.font = 'bold 28px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  ctx.fillText(config.subheading, width / 2, 220)

  // Description
  ctx.fillStyle = '#4b5563'
  ctx.font = '20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  const descLines = wrapText(ctx, config.description, width - 120)
  descLines.forEach((line, i) => {
    ctx.fillText(line, width / 2, 280 + (i * 32))
  })

  // Separator line
  const sepY = height - 120
  const lineGrad = ctx.createLinearGradient(width/2 - 100, sepY, width/2 + 100, sepY)
  lineGrad.addColorStop(0, 'transparent')
  lineGrad.addColorStop(0.5, accent1)
  lineGrad.addColorStop(1, 'transparent')
  ctx.strokeStyle = lineGrad
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(width/2 - 100, sepY)
  ctx.lineTo(width/2 + 100, sepY)
  ctx.stroke()

  // Bottom text
  if (config.bottomText) {
    ctx.fillStyle = '#6b7280'
    ctx.font = '16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    const bottomLines = wrapText(ctx, config.bottomText, width - 120)
    bottomLines.forEach((line, i) => {
      ctx.fillText(line, width / 2, sepY + 30 + (i * 22))
    })
  }

  // Edge glow with theme color
  const edgeGrad = ctx.createLinearGradient(0, 0, 0, height)
  edgeGrad.addColorStop(0, 'rgba(120, 6, 6, 0.05)')
  edgeGrad.addColorStop(0.5, 'transparent')
  edgeGrad.addColorStop(1, 'rgba(120, 6, 6, 0.05)')
  ctx.fillStyle = edgeGrad
  ctx.fillRect(0, 0, 20, height)
  ctx.fillRect(width - 20, 0, 20, height)

  return canvas.toDataURL('image/png')
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(' ')
  const lines: string[] = []
  let currentLine = words[0]

  for (let i = 1; i < words.length; i++) {
    const word = words[i]
    const width = ctx.measureText(currentLine + ' ' + word).width
    if (width < maxWidth) {
      currentLine += ' ' + word
    } else {
      lines.push(currentLine)
      currentLine = word
    }
  }
  lines.push(currentLine)
  return lines
}

// Generate all 6 cards
export function generateGalleryCards(): Array<{ image: string; text: string }> {
  return [
    // Card 1 - Machine Learning
    {
      image: generateCardImage({
        heading: 'Our Portfolio',
        subheading: 'Galactic Therapeutics',
        description: 'Champion Genes',
        bottomText: 'Galactic 1000+ Payer Data and Vertical Data Generation Prediction',
        accentColor: '#780606',
      }),
      text: '61+ ML Models',
    },
    // Card 2 - Gen AI
    {
      image: generateCardImage({
        heading: 'Our Products',
        subheading: 'Gen AI',
        description: 'DBaaS - Digital Business as a Service',
        accentColor: '#780606',
      }),
      text: 'Digital Business as a Service',
    },
    // Card 3 - AITV
    {
      image: generateCardImage({
        heading: 'AITV',
        subheading: 'Audio Video Text Image',
        description: 'Content Factory - Transform multimedia content seamlessly',
        accentColor: '#780606',
      }),
      text: 'Multimedia Conversion',
    },
    // Card 4 - Vision Project
    {
      image: generateCardImage({
        heading: 'Our Vision Project',
        subheading: 'Our Progress',
        description: 'Vision-based project where things are captured with camera',
        accentColor: '#780606',
      }),
      text: 'Camera & Object Detection',
    },
    // Card 5 - Placeholder
    {
      image: generateCardImage({
        heading: 'Coming Soon',
        subheading: 'New Innovation',
        description: 'Stay tuned for our next breakthrough',
        accentColor: '#780606',
      }),
      text: 'Placeholder',
    },
    // Card 6 - Vision AI Football Tracking
    {
      image: generateCardImage({
        heading: 'Vision AI',
        subheading: 'Motion Understanding',
        description: 'Real-time object tracking and trajectory prediction',
        accentColor: '#780606',
      }),
      text: 'Vision AI - Motion Tracking',
    },
  ]
}

