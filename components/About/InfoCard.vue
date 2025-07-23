<script setup lang="ts">
defineProps<{
  link?: string;
  title: string;
  text: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-4">
    <a
      v-if="link !== null && link !== ''"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h1 class="bg-black w-fit">{{ title }}</h1>
    </a>
    <h1 v-else class="bg-black w-fit">{{ title }}</h1>

    <p class="bg-black text-xl">
      {{ text }}
    </p>
  </div>
</template>
