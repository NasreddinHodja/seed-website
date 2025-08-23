<script setup lang="ts">
defineProps<{
  src: string;
}>();
</script>

<template>
  <div class="fixed inset-0 -z-10 overflow-hidden">
    <video autoplay muted loop playsinline class="w-full h-full object-cover">
      <source :src="src" type="video/mp4" />
    </video>
  </div>
</template>
