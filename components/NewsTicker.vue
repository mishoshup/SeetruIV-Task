<!-- components/NewsTicker.vue -->
<template>
  <div
    class="news-ticker bg-primary-800 relative flex h-full w-auto items-center justify-center overflow-hidden text-white"
  >
    <div ref="ticker" class="ticker-content absolute text-sm whitespace-nowrap">
      {{ text }}
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { useElementSize } from '@vueuse/core';

  defineProps({
    text: {
      type: String,
      default:
        'Breaking News: This is a sample news ticker text that keeps moving!',
    },
  });

  const ticker = ref(null);
  const { width } = useElementSize(ticker);

  onMounted(() => {
    const duration = width.value / 50; // Adjust speed: larger divisor = slower
    ticker.value.style.animationDuration = `${duration}s`;
  });
</script>

<style scoped>
  .ticker-content {
    animation: marquee linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>
