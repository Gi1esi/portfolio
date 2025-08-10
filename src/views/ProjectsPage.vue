<template>
  <section
    class="relative py-20 px-5 max-w-6xl mx-auto flex justify-between items-center"
    style="min-height: 250px"
  >
    <div class="w-full flex justify-between items-center">
      <div class="relative z-10 max-w-lg">
        <h2 class="text-3xl font-bold text-brand-primary mb-8">My Portfolio</h2>
        <p class="text-gray-600 dark:text-gray-300">
          This space is a glimpse into the things I’m building, experimenting with, or refining as I
          grow. They all of them reflect where I’m headed and what I care about solving.
        </p>
      </div>
    </div>
    <svg
      ref="svgRef"
      class="absolute right-0 top-0 h-full w-1/2 pointer-events-none hidden md:block"
      style="opacity: 0.25"
      viewBox="0 0 400 200"
      xmlns="http://www.w3.org/2000/svg"
    ></svg>
  </section>

  <div class="max-w-6xl mx-auto px-4 hero">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="(post, index) in posts" :key="index" class="flex flex-col">
        <div class="aspect-[3/2] bg-gray-200 rounded-md overflow-hidden">
          <img :src="post.thumbnail" :alt="post.title" class="w-full h-full object-cover" />
        </div>
        <h3 class="mt-3 text-base font-medium text-gray-800">{{ post.title }}</h3>
      </div>
    </div>
  </div>

  <my-stack></my-stack>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MyStack from '@/components/MyStack.vue'

const svgRef = ref(null)
const width = 400
const height = 170
const nodeCount = 30
const posts = []

onMounted(() => {
  const svg = svgRef.value
  if (!svg) return

  const nodes = []
  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      baseX: Math.random() * width * 0.9 + width * 0.05,
      baseY: Math.random() * height * 0.9 + height * 0.05,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      radius: 5,
      pulsePhase: Math.random() * Math.PI * 2,
    })
  }

  const nodeElements = nodes.map(() => {
    const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    c.setAttribute('r', 4)
    c.setAttribute('fill', '#208888')
    svg.appendChild(c)
    return c
  })

  const lines = []
  for (let i = 0; i < nodeCount; i++) {
    for (let j = i + 1; j < nodeCount; j++) {
      const dx = nodes[i].baseX - nodes[j].baseX
      const dy = nodes[i].baseY - nodes[j].baseY
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 100) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
        line.setAttribute('stroke', '#ff644f')
        line.setAttribute('stroke-width', 1)
        line.setAttribute('stroke-opacity', 0.15)
        svg.appendChild(line)
        lines.push({ line, i, j, dist })
      }
    }
  }

  let mousePos = null

  function update() {
    const time = performance.now() / 1000
    nodes.forEach((node, idx) => {
      const pulse = 1 + 0.15 * Math.sin(time * 3 + node.pulsePhase)
      const r = node.radius * pulse
      nodeElements[idx].setAttribute('r', r)

      if (!mousePos) {
        node.x = node.baseX
        node.y = node.baseY
        node.vx = 0
        node.vy = 0
      } else {
        const dx = node.x - mousePos.x
        const dy = node.y - mousePos.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const forceRadius = 100

        if (dist < forceRadius && dist > 1) {
          const force = ((forceRadius - dist) / forceRadius) * 0.12
          node.vx += (dx / dist) * force
          node.vy += (dy / dist) * force
        }

        const springStrength = 0.07
        node.vx += (node.baseX - node.x) * springStrength
        node.vy += (node.baseY - node.y) * springStrength

        node.vx *= 0.85
        node.vy *= 0.85

        node.x += node.vx
        node.y += node.vy
      }

      nodeElements[idx].setAttribute('cx', node.x)
      nodeElements[idx].setAttribute('cy', node.y)
    })

    lines.forEach(({ line, i, j, dist }) => {
      line.setAttribute('x1', nodes[i].x)
      line.setAttribute('y1', nodes[i].y)
      line.setAttribute('x2', nodes[j].x)
      line.setAttribute('y2', nodes[j].y)

      const dx = nodes[i].x - nodes[j].x
      const dy = nodes[i].y - nodes[j].y
      const currDist = Math.sqrt(dx * dx + dy * dy)
      const maxDist = 100
      let opacity = 0.2 * (1 - currDist / maxDist)
      opacity = opacity < 0 ? 0 : opacity
      line.setAttribute('stroke-opacity', opacity)
    })

    requestAnimationFrame(update)
  }
  update()

  svg.parentElement.addEventListener('mousemove', (e) => {
    const rect = svg.getBoundingClientRect()
    mousePos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  })

  svg.parentElement.addEventListener('mouseleave', () => {
    mousePos = null
  })
})
</script>
