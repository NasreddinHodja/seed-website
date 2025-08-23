<script setup lang="ts">
defineProps<{
  title: string;
  text: string;
  link?: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-4">
    <SharedLink v-if="link" :url="link">
      <h1 class="bg-black w-fit">{{ title }}</h1>
    </SharedLink>
    <h1 v-else class="bg-black w-fit">{{ title }}</h1>

    <p class="bg-black text-xl">
      {{ text }}
    </p>
  </div>
</template>
