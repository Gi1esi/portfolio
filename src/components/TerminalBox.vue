<template>
  <div
    class="hidden md:block w-[85%] md:w-[400px] lg:w-[500px] rounded-xl p-6 font-mono h-[200px] shadow-lg transition-colors bg-neutral-bg text-neutral-text dark:bg-brand-primary/10 dark:text-neutral-darkText overflow-y-scroll scrollbar-none"
  >
    <!-- Output lines -->
    <div v-for="(line, index) in output" :key="index" class="whitespace-pre-wrap">
      <span v-if="line.type === 'input'" class="text-brand-secondary">
        {{ prompt }} {{ line.text }}
      </span>
      <span v-else>{{ line.text }}</span>
    </div>

    <!-- Input line -->
    <div class="flex items-center">
      <span class="text-brand-secondary mr-2">{{ prompt }}</span>
      <input
        v-model="currentInput"
        @keyup.enter="handleCommand"
        @keydown="handleKey"
        ref="input"
        class="flex-1 bg-transparent border-none outline-none focus:ring-0 text-neutral-text dark:text-neutral-darkText"
        autofocus
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Object of commands: key = command, value = output text or function
    commands: {
      type: Object,
      required: true,
    },
    prompt: {
      type: String,
      default: 'grace@portfolio:~$',
    },
  },
  data() {
    return {
      output: [],
      currentInput: '',
      history: [],
      historyIndex: -1,
    }
  },
  mounted() {
    this.$refs.input.focus()
  },
  methods: {
    handleCommand() {
      const cmd = this.currentInput.trim()
      if (!cmd) return

      // push user input
      this.output.push({ type: 'input', text: cmd })
      this.history.push(cmd)
      this.historyIndex = this.history.length

      // handle commands dynamically from prop
      if (cmd === 'clear') {
        this.output = []
      } else if (this.commands[cmd]) {
        const result = this.commands[cmd]
        if (typeof result === 'function') {
          this.output.push({ type: 'output', text: result() })
        } else {
          this.output.push({ type: 'output', text: result })
        }
      } else {
        this.output.push({ type: 'output', text: `Command not found: ${cmd}` })
      }

      this.currentInput = ''
      this.scrollToBottom()
    },
    handleKey(e) {
      if (e.key === 'ArrowUp') {
        if (this.historyIndex > 0) {
          this.historyIndex--
          this.currentInput = this.history[this.historyIndex]
        }
        e.preventDefault()
      }
      if (e.key === 'ArrowDown') {
        if (this.historyIndex < this.history.length - 1) {
          this.historyIndex++
          this.currentInput = this.history[this.historyIndex]
        } else {
          this.historyIndex = this.history.length
          this.currentInput = ''
        }
        e.preventDefault()
      }
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$el
        container.scrollTop = container.scrollHeight
      })
    },
  },
}
</script>

<style>
/* Hide scrollbar (Chrome, Safari, Edge) */
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar (Firefox) */
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
