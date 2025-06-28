<template>
  <section
    class="flex flex-col lg:flex-row w-full bg-white text-gray-900 min-h-[400px] max-w-6xl mx-auto"
  >
    <!-- CHANGELOG -->
    <div class="w-full lg:w-1/2 p-8 border-r border-brand-primary space-y-6">
      <h2 class="text-3xl font-bold text-brand-primary mb-8">CHANGELOG</h2>
      <ul class="space-y-6">
        <li
          v-for="(entry, index) in changelog"
          :key="index"
          class="cursor-pointer text-lg font-semibold hover:text-brand-primary transition"
        >
          <a :href="entry.link">{{ entry.version }} — {{ entry.title }}</a>
        </li>
      </ul>
    </div>

    <!-- NODE GRAPH -->
    <div class="w-full lg:w-1/2 p-8 relative min-h-[400px]">
      <svg
        :width="size"
        :height="size"
        viewBox="0 0 500 500"
        class="mx-auto"
        role="img"
        aria-label="Skill graph"
      >
        <!-- Center node -->
        <circle
          :cx="center"
          :cy="center"
          r="60"
          :fill="brandPrimary"
          class="cursor-pointer"
          @mouseenter="hoverNode('System Engineer')"
          @mouseleave="hoverNode(null)"
          :style="centerNodeStyle"
        />
        <text
          :x="center"
          :y="center + 7"
          text-anchor="middle"
          fill="white"
          font-weight="bold"
          font-family="sans-serif"
          font-size="18"
          pointer-events="none"
        >
          System Engineer
        </text>

        <!-- Links center to outer nodes -->
        <line
          v-for="(node, i) in outerNodes"
          :key="'link-center-' + i"
          :x1="center"
          :y1="center"
          :x2="node.x"
          :y2="node.y"
          :stroke="brandPrimary"
          stroke-width="3"
        />

        <!-- Links between adjacent outer nodes -->
        <line
          v-for="(node, i) in outerNodes"
          :key="'link-adj-' + i"
          :x1="node.x"
          :y1="node.y"
          :x2="outerNodes[(i + 1) % outerNodes.length].x"
          :y2="outerNodes[(i + 1) % outerNodes.length].y"
          :stroke="brandPrimary"
          stroke-width="3"
        />

        <!-- Outer nodes -->
        <g
          v-for="(node, i) in outerNodes"
          :key="'node-' + i"
          class="cursor-pointer"
          @mouseenter="hoverNode(node.id)"
          @mouseleave="hoverNode(null)"
          :style="nodeStyle(node.id)"
        >
          <circle
            :cx="node.x"
            :cy="node.y"
            r="40"
            :fill="brandPrimary"
            stroke="white"
            stroke-width="3"
          />
          <text
            :x="node.x"
            :y="node.y + 7"
            text-anchor="middle"
            fill="white"
            font-weight="600"
            font-family="sans-serif"
            font-size="16"
            pointer-events="none"
          >
            {{ node.id }}
          </text>
        </g>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'

const changelog = [
  { version: 'v1.0', title: 'Graduated', link: '/blog/v1-0' },
  { version: 'v1.1', title: 'First Database Project', link: '/blog/v1-1' },
  { version: 'v1.2', title: 'Cloud Deployment', link: '/blog/v1-2' },
  { version: 'v1.3', title: 'IoT Integration', link: '/blog/v1-3' },
  { version: 'v2.0', title: 'Startup Founder', link: '/blog/v2-0' },
]

const brandPrimary = '#00afb9'
const size = 500
const center = size / 2
const radius = 150

const outerNodeNames = ['Web Dev', 'APIs', 'AI/ML', 'Cloud', 'System Admin']

const hoveredNode = ref(null)

const outerNodes = reactive(
  outerNodeNames.map((id, i) => {
    const angle = (i / outerNodeNames.length) * 2 * Math.PI - Math.PI / 2
    return {
      id,
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    }
  }),
)

// Style for center node - scale and glow on hover
const centerNodeStyle = computed(() => ({
  transform: hoveredNode.value === 'System Engineer' ? 'scale(1.1)' : 'scale(1)',
  transition: 'transform 0.3s ease',
  filter: hoveredNode.value === 'System Engineer' ? 'drop-shadow(0 0 6px #00afb9)' : 'none',
}))

// Style for outer nodes - scale and glow on hover
function nodeStyle(id) {
  return {
    transform: hoveredNode.value === id ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.3s ease',
    filter: hoveredNode.value === id ? 'drop-shadow(0 0 6px #00afb9)' : 'none',
  }
}

function hoverNode(id) {
  hoveredNode.value = id
}
</script>

<style scoped>
.border-r {
  border-right-color: #00afb9;
  border-right-width: 2px;
}

@media (max-width: 1024px) {
  .border-r {
    border-right: none;
  }
}
</style>
