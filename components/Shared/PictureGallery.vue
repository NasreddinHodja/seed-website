<script setup lang="ts">
defineProps<{
  pictures: { src: string; link: string }[];
}>();
</script>

<template>
  <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
    <a
      v-for="picture in pictures"
      target="_blank"
      rel="noopener noreferrer"
      class="flex flex-col items-end gap-2"
    >
      <img :src="picture.src" class="w-full" />
    </a>
  </div>
</template>
