<script setup lang="ts">
defineProps<{
  url: string;
}>();
</script>

<template>
  <a :href="url" target="_blank" rel="noopener noreferrer" class="block">
    <slot />
  </a>
</template>
