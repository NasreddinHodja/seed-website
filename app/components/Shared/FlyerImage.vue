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
      <SharedImageView :url="src" class="mx-auto" />
    </SharedLink>
    <SharedImageView v-else :url="src" class="mx-auto" />
  </div>
</template>
