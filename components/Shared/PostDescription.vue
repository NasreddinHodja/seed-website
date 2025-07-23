<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    titleLevel?: 2 | 3;
    paragraphs: string[];
  }>(),
  {
    titleLevel: 2,
  }
);
</script>

<template>
  <div class="flex flex-col gap-6">
    <h2 v-if="title && titleLevel === 2">{{ title }}</h2>
    <h3 v-if="title && titleLevel === 3">{{ title }}</h3>

    <div class="flex flex-col gap-10">
      <p v-for="paragraph in paragraphs" v-html="paragraph"></p>
    </div>
  </div>
</template>
