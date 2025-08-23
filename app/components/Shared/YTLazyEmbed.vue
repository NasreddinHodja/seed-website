<script setup lang="ts">
import { ref } from "vue";

defineProps<{ videoId: string }>();
const isPlaying = ref(false);
</script>

<template>
  <div
    class="relative w-full aspect-video cursor-pointer"
    @click="isPlaying = true"
  >
    <img
      v-if="!isPlaying"
      :src="`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`"
      alt="YouTube preview"
      class="w-full h-full object-cover"
    />
    <iframe
      v-else
      class="w-full h-full"
      :src="`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <div
      v-if="!isPlaying"
      class="absolute inset-0 bg-black/40 flex items-center justify-center"
    >
      ▶
    </div>
  </div>
</template>
