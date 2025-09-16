<script setup lang="ts">
defineProps<{
  src: string;
  link?: string;
}>();
</script>

<template>
  <div class="inline-flex">
    <SharedLink
      v-if="link"
      :url="link"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center justify-center"
    >
      <NuxtImg :src="src" sizes="500px md:1000px" class="mx-auto" />
    </SharedLink>
    <NuxtImg v-else :src="src" sizes="500px md:1000px" class="mx-auto" />
  </div>
</template>
