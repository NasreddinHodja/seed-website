<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    titleLevel?: 2 | 3;
    paragraphs: string[];
    tight?: boolean;
  }>(),
  {
    title: undefined,
    titleLevel: 2,
  }
);
</script>

<template>
  <div class="flex flex-col gap-6">
    <h2 v-if="title && titleLevel === 2">{{ title }}</h2>
    <h3 v-if="title && titleLevel === 3">{{ title }}</h3>

    <div class="flex flex-col" :class="{ 'gap-10': !tight, 'gap-4': tight }">
      <p v-for="paragraph in paragraphs" :key="paragraph" v-html="paragraph" />
    </div>
  </div>
</template>
