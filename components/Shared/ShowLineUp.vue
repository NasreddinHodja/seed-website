<script setup lang="ts">
defineProps<{
  artists: { link: string; name: string }[];
}>();
</script>

<template>
  <div class="flex w-full flex-wrap justify-between gap-4 md:pb-10">
    <a
      v-for="artist in artists"
      :href="artist.link"
      target="_blank"
      rel="noopener noreferrer"
      class="text-4xl bg-white text-black px-2"
    >
      {{ artist.name }}
    </a>
  </div>
</template>
