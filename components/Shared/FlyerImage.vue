<script setup lang="ts">
defineProps<{
  src: string;
  link?: string;
}>();
</script>

<template>
  <div class="inline-flex">
    <a
      v-if="link"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center justify-center"
    >
      <SharedImageView :url="src" class="mx-auto" />
    </a>
    <SharedImageView v-else :url="src" class="mx-auto" />
  </div>
</template>
