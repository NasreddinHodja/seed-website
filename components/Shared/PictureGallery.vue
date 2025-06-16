<script setup lang="ts">
defineProps<{
  pictures: { src: string; link: string }[];
}>();
</script>

<template>
  <div class="columns-1 md:columns-3 gap-4 space-y-4">
    <a
      v-for="picture in pictures"
      :key="picture.src"
      :href="picture.link"
      target="_blank"
      rel="noopener noreferrer"
      class="block break-inside-avoid"
    >
      <img :src="picture.src" class="w-full rounded" />
    </a>
  </div>
</template>
