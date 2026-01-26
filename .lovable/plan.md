

## Illuminator Landing Page

A professional, technically-focused single-page website for Illuminator - a high-performance graph visualization tool targeting researchers and engineers.

---

### Visual Identity

**Theme:** Dark background (#0a0a0a / deep charcoal) with electric blue accent colors (#3b82f6) for CTAs, highlights, and interactive elements.

**Hero Animation:** Subtle animated graph nodes floating and connecting in the background - nodes gently pulsing and edges drawing between them. Lightweight CSS/canvas-based animation that won't distract from the content.

**Typography:** Clean, technical sans-serif font. Clear hierarchy with strong headlines.

---

### Page Structure

**1. Fixed Header Navigation**
- Logo/wordmark "Illuminator" on the left
- Smooth-scroll links: What It Is • How It Works • Performance • Demo • Get Started
- Download CTA button (prominent, blue)

**2. Hero Section**
- Animated graph visualization in background
- Headline: "Interactive visualization for large-scale graphs"
- Subheadline: One sentence explaining the value proposition (speed + scale + simplicity)
- Two CTAs: "Try the Demo" (primary) and "Download" (secondary)

**3. What Illuminator Is**
- Brief explanation of graph visualization and processing
- Grid of domain icons showing use cases:
  - Biotech & biological networks
  - Fraud detection & financial networks
  - Knowledge graphs
  - Infrastructure & dependency graphs
  - Machine learning research

**4. How It Works**
- Three-column layout explaining the core technical approach:
  - **Memory Efficient:** 16-byte node structures, 8-byte edge references
  - **GPU-Accelerated:** Instanced quads with SDF textures, fewer shader invocations
  - **Fast Loading:** Direct memory loading, designed for rapid iteration
- Clean icons and concise technical descriptions (no buzzwords)

**5. Performance Highlights**
- Visual stats/metrics display:
  - "100,000 nodes + 1,000,000 edges = ~150MB"
  - "Fluid interaction at scale"
  - "Instant graph loading"
- Optional: Comparison callout (vs. traditional tools that struggle at this scale)

**6. Demo & Tutorial Section**
- Placeholder for embedded video (16:9 aspect ratio)
- Brief caption explaining what the demo covers
- Screenshot or animation placeholder showing graph interaction

**7. Get Started / Download**
- Clear CTA section at the bottom
- Download button (placeholder link)
- Link to Documentation (placeholder)
- Link to GitHub (placeholder)

**8. Footer**
- Copyright
- Links to docs, GitHub, contact

---

### Technical Notes
- Single-page React app with smooth scroll navigation
- Responsive design for desktop and mobile
- Lightweight canvas or CSS animation for the hero (performant)
- Placeholder sections for video, screenshots, and links to be updated later

