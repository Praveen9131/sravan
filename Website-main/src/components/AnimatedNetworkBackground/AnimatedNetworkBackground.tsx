import React, { useEffect, useRef } from 'react'

interface AnimatedNetworkBackgroundProps {
  className?: string
}

const AnimatedNetworkBackground: React.FC<AnimatedNetworkBackgroundProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Get theme color - pink for dark mode, darker pink/red for light mode
    const getThemeColor = () => {
      const isDark = document.documentElement.classList.contains('dark')
      return isDark ? '#ff6b9d' : '#ec4899' // Pink for dark, darker pink for light mode visibility
    }

    // Network nodes (dots) - more concentrated in upper-left and central areas
    const nodes: Array<{ x: number; y: number; vx: number; vy: number }> = []
    const nodeCount = 60
    const connectionDistance = 150

    // Initialize nodes - more concentrated in upper-left and central areas
    for (let i = 0; i < nodeCount; i++) {
      // Bias nodes towards upper-left and center
      const biasX = Math.random() < 0.6 ? Math.random() * (canvas.width * 0.6) : Math.random() * canvas.width
      const biasY = Math.random() < 0.6 ? Math.random() * (canvas.height * 0.5) : Math.random() * canvas.height
      
      nodes.push({
        x: biasX,
        y: biasY,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      })
    }

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      // Theme changed, continue animation will pick up new color
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const themeColor = getThemeColor()

      // Update node positions
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Keep nodes within bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))
      })

      // Draw connections (lines) - fade out towards edges
      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach((otherNode) => {
          const dx = node.x - otherNode.x
          const dy = node.y - otherNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance
            // Fade more towards edges
            const edgeFade = Math.min(
              Math.min(node.x / (canvas.width * 0.3), 1),
              Math.min((canvas.width - node.x) / (canvas.width * 0.3), 1),
              Math.min(node.y / (canvas.height * 0.3), 1),
              Math.min((canvas.height - node.y) / (canvas.height * 0.3), 1)
            )
            const finalOpacity = opacity * edgeFade
            ctx.strokeStyle = `${themeColor}${Math.floor(finalOpacity * 30).toString(16).padStart(2, '0')}`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.stroke()
          }
        })
      })

      // Draw nodes (dots)
      nodes.forEach((node) => {
        const edgeFade = Math.min(
          Math.min(node.x / (canvas.width * 0.3), 1),
          Math.min((canvas.width - node.x) / (canvas.width * 0.3), 1),
          Math.min(node.y / (canvas.height * 0.3), 1),
          Math.min((canvas.height - node.y) / (canvas.height * 0.3), 1)
        )
        ctx.fillStyle = `${themeColor}${Math.floor(edgeFade * 128).toString(16).padStart(2, '0')}`
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  )
}

export default AnimatedNetworkBackground

