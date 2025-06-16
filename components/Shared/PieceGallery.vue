<script setup lang="ts">
defineProps<{
  pieces: { type: string; src: string; link: string }[];
}>();
</script>
<template>
  <div class="flex flex-col max-w-screen-md m-auto gap-10">
    <a
      v-for="piece in pieces"
      target="_blank"
      rel="noopener noreferrer"
      class="flex flex-col items-end gap-2"
    >
      <img :src="piece.src" />
      <span v-if="piece.type === 'video'" class="bg-video text-black px-2"
        >VIDEO</span
      >
      <span v-else-if="piece.type === 'picture'" class="bg-img text-black px-2"
        >IMG</span
      >
      <span
        v-else-if="piece.type === 'model'"
        class="bg-installation text-black px-2"
        >MODEL</span
      >
      <span
        v-else-if="piece.type === 'web'"
        class="bg-performance text-black px-2"
        >WEB</span
      >
    </a>
  </div>
</template>
