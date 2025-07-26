<script setup lang="ts">
defineProps<{
  artists: { link: string; name: string }[];
}>();
</script>

<template>
  <div class="flex w-full flex-wrap justify-between gap-4 md:pb-10">
    <SharedLink
      v-for="artist in artists"
      :url="artist.link"
      class="text-4xl bg-white text-black px-2"
    >
      {{ artist.name }}
    </SharedLink>
  </div>
</template>
