<script setup lang="ts">
defineProps<{
  pieces: { type: string; src: string; link: string }[];
}>();
</script>

<template>
  <div class="flex flex-col m-auto gap-6 md:gap-24">
    <SharedLink
      v-for="piece in pieces"
      :key="piece.link"
      :url="piece.link"
      class="flex flex-col items-end gap-2"
    >
      <SharedImageView :url="piece.src" class="m-auto" />
      <span v-if="piece.type === 'video'" class="bg-video text-black px-2"
        >VIDEO</span
      >
      <span
        v-else-if="['picture', 'image'].includes(piece.type)"
        class="bg-img text-black px-2"
        >IMG</span
      >
      <span v-else-if="piece.type === 'gif'" class="bg-img text-black px-2"
        >GIF</span
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
    </SharedLink>
  </div>
</template>
